function Bold() {
  var font = document.getElementById("content").style.fontWeight;

  if (font == "normal") {
    document.getElementById("content").style.fontWeight = "bold";
  } else {
    document.getElementById("content").style.fontWeight = "normal";
  }
}
