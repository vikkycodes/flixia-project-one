<script src="https://cdn.jsdelivr.net/npm/@glidejs/glide"></script>;
new Glide(".glide", {
  type: "carousel",
  perView: 4,
  focusAt: "center",
  gap: 20,
  breakpoints: {
    1200: {
      perView: 3,
    },
    900: {
      perView: 2,
    },
    650: {
      focusAt: "center",
      gap: 5,
      perView: 3,
    },
    375: {
      perView: 1,
      gap: 5,
    },
  },
}).mount();

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
