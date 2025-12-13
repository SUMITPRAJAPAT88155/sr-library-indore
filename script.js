document.addEventListener("DOMContentLoaded", function () {

  /* ===============================
     DARK MODE TOGGLE
  ================================ */
  const darkBtn = document.getElementById("dark-toggle");
  if (darkBtn) {
    darkBtn.addEventListener("click", () => {
      document.body.classList.toggle("dark");
    });
  }

  /* ===============================
     COMMON WHATSAPP NUMBER
  ================================ */
  const ownerWhatsApp = "919244140220"; // 91 + number (NO space)

  /* ===============================
     CHANGE ALL BUTTON TEXT (ONE LINE)
  ================================ */
  const buttons = document.querySelectorAll(".enquiry-btn");
  buttons.forEach(btn => {
    btn.textContent = "Chat on WhatsApp"; 
    // agar chaaho to: "Send Selected Plan on WhatsApp"
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

      // UX hint (optional but recommended)
      alert(
        "WhatsApp open ho gaya hai 👍\n" +
        "Selected plan message me ready hai.\n" +
        "Bas SEND dabaiye."
      );
    });
  });

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



document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", function(e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));
    if (!target) return;

    window.scrollTo({
      top: target.offsetTop - 70, // navbar height
      behavior: "smooth"
    });
  });
});
