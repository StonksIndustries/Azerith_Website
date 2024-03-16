import $ from "jquery";

// function fetchCurrentView() {
//   return (window.scrollY / innerHeight).toFixed(0);
// }

// function scrollToDestination() {
//   scrollLock = true;
//   $("HTML, BODY").animate(
//     {
//       scrollTop: innerHeight * destination,
//     },
//     700
//   );
//   setTimeout(function () {
//     scrollLock = false;
//     if (process.env.NODE_ENV !== "production") {
//       console.log("Scrolled to " + destination);
//     }
//   }, 700);
// }

// Scroll initial detection and update
// document.addEventListener("DOMContentLoaded", function scrollUpdate() {
//   destination = fetchCurrentView();
//   if (process.env.NODE_ENV !== "production") {
//     console.log("Initial view:", destination);
//   }
//   scrollLock = false;
//   document.querySelectorAll("#scroll-down-button").forEach(function (element) {
//     element.addEventListener("click", function () {
//       if (!scrollLock) {
//         destination += 1;
//         scrollToDestination();
//       }
//     });
//   });
// });

document.addEventListener("scroll", function () {
  relativeScroll = window.scrollY / innerHeight;
  if (relativeScroll > 0.7) {
    $(".nav")[0].classList.remove("hide");
  } else {
    $(".nav")[0].classList.add("hide");
  }
//   if (!scrollLock && fetchCurrentView() == destination) {
//     if (relativeScroll > destination + 0.01) {
//       destination += 1;
//       scrollToDestination();
//     } else if (relativeScroll < destination - 0.01) {
//       destination -= 1;
//       scrollToDestination();
//     }
//   }
});
