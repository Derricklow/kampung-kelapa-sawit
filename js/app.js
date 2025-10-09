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

    // handle fade-out when time passes fadeOutAt
    if (currentIndex !== -1 && t > captions[currentIndex].fadeOutAt) {
        hideCaption();
    }
});