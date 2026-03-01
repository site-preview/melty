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
    document.body.classList.add('loaded'); // ← ★ここに移動！

    setTimeout(() => {
      loading.style.display = 'none';
    }, 1200);
  }, 2000); // ← ロゴ表示時間（1〜2秒でここ調整）
});

// ============================
// タイトルアニメーション
// ============================

document.addEventListener("DOMContentLoaded", function () {

  const targets = document.querySelectorAll(".animate-title");

  if (!targets.length) return; // ← これ重要

  targets.forEach(target => {

    const text = target.textContent.trim();
    target.textContent = "";

    text.split("").forEach((char, index) => {
      const span = document.createElement("span");
      span.textContent = char;
      span.style.display = "inline-block";
      span.style.opacity = "0";
      span.style.transform = "translateY(20px)";
      span.style.transition = "0.6s ease";
      span.style.transitionDelay = index * 0.05 + "s";
      target.appendChild(span);
    });

    const titleObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const spans = entry.target.querySelectorAll("span");
          spans.forEach(span => {
            span.style.opacity = "1";
            span.style.transform = "translateY(0)";
          });
        }
      });
    }, { threshold: 0.6 });

    titleObserver.observe(target);

  });

});

// ============================
// SNS集合アニメーション
// ============================

document.addEventListener("DOMContentLoaded", function () {

  const sns = document.querySelector(".sns-ellipse");
  if (!sns) return;

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        sns.classList.add("active");
      }
    });
  }, { threshold: 0.5 });

  observer.observe(sns);

});

// ============================
// 文字はね
// ============================

document.addEventListener("DOMContentLoaded", function () {

  const captions = document.querySelectorAll(".caption-title");

  captions.forEach(title => {

    // ① 文字を分解
    const text = title.textContent.trim();
    title.textContent = "";

    text.split("").forEach((char, index) => {
      const span = document.createElement("span");
      span.textContent = char;
      span.style.animationDelay = index * 0.08 + "s";
      title.appendChild(span);
    });

    // ② スクロール監視
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      });
    }, {
      threshold: 0.4   // ← ここ低めが安定
    });

    observer.observe(title);

  });

});