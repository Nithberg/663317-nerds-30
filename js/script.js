const first_dot = document.querySelector(".first");
const second_dot = document.querySelector(".second");
const third_dot = document.querySelector(".third");
const first_slide = document.querySelector(".promo__slide--first");
const second_slide = document.querySelector(".promo__slide--second");
const third_slide = document.querySelector(".promo__slide--third");

first_dot.addEventListener("click", function(evt){
  evt.preventDefault();
  if (second_slide.classList.contains("active") || third_slide.classList.contains("active")) {
    second_slide.classList.remove("active");
    third_slide.classList.remove("active");
    first_slide.classList.add("active");
    second_dot.classList.remove("slide-controll__button--active");
    third_dot.classList.remove("slide-controll__button--active");
    first_dot.classList.add("slide-controll__button--active");
    }
});

second_dot.addEventListener("click", function(evt){
  evt.preventDefault();
  if (first_slide.classList.contains("active") || third_slide.classList.contains("active")) {
    first_slide.classList.remove("active");
    third_slide.classList.remove("active");
    second_slide.classList.add("active");
    first_dot.classList.remove("slide-controll__button--active");
    third_dot.classList.remove("slide-controll__button--active");
    second_dot.classList.add("slide-controll__button--active");
    }
});
third_dot.addEventListener("click", function(evt){
  evt.preventDefault();
  if (first_slide.classList.contains("active") || second_slide.classList.contains("active")) {
    first_slide.classList.remove("active");
    second_slide.classList.remove("active");
    third_slide.classList.add("active");
    first_dot.classList.remove("slide-controll__button--active");
    second_dot.classList.remove("slide-controll__button--active");
    third_dot.classList.add("slide-controll__button--active");
    }
});

const contact_btn = document.querySelector(".contacts__button");
const modal = document.querySelector(".modal");
const modal_close = document.querySelector(".modal-close")


contact_btn.addEventListener("click", function (click_event) {
  click_event.preventDefault();
  modal.classList.add("modal-show");
});

modal_close.addEventListener("click", function(click_event){
  click_event.preventDefault();
  modal.classList.remove("modal-show");
});

