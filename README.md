# cssvar-interation

A tiny JS powered utility to set/update CSS variables using eventListeners.

![npm latest version](https://img.shields.io/npm/v/cssvar-interaction.svg)
![npm bundle size](https://img.shields.io/bundlephobia/minzip/cssvar-interaction.svg)
![stats](https://david-dm.org/BillieBobbel23/cssvar-interaction/status.svg)

## Installation

Install using ([Node Package Manager](https://npmjs.com)): 

``npm install cssvar-interaction --save`` 

## Usage:

*For examples on CSS variables see the ([MDN web docs](https://developer.mozilla.org/en-US/docs/Web/CSS/var))*

1. Write some user driven CSS using the CSS variable: ``--x``

```
  body {
    transition: all linear 1s;  
    transform: rotate(var(--x) * 1deg);
  }
```



2. Include the eventlisteners into your document: 

```
  import "listeners.js"
```

3. profit

See the crazy that unfolds... 

Enjoy :)