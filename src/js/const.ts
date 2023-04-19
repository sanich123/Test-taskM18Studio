export const sources = [
  `<source type="image/webp" srcset="assets/img/bathroom-2.webp 1x, assets/img/bathroom-2@2x.webp 2x, assets/img/bathroom-2@4x.webp 4x">
    <source media="(min-resolution: 4dppx)" srcset="assets/img/bathroom-2@4x.png">
    <source media="(min-resolution: 2dppx)" srcset="assets/img/bathroom-2@2x.png">
    <img src="assets/img/bathroom-2.png" alt="Photo of a bathroom" class= "list-item__img" width="750" height="500" loading="lazy">`,
  `<source type="image/webp" srcset="assets/img/bathroom.webp 1x, assets/img/bathroom@2x.webp 2x, assets/img/bathroom@4x.webp 4x"><source media="(min-resolution: 4dppx)" srcset="assets/img/bathroom@4x.png"><source media="(min-resolution: 2dppx)" srcset="assets/img/bathroom@2x.png"><img src="assets/img/bathroom.png" alt="Photo of a bathroom" class="list-item__img" width="750" height="500" loading="lazy">`,
  `<source type="image/webp" srcset="assets/img/bathroom-3.webp 1x, assets/img/bathroom-3@2x.webp 2x, assets/img/bathroom-3@4x.webp 4x"><source media="(min-resolution: 4dppx)" srcset="assets/img/bathroom-3@4x.png"><source media="(min-resolution: 2dppx)" srcset="assets/img/bathroom-3@2x.png"><img src="assets/img/bathroom-3.png" alt="Photo of a bathroom" class="list-item__img" width="750" height="500" loading="lazy">`,
];

export const legendHtml = `<legend class="form__legend">Узнайте о запуске сервиса первым</legend>`;

export const fieldsetContent = `${legendHtml}<p class="form__paragraph">Первым 10 клиентам стальная <br />входная дверь в подарок</p><input type="text" class="form__name" name="name&amp;surname" placeholder=" Имя и фамилия*" required=""><input type="email" class="form__email" placeholder="E-mail адрес*" required="" name="email"><input type="text" class="form__phone" name="phone" placeholder="Телефон" required=""><button class="form__submit-btn" type="submit">Подписаться</button><div class="form__required-fields">* Обязательные для заполнения поля</div><div class="form__privacy-politic">Политика конфиденциальности</div>`;

export const DIRECTION = {
  right: "toRight",
  left: "toLeft,",
};

export const ENDINGS = {
  right: "right",
  left: "left",
};
