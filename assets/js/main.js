/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = $("#nav-menu");
const navToggle = $("#nav-toggle");
const navClose = $("#nav-close");

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
    navToggle.on("click", () => {
        navMenu.addClass("show-menu");
    });
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose) {
    navClose.on("click", () => {
        navMenu.removeClass("show-menu");
    });
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLinks = $(".nav__link");
function linkAction () {
    const navMenu = $("#nav-menu");
    navMenu.removeClass("show-menu");
}
navLinks.each(function () {
    $(this).on("click", linkAction);
});

/*==================== ACCORDION SKILLS ====================*/
const skillsContents = $(".skills__content");
const skillsHeaders = $(".skills__header");

function toggleSkills () {
    let parentItem = $(this).parent();

    for (let i = 0; i < skillsContents.length; i++) {
        skillsContents[i].className = "skills__content skills__close";
    }

    parentItem.removeClass("skills__close");
    parentItem.addClass("skills__open");
}

skillsHeaders.each(function () {
    $(this).on("click", toggleSkills)
});

/*==================== QUALIFICATION TABS ====================*/
const tabs = $("[data-target]");
const tabContents = $("[data-content]");

tabs.each(function () {
    $(this).on("click", function () {
        const target = $(this).data("target");

        tabContents.each(function () {
            $(this).removeClass("qualification__active");
        });
        $(target).addClass("qualification__active");

        tabs.each(function () {
            $(this).removeClass("qualification__active");
        });
        $(this).addClass("qualification__active");
    });
});

/*==================== SERVICES MODAL ====================*/
const serviceModals = $(".services__modal");
const modalButtons = $(".services__button");
const modalCloseButtons = $(".services__modal__close");

let showModal = function (modal) {
    serviceModals[modal].className = "services__modal active__modal";
}

let hideAllModal = function () {
    serviceModals.each(function () {
        $(this).removeClass("active__modal");
    });
}

modalButtons.each(function (index) {
    $(this).on("click", function () {
        showModal(index);
    });
});

modalCloseButtons.each(function () {
    $(this).on("click", function () {
        hideAllModal();
    });
});

/*==================== PROJECT SWIPER  ====================*/
let swiperProject = new Swiper(".project__container", {
    cssMode: true,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true
    },
    mousewheel: true,
    keyboard: true
});

/*==================== TESTIMONIAL ====================*/
let swiperTestimonial = new Swiper(".testimonial__container", {
    loop: true,
    grabCursor: true,
    spaceBetween: 48,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true
    },
    breakpoints: {
        568: {
            slidesPerView: 2
        }
    }
});

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll("section[id]");

function scrollActive () {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute("id");

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector(".nav__menu a[href*=" + sectionId + "]").classList.add("active-link");
        } else{
            document.querySelector(".nav__menu a[href*=" + sectionId + "]").classList.remove("active-link");
        }
    })
}

window.addEventListener("scroll", scrollActive);

/*==================== CHANGE BACKGROUND HEADER ====================*/
function scrollHeader () {
    const nav = document.getElementById("header");
    // When the scroll is greater than 80 viewport height, add the scroll-header class to the header tag
    if (this.scrollY >= 80) {
        nav.classList.add("scroll-header");
    } else {
        nav.classList.remove("scroll-header");
    }
}

window.addEventListener("scroll", scrollHeader);

/*==================== SHOW SCROLL UP ====================*/
function scrollUp () {
    const scrollUp = document.getElementById("scroll-up");
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if (this.scrollY >= 560) {
        scrollUp.classList.add("show-scroll");
    } else {
        scrollUp.classList.remove("show-scroll");
    }
}

window.addEventListener("scroll", scrollUp);

/*==================== DARK LIGHT THEME ====================*/
const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "uil-sun";

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? "uil-moon" : "uil-sun";

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](darkTheme);
  themeButton.classList[selectedIcon === "uil-moon" ? "add" : "remove"](iconTheme);
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener("click", () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(iconTheme);
    // We save the theme and the current icon that the user chose
    localStorage.setItem("selected-theme", getCurrentTheme());
    localStorage.setItem("selected-icon", getCurrentIcon());
});