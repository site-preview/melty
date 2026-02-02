document.addEventListener('DOMContentLoaded', () => {
  const items = document.querySelectorAll('.video-item');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target;
          el.classList.add('sparkle-active');

          setTimeout(() => {
            el.classList.remove('sparkle-active');
          }, 900);
        }
      });
    },
    {
      threshold: 0.6,
    }
  );

  items.forEach((item) => observer.observe(item));
});