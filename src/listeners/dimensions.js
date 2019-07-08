const writeVar = require("../functions/write-variable");

/**
 * dimensions | Sets --w, --h, --vw and --vh dimensions
 * @param {bool} showViewport | show device viewport dimensions
 */

function dimensions(showViewport = false) {
  writeVar("w", window.innerWidth);
  writeVar("h", window.innerHeight);
  if (showViewport) {
    console.debug("(PASSIVE) showViewportDimensions");
    writeVar("vw", window.screen.width);
    writeVar("vh", window.screen.height);
  }
}

module.exports = dimensions;
