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
const save_name = localStorage.getItem("name");
const save_email = localStorage.getItem("email");

// Show modal on button click with animation
contact_btn.addEventListener("click", function (evt) {
  evt.preventDefault();
  modal.classList.add("modal-show");
  modal.classList.add("animate__bounce");
  name.focus();
  if (name.value) {
    email.focus();
  }
  if (email.value) {
    message.focus();
  }
});

// Close modal
modal_close.addEventListener("click", function (evt) {
  evt.preventDefault();
  modal.classList.remove("modal-show");
  modal.classList.remove("animate__bounce");
});

// Send form with check required
form.addEventListener("submit", function (evt) {
  if (!name.value || !email.value || !message.value) {
    evt.preventDefault();
    alert("Заполнены не все поля");
  } else {
    modal.classList.remove("modal-show");
    localStorage.clear("name");
    localStorage.clear("email");
  }
});

// Use localStorage
if (save_name) {
  name.value = save_name;
}
name.addEventListener("keyup", function () {
  localStorage.setItem("name", name.value);
});

if (save_email) {
  email.value = save_email;
}
email.addEventListener("keyup", function () {
  localStorage.setItem("email", email.value);
});
