// ============================
// ① スクロール時スパークル
// ============================
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
    { threshold: 0.6 }
  );

  items.forEach((item) => observer.observe(item));
});


// ============================
// ② ローディング本体制御（時間ここだけ）
// ============================
window.addEventListener('load', () => {
  const loading = document.getElementById('loading');
  if (!loading) return;

  setTimeout(() => {
    loading.classList.add('loaded');

    setTimeout(() => {
      loading.style.display = 'none';
    }, 1200);
  }, 2000); // ← 表示時間（ここ調整）
});

