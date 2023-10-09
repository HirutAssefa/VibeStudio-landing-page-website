const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

/* Scroll Reveal */
const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

// header container
ScrollReveal().reveal(".header__image img", {
  ...scrollRevealOption,
});

ScrollReveal().reveal(
  ".header__content h4, .header__content .section__header",
  {
    ...scrollRevealOption,
    delay: 500,
  }
);

ScrollReveal().reveal(".header__content p", {
  ...scrollRevealOption,
  delay: 1000,
});

ScrollReveal().reveal(".header__btn", {
  ...scrollRevealOption,
  delay: 1500,
});

// about container
ScrollReveal().reveal(".about__image img", {
  ...scrollRevealOption,
  origin: "left",
});

ScrollReveal().reveal(".about__content .section__header", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".about__content .section__description", {
  ...scrollRevealOption,
  delay: 1000,
});

ScrollReveal().reveal(".about__card", {
  ...scrollRevealOption,
  delay: 1500,
  interval: 500,
});

ScrollReveal().reveal(".price__card", {
  ...scrollRevealOption,
  interval: 500,
});

/* ===== Testimonial====== */

const testimonials = [
  {
    name: "Micheal Jonas",
    job: "Software Engineer",
    image: "/asset/images/testimonial1.jpg",
    testimonial:
      "The instructors here tailored lessons that helped me improve my dance skills. I've seen remarkable progress in my dance journey. It's not just a dance studio; it's a place where I found my passion",
  },
  {
    name: "Jane Smith",
    job: "QA, Team Manager",
    image: "/asset/images/testimonial2.jpg",
    testimonial:
      "The dance instructors' expertise and the studio's commitment to creating a welcoming environment have made it a place where I can pursue my passion for dance and grow as a dancer",
  },
  {
    name: "Nathan Johnson",
    job: "UI/UX Designer, Safety Agency",
    image: "asset/images/testimonial3.jpg",
    testimonial:
      "The variety of dance styles and the friendly dance community have kept me motivated and inspired. I've improved my dance skills, gained confidence, and made lifelong friends.",
  }
];

//Current Slide
let i = 0;
//Total Slides
let j = testimonials.length;

let testimonialContainer = document.getElementById("testimonial-container");
let nextBtn = document.getElementById("next");
let prevBtn = document.getElementById("prev");

nextBtn.addEventListener("click", () => {
  i = (j + i + 1) % j;
  displayTestimonial();
});
prevBtn.addEventListener("click", () => {
  i = (j + i - 1) % j;
  displayTestimonial();
});

let displayTestimonial = () => {
  testimonialContainer.innerHTML = `
    <p>${testimonials[i].testimonial}</p>
    <img src=${testimonials[i].image}>
    <h3>${testimonials[i].name}</h3>
    <h6>${testimonials[i].job}</h6>
  `;
};

window.onload = displayTestimonial;