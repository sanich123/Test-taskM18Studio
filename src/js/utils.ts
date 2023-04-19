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
  window.scrollTo({
    top: 2500,
    left: 0,
    behavior: "smooth",
  });
  setSubmitBtnListener();
}

export function openModal() {
  const { overlay, fieldset } = getNodes();
  if (overlay instanceof HTMLDivElement) {
    overlay.style.display = "block";
  }
  fieldset.classList.add("modal");
  fieldset.innerHTML = `${legendHtml}<svg width="214" height="148" viewBox="0 0 214 148" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10 71.932L76.0442 138L204 10" stroke="#F9572E" stroke-width="20" stroke-linecap="round" stroke-linejoin="round"/>
</svg><p class="modal__info" align="center">Спасибо! Мы будем держать<br>
вас в курсе обновлений</p>`;
  document.body.style.top = `-${window.scrollY}px`;
  document.body.style.position = "fixed";
  setEscListener();
}
