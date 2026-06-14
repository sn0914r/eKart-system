document.addEventListener("DOMContentLoaded", () => {
  const observerOptions = {
    root: null,
    rootMargin: "0px 0px -20px 0px",
    threshold: 0.05,
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  const elements = document.querySelectorAll(".animate-on-scroll");
  elements.forEach((el, index) => {
    if (
      el.classList.contains("card-content") ||
      el.classList.contains("screenshot-card")
    ) {
      el.style.transitionDelay = `${(index % 3) * 0.15}s`;
    }
    observer.observe(el);
  });
});
