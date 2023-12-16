const typed = new Typed("#multitext", {
  strings: ["shinobi", "Akatsukian", "And", "teri maa ka pati"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});

ScrollReveal({
  reset: true,
  distance: "80px",
  duration: "2000",
  delay: 200,
});
ScrollReveal().reveal("#home-content ,heading", { origin: "top" });
ScrollReveal().reveal("#home-img, #mp-projects-container, .box", {
  origin: "bottom",
});
ScrollReveal().reveal("#home-content h1, #about-img, .box", {
  origin: "left",
});
ScrollReveal().reveal("#home-content p, #about-content, .box", {
  origin: "right",
});
