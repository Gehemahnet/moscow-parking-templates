const user = localStorage.getItem('user')

function checkAuthorization() {
    if (user) {
        let link = document.querySelectorAll('.header__nav-link')[2]
        //     Может будет какой-то функционал дальше, если нет то упростить функцию
    } else {
        let link = document.querySelectorAll('.header__nav-link')[2]
        let root = document.querySelector('.header__nav')
        root.removeChild(link)
        let button = document.createElement('button')
        button.className = 'header__nav-link'
        button.id = 'header-modal-button'
        button.textContent = 'Войти'
        root.appendChild(button)
        button.addEventListener('click', openAuthModal)
    }
}

function openAuthModal() {
    toggleModal()
    renderLogin()
}

function toggleModal() {
    let element = document.querySelector('.modal')
    let headerButton = document.querySelector('#header-modal-button')
    let button = document.querySelector('.modal__close')
    if (event.target === headerButton || event.target === element || event.target === button) {
        if (element.style.display === 'block') {
            element.style.display = 'none'
            document.body.style.overflow = 'auto'
            document.body.classList.remove('using-popup')
            document.querySelector('.modal').removeEventListener('click', toggleModal)
        } else {
            element.style.display = 'block'
            document.body.style.overflow = 'hidden'
            document.body.classList.add('using-popup')
            document.querySelector('.modal').addEventListener('click', toggleModal)
        }
    }
}

// Здесь хранится HTML код для рендера модалки
function renderLogin() {
    const root = document.querySelector('.modal')
    root.innerHTML =
        `<div id="registration-modal" class="modal__body">
    <div class="modal__header">
      <h2 class="modal__title">Вход</h2>
      <button
        onclick="toggleModal()"
        class="modal__close"
      >
      </button>
    </div>
    <div class="modal__main">
      <div class="modal__field">
        <label class="modal__label">
          E-mail
        </label>
        <input
            id="login"
            type="email"
            class="modal__input"
            placeholder="example@gmail.ru"
        >
      </div>
      <div class="modal__field">
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
      </div>
      <button
          class="modal__submit"
          onclick="signIn()"
      >
        Продолжить
      </button>
      <button
          class="modal__toggle"
          onclick="renderRegistration()"
      >
        Нет аккаунта? Зарегистрироваться
      </button>
      <button
          class="modal__toggle"
          onclick="restorePassword()"
      >
        Забыли пароль? Восстановить пароль
      </button>
    </div>
  </div>`
}

// Здесь хранится HTML код для рендера модалки
function renderRegistration() {
    const root = document.querySelector('.modal')
    root.innerHTML = `
    <div id="registration-modal" class="modal__body">
    <div class="modal__header">
      <h2 class="modal__title">Регистрация</h2>
      <button
          onclick="toggleModal()"
          class="modal__close"
      >
      </button>
    </div>
    <div class="modal__main">
      <div class="modal__field">
        <label class="modal__label">
          Имя и Фамилия
        </label>
        <input
            id="fullName"
            type="text"
            class="modal__input"
            placeholder="Иван Иванов"
        >
      </div>
      <div class="modal__field">
        <label class="modal__label">
          E-mail
        </label>
        <input
            id="login"
            type="email"
            class="modal__input"
            placeholder="example@gmail.ru"
        >
      </div>
      <div class="modal__field">
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
      </div>
      <div class="modal__field">
        <label class="modal__label">Повтор пароля</label>
        <div class="modal__input-container">
          <input
              id="сheckPassword"
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
      </div>
      <div class="modal__agreement">
        <label class="modal__checkbox-container">
          <input class="modal__checkbox" type="checkbox">
          <span class="modal__checkmark"></span>
        </label>
        <span class="modal__agreement-text">Я принимаю условия соглашения с договором-офертой</span>
      </div>
      <button
          class="modal__submit"
          onclick="signUp()"
      >
        Продолжить
      </button>
      <button
          class="modal__toggle"
          onclick="renderLogin()"
      >
        Уже есть аккаунт? Войти
      </button>
    </div>
  </div>
    `
}

// Показать/скрыть пароль
function togglePassword() {
    const element = event.target
    const input = element
        .closest('.modal__input-container')
        .querySelector('.modal__input')
    if (input.type === 'password') {
        input.type = 'text'
        element.src = 'static/icons/eye.svg'
    } else {
        input.type = 'password'
        element.src = 'static/icons/eye-off.svg'
    }
}

function signIn() {
    let auth = new Promise((resolve, reject) => {
        let login = document.querySelector('#login').value
        let password = document.querySelector('#password').value
        localStorage.setItem('user', JSON.stringify({login: login, password: password}))
        resolve()
    })
    auth
        .then(() => location.reload())
        .catch(error => alert(error))
}

function signUp() {
    let button = document.querySelector('.modal__submit')
    button.classList.toggle('active')
    let auth = new Promise((resolve, reject) => {
        let fullName = document.querySelector('#fullName').value
        let login = document.querySelector('#login').value
        let password = document.querySelector('#password').value
        localStorage.setItem('user', JSON.stringify({fullName: fullName, login: login, password: password}))
        resolve()
    })
    auth
        .then(() => {
            button.classList.toggle('active')
            location.reload()
        })
        .catch(error => alert(error))
}

function restorePassword() {

}

checkAuthorization()