export function getNodes() {
  const submitBtn = document.querySelector(".form__submit-btn");
  const overlay = document.querySelector(".overlay");
  const fieldset = document.querySelector(".form__fieldset");
  const leftBtn = document.querySelector(".middle-item__btn-left");
  const rightBtn = document.querySelector(".middle-item__btn-right");
  const sliderPictures = document.querySelectorAll(".slider__list--item picture") as NodeListOf<HTMLPictureElement>;
  return {
    submitBtn,
    overlay,
    fieldset,
    leftBtn,
    rightBtn,
    sliderPictures,
  };
}
