import writeVar from "./functions/write-variable";
import percent from "./functions/percent";

function init() {
  // Set static values
  const READONLY = {
    VIEW_HEIGHT: window.innerHeight,
    VIEW_WIDTH: window.innerWidth,
    HEIGHT: document.body.clientHeight,
    WIDTH: document.body.clientWidth
  };

  // On mouseMove we log X/Y as percentages
  document.addEventListener("mousemove", function(e) {
    writeVar("x", percent(e.clientX, READONLY.VIEW_WIDTH));
    writeVar("y", percent(e.clientY, READONLY.VIEW_HEIGHT));
  });

  // On scroll we log the height to top as integer
  document.addEventListener("scroll", function(e) {
    writeVar("h", percent(window.scrollY, READONLY.VIEW_HEIGHT));
    writeVar("p", e.clientX);
  });
}

// Runs initial
init();
