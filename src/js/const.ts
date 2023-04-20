export const sources = [
  `<source type="image/webp" srcset="assets/img/bathroom-2.webp 1x, assets/img/bathroom-2@2x.webp 2x, assets/img/bathroom-2@4x.webp 4x">
    <source media="(min-resolution: 4dppx)" srcset="assets/img/bathroom-2@4x.png">
    <source media="(min-resolution: 2dppx)" srcset="assets/img/bathroom-2@2x.png">
    <img src="assets/img/bathroom-2.png" alt="Photo of a bathroom" class= "list-item__img" width="750" height="500" loading="lazy">`,
  `<source type="image/webp" srcset="assets/img/bathroom.webp 1x, assets/img/bathroom@2x.webp 2x, assets/img/bathroom@4x.webp 4x"><source media="(min-resolution: 4dppx)" srcset="assets/img/bathroom@4x.png"><source media="(min-resolution: 2dppx)" srcset="assets/img/bathroom@2x.png"><img src="assets/img/bathroom.png" alt="Photo of a bathroom" class="list-item__img" width="750" height="500" loading="lazy">`,
  `<source type="image/webp" srcset="assets/img/bathroom-3.webp 1x, assets/img/bathroom-3@2x.webp 2x, assets/img/bathroom-3@4x.webp 4x"><source media="(min-resolution: 4dppx)" srcset="assets/img/bathroom-3@4x.png"><source media="(min-resolution: 2dppx)" srcset="assets/img/bathroom-3@2x.png"><img src="assets/img/bathroom-3.png" alt="Photo of a bathroom" class="list-item__img" width="750" height="500" loading="lazy">`,
];

export const legendHtml = `<legend class="form__legend">Узнайте о запуске сервиса первым</legend>`;

export const fieldsetContent = `${legendHtml}<p class="form__paragraph">Первым 10 клиентам стальная <br />входная дверь в подарок</p>
            <div class="input__wrapper">
            <input 
              type="text" 
              class="form__name"
              id="input-name"
              placeholder="Имя и фамилия*"  
              name="name&surname" 
              title="Имя должно состоять из латинских букв, первая заглавная"
              aria-label="name field"
              pattern="[A-Z][\w]{1,}"
              required>
            <label 
              for="input-name" 
              class="form__name--label">Имя и фамилия*</label>
            </div>

            <div class="input__wrapper">
            <input 
              type="email" 
              class="form__email" 
              id="email-input" 
              placeholder="E-mail адрес*" 
              name="email"
              title="Это текствое поле не должно быть пустым"
              aria-label="email field" 
              required>
            <label 
              for="email-input" 
              class="form__email--label">Email address*</label>
            </div>
            <div class="input__wrapper">
              <input 
              type="tel" 
              class="form__phone"
              id="phone-input"
              placeholder="Телефон"  
              name="phone"
              title="Введенные цифры должны соответствовать паттерну 8-888-888-8888"
              aria-label="phone field" 
              pattern="[0-9]{1}-[0-9]{3}-[0-9]{3}-[0-9]{4}"
              required>
              <label for="phone-input" class="form__phone--label">Номер телефона*</label>
            </div>
            <button class="form__submit-btn" type="submit">Подписаться</button>
            <div class="form__required-fields">* Обязательные для заполнения поля</div>
            <div class="form__privacy-politic">Политика конфиденциальности</div>`;

export const DIRECTION = {
  right: "toRight",
  left: "toLeft,",
};

export const ENDINGS = {
  right: "right",
  left: "left",
};
