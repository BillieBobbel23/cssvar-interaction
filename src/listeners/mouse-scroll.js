const writeVar = require("../functions/write-variable");
const percent = require("../functions/percent");

function mouseScrollListener() {
  // mouseScroll listeners
  return document.addEventListener("scroll", function(e) {
    writeVar("s", percent(window.scrollY, document.body.clientHeight));
  });
}

module.exports = mouseScrollListener;
