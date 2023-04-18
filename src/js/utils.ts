import { sources } from "./const";

export function setChangedAttributes(pictures: NodeListOf<HTMLPictureElement>, action: string) {
  pictures.forEach((picture) => {
    const number = Number(picture.getAttribute("data-id"));
    const isRight = action === "toRight";
    const rightAppendix = isRight ? "right" : "left";
    if (isRight) {
      const calculatedNum = number ? number - 1 : 2;
      picture.innerHTML = sources[calculatedNum];
      picture.setAttribute("data-id", `${calculatedNum}`);
    } else {
      const calculatedNum = number === 2 ? 0 : number + 1;
      picture.innerHTML = sources[calculatedNum];
      picture.setAttribute("data-id", `${calculatedNum}`);
    }
    picture.closest(".slider__list--item").classList.add(`slide-${rightAppendix}`);
    setTimeout(() => picture.closest(".slider__list--item").classList.remove(`slide-${rightAppendix}`), 500);
  });
}

export function setSliderListeners() {
  const leftBtn = document.querySelector(".middle-item__btn-left");
  const rightBtn = document.querySelector(".middle-item__btn-right");
  const sliderPictures = document.querySelectorAll(".slider__list--item picture") as NodeListOf<HTMLPictureElement>;

  leftBtn.addEventListener("click", () => setChangedAttributes(sliderPictures, "toLeft"));
  rightBtn.addEventListener("click", () => setChangedAttributes(sliderPictures, "toRight"));
}
