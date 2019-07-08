# cssvar-interation

A tiny JS powered utility to set/update CSS variables using eventListeners.

![npm latest version](https://img.shields.io/npm/v/cssvar-interaction.svg)
![npm bundle size](https://img.shields.io/bundlephobia/minzip/cssvar-interaction.svg)

![stats](https://david-dm.org/BillieBobbel23/cssvar-interaction/status.svg)
![statsdev](https://david-dm.org/BillieBobbel23/cssvar-interaction/dev-status.svg)

## Installation

Install using ([Node Package Manager](https://npmjs.com)): 

``npm install cssvar-interaction --save`` 

## Usage:

*For examples on CSS variables see the ([MDN web docs](https://developer.mozilla.org/en-US/docs/Web/CSS/var))*

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

* Include the Eventlisteners into your document: 

  `` <script src="node_modules/cssvar-interation/dist/index.js" /> ``
  
## Examples:

From the root directory of the package run `` npm run test `` to open a HTML demo page with some examples.