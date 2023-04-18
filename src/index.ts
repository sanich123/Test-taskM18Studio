import "./entry.scss";
const sources = [
  `<source type="image/webp" srcset="assets/img/bathroom-2.webp 1x, assets/img/bathroom-2@2x.webp 2x, assets/img/bathroom-2@4x.webp 4x">
    <source media="(min-resolution: 4dppx)" srcset="assets/img/bathroom-2@4x.png">
    <source media="(min-resolution: 2dppx)" srcset="assets/img/bathroom-2@2x.png">
    <img src="assets/img/bathroom-2.png" alt="Photo of a bathroom" class= "list-item__img" width="750" height="500" loading="lazy">`,
  `<source type="image/webp" srcset="assets/img/bathroom.webp 1x, assets/img/bathroom@2x.webp 2x, assets/img/bathroom@4x.webp 4x"><source media="(min-resolution: 4dppx)" srcset="assets/img/bathroom@4x.png"><source media="(min-resolution: 2dppx)" srcset="assets/img/bathroom@2x.png"><img src="assets/img/bathroom.png" alt="Photo of a bathroom" class="list-item__img" width="750" height="500" loading="lazy">`,
  `<source type="image/webp" srcset="assets/img/bathroom-3.webp 1x, assets/img/bathroom-3@2x.webp 2x, assets/img/bathroom-3@4x.webp 4x"><source media="(min-resolution: 4dppx)" srcset="assets/img/bathroom-3@4x.png"><source media="(min-resolution: 2dppx)" srcset="assets/img/bathroom-3@2x.png"><img src="assets/img/bathroom-3.png" alt="Photo of a bathroom" class="list-item__img" width="750" height="500" loading="lazy">`,
];
const leftBtn = document.querySelector(".middle-item__btn-left");
const rightBtn = document.querySelector(".middle-item__btn-right");
const sliderPictures = document.querySelectorAll(".slider__list--item picture");

leftBtn.addEventListener("click", () => {
  sliderPictures.forEach((picture: HTMLPictureElement) => {
    const number = Number(picture.getAttribute("data-id"));
    number === 2 ? (picture.innerHTML = sources[0]) : (picture.innerHTML = sources[number + 1]);
    picture.setAttribute("data-id", `${number === 2 ? 0 : number + 1}`);
  });
});

rightBtn.addEventListener("click", () => {
  sliderPictures.forEach((picture: HTMLPictureElement) => {
    const number = Number(picture.getAttribute("data-id"));
    number ? (picture.innerHTML = sources[number - 1]) : (picture.innerHTML = sources[2]);
    picture.setAttribute("data-id", `${number ? number - 1 : 2}`);
  });
});
