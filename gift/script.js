window.addEventListener("load", function () {
    const preloader = document.getElementById("preloader");
    preloader.classList.add("fade-out");
    setTimeout(() => preloader.remove(), 600);
});

function mouseEffect() {
    var video_container = document.querySelector("#video-container");
    var playBtn = document.querySelector("#play");

    video_container.addEventListener('mouseenter', function () {
        gsap.to(playBtn, { opacity: 1, scale: 1, duration: 0.5 });

    });

    video_container.addEventListener('mouseleave', function () {
        gsap.to(playBtn, { opacity: 0, scale: 0, duration: 0.5 });

    });

    video_container.addEventListener('mousemove', function (dets) {
        gsap.to(playBtn, { left: dets.x, top: dets.y });

    });
}


function headerAnimate() {
    gsap.from("#page1 h1", {
        y: 100,
        opacity: 0,
        duration: 0.5,
        delay: 0.3,
        stagger: 0.5,
    });

    gsap.to("#page1 h1::after", {
        width: "100%",
        duration: 0.8,
        delay: 1,
    });

    gsap.from("#page1 #video-container", {
        y: 100,
        scale: 0.5,
        duration: 0.7,
        delay: 0.5,
    });


}


function smoothScroll() {
    const lenis = new Lenis({
        duration: 3,
        smooth: true,
        direction: 'vertical',
        gestureDirection: 'vertical',
        smoothTouch: false,
        touchMultiplier: 2,
    });

    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

}

function cursorEffect() {
    var cursor = document.querySelector("#cursor");

    document.addEventListener("mousemove", function (dets) {
        gsap.to(cursor, { left: dets.x, top: dets.y });
    });

    document.querySelector('#child1').addEventListener('mouseenter', function () {
        gsap.to(cursor, {
            scale: 1,
            xPercent: -50,
            yPercent: -50,
            duration: 0.2,
            ease: "power2.out"
        });
    });
    document.querySelector('#child1').addEventListener('mouseleave', function () {
        gsap.to(cursor, {
            scale: 0,
            xPercent: -50,
            yPercent: -50,
            duration: 0.2,
            ease: "power2.out"
        });
    });

    document.querySelector('#child2').addEventListener('mouseenter', function () {
        gsap.to(cursor, {
            scale: 1,
            xPercent: -50,
            yPercent: -50,
            duration: 0.2,
            ease: "power2.out"
        });
    });
    document.querySelector('#child2').addEventListener('mouseleave', function () {
        gsap.to(cursor, {
            scale: 0,
            xPercent: -50,
            yPercent: -50,
            duration: 0.2,
            ease: "power2.out"
        });
    });
    document.querySelector('#child3').addEventListener('mouseenter', function () {
        gsap.to(cursor, {
            scale: 1,
            xPercent: -50,
            yPercent: -50,
            duration: 0.2,
            ease: "power2.out"
        });
    });
    document.querySelector('#child3').addEventListener('mouseleave', function () {
        gsap.to(cursor, {
            scale: 0,
            xPercent: -50,
            yPercent: -50,
            duration: 0.2,
            ease: "power2.out"
        });
    });
    document.querySelector('#child4').addEventListener('mouseenter', function () {
        gsap.to(cursor, {
            scale: 1,
            xPercent: -50,
            yPercent: -50,
            duration: 0.2,
            ease: "power2.out"
        });
    });
    document.querySelector('#child4').addEventListener('mouseleave', function () {
        gsap.to(cursor, {
            scale: 0,
            xPercent: -50,
            yPercent: -50,
            duration: 0.2,
            ease: "power2.out"
        });
    });






}


function zoomEffect() {
    gsap.registerPlugin(ScrollTrigger);

    // Timeline controlling both front and back
    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: "#page4",
            start: "top top",
            end: "+500%",
            scrub: 2,
            pin: true, // keeps page4 in place during animation
            // markers: true, // uncomment to debug scroll points
        }
    });

    // Front scales up slightly (zoom in)
    tl.to("#front", {
        scale: 3,
        opacity: 0,
        ease: "power2.inOut",
        duration: 0.2
    },);

    // Back fades and scales in from behind
    tl.fromTo("#back",
        { scale: 0, opacity: 1 },
        { scale: 100, opacity: 0, ease: "power4.inOut" },
        0);

}

