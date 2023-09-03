const header = document.querySelector("header");
window.addEventListener("scroll", function(){
    header.classList.toggle("sticky", this.window.scrollY > 50)
})

// toggle icon navbar //////////////////////////////////////////////////////

let menuIcon = document.querySelector("#menu-icon");
let navlist = document.querySelector(".navlist");

menuIcon.onclick = ()=>{
    menuIcon.classList.toggle("bx-x");
    navlist.classList.toggle("open");
}

window.onscroll = ()=>{
    menuIcon.classList.remove("bx-x");
    navlist.classList.remove("open");
}

// parallax //////////////////////////////////////////////////////

const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add("show-items");
        } else {
            entry.target.classList.remove("show-items");
        }
    });
});

const scrollScale = document.querySelectorAll(".scroll-scale");
scrollScale.forEach((e1)=>observer.observe(e1));

const scrollBottom = document.querySelectorAll(".scroll-Bottom");
scrollBottom.forEach((e1)=>observer.observe(e1));

const scrollTop = document.querySelectorAll(".scroll-Top");
scrollTop.forEach((e1)=>observer.observe(e1));