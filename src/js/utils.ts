import { DIRECTION, ENDINGS, fieldsetContent, legendHtml, sources } from "./const";
import { getProperIndex } from "./helpers";
import { setEscListener, setSubmitBtnListener } from "./listeners";
import { getNodes } from "./nodes";

export function setChangedAttributes(action: string) {
  const { sliderPictures } = getNodes();
  sliderPictures.forEach((picture) => {
    const number = Number(picture.getAttribute("data-id"));
    const isRight = action === DIRECTION.right;
    const rightAppendix = isRight ? ENDINGS.right : ENDINGS.left;
    const calculatedNum = getProperIndex(action, number);
    picture.innerHTML = sources[calculatedNum];
    picture.setAttribute("data-id", `${calculatedNum}`);
    picture.closest(".slider__list--item").classList.add(`slide-${rightAppendix}`);
    setTimeout(() => picture.closest(".slider__list--item").classList.remove(`slide-${rightAppendix}`), 500);
  });
}

export function closeModal() {
  const { overlay, fieldset } = getNodes();
  if (overlay instanceof HTMLDivElement) {
    overlay.style.display = "none";
  }
  fieldset.classList.remove("modal");
  fieldset.innerHTML = fieldsetContent;
  document.body.style.position = "";
  document.body.style.top = `${window.scrollY - 250}px`;
  setSubmitBtnListener();
}

export function openModal() {
  const { overlay, fieldset } = getNodes();
  if (overlay instanceof HTMLDivElement) {
    overlay.style.display = "block";
  }
  fieldset.classList.add("modal");
  fieldset.innerHTML = legendHtml;
  document.body.style.top = `-${window.scrollY - 250}px`;
  document.body.style.position = "fixed";
  setEscListener();
}