function faqEffect() {

    document.addEventListener('DOMContentLoaded', function () {
        const faqItems = document.querySelectorAll(".faq-item");

        faqItems.forEach(item => {
            const btn = item.querySelector(".faq-question");

            btn.addEventListener("click", () => {
                const isActive = item.classList.contains("active");

                // Close all items
                faqItems.forEach(i => {
                    i.classList.remove("active");
                });

                // Toggle current item (reopen if it wasn't active)
                if (!isActive) {
                    item.classList.add("active");
                }
            });
        });
    });
}



function navEffect() {
    gsap.from("#page1 #navbar", {
        y: -100,
        opacity: 0,
        duration: 1,
        delay: 0.3,
        stagger: 0.5,
    });

}



function invertColors() {
    // Get all elements on the page
    const elements = document.querySelectorAll("*");

    elements.forEach(el => {
        const style = window.getComputedStyle(el);

        // Invert background color
        let bgColor = style.backgroundColor;
        if (bgColor === 'rgb(247, 247, 247)' || bgColor === 'rgb(255, 255, 255)') {
            el.style.backgroundColor = 'black';
        } else if (bgColor === 'rgb(0, 0, 0)') {
            el.style.backgroundColor = '#f7f7f7';
        }

        // Invert text color
        let color = style.color;
        if (color === 'rgb(247, 247, 247)' || color === 'rgb(255, 255, 255)') {
            el.style.color = 'black';
        } else if (color === 'rgb(0, 0, 0)') {
            el.style.color = '#f7f7f7';
        }
    });
}


function slider() {
    const testimonials = [
        "\"Our website traffic grew faster than we expected. Truly impressed with their strategy.\"",
        "\"They made our brand look so polished online. Super smooth experience.\"",
        "\"The team really listened to our needs and delivered exactly what we wanted.\"",
        "\"We saw genuine engagement from the right audience within weeks.\"",
        "\"Very professional people who actually care about your growth.\"",
        "\"Loved their ideas and how quickly everything came together.\"",
        "\"Our digital campaigns finally started bringing real results.\"",
        "\"Clean design, smart content, and amazing support throughout.\"",
        "\"They turned our small business into a strong online brand.\""
    ];


    const textEl = document.querySelector("#Testimonials .text");

    function animateTestimonial(text) {
        // Animate out the old text
        gsap.to(textEl, {
            y: -50,
            opacity: 0,
            duration: 0.4,
            onComplete: () => {
                // Update text
                textEl.textContent = text;

                // Reset position
                gsap.set(textEl, {
                    opacity: 1,
                    y: 0
                });

                // Wrap each word in a span
                const words = textEl.textContent.split(' ');
                textEl.innerHTML = words.map(word => `<span style="display: inline-block; margin-right: 0.3em;">${word}</span>`).join('');

                // Get all word spans and group them by visual line
                const wordSpans = textEl.querySelectorAll('span');
                const lines = [];
                let currentLine = [];
                let lastTop = null;

                wordSpans.forEach(span => {
                    const top = span.getBoundingClientRect().top;
                    if (lastTop !== null && top !== lastTop) {
                        lines.push(currentLine);
                        currentLine = [];
                    }
                    currentLine.push(span);
                    lastTop = top;
                });
                if (currentLine.length > 0) lines.push(currentLine);

                // Animate each line rising up smoothly with stagger
                lines.forEach((line, lineIndex) => {
                    gsap.from(line, {
                        y: 30,
                        opacity: 0,
                        duration: 0.6,
                        delay: lineIndex * 0.2,
                        ease: "power2.out"
                    });
                });
            }
        });
    }


    // === Initialize Swiper ===
    const swiper = new Swiper('.mySwiper', {
        loop: true,
        slidesPerView: 3,
        spaceBetween: 0,
        watchSlidesProgress

            : true,
        autoplay: {
            delay: 0,
            disableOnInteraction: false,
        },
        speed: 2500,
        freeMode: {
            enabled: true,
            momentum: false,
            sticky: false,
        },
        allowTouchMove: true,
        centeredSlides: false,

        // === On slide change → update testimonial + circle ===
        on: {
            slideChangeTransitionEnd() {
                const realIndex = this.realIndex % testimonials.length;
                animateTestimonial(testimonials[realIndex]);
            },
            // === On init → show first testimonial immediately ===
            init() {
                // Show first text right away
                animateTestimonial(testimonials[0]);
            }
        }
    });
}

