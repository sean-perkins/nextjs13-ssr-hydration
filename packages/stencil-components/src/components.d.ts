/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface MyComponent {
        /**
          * The first name
         */
        "first": string;
        /**
          * The last name
         */
        "last": string;
        /**
          * The middle name
         */
        "middle": string;
    }
    interface MyTextComponent {
        /**
          * tag: Renders a html tag
         */
        "tag": 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'p' | 'span';
    }
}
declare global {
    interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {
    }
    var HTMLMyComponentElement: {
        prototype: HTMLMyComponentElement;
        new (): HTMLMyComponentElement;
    };
    interface HTMLMyTextComponentElement extends Components.MyTextComponent, HTMLStencilElement {
    }
    var HTMLMyTextComponentElement: {
        prototype: HTMLMyTextComponentElement;
        new (): HTMLMyTextComponentElement;
    };
    interface HTMLElementTagNameMap {
        "my-component": HTMLMyComponentElement;
        "my-text-component": HTMLMyTextComponentElement;
    }
}
declare namespace LocalJSX {
    interface MyComponent {
        /**
          * The first name
         */
        "first"?: string;
        /**
          * The last name
         */
        "last"?: string;
        /**
          * The middle name
         */
        "middle"?: string;
    }
    interface MyTextComponent {
        /**
          * tag: Renders a html tag
         */
        "tag"?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'p' | 'span';
    }
    interface IntrinsicElements {
        "my-component": MyComponent;
        "my-text-component": MyTextComponent;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "my-component": LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
            "my-text-component": LocalJSX.MyTextComponent & JSXBase.HTMLAttributes<HTMLMyTextComponentElement>;
        }
    }
}
