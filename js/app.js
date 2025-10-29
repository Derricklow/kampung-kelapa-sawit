const header_execute_height = 10;
let header = document.getElementById("header");

window.addEventListener("load", function(){
    if(window.scrollY > header_execute_height){
        header.classList.add("scrolled");
    }
});

window.addEventListener("scroll", () => {
    if(window.scrollY > 10){
        header.classList.add("scrolled");
    } else {
        if(document.getElementById("header").classList.contains("scrolled")) header.classList.remove("scrolled");
    }
});


let video  = document.getElementById("introduction-video");
let titleEl  = document.getElementById("introduction_title");
let subtitleEl  = document.getElementById("introduction_subtitle");

let currentIndex = -1;

const captions = [
    {
        start: 0,
        end: 10,
        fadeOutAt: 10,
        title: "Welcome To Kelapa Sawit",
        subtitle: "Comes join us to make some fun & Let's build the most beautiful place in the world"
    },
    {
        start: 12,
        end: 22,
        fadeOutAt: 22,
        title: "Discover The Beauty",
        subtitle: "Explore the stunning landscapes and vibrant culture of Kelapa Sawit"
    },
    {
        start: 24,
        end: 34,
        fadeOutAt: 34,
        title: "Experience The Adventure",
        subtitle: "Engage in exciting activities and create unforgettable memories"
    },
    {
        start: 36,
        end: 66,
        fadeOutAt: 66,
        title: "Join Our Community",
        subtitle: "Be a part of our welcoming community and share in the joy of Kelapa Sawit"
    }
];

function showCaption(caption) {
    titleEl.textContent = caption.title;
    subtitleEl.textContent = caption.subtitle;

    titleEl.classList.replace("animate-fadeOut", "animate-fadeIn");
    subtitleEl.classList.replace("animate-fadeOut", "animate-fadeIn");
}

function hideCaption() {
    titleEl.classList.replace("animate-fadeIn", "animate-fadeOut");
    subtitleEl.classList.replace("animate-fadeIn", "animate-fadeOut");
}

video.addEventListener("timeupdate", () => {
    const t = video.currentTime;
    const newIndex = captions.findIndex(c => t >= c.start && t < c.end);

    if (newIndex !== -1 && newIndex !== currentIndex) {
        currentIndex = newIndex;
        showCaption(captions[newIndex]);
    }

    if (currentIndex !== -1 && t > captions[currentIndex].fadeOutAt) {
        hideCaption();
    }
});

const top_things_swiper = new Swiper('#top-things-to-do', {
    grabCursor: false,
    watchOverflow: true,
    navigation: { nextEl: '#top-things-swiper-next', prevEl: '#top-things-swiper-prev' },
    breakpoints: {
        1024: { slidesPerView: 2 },
        1280: { slidesPerView: 2 },
    },
    on: {
        slideChange: function () {
            let title_ele = document.getElementById('to-do-title');
            let content_ele = document.getElementById('to-do-content');
            let link_ele = document.getElementById('to-do-link');

            let arr = [
                { 
                    title: "Where Beauty Meets Stillness", 
                    content: `Discover a hidden gem where every view feels like a painting. 
                                Breathe in the calm, capture the moment, and let nature tell its story. 
                                A perfect spot for dreamers and wanderers. 
                                From sunrise glow to golden sunsets, every angle is picture-perfect.`, 
                    link: { text: "Top Local Highlights", href: "./about.html" } 
                },
                { 
                    title: "Taste the Story Behind Every Dish", 
                    content: `Every flavor carries a piece of local life — 
                                from recipes passed down through generations to dishes shared among friends.
                                Come hungry, leave with a heart full of warmth. rom sizzling street food to family-style 
                                feasts, local flavors bring people together. It’s more than just food — 
                                it’s the taste of home and happiness.`, 
                    link: { text: "Top Local Flavors", href: "./about.html" }  
                },
                { 
                    title: "Return to Where the Earth Breathes", 
                    content: `Step away from the noise and let nature embrace you.
                                Feel the wind, hear the trees — and find yourself again. 
                                Escape the rush. In nature’s quiet rhythm, rediscover what truly matters.`, 
                    link: { text: "Top nature experiences", href: "./about.html" } 
                },
                { 
                    title: "Celebrate Together, Feel the Spirit of Home", 
                    content: `Step into a village alive with the colors of Lunar New Year. 
                                Hear the drums, taste the flavors, and join locals of every race in celebrating friendship, 
                                culture, and joy under the same festive sky.`, 
                    link: { text: "Top cultural experiences", href: "./about.html" } 
                },
                { 
                    title: "Taste the Heart of the Village", 
                    content: `Discover the taste of the countryside — 
                                juicy fruits picked straight from the trees and dishes made with love and tradition.
                                Here, food isn’t just a meal — it’s a celebration of freshness, friendship, and joy.`, 
                    link: { text: "Top Flavors of the Tropics", href: "./about.html" } 
                },
                { 
                    title: null, 
                    content: null, 
                    link: null 
                },
            ];
            
            const active = this.activeIndex;
            const slides = this.slides;
            title_ele.style.opacity = 0;
            content_ele.style.opacity = 0;
            link_ele.style.opacity = 0;

            setTimeout(() => {
                title_ele.textContent = arr[active].title;
                content_ele.textContent = arr[active].content;
                link_ele.children[0].textContent = arr[active].link.text;
                link_ele.href = arr[active].link.href;

                title_ele.style.transition = "opacity 0.6s ease";
                content_ele.style.transition = "opacity 0.6s ease";
                link_ele.style.transition = "opacity 0.6s ease";

                title_ele.style.opacity = 1;
                content_ele.style.opacity = 1;
                link_ele.style.opacity = 1;
              }, 300);
        }
    }
});

