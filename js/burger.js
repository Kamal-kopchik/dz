// show-mobile-btn  - krestik
// show-nav  - навигация
// show-backdrop - backrop

// 1 задание - при нажатии на бургер иконку,
// бургер иконка должна стать крестиком, должна появится напигация,
// должен появится backdrop, при обратном нажатии все должно исчезнуть

// 2 задание - при нажатии на backrop навигация должна исчезнуть,
// иконка стать как бургер и сам backdrop должен исчезнуть

// 3 задание - при клике на элементы навигации -  навигация должна исчезнуть,
// иконка стать как бургер и сам backdrop должен исчезнуть

const burgerBtn = document.querySelector(".mobile-btn");
const nav = document.querySelector(".nav");
const backdrop = document.querySelector(".backdrop");
const navList = document.querySelectorAll(".nav li");

const removeClasses = () => {
  burgerBtn.classList.toggle("show-mobile-btn");
  nav.classList.toggle("show-nav");
  backdrop.classList.toggle("show-backdrop");
};
const toggleClasses = () => {
  burgerBtn.classList.toggle("show-mobile-btn");
  nav.classList.toggle("show-nav");
  backdrop.classList.toggle("show-backdrop");
};

burgerBtn.addEventListener("click", () => {
  toggleClasses();
});

backdrop.addEventListener("click", () => {
  removeClasses();
});

navList.forEach((el) => {
  el.addEventListener("click", () => {
    removeClasses();
  });
});
