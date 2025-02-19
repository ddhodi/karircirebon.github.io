// animation navbar
document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".nav-link");
  const homeLink = document.getElementById("home");
  const brandLink = document.querySelector(".nav-home");

  // Fungsi untuk menghapus semua active lalu tambah ke yang diklik
  function setActive(link) {
    navLinks.forEach((nav) => nav.classList.remove("active"));
    link.classList.add("active");
  }

  // Tambahkan event listener ke setiap nav-link
  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      setActive(this);
    });
  });

  // Cek jika brandLink dan homeLink ada sebelum menambahkan event listener
  if (brandLink && homeLink) {
    brandLink.addEventListener("click", function () {
      setActive(homeLink);
    });
  }
});

// HOver Icon
const socialIcons = document.querySelectorAll(".social-icon i");

// Loop setiap ikon dan tambahkan event listener
socialIcons.forEach(icon => {
  icon.addEventListener("mouseenter", function() {
    this.classList.remove("text-secondary"); // Hapus warna abu-abu
    this.classList.add("text-dark"); // Ubah menjadi hitam
  });

  icon.addEventListener("mouseleave", function() {
    this.classList.remove("text-dark"); // Hapus warna hitam
    this.classList.add("text-secondary"); // Kembalikan ke warna abu-abu
  });
});

