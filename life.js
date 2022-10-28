var a;
function show_hide() {
  if (a == 1) {
    document.getElementById("menu").style.display = "inline";
    return (a = 0);
  } else {
    document.getElementById("menu").style.display = "none";
    return (a = 1);
  }
}
