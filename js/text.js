function Bold() {
  var font = document.getElementById("content").style.fontWeight;

  if (font == "normal") {
    document.getElementById("content").style.fontWeight = "bold";
  } else {
    document.getElementById("content").style.fontWeight = "normal";
  }
}

function italicText(){
    var target = document.getElementById("content");
    if( target.style.fontStyle == "italic" ) {
        target.style.fontStyle = "normal";
    } else {
        target.style.fontStyle = "italic";
    }
}
function underlineText(){
    var target = document.getElementById("content");
    if( target.style.textDecoration == "underline" ) {
        target.style.textDecoration = "none";
    } else {
        target.style.textDecoration = "underline";
    }
}