function ctaAnimation() {
    gsap.registerPlugin(ScrollTrigger);

    // Animate CTA section on scroll
    gsap.from("#cta-content h2", {
        scrollTrigger: {
            trigger: "#cta-section",
            start: "top 80%",
            end: "top 20%",
            scrub: 1,
        },
        y: 100,
        opacity: 0,
        duration: 0.8,
    });

    gsap.from("#cta-content p", {
        scrollTrigger: {
            trigger: "#cta-section",
            start: "top 80%",
            end: "top 20%",
            scrub: 1,
        },
        y: 100,
        opacity: 0,
        duration: 0.8,
        delay: 0.2,
    });

    gsap.from(".cta-button", {
        scrollTrigger: {
            trigger: "#cta-section",
            start: "top 80%",
            end: "top 20%",
            scrub: 1,
        },
        y: 100,
        opacity: 0,
        duration: 0.8,
        delay: 0.4,
    });
}

function parallaxEffect() {
    const elems = document.querySelectorAll("#page2 .elem");

    window.addEventListener("scroll", () => {
        elems.forEach((elem) => {
            const rect = elem.getBoundingClientRect();

            // Only apply parallax when element is in viewport
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                // Calculate parallax offset based on element's position in viewport
                const parallaxOffset = (rect.top / window.innerHeight) * 200;

                const shop = elem.querySelector(".shop");
                const shop2 = elem.querySelector(".shop2");

                if (shop) {
                    gsap.to(shop, {
                        y: parallaxOffset,
                        duration: 0,
                        overwrite: "auto"
                    });
                }

                if (shop2) {
                    gsap.to(shop2, {
                        y: parallaxOffset,
                        duration: 0,
                        overwrite: "auto"
                    });
                }
            }
        });
    });
}


function m_parallaxEffect(parentSelector, childSelector, factor = 1) {
    const elems = document.querySelectorAll(parentSelector);

    window.addEventListener("scroll", () => {
        elems.forEach((elem) => {
            const rect = elem.getBoundingClientRect();

            // Only apply parallax when element is in viewport
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                const parallaxOffset = (rect.top / window.innerHeight) * factor * 100;

                const children = elem.querySelectorAll(childSelector);
                children.forEach((child) => {
                    gsap.to(child, {
                        y: parallaxOffset,
                        duration: 0,
                        overwrite: "auto",
                    });
                });
            }
        });
    });
}

function audio() {
    window.addEventListener("DOMContentLoaded", () => {
        const audio = document.getElementById("bg-audio");
        if (!audio) return;

        audio.muted = true;  // start muted
        audio.volume = 0.4;

        // try autoplay silently
        audio.play().catch(() => console.log("Autoplay blocked"));

        // GSAP ScrollTrigger to unmute/play on scroll
        gsap.registerPlugin(ScrollTrigger);

        ScrollTrigger.create({
            trigger: "body",        // can be any element
            start: "top top",       // trigger as soon as scroll starts
            onEnter: () => {
                audio.muted = false;    // unmute
                audio.play().catch(console.warn); // ensure it plays
            },
            once: true               // trigger only once
        });

        // optional: also enable click/touchstart fallback
        const gestureFallback = () => {
            audio.muted = false;
            audio.play().catch(console.warn);
            window.removeEventListener("click", gestureFallback);
            window.removeEventListener("touchstart", gestureFallback);
        };
        window.addEventListener("click", gestureFallback, { once: true });
        window.addEventListener("touchstart", gestureFallback, { once: true });
    });
}





audio();
faqEffect();
window.addEventListener("load", () => {
    requestAnimationFrame(() => {
        smoothScroll();
        navEffect();
        headerAnimate();
        mouseEffect();
        cursorEffect();
        slider();
        zoomEffect();
        parallaxEffect();
        ctaAnimation();
        m_parallaxEffect("#main-text", "h1", 0.8);
        m_parallaxEffect("#paras", "p", 0.4);
        m_parallaxEffect("#paras", "a", 0.4);


        animateTestimonial(testimonials[0]);



    });
});

