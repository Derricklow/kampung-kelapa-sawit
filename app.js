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
})