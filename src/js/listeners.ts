import { DIRECTION } from "./const";
import { getNodes } from "./nodes";
import { closeModal, openModal, setChangedAttributes } from "./utils";

export function setSubmitBtnListener() {
  const { form } = getNodes();
  return form.addEventListener("submit", () => openModal(), { once: true });
}

export function setOverlayBtnListener() {
  const { overlay } = getNodes();
  return overlay.addEventListener("click", () => closeModal(), { once: true });
}

export function setEscListener() {
  return document.addEventListener(
    "keydown",
    ({ code }) => {
      if (code === "Escape") {
        closeModal();
      }
    },
    { once: true }
  );
}

export function setSliderListeners() {
  const { leftBtn, rightBtn } = getNodes();
  leftBtn.addEventListener("click", () => setChangedAttributes(DIRECTION.left));
  rightBtn.addEventListener("click", () => setChangedAttributes(DIRECTION.right));
}
