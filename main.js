const nav = document.querySelector("#nav")
const navBtn = document.querySelector("#nav-btn")
const navBtnImg = document.querySelector("#nav-btn-img")

navBtn.onclick = () => {
    if (nav.classList.toggle('open')) {
navBtn.src = "nav-close.svg";
    } else {
navBtn.src = "nav-open.svg";
    }
}

AOS.init({
    once: true
});