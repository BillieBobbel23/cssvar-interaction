# cssvar-interaction

![npm latest version](https://img.shields.io/npm/v/cssvar-interaction.svg)
![github version](https://img.shields.io/github/package-json/v/billiebobbel23/cssvar-interaction.svg)
![stats](https://img.shields.io/david/dev/billiebobbel23/cssvar-interaction)
![npm bundle size](https://img.shields.io/bundlephobia/minzip/cssvar-interaction.svg)
![npm downloads](https://img.shields.io/npm/dt/cssvar-interaction.svg)

A tiny JS powered NPM package to set/update CSS variables using eventListeners.

## Installation

Install using [Node Package Manager](https://npmjs.com): 

``npm install cssvar-interaction --save`` 

## Usage:

*For examples on CSS variables see the [MDN web docs](https://developer.mozilla.org/en-US/docs/Web/CSS/var)*

* Write some CSS using CSS variable ``--x`` and multiply it by 1 unit of measurement using ``calc()``.

  `` calc( var(--x) * 1px ) ``

* Apply it to a ``transform`` statement with any option:

    `` transform: translateX(calc(var(--x) * 1px));``

* use it on any CSS selector:

  ``` 
  div {
    transition: all linear 1s;  
    transform: translateX(calc(var(--x) * 1px));
  }
  ```

* Include the eventListeners into your document

  Using ``<script>`` tags:

  `` <script src="node_modules/cssvar-interation/dist/index.js" /> ``

  Using Javascript ``import``:

  `` import "cssvar-interaction/dist/bundle"; ``


## Values:

The following are some built-in variables:

**eventListeners:**

``--x`` and ``--y`` - current X and Y positions of pointer (within the viewport)

``--s`` Current scroll offset from top of document

**constants:**

``--w`` and ``--h`` - Current document width and height

``--vw`` and ``--vh`` - Viewport width and height


## Examples:

Run `` npm run test `` in the root of your project to open an HTML demo page with some examples.

## Test

Running  `` npm test `` will produce the example page since it contains all functionality  