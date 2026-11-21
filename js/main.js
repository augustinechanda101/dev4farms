// DEV4 Farms - site scripts

// WhatsApp number in international format (Zambia +260). Update here and in the
// wa.me links across the HTML pages if the number changes.
const WHATSAPP_NUMBER = "260575943484";

// ---- Mobile navigation ----
const navToggle = document.getElementById("navToggle");
const siteNav = document.getElementById("siteNav");

if (navToggle && siteNav) {
  navToggle.addEventListener("click", () => {
    const open = siteNav.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", open ? "true" : "false");
    navToggle.classList.toggle("active", open);
  });

  siteNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      siteNav.classList.remove("open");
      navToggle.classList.remove("active");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && siteNav.classList.contains("open")) {
      siteNav.classList.remove("open");
      navToggle.classList.remove("active");
      navToggle.setAttribute("aria-expanded", "false");
    }
  });
}

// ---- Header shadow on scroll ----
const header = document.querySelector(".site-header");
const onScroll = () => {
  if (header) header.classList.toggle("scrolled", window.scrollY > 8);
};
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

// ---- Scroll reveal ----
const revealEls = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window && revealEls.length) {
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );
  revealEls.forEach((el) => io.observe(el));
} else {
  revealEls.forEach((el) => el.classList.add("visible"));
}

// ---- Footer year ----
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

// ---- Contact form -> WhatsApp ----
const form = document.getElementById("enquiryForm");
const formSuccess = document.getElementById("formSuccess");

if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const lines = [
      "Hello DEV4 Farms!",
      "",
      `Name: ${data.get("name") || "-"}`,
      `Phone/Email: ${data.get("contact") || "-"}`,
      `Interested in: ${data.get("bird") || "-"}`,
      `Message: ${data.get("message") || "-"}`,
    ];
    const text = encodeURIComponent(lines.join("\n"));
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, "_blank", "noopener");
    if (formSuccess) {
      formSuccess.hidden = false;
      formSuccess.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
    form.reset();
  });
}
