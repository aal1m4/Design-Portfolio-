const revealEls = document.querySelectorAll('.reveal');
 
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target); // only animate once
    }
  });
}, { threshold: 0.12 });
 
revealEls.forEach(el => revealObserver.observe(el));