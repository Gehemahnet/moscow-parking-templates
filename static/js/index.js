function initialization() {
    let body = document.querySelector("body")
    document.querySelectorAll('.header__nav-link').forEach(link => {
        link.dataset.hrefTo === body.dataset.location && link.classList.add('active')
    })
}

function showHeaderNavigation() {
    let navigation = document.querySelector('.header__nav')
    let burger = document.querySelector('.header__nav-burger')
    if (!navigation.classList.contains('active')) {
        navigation.classList.toggle('active')
        burger.classList.toggle('active')
    } else {
        burger.classList.toggle('active')
        navigation.classList.add('transition')
        navigation.classList.remove('active')
        setTimeout(() => {
            document.querySelector('.header__nav').classList.remove('transition')
        }, 500)
    }
}

function headerScrolling() {
    let header = document.querySelector('header')
    if (window.scrollY > 0) {
        header.classList.add('scrolled')
    } else {
        header.classList.remove('scrolled')
    }
}


initialization()
window.addEventListener('scroll', headerScrolling)