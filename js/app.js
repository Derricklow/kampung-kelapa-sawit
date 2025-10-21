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

const event_swiper = new Swiper('.swiper-events', {
    // scrollbar: { el: '.swiper-scrollbar'},
    // loop: true,
    // loopFillGroupWithBlank: true,
    // autoplay: { delay: 3000 },
    slidesPerGroup: 1,
    grabCursor: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    pagination: { 
        el: '#swiper-pagination-event',
        clickable: true,
    },
    breakpoints: {
        0: { 
            slidesPerView: 1.2,
            spaceBetween: 20, 
        },
        767: { 
            slidesPerView: 2.3,
            spaceBetween: 20, 
        },
        1024: { 
            slidesPerView: 3,
            spaceBetween: 20, 
        },
        1280: { 
            slidesPerView: 4,
            spaceBetween: 20, 
        }
    },
});


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

(function () {
    const track = document.getElementById('marqueeTrack');
    if (!track) return;

    // Clone track children into a DocumentFragment and append — this creates two back-to-back sets
    const children = Array.from(track.children);
    const frag = document.createDocumentFragment();
    children.forEach(node => frag.appendChild(node.cloneNode(true)));
    track.appendChild(frag);

    // Now the track contains two identical halves. We'll check widths.
    function setup() {

        // total width of all original items (first half)
        let firstHalfWidth = 0;
        for (let i = 0; i < children.length; i++) {
            firstHalfWidth += children[i].getBoundingClientRect().width;
            const style = getComputedStyle(track);
            const gap = parseFloat(style.gap || style.columnGap || 0);
            if (i < children.length - 1) firstHalfWidth += gap;
        }

        // container visible width
        const containerWidth = track.parentElement.getBoundingClientRect().width;

        // if the firstHalfWidth is less than container width, we need to duplicate more times, so there are enough items to fill the container without blank space during scroll
        if (firstHalfWidth < containerWidth) {
            let copiesNeeded = Math.ceil((containerWidth / firstHalfWidth)) + 1; // compute how many extra copies needed

            // remove recently appended 1 copy (we already appended one above), then append the extra copies
            // For simplicity we will append additional clones so that the track is long enough.
            const existingLength = track.children.length;

            for (let c = 0; c < copiesNeeded; c++) {
                children.forEach(node => track.appendChild(node.cloneNode(true)));
            }
        }

        // OPTIONAL: adjust animation duration based on content length (so speed feels consistent)
        // The longer the track, the longer we might want to make the duration.
        const totalTrackWidth = track.scrollWidth;
        // heuristic: base duration proportional to width
        const base = 0.01; // seconds per pixel (tweakable)
        const duration = Math.max(8, Math.round(totalTrackWidth * base)); // minimum 8s
        track.style.animationDuration = duration + 's';
    }

    // run setup now and on window resize
    setup();
    let resizeTimer;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(setup, 150);
    });
})();

// End Marquee Effect