import { createServer } from "http";
import { parse } from "url";
import next from "next";

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
    if (parsedUrl.pathname?.startsWith("/_next") || parsedUrl.pathname?.startsWith("/__next") || parsedUrl.pathname?.endsWith('.svg')) {
      await handle(req, res, parsedUrl);
    } else {
      res.end(html);
    }
  }).listen(port);

  console.log(
    `> Server listening at http://localhost:${port} as ${dev ? "development" : process.env.NODE_ENV
    }`
  );
});
