function renderDriverTab() {
    let root = document.querySelector('.parking__tab')
    root.innerHTML = `
            <h6 class="parking__tab-title">
              Текущая парковка
            </h6>
            <div class="parking__tab-cards">
              <a href="" class="parking__cards-item">
                <img src="static/images/catalog-card.jpg"
                    alt=""
                    class="parking__cards-cover"
                />
                <div class="parking__cards-description">
                  <h5 class="parking__cards-address">
                    Мне-Нужна-Длинная-Улица 48, к. 1
                  </h5>
                  <h6 class="parking__cards-station">Китай-Город</h6>
                  <p class="parking__cards-price">550 руб./час</p>
                  <h5 class="parking__cards-status">Занято с 19.00, 28 дек</h5>
                </div>
              </a>
            </div>
            <h6 class="parking__tab-title">
              История
            </h6>
            <div class="parking__tab-history">
              <div class="parking__history-item">
                <span class="parking__history-date">27 дек. 18.23 - 19.54</span>
                <span class="parking__history-amount">300 руб.</span>
              </div>
            </div>`
}

function renderOwnerTab() {
    let root = document.querySelector('.parking__tab')
    root.innerHTML = `
            <h6 class="parking__tab-title">
              Ваша парковка
            </h6>
            <div class="parking__tab-cards">
              <a href="" class="parking__cards-item">
                <img src="static/images/catalog-card.jpg"
                    alt=""
                    class="parking__cards-cover"
                />
                <div class="parking__cards-description">
                  <h5 class="parking__cards-address">
                    Мне-Нужна-Длинная-Улица 48, к. 1
                  </h5>
                  <h6 class="parking__cards-station">Китай-Город</h6>
                  <p class="parking__cards-price">550 руб./час</p>
                  <h5 class="parking__cards-status">Занято с 19.00, 28 дек</h5>
                </div>
              </a>
            </div>
            <a href="parking-place-create.html" class="parking__tab-link">
              Добавить место
            </a>
            <h6 class="parking__tab-title">
              История
            </h6>
            <div class="parking__tab-history">
              <div class="parking__history-item">
                <span class="parking__history-date">27 дек. 18.23 - 19.54</span>
                <span class="parking__history-amount">300 руб.</span>
              </div>
            </div>`
}

function proveEditing() {
    let modal = document.querySelector('.modal')
    modal.style.display = 'block'
    modal.innerHTML = `
      <div id="editing-modal" class="modal__body">
    <div class="modal__header">
      <h2 class="modal__title">Нужен пароль</h2>
      <button
          type="button"
          onclick="toggleModal()"
          class="modal__close"
      >
      </button>
    </div>
    <div class="modal__main">
       <h5 class="modal__text">
        Подтвердите что вы — владелец аккаунта, чтобы сменить сведения в профиле
      </h5>
      <label class="modal__label">
        Пароль
      </label>
      <div class="modal__input-container">
        <input
            id="password"
            type="password"
            class="modal__input"
            placeholder="*********"
        >
        <button
            onclick="togglePassword()"
            class="modal__hide-password">
          <img src="static/icons/eye-off.svg" alt="">
        </button>
      </div>
      <button
        style="align-self: flex-end; margin-bottom: 0"
        class="modal__submit"
        onclick="confirmEditing()"
    >
      Продолжить
    </button>
    </div>
    
  </div>
    `
}
function confirmEditing() {

}
function setActiveProfileTab() {
    if (event.target.innerText === 'Водитель' && !event.target.classList.contains('active')) {
        document.querySelector('.parking__tabs-button.active').classList.remove('active')
        event.target.classList.add('active')
        renderDriverTab()
    }
    if (event.target.innerText === 'Владелец' && !event.target.classList.contains('active')) {
        document.querySelector('.parking__tabs-button.active').classList.remove('active')
        event.target.classList.add('active')
        renderOwnerTab()
    }
}