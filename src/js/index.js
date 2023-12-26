import $ from "jquery";

document.addEventListener("scroll", function () {
    if (window.scrollY / innerHeight > 0.7) {
        $(".nav")[0].classList.remove("hide");
    } else {
        $(".nav")[0].classList.add("hide");
    }

    if (window.scrollY / innerHeight > 0.8) {
        $(".nav")[0].classList.add("show");
    } else {
        $(".nav")[0].classList.remove("show");
    }
});

