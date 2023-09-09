const navBtn = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");
const submitBtn = document.querySelector(".submit-btn");
const cardsBtn = document.querySelector(".cards-btn");
const cardsContainer = document.querySelector(".cards-func");

const navIconFunc = () => {
  if (navBtn.innerHTML.includes("fa-bars")) {
    navLinks.classList.add("show-links");
    navBtn.innerHTML = `<i class="fa-solid fa-x"></i>`;
  } else {
    navLinks.classList.remove("show-links");
    navBtn.innerHTML = `<i class="fa-solid fa-bars"></i>`;
  }
};

const cardsFunc = () => {
  if (cardsBtn.innerHTML.includes("More")) {
    cardsContainer.classList.add("show-cards");
    cardsBtn.innerHTML = "Less";
  } else {
    cardsContainer.classList.remove("show-cards");
    cardsBtn.innerHTML = "More";
  }
};

navBtn.addEventListener("click", () => {
  navIconFunc();
});

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
});

cardsBtn.addEventListener("click", () => {
  cardsFunc();
});
