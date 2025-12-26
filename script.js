document.addEventListener("DOMContentLoaded", () => {

  /* ================= GLOBAL ================= */
  const ownerWhatsApp = "919244140220"; // ✅ NO SPACE

  /* ================= HERO IMAGE SLIDER ================= */
  const hero = document.querySelector(".hero");
  if (hero) {
    const images = [
      "hero-imge/new3.jpg",
      "hero-imge/new2.jpg",
      "hero-imge/newimg1.jpg"
    ];

    let index = 0;
    hero.style.backgroundImage = `url(${images[0]})`;

    setInterval(() => {
      index = (index + 1) % images.length;
      hero.style.backgroundImage = `url(${images[index]})`;
    }, 4000);
  }

  /* ================= DARK MODE ================= */
  const darkBtn = document.getElementById("dark-toggle");
  if (darkBtn) {
    darkBtn.addEventListener("click", () => {
      document.body.classList.toggle("dark");
      darkBtn.textContent =
        document.body.classList.contains("dark") ? "☀️" : "🌙";
    });
  }

  /* ================= PRICING BUTTON (WhatsApp) ================= */
  const enquiryButtons = document.querySelectorAll(".enquiry-btn");

  enquiryButtons.forEach(btn => {
    btn.textContent = "Chat on WhatsApp";

    btn.addEventListener("click", () => {
      const plan = btn.dataset.plan || "";
      const price = btn.dataset.price || "";

      const message =
        "Hello SR Library 👋\n\n" +
        "I want enquiry for:\n" +
        "📚 Plan: " + plan + "\n" +
        "💰 Fees: " + price + "\n\n" +
        "Please share seat availability.";

      const url =
        "https://wa.me/" + ownerWhatsApp +
        "?text=" + encodeURIComponent(message);

      window.open(url, "_blank");
    });
  });

  /* ================= OFFER BUTTON (Global Function) ================= */
  window.sendWhatsAppOffer = function () {
    const message =
`🎉 NEW YEAR OFFER 2026 – SR LIBRARY 🎉

📚 Start Your New Year with Focus!

🔥 LIMITED TIME OFFER
📞 Contact Now`;

    const url =
      "https://wa.me/" + ownerWhatsApp +
      "?text=" + encodeURIComponent(message);

    window.open(url, "_blank");
  };

  /* ================= COUNTDOWN TIMER ================= */
  (function () {
    const countdownEl = document.getElementById("countdown");
    if (!countdownEl) return;

    const COUNTDOWN_HOURS = 23;
    const END_TIME_KEY = "srLibraryOfferEndTime";

    let endTime = localStorage.getItem(END_TIME_KEY);

    if (!endTime) {
      endTime = Date.now() + COUNTDOWN_HOURS * 60 * 60 * 1000;
      localStorage.setItem(END_TIME_KEY, endTime);
    }

    function updateCountdown() {
      const distance = endTime - Date.now();

      if (distance <= 0) {
        countdownEl.textContent = "Offer Expired ❌";
        localStorage.removeItem(END_TIME_KEY);
        return;
      }

      const h = Math.floor(distance / (1000 * 60 * 60));
      const m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const s = Math.floor((distance % (1000 * 60)) / 1000);

      countdownEl.textContent = `${h}h ${m}m ${s}s`;
    }

    updateCountdown();
    setInterval(updateCountdown, 1000);
  })();

  /* ================= CONTACT FORM (WhatsApp) ================= */
  const contactForm = document.getElementById("contact-form");

  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const name = document.getElementById("name")?.value.trim();
      const phone = document.getElementById("phone")?.value.trim();
      const msg = document.getElementById("message")?.value.trim();

      if (!name || !phone) {
        alert("Please enter name and mobile number");
        return;
      }

      const text =
        "New enquiry from website:\n" +
        "Name: " + name + "\n" +
        "Mobile: " + phone + "\n" +
        "Message: " + (msg || "Not mentioned");

      const url =
        "https://wa.me/" + ownerWhatsApp +
        "?text=" + encodeURIComponent(text);

      window.open(url, "_blank");
      contactForm.reset();
    });
  }

  /* ================= SMOOTH SCROLL ================= */
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function (e) {
      const target = document.querySelector(this.getAttribute("href"));
      if (!target) return;

      e.preventDefault();
      window.scrollTo({
        top: target.offsetTop - 100,
        behavior: "smooth"
      });
    });
  });

});
