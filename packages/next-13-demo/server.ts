import { createServer } from "http";
import { parse } from "url";
import next from "next";
// Import Stencil's Hydrate
import { renderToString } from "@matt/stencil-components/hydrate";

const port = parseInt(process.env.PORT || "3000", 10);
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer(async (req, res) => {
    const parsedUrl = parse(req.url!, true);
    // Get HTML
    const html = await app.renderToHTML(
      req,
      res,
      parsedUrl.pathname!,
      parsedUrl.query
    );
    // Stencil
    const renderedHtml = await renderToString(html, {
      prettyHtml: false,
      removeHtmlComments: true,
      clientHydrateAnnotations: false,
    });
    // THIS IS WHAT WILL BREAK
    if (parsedUrl.pathname?.startsWith("/_next") || parsedUrl.pathname?.startsWith("/__next")) {
      await handle(req, res, parsedUrl);
    } else {
      res.end(renderedHtml.html);
    }
    // THIS IS WHAT IS DEFAULT
    // handle(req, res, parsedUrl);
  }).listen(port);

  console.log(
    `> Server listening at http://localhost:${port} as ${
      dev ? "development" : process.env.NODE_ENV
    }`
  );
});
