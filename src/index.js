import mouseMoveListener from "./listeners/mouse-move";
import mouseScrollListener from "./listeners/mouse-scroll";
import dimensions from "./listeners/dimensions";

// Permissions
const config = {
  showMouseMoveListeners: true,
  showScrollListeners: true,
  showDimensions: true,
  showViewportDimensions: true,
  // developer options
  showDebugFlags: true
};

function init() {
  if (config.showMouseMoveListeners) {
    config.showDebugFlags && console.debug("(ACTIVE) showMouseMoveListeners");
    mouseMoveListener();
  }
  if (config.showScrollListeners) {
    config.showDebugFlags && console.debug("(ACTIVE) showScrollListeners");
    mouseScrollListener();
  }
  if (config.showDimensions) {
    config.showDebugFlags && console.debug("(PASSIVE) showDimensions");
    dimensions(config.showViewportDimensions);
  }
}

init();
