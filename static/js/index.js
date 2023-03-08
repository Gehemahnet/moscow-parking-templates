const paths = [
    {
        file: 'index',
        link: 'Главная'
    },
    {
        file: 'catalog',
        link: 'Каталог'
    },
    {
        file: 'parking-place-info',
        link: 'Каталог'
    },
    {
        file: 'parking-place-create',
        link: 'Личный кабинет'
    },
    {
        file: 'profile',
        link: 'Личный кабинет'
    }
]
function initialization() {
    let location = window.location.pathname.split('/')[2].split('.')[0]
    document.querySelectorAll('.header__nav-link').forEach(link => {
        paths.forEach(path => {
            if (path.file === location && link.innerText === path.link) {
                link.classList.add('active')
            }
        })
    })
}

function showHeaderNavigation() {
    let navigation = document.querySelector('.header__nav')
    let burger = document.querySelector('.header__nav-burger')
    let overlay = document.querySelector('.overlay')
    if (!navigation.classList.contains('active')) {
        overlay.style.display = 'block'
        overlay.addEventListener('click', showHeaderNavigation)
        navigation.classList.toggle('active')
        burger.classList.toggle('active')
    } else {
        overlay.style.display = 'none'
        overlay.removeEventListener('click', showHeaderNavigation)
        burger.classList.toggle('active')
        navigation.classList.add('transition')
        navigation.classList.remove('active')
        setTimeout(() => {
            document.querySelector('.header__nav').classList.remove('transition')
        }, 500)
    }
}

function headerScrolling() {
    let header = document.querySelector('.header')
    if (window.scrollY > 0) {
        header.classList.add('scrolled')
    } else {
        header.classList.remove('scrolled')
    }
}


initialization()
window.addEventListener('scroll', headerScrolling)