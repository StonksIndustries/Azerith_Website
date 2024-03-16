import $ from "jquery";

function fetchCurrentView() {
  return (window.scrollY / innerHeight).toFixed(0);
}

function scrollToDestination() {
  scrollLock = true;
  $("HTML, BODY").animate(
    {
      scrollTop: innerHeight * destination,
    },
    700
  );
  setTimeout(function () {
    scrollLock = false;
    if (process.env.NODE_ENV !== "production") {
      console.log("Scrolled to " + destination);
    }
  }, 700);
}

// Scroll initial detection and update
document.addEventListener("DOMContentLoaded", function scrollUpdate() {
  destination = fetchCurrentView();
  if (process.env.NODE_ENV !== "production") {
    console.log("Initial view:", destination);
  }
  scrollLock = false;
  document.querySelectorAll("#scroll-down-button").forEach(function (element) {
    element.addEventListener("click", function () {
      if (!scrollLock) {
        destination += 1;
        scrollToDestination();
      }
    });
  });
});

// Platform detection for download button
document.addEventListener(
  "DOMContentLoaded",
  function platformDetectionForDownload() {
    platform = navigator.platform;
    buttonMain = document.getElementById("dl-button-main");
    switch (platform) {
      case "Win32":
        buttonMain.href = "";
        if (process.env.NODE_ENV !== "production") {
          console.log("Detected platform: Windows");
        }
        buttonMain.innerHTML += "Download for Windows";
        document.getElementById("dl-button-sub-win").remove();
        break;
      case "MacIntel":
        buttonMain.href = "";
        if (process.env.NODE_ENV !== "production") {
          console.log("Detected platform: MacOS");
        }
        buttonMain.innerHTML += "Download for Mac";
        document.getElementById("dl-button-sub-mac").remove();
        break;
      case "Linux x86_64":
        buttonMain.href = "";
        if (process.env.NODE_ENV !== "production") {
          console.log("Detected platform: Linux");
        }
        buttonMain.innerHTML += "Download for Linux";
        document.getElementById("dl-button-sub-linux").remove();
        break;
      default:
        buttonMain.href = "";
        if (process.env.NODE_ENV !== "production") {
          console.log("Platform not detected");
        }
        buttonMain.innerHTML = "Platform not detected";
        break;
    }
  }
);

document.addEventListener("scroll", function () {
  relativeScroll = window.scrollY / innerHeight;
  if (relativeScroll > 0.7) {
    $(".nav")[0].classList.remove("hide");
  } else {
    $(".nav")[0].classList.add("hide");
  }
  if (!scrollLock && fetchCurrentView() == destination) {
    if (relativeScroll > destination + 0.01) {
      destination += 1;
      scrollToDestination();
    } else if (relativeScroll < destination - 0.01) {
      destination -= 1;
      scrollToDestination();
    }
  }
});
