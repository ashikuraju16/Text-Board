/* -------------------------------------------------------------------------- */
/*                                  font bold                                 */
/* -------------------------------------------------------------------------- */

function Bold() {
  var font = document.getElementById("content").style.fontWeight;

  if (font == "normal") {
    document.getElementById("content").style.fontWeight = "bold";
  } else {
    document.getElementById("content").style.fontWeight = "normal";
  }
}

/* -------------------------------------------------------------------------- */
/*                                 italic   Text                                 */
/* -------------------------------------------------------------------------- */

function italicText() {
  var target = document.getElementById("content");
  if (target.style.fontStyle == "italic") {
    target.style.fontStyle = "normal";
  } else {
    target.style.fontStyle = "italic";
  }
}


/* -------------------------------------------------------------------------- */
/*                                  underline                                 */
/* -------------------------------------------------------------------------- */
function underlineText() {
  var target = document.getElementById("content");
  if (target.style.textDecoration == "underline") {
    target.style.textDecoration = "none";
  } else {
    target.style.textDecoration = "underline";
  }
}

/* -------------------------------------------------------------------------- */
/*                            uppper and lower case                           */
/* -------------------------------------------------------------------------- */
function toUpper() {
  var obj = document.getElementById("content");
  var str = obj.value;
  var res = str.toUpperCase();
  obj.value = res;
}
function toLower() {
  var obj = document.getElementById("content");
  var str = obj.value;
  var res = str.toLowerCase();
  obj.value = res;
}

/* -------------------------------------------------------------------------- */
/*                                  font size                                 */
/* -------------------------------------------------------------------------- */
function changeFontSizeUp() {
  var textElement = document.getElementById("content");
  var currentFontSize = parseInt(window.getComputedStyle(textElement).fontSize);
  
  textElement.style.fontSize = (currentFontSize + 1) + "px";
}
function changeFontSizeDown() {
  var textElement = document.getElementById("content");
  var currentFontSize = parseInt(window.getComputedStyle(textElement).fontSize);
  
  textElement.style.fontSize = (currentFontSize - 1) + "px";
}
