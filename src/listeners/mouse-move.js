const writeVar = require("../functions/write-variable");
const percent = require("../functions/percent");

function mouseMoveListener() {
  return document.addEventListener("mousemove", function(e) {
    writeVar("x", percent(e.clientX, window.innerHeight), 2);
    writeVar("y", percent(e.clientY, window.innerWidth), 2);
  });
}
module.exports = mouseMoveListener;
