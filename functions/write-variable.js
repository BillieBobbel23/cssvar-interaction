/**
 * writeVar | Writes CSS variable to <style> attribute of <html>
 * @param {string} prop | variable name in style attribute (no special characters)
 * @param {number,string} value | any valid CSS value
 */

function writeVar(prop, value) {
  document.documentElement.style.setProperty(`--${prop}`, value);
}

module.exports = writeVar;
