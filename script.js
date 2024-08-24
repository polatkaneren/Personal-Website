document.addEventListener("DOMContentLoaded", function() {
    // Dynamic Typing Effect
    const titles = ["Software Developer", "Web Developer", "Mobile App Developer", "AI Enthusiast"];
    let titleIndex = 0;
    let charIndex = 0;
    const typedTextElement = document.querySelector('.moving-text');

    function typeText() {
        if (charIndex < titles[titleIndex].length) {
            typedTextElement.textContent += titles[titleIndex].charAt(charIndex);
            charIndex++;
            setTimeout(typeText, 100); // Adjust typing speed
        } else {
            setTimeout(eraseText, 2000); // Pause before erasing
        }
    }

    function eraseText() {
        if (charIndex > 0) {
            typedTextElement.textContent = titles[titleIndex].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(eraseText, 50); // Adjust erasing speed
        } else {
            titleIndex = (titleIndex + 1) % titles.length; // Move to the next title
            setTimeout(typeText, 100);
        }
    }

    setTimeout(typeText, 500);

    // Burger Menu Toggle
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-links');

    burger.addEventListener('click', () => {
        navLinks.classList.toggle('nav-active');
        burger.classList.toggle('toggle');
    });

    // Scroll Reveal Animation
    window.addEventListener('scroll', reveal);

    function reveal() {
        const reveals = document.querySelectorAll('.reveal');

        for (let i = 0; i < reveals.length; i++) {
            const windowHeight = window.innerHeight;
            const elementTop = reveals[i].getBoundingClientRect().top;
            const revealPoint = 150;

            if (elementTop < windowHeight - revealPoint) {
                reveals[i].classList.add('active');
            } else {
                reveals[i].classList.remove('active');
            }
        }
    }

    // Lightbox Effect
    const images = document.querySelectorAll('.lightbox-img');
    const lightbox = document.createElement('div');
    lightbox.id = 'lightbox';
    document.body.appendChild(lightbox);

    images.forEach(image => {
        image.addEventListener('click', () => {
            lightbox.classList.add('active');
            const img = document.createElement('img');
            img.src = image.src;
            while (lightbox.firstChild) {
                lightbox.removeChild(lightbox.firstChild);
            }
            lightbox.appendChild(img);
        });
    });

    lightbox.addEventListener('click', () => {
        lightbox.classList.remove('active');
    });

    // Background Color Transition on Scroll
    window.addEventListener('scroll', function() {
        const sections = document.querySelectorAll('section');
        const scrollPosition = window.scrollY || window.pageYOffset;

        sections.forEach((section, index) => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const nextSectionTop = index < sections.length - 1 ? sections[index + 1].offsetTop : document.body.scrollHeight;

            if (scrollPosition >= sectionTop - sectionHeight / 2 && scrollPosition < nextSectionTop - sectionHeight / 2) {
                document.body.style.backgroundColor = section.dataset.bgcolor || '#ffffff';
            }
        });
    });

    // Scroll-to-Top Button
    const scrollToTopBtn = document.createElement('button');
    scrollToTopBtn.textContent = "⬆️";
    scrollToTopBtn.classList.add('scroll-to-top');
    document.body.appendChild(scrollToTopBtn);

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollToTopBtn.classList.add('active');
        } else {
            scrollToTopBtn.classList.remove('active');
        }
    });

    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});
