// Efek muncul halus saat scroll
document.addEventListener("scroll", () => {
  const elements = document.querySelectorAll("section, footer");
  elements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 80) {
      el.style.opacity = 1;
      el.style.transform = "translateY(0)";
    }
  });
});

// Gaya awal
window.onload = () => {
  const elements = document.querySelectorAll("section, footer");
  elements.forEach(el => {
    el.style.opacity = 0;
    el.style.transform = "translateY(40px)";
    el.style.transition = "all 0.8s ease";
  });
};

// Tombol kontak langsung
function openContact() {
  const contactMethod = confirm("Hubungi via WhatsApp?\nPilih OK untuk WhatsApp, atau Batal untuk Email.");
  if (contactMethod) {
    window.open("https://wa.me/6282214671417", "_blank");
  } else {
    window.location.href = "mailto:gedry@email.com";
  }
}
