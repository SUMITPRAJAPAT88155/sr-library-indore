// ================= HERO IMAGE SLIDER =================
const hero = document.querySelector(".hero");

const imgaes = [
  "hero-imge/img-1.webp",
  "hero-imge/new2.jpg",
  "hero-imge/newimg1.jpg"
];

let index = 0;

// ❌ spelling fix: bacgroundImage → backgroundImage
hero.style.backgroundImage = `url(${imgaes[0]})`;

setInterval(() => {
  index = (index + 1) % imgaes.length;
  hero.style.backgroundImage = `url(${imgaes[index]})`;
}, 4000);


// ================= DOM READY =================
document.addEventListener("DOMContentLoaded", function () {

  /* ===============================
     DARK MODE TOGGLE
  ================================ */
  const darkBtn = document.getElementById("dark-toggle");
  if (darkBtn) {
    darkBtn.addEventListener("click", () => {
      document.body.classList.toggle("dark");

      if (document.body.classList.contains("dark")) {
        darkBtn.textContent = "☀️";
      } else {
        darkBtn.textContent = "🌙";
      }
    });
  }

  /* ===============================
     COMMON WHATSAPP NUMBER
  ================================ */
  const ownerWhatsApp = "919244140220";

  /* ===============================
     CHANGE ALL PRICING BUTTON TEXT
  ================================ */
  const buttons = document.querySelectorAll(".enquiry-btn");

  buttons.forEach(btn => {
    btn.textContent = "Chat on WhatsApp";
  });

  /* ===============================
     PRICING BUTTON → WHATSAPP
  ================================ */
  buttons.forEach(button => {
    button.addEventListener("click", () => {

      const plan = button.dataset.plan || "";
      const price = button.dataset.price || "";

      const message =
        "Hello SR Library 👋\n\n" +
        "I want enquiry for:\n" +
        "📚 Plan: " + plan + "\n" +
        "💰 Fees: " + price + "\n\n" +
        "Please share seat availability and joining process.\n" +
        "Thank you.";

      const whatsappURL =
        "https://wa.me/" + ownerWhatsApp +
        "?text=" + encodeURIComponent(message);

      window.open(whatsappURL, "_blank");

      alert(
        "WhatsApp open ho gaya hai 👍\n" +
        "Message already ready hai.\n" +
        "Bas SEND dabaiye."
      );
    });
  });

  /* ===============================
     OFFER BUTTON → WHATSAPP
  ================================ */
  window.sendWhatsAppOffer = function () {

    const message =
`🎉 NEW YEAR OFFER 2026 – SR LIBRARY 🎉

📚 Start Your New Year with Focus!

🔥 AVAILABLE OFFERS:

1️⃣ 3 Months Plan
➕ 1 Month FREE
✅ Registration Free
✅ Peaceful Study Area
✅ High Speed WiFi

2️⃣ 6 Months Plan (BEST VALUE)
➕ 2 Months FREE
✅ Locker Free
✅ Reserved Seat

3️⃣ 1 Year Plan
➕ 5 Months FREE
✅ Locker + Reserved Seat

⏳ Limited Time Offer
📞 Contact: 9244140220`;

    const url =
      "https://wa.me/" + ownerWhatsApp +
      "?text=" + encodeURIComponent(message);

    window.open(url, "_blank");
  };

  /* ===============================
     CONTACT FORM → WHATSAPP
  ================================ */
  const contactForm = document.getElementById("contactForm");

  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const name = document.getElementById("name").value.trim();
      const phone = document.getElementById("phone").value.trim();
      const msg = document.getElementById("message").value.trim();

      if (!name || !phone) {
        alert("Please enter name and mobile number");
        return;
      }

      const text =
        "Hello SR Library 👋\n\n" +
        "New enquiry from website:\n" +
        "👤 Name: " + name + "\n" +
        "📞 Mobile: " + phone + "\n" +
        "💬 Message: " + (msg || "Not mentioned") + "\n\n" +
        "Please contact me.";

      const whatsappURL =
        "https://wa.me/" + ownerWhatsApp +
        "?text=" + encodeURIComponent(text);

      window.open(whatsappURL, "_blank");
      contactForm.reset();
    });
  }
});


// ================= SMOOTH SCROLL =================
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));
    if (!target) return;

    window.scrollTo({
      top: target.offsetTop - 70,
      behavior: "smooth"
    });
  });
});


// ================= GALLERY LIGHTBOX =================
document.addEventListener("DOMContentLoaded", () => {
  const galleryImages = document.querySelectorAll(".gallery-grid img");
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightboxImg");
  const closeBtn = document.querySelector(".lightbox .close");

  galleryImages.forEach(img => {
    img.addEventListener("click", () => {
      lightbox.style.display = "flex";
      lightboxImg.src = img.src;
    });
  });

  closeBtn.addEventListener("click", () => {
    lightbox.style.display = "none";
  });

  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
      lightbox.style.display = "none";
    }
  });
});


// ================= OFFER TIMER =================
document.addEventListener("DOMContentLoaded", () => {

  let timeLeft = 24 * 60 * 60; // 24 hours
  const timerEl = document.getElementById("timer");

  function updateTimer() {
    const hours = Math.floor(timeLeft / 3600);
    const minutes = Math.floor((timeLeft % 3600) / 60);
    const seconds = timeLeft % 60;

    timerEl.textContent =
      String(hours).padStart(2, "0") + ":" +
      String(minutes).padStart(2, "0") + ":" +
      String(seconds).padStart(2, "0");

    if (timeLeft > 0) {
      timeLeft--;
    } else {
      timerEl.textContent = "EXPIRED";
    }
  }

  updateTimer();
  setInterval(updateTimer, 1000);
});