const top_things_swiper_small = new Swiper('#top-things-to-do-small', {
    slidesPerGroup: 1,
    spaceBetween: 20,
    slidesPerView: 1.2,
    centeredSlides: true,
})

const event_swiper = new Swiper('#swiper-events', {
    // scrollbar: { el: '.swiper-scrollbar'},
    // loop: true,
    // loopFillGroupWithBlank: true,
    // autoplay: { delay: 3000 },
    slidesPerGroup: 1,
    grabCursor: true,
    navigation: { nextEl: '#events-swiper-next', prevEl: '#events-swiper-prev' },
    pagination: { el: '#swiper-pagination-event', clickable: true },
    breakpoints: {
        0: { slidesPerView: 1.2, spaceBetween: 20 },
        767: { slidesPerView: 2.3, spaceBetween: 20 },
        1024: { slidesPerView: 3, spaceBetween: 20 },
        1280: { slidesPerView: 4, spaceBetween: 20 }
    },
});

// About page speech
const speech_swiper = new Swiper('.speech-swiper', {
    grabCursor: true,
    pagination: { 
        el: '#swiper-pagination-speech',
        clickable: true,
    }
})

// Marquee Effect

/* JS responsibilities: */
    // 1) Duplicate the contents of the track so there are two identical halves.
    // 2) Ensure the animation only runs if there's actually overflow (prevents weird behavior with tiny content).
    // 3) Optionally adjust animation duration based on content length (simple heuristic).

// (function(){
//     const track = document.getElementById('marqueeTrack');
//     if (!track) return;

//     // Clone track children into a DocumentFragment and append — this creates two back-to-back sets
//     const children = Array.from(track.children);
//     const frag = document.createDocumentFragment();
//     children.forEach(node => frag.appendChild(node.cloneNode(true)));
//     track.appendChild(frag);

//     // Now the track contains two identical halves. We'll check widths.
//     function setup() {

//         // total width of all original items (first half)
//         let firstHalfWidth = 0;
//         for (let i = 0; i < children.length; i++) {
//             firstHalfWidth += children[i].getBoundingClientRect().width;
//             const style = getComputedStyle(track);
//             const gap = parseFloat(style.gap || style.columnGap || 0);
//             if (i < children.length - 1) firstHalfWidth += gap;
//         }

//         // container visible width
//         const containerWidth = track.parentElement.getBoundingClientRect().width;

//         // if the firstHalfWidth is less than container width, we need to duplicate more times, so there are enough items to fill the container without blank space during scroll
//         if (firstHalfWidth < containerWidth) {
//             let copiesNeeded = Math.ceil((containerWidth / firstHalfWidth)) + 1; // compute how many extra copies needed

//             // remove recently appended 1 copy (we already appended one above), then append the extra copies
//             // For simplicity we will append additional clones so that the track is long enough.
//             const existingLength = track.children.length;

//             for (let c = 0; c < copiesNeeded; c++) {
//                 children.forEach(node => track.appendChild(node.cloneNode(true)));
//             }
//         }

//         // OPTIONAL: adjust animation duration based on content length (so speed feels consistent)
//         // The longer the track, the longer we might want to make the duration.
//         const totalTrackWidth = track.scrollWidth;
//         // heuristic: base duration proportional to width
//         const base = 0.01; // seconds per pixel (tweakable)
//         const duration = Math.max(8, Math.round(totalTrackWidth * base)); // minimum 8s
//         track.style.animationDuration = duration + 's';
//     }

//     // run setup now and on window resize
//     setup();
//     let resizeTimer;
//     window.addEventListener('resize', () => {
//         clearTimeout(resizeTimer);
//         resizeTimer = setTimeout(setup, 150);
//     });
// })();

// End Marquee Effect