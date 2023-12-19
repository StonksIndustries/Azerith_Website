import { $ } from "jquery";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";


gsap.registerPlugin(ScrollToPlugin);

window.addEventListener("wheel", () => {
//   gsap.to(window, { duration: 2, scrollTo: 1000 });
});
