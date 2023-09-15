window.addEventListener("mousemove", function (details) {
  var rect = document.querySelector("#rect img");

  var xval = gsap.utils.mapRange(
    0,
    this.window.innerWidth,
    100 + rect.getBoundingClientRect().width / 2,
    this.window.innerWidth - (100 + rect.getBoundingClientRect().width / 2),
    details.clientX
  );

  gsap.to("#rect img", {
    left: xval,
    ease: Power3,
  });
});
