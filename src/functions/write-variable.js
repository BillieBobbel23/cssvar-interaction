const roundInt = require("./round-int");

/**
 * writeVar | Writes CSS variable to <style> attribute of <html>
 * @param {string} prop | variable name in style attribute (no special characters)
 * @param {number} value | a plain number works best
 * @param {number} grain | granularity of the  value (decimals)
 */

function writeVar(prop, value, grain = 0) {
  if (typeof value === "number") {
    document.documentElement.style.setProperty(
      `--${prop}`,
      roundInt(value, grain)
    );
  } else {
    document.documentElement.style.setProperty(`--${prop}`, value);
  }
}

module.exports = writeVar;
