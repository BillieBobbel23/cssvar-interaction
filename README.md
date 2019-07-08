# cssvar-interaction

![npm latest version](https://img.shields.io/npm/v/cssvar-interaction.svg)
![npm bundle size](https://img.shields.io/bundlephobia/minzip/cssvar-interaction.svg)
![npm downloads](https://img.shields.io/npm/dt/cssvar-interaction.svg)
![stats](https://david-dm.org/BillieBobbel23/cssvar-interaction/status.svg)

A tiny JS powered NPM package to set/update CSS variables using eventListeners.

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

Run `` npm run test  --prefix node_modules/cssvar-interaction `` in the root of your project to open an HTML demo page with some examples.