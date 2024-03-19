document.addEventListener("scroll", function () {
  const relativeScroll = window.scrollY / innerHeight;
  if (relativeScroll > 0.7) {
    document.querySelector(".nav").classList.remove("hide");
  } else {
    document.querySelector(".nav").classList.add("hide");
  }
});
