import "./entry.scss";
import { setSliderListeners } from "./js/utils";

setSliderListeners();

const submitBtn = document.querySelector(".form__submit-btn");
const overlay = document.querySelector(".overlay");
const fieldset = document.querySelector(".form__fieldset");
const savedContent = new XMLSerializer().serializeToString(fieldset);
console.log(savedContent);
submitBtn.addEventListener("click", () => {
  if (overlay instanceof HTMLDivElement) {
    overlay.style.display = "block";
  }
  fieldset.classList.add("modal");

  //   if (fieldset.hasChildNodes()) {
  //     const children = fieldset.childNodes;
  //     for (let i = 0; i < children.length; i++) {
  //       if (children[i] instanceof HTMLElement) {
  //         if (children[i].nodeName !== "LEGEND") {
  //           children[i].remove();
  //         }
  //       }
  //     }
  //   }

  document.body.style.position = "fixed";
  document.body.style.top = `-2200px`;
});

overlay.addEventListener("click", () => {
  if (overlay instanceof HTMLDivElement) {
    overlay.style.display = "none";
  }
  fieldset.classList.remove("modal");
  fieldset.innerHTML = savedContent;
  document.body.style.position = "";
});
