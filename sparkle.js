// ============================
// ローディング
// ============================

window.addEventListener("load", () => {

  const loading = document.getElementById("loading");
  if (!loading) return;

  setTimeout(() => {

    loading.classList.add("loaded");
    document.body.classList.add("loaded");

    setTimeout(() => {
      loading.style.display = "none";
    }, 1200);

  }, 2000);

});


// ============================
// アニメーション管理
// ============================

document.addEventListener("DOMContentLoaded", () => {

  const observer = new IntersectionObserver((entries, observer) => {

    entries.forEach(entry => {

      if (!entry.isIntersecting) return;

      const el = entry.target;

      // ============================
      // スパークル
      // ============================

      if (el.classList.contains("video-item")) {

        el.classList.add("sparkle-active");

        setTimeout(() => {
          el.classList.remove("sparkle-active");
        }, 900);

      }


      // ============================
      // SNS集合
      // ============================

      if (el.classList.contains("sns-ellipse")) {

        el.classList.add("active");

      }


      // ============================
      // メンバー画像
      // ============================

      if (el.classList.contains("main-img") || el.classList.contains("sub-img")) {

        el.classList.add("active");

        if (el.classList.contains("sub-img")) {

          setTimeout(() => {
            el.classList.add("float");
          }, 800);

        }

      }


      // ============================
      // MELtyタイトル
      // ============================

      if (el.classList.contains("title-aboutme")) {

        el.classList.add("show");

      }

      observer.unobserve(el);

    });

  }, { threshold: 0.3 });


// ============================
// Observer登録
// ============================

document.querySelectorAll(
  ".video-item, .sns-ellipse, .main-img, .sub-img"
).forEach(el => observer.observe(el));


// MELtyタイトルはローディング後に登録
window.addEventListener("load", () => {

  setTimeout(() => {

    document.querySelectorAll(".title-aboutme")
      .forEach(el => observer.observe(el));

  }, 2300);

});

  // ============================
  // タイトル文字アニメ
  // ============================

  const titles = document.querySelectorAll(".animate-title");

  titles.forEach(title => {

    const text = title.textContent.trim();
    title.textContent = "";

    text.split("").forEach((char, i) => {

      const span = document.createElement("span");
      span.textContent = char;

      span.style.display = "inline-block";
      span.style.opacity = "0";
      span.style.transform = "translateY(20px)";
      span.style.transition = "0.6s ease";
      span.style.transitionDelay = i * 0.05 + "s";

      title.appendChild(span);

    });

    const titleObserver = new IntersectionObserver(entries => {

      entries.forEach(entry => {

        if (entry.isIntersecting) {

          entry.target.querySelectorAll("span").forEach(span => {

            span.style.opacity = "1";
            span.style.transform = "translateY(0)";

          });

        }

      });

    }, { threshold: 0.6 });

    titleObserver.observe(title);

  });

});