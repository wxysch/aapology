gsap.registerPlugin(ScrollTrigger);

gsap.timeline({
  scrollTrigger: {
    trigger: "#grow",
    start: "top center",
    end: "bottom top",
    scrub: 1,
  }
})
.to("#cat", { scale: 2, opacity: 1, duration: 1 })
.to("#caption", { opacity: 1, duration: 0.5 });

ScrollTrigger.create({
  trigger: "#final",
  start: "top center",
  onEnter: () => {
    document.getElementById("final-btn").style.display = "inline-block";
  }
});

document.getElementById("final-btn").onclick = () => {
  document.getElementById("modal").style.display = "flex";
};
document.getElementById("close").onclick = () => {
  document.getElementById("modal").style.display = "none";
};