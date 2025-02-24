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

// Hover Icon
const socialIcons = document.querySelectorAll(".social-icon i");

// Loop setiap ikon dan tambahkan event listener
socialIcons.forEach((icon) => {
  icon.addEventListener("mouseenter", function () {
    this.classList.remove("text-secondary"); // Hapus warna abu-abu
    this.classList.add("text-dark"); // Ubah menjadi hitam
  });

  icon.addEventListener("mouseleave", function () {
    this.classList.remove("text-dark"); // Hapus warna hitam
    this.classList.add("text-secondary"); // Kembalikan ke warna abu-abu
  });
});

// alert agar tidak di copy text
function showPopup() {
  var myModal = new bootstrap.Modal(document.getElementById("alertModal"));
  setTimeout(() => myModal.show(), 10);
}

document
  .getElementById("alertModal")
  .addEventListener("show.bs.modal", function () {
    this.removeAttribute("inert");
  });

document
  .getElementById("alertModal")
  .addEventListener("hidden.bs.modal", function () {
    this.setAttribute("inert", "");
  });

document
  .getElementById("alertModal")
  .addEventListener("shown.bs.modal", function () {
    this.querySelector(".btn-close").focus();
  });

document.addEventListener("copy", function (e) {
  e.preventDefault();
  showPopup();
});

document.addEventListener("contextmenu", function (e) {
  e.preventDefault();
  showPopup();
});

document.addEventListener("selectstart", function (e) {
  e.preventDefault();
});
