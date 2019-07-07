# simple-interactive-cssvar (title pending)

A tiny JS powered utility to set/update CSS variables using eventListeners.

## Installation

Install using ([Node Package Manager](https://npmjs.com)): 

``npm install simple-interactive-cssvar --save`` 

## Usage:

1. Write some user driven CSS using the CSS variable: ``--x``

```
  body {
    transition: all linear 1s;  
    transform: rotate(var(--x) + 1deg);
  }
```

*For examples on CSS variables see the ([MDN web docs](https://developer.mozilla.org/en-US/docs/Web/CSS/var))*

2. Include the eventlisteners into your document: 

```
  import "listeners.js"
```

3. profit

See the crazy that unfolds... 

Enjoy :)