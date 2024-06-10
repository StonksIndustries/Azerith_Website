document.addEventListener("scroll", function () {
  const relativeScroll = window.scrollY / innerHeight;
  if (relativeScroll > 0.7) {
    document.querySelector(".nav").classList.remove("hide");
  } else {
    document.querySelector(".nav").classList.add("hide");
  }
});

document
  .querySelector("#video-splash-button")
  .addEventListener("click", function () {
    document.querySelector("#video-splash-canva").classList.add("show");
  });

document
  .querySelector("#video-splash-canva button")
  .addEventListener("click", function () {
    document.querySelector("#video-splash-canva").classList.remove("show");
  });
