// Slider
const first_dot = document.querySelector(".first-dot");
const second_dot = document.querySelector(".second-dot");
const third_dot = document.querySelector(".third-dot");
const first_slide = document.querySelector(".promo__slide--first");
const second_slide = document.querySelector(".promo__slide--second");
const third_slide = document.querySelector(".promo__slide--third");

if (first_dot) {
  first_dot.addEventListener("click", function (evt) {
    evt.preventDefault();
    if (
      second_slide.classList.contains("active") || third_slide.classList.contains("active")
    ) {
      second_slide.classList.remove("active");
      third_slide.classList.remove("active");
      first_slide.classList.add("active");
      second_dot.classList.remove("slide-controll__button--active");
      third_dot.classList.remove("slide-controll__button--active");
      first_dot.classList.add("slide-controll__button--active");
    }
  });
  second_dot.addEventListener("click", function (evt) {
    evt.preventDefault();
    if (
      first_slide.classList.contains("active") || third_slide.classList.contains("active")
    ) {
      first_slide.classList.remove("active");
      third_slide.classList.remove("active");
      second_slide.classList.add("active");
      first_dot.classList.remove("slide-controll__button--active");
      third_dot.classList.remove("slide-controll__button--active");
      second_dot.classList.add("slide-controll__button--active");
    }
  });
  third_dot.addEventListener("click", function (evt) {
    evt.preventDefault();
    if (
      first_slide.classList.contains("active") || second_slide.classList.contains("active")
    ) {
      first_slide.classList.remove("active");
      second_slide.classList.remove("active");
      third_slide.classList.add("active");
      first_dot.classList.remove("slide-controll__button--active");
      second_dot.classList.remove("slide-controll__button--active");
      third_dot.classList.add("slide-controll__button--active");
    }
  });
}

// Modal
const contact_btn = document.querySelector(".contacts__button");
const modal = document.querySelector(".modal");
const modal_close = document.querySelector(".modal-close");
const form = modal.querySelector("form");
const name = modal.querySelector("[name=name]");
const email = modal.querySelector("[name=email]");
const message = modal.querySelector("[name=message]");

let isStorageSupport = true;
let save_name = "";
let save_email = "";

try {
  save_name = localStorage.getItem("name");
  save_email = localStorage.getItem("email");
} catch (err) {
  isStorageSupport = false;
}

function close_modal() {
  modal.classList.remove("modal-show");
  modal.classList.remove("modal-error");
}
// Show modal on button click with animation
contact_btn.addEventListener("click", function (evt) {
  evt.preventDefault();
  modal.classList.add("modal-show");
  if (save_name && save_email) {
    name.value = save_name;
    email.value = save_email;
    message.focus();
  }
  else {
    name.focus();
  }
});

// Close modal
modal_close.addEventListener("click", function (evt) {
  evt.preventDefault();
  close_modal();
});

// Send form with check required
form.addEventListener("submit", function (evt) {
  if (!name.value || !email.value || !message.value) {
    evt.preventDefault();
    modal.classList.remove("modal-error");
    modal.offsetWidth = modal.offsetWidth;
    modal.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("name", name.value);
      localStorage.setItem("email", email.value);
      close_modal();
    }
  }
});

// Close form using ESC
window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (modal.classList.contains("modal-show")) {
      evt.preventDefault();
      close_modal();
    }
  }
});
