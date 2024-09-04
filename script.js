const bar = document.getElementById("bar");
const close = document.getElementById("close");
const nav = document.getElementById("navbar");

Shery.mouseFollower({
  skew: true,
  ease: "cubic-bezier(0.29, 1, 0.320, 1)",
  duration: 1,
});

Shery.makeMagnet(".n1", {
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",  
  duration: 1,
});
Shery.makeMagnet(".n2", {
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 1,
});
Shery.makeMagnet(".n3", {
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 1,
});
Shery.makeMagnet(".n4", {
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 1,
});
Shery.makeMagnet(".n5", {
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 1,
});
Shery.makeMagnet(".n6", {
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 1,
});

Shery.imageEffect("#banner", {
  style: 3,
  debug: true,
});

if (bar) {
  bar.addEventListener("click", () => {
    nav.classList.add("active");
  });
}

if (close) {
  close.addEventListener("click", () => {
    nav.classList.remove("active");
  });
}
var tl = gsap.timeline();

tl.from("#navbar .n1", {
  y: -50,
  duration: 1,
  delay: 0.5,
  opacity: 0,
  stagger: 0.2,
});
