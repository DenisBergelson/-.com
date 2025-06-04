// ⏳ אפקט טעינה קטן לטופס (כמו חמ"ל)
document.addEventListener("DOMContentLoaded", () => {
  const iframe = document.querySelector("iframe");

  const loader = document.createElement("div");
  loader.textContent = "📡 טוען את מרכז הפיקוד...";
  loader.style.textAlign = "center";
  loader.style.margin = "20px";
  iframe.before(loader);

  iframe.addEventListener("load", () => {
    console.log("✅ הטופס נטען בהצלחה");
    loader.remove();

    setTimeout(() => {
      alert("📌 טיפ: כתבו את התלונה בצורה ברורה – אנחנו באמת מתייחסים אליה!");
    }, 3000);
  });
});

// 🎖️ טקסט רץ משתנה בכותרת המשנה
document.addEventListener("DOMContentLoaded", () => {
  const subtitles = [
    "כאן לא בולעים בשקט",
    "מגישים תלונה כמו פקודה",
    "רק תנסה לאכול — תתלונן אחרי",
    "רמטכ״לים מגישים, לא מחכים",
    "חמ\"ל תלונות פעיל 24/7"
  ];

  let subIndex = 0;
  const subtitleElement = document.querySelector(".subtitle");
  setInterval(() => {
    subtitleElement.textContent = subtitles[subIndex];
    subIndex = (subIndex + 1) % subtitles.length;
  }, 5000);
});

// 💣 הודעת פיצוץ תלונות
setTimeout(() => {
  const boom = document.createElement("div");
  boom.textContent = "💥 פיצוץ תלונות התקבל!";
  boom.style.position = "fixed";
  boom.style.top = "20px";
  boom.style.left = "50%";
  boom.style.transform = "translateX(-50%)";
  boom.style.background = "#ff5555";
  boom.style.color = "#fff";
  boom.style.padding = "10px 20px";
  boom.style.borderRadius = "12px";
  boom.style.fontWeight = "bold";
  boom.style.boxShadow = "0 0 10px #000";
  boom.style.zIndex = "9999";
  document.body.appendChild(boom);

  setTimeout(() => boom.remove(), 4000);
}, 2000);

// 🧨 אפקט hover על הכותרת
document.addEventListener("DOMContentLoaded", () => {
  const title = document.querySelector("h1");
  title.addEventListener("mouseenter", () => {
    title.style.transition = "transform 0.2s";
    title.style.transform = "rotate(-1deg) scale(1.05)";
  });
  title.addEventListener("mouseleave", () => {
    title.style.transform = "rotate(0) scale(1)";
  });
});

// 📝 אם קיים טופס פנימי – נציג הודעת הצלחה (למקרה שתשתמש שוב)
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("complaintForm");
  const responseBox = document.getElementById("responseMessage");

  if (form && responseBox) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const name = document.getElementById("fullName").value;
      const subject = document.getElementById("subject").value;

      responseBox.classList.remove("d-none");
      responseBox.innerHTML = `תודה, ${name}! התלונה בנושא "<strong>${subject}</strong>" התקבלה ותאכל תוך 24 שעות 🍽️`;

      form.reset();
    });
  }
});
