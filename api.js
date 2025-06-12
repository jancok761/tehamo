// Toggle Mobile Menu
document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".mobile-menu");
    const nav = document.querySelector("nav ul");

    menuToggle.addEventListener("click", function () {
        nav.classList.toggle("active");
    });

    // Smooth Scroll for Navigation Links
    const navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 60, // offset for header
                    behavior: "smooth"
                });
            }

            // Tutup menu mobile setelah klik
            nav.classList.remove("active");
        });
    });

    // Contact Form Validation (Simple)
    const contactForm = document.querySelector('.contact-form form');

    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const name = contactForm.querySelector('input[type="text"]').value.trim();
        const email = contactForm.querySelector('input[type="email"]').value.trim();
        const message = contactForm.querySelector('textarea').value.trim();

        if (name === '' || email === '' || message === '') {
            alert("Mohon lengkapi semua kolom yang wajib diisi.");
            return;
        }

        // Bisa ditambahkan AJAX jika ingin kirim ke server
        alert("Pesan berhasil dikirim! Terima kasih telah menghubungi kami.");
        contactForm.reset();
    });


    const fadeElements = document.querySelectorAll('.menu-item, .gallery-item, .about-content, .contact-content');

    function fadeInOnScroll() {
        const windowBottom = window.innerHeight + window.scrollY;

        fadeElements.forEach(el => {
            const elementTop = el.offsetTop;

            if (windowBottom > elementTop + 100) {
                el.classList.add('fade-in');
            }
        });
    }

    window.addEventListener('scroll', fadeInOnScroll);
    fadeInOnScroll(); 
});
