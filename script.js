// Show Menu
const navMenu = document.getElementById("nav-menu"),
navToggle = document.getElementById("nav-toggle"),
navClose = document.getElementById("nav-close")

// Menu Show If Exists
if (navToggle) {
    navToggle.addEventListener("click", () => {
        navMenu.classList.add("show-menu")
    })
}

// Menu Hidden If Exsits 
if (navClose) {
    navClose.addEventListener("click", () => {
        navMenu.classList.remove("show-menu")
    })
}

// Remove Menu Mobile
const navLink = document.querySelectorAll(".nav-link")

const linkAction = () => {
    const navMenu = document.getElementById("nav-menu")
    navMenu.classList.remove("show-menu")
}

navLink.forEach((n) =>n.addEventListener("click", linkAction))

// Change Background Header
function scrollHeader() {
    const header = document.getElementById("header")

    if (this.scrollY >= 50) {
        header.classList.add("bg-header")
    } else {
        header.classList.remove("bg-header")
    }
}

// Show Scroll Up 
const scrollUp = () => {
    const scrollUp = document.getElementById("scroll-up")

    this.scrollY >= 350 ? scrollUp.classList.add("show-scroll") : scrollUp.classList.remove ("show-scroll")
}

window.addEventListener("scroll", scrollUp)

// Scroll Section Active Link
const section = document.querySelectorAll("section[id]")

const scrollActive = () => {
    const scrollY = window.scrollY

    section.forEach((current) => {
        const sectionHeight = current.offsetHeight,
        sectionTop = current.offsetTop - 58,
        sectionId = current.getAttribute("id"),
        sectionClass = document.querySelector(".nav-menu a[href*=" + sectionId + "]")

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            sectionClass.classList.add("active-link")
        } else {
            sectionClass.classList.remove("active-link")
        }
    })
}
window.addEventListener("scroll", scrollActive)

// Dark Light Theme
const themeButton = document.getElementById("theme-button")
const darkTheme = "dark-theme"
const iconIcon = "ri-sun-line"

const selectedTheme = localStorage.getItem("selected-theme")
const selectedIcon = localStorage.getItem("selected-icon")

const getCurrentTheme = () => (document.body.classList.contains(darkTheme) ? "dark" : "light")
const getCurrentIcon = () => (themeButton.classList.contains(iconTheme) ? "ri-moon-line" : "ri-sun-line")

if (selectedTheme) {
    document.body.classList[selectedTheme === "dark" ? "add" : "remove"](darkTheme)
    themeButton.classList[selectedIcon === "ri-moon-line" ? "add" : "remove"](iconTheme)
}

themeButton.addEventListener("click", () => {
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)

    localStorage.setItem("selected-theme", getCurrentTheme())
    localStorage.setItem("selected-icon", getCurrentIcon())
})

// Scroll Animation
const sr = ScrollReveal ({
    origin: "top",
    distance: "60px",
    duration: 3000,
    delay: 400,
})

sr.reveal(`.home-img, .newsletter-container, .footer-logo, .footer-description, .footer-content, .footer-info`)
sr.reveal(`.home-data`, {origin: "bottom"})
sr.reveal(`.about-data, .recently-data`, {origin: "left"})
sr.reveal(`.about-img, .recently-img`, {origin: "right"})
sr.reveal(`.popular-card`, {interval: 100})