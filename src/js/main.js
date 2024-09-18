import Swiper from 'swiper'
import { Pagination, Autoplay } from 'swiper/modules'
// import { gsap, Flip } from 'gsap/all'

const some = document.querySelector('.js-insights-slider')
const clientsSlider = document.querySelector('.clients__slider')

if (some) {
  new Swiper('.js-insights-slider .swiper', {
    slidesPerView: 1,
    breakpoints: {
      1024: {
        slidesPerView: 3,
      },
    },
    pagination: {
      el: '.insights-slider__pagination',
      clickable: true,
    },
  })
}

if (clientsSlider) {
  new Swiper('.clients__slider.swiper', {
    modules: [Pagination],
    slidesPerView: 1,
    breakpoints: {
      576: {
        slidesPerView: 2,
      },
      900: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 4,
      },
    },
    pagination: {
      el: '.clients__pagination',
      // type: 'bullets',
      clickable: true,
    },
  })
}

const burger = document.querySelector('.ui .burger')
if (burger) {
  burger.addEventListener('click', e => {
    e.preventDefault()

    burger.classList.toggle('active')
  })
}

const headerBurger = document.querySelector('.header__burger')
const headerMenu = document.querySelector('.header__menu')

if (headerBurger && headerMenu) {
  headerBurger.addEventListener('click', e => {
    e.preventDefault()

    document.body.style.overflow = headerBurger.classList.contains('active')
      ? ''
      : 'hidden'

    headerBurger.classList.toggle('active')
    headerMenu.classList.toggle('active')
  })
}

const tabs = document.querySelectorAll('.tabs__item')

if (tabs.length) {
  tabs.forEach(tab => {
    tab.addEventListener('click', e => {
      e.preventDefault()

      tabs.forEach(i => i.classList.remove('active'))
      tab.classList.add('active')
    })
  })
}

const timer = document.querySelector('.timer')

const formatTimerNumber = value => {
  return value < 10 ? `0${value}` : value
}

if (timer) {
  const getTimeUntilNextDay = () => {
    const now = new Date()
    const tomorrow = new Date(now)
    tomorrow.setDate(now.getDate() + 1)
    tomorrow.setHours(0, 0, 0, 0)

    const timeUntilNextDay = tomorrow - now

    const hours = Math.floor(timeUntilNextDay / (1000 * 60 * 60))
    const minutes = Math.floor(
      (timeUntilNextDay % (1000 * 60 * 60)) / (1000 * 60)
    )
    const seconds = Math.floor((timeUntilNextDay % (1000 * 60)) / 1000)

    return { hours, minutes, seconds }
  }

  const updateTimer = () => {
    const timer = getTimeUntilNextDay()

    const timerHour = document.querySelector('.timer__hour')
    const timerMinute = document.querySelector('.timer__minute')
    const timerSecond = document.querySelector('.timer__second')

    timerHour.textContent = formatTimerNumber(timer.hours)
    timerMinute.textContent = formatTimerNumber(timer.minutes)
    timerSecond.textContent = formatTimerNumber(timer.seconds)
  }

  setInterval(updateTimer, 1000)

  updateTimer()
}

const selectWrap = document.querySelector('.select__wrap')
const dropdown = document.querySelector('.dropdown')
const clearAllButton = document.querySelector('.dropdown__top button')
const sortOrderBtn = document.querySelector('.sort-order__btn')
const sortOrderPopup = document.querySelector('.sort-order__popup')


if (selectWrap && dropdown) {
  selectWrap.addEventListener('click', e => {
    e.preventDefault()

    dropdown.classList.toggle('active')
    selectWrap.classList.toggle('active')
  })
}

if (clearAllButton) {
  clearAllButton.addEventListener('click', e => {
    e.preventDefault()

    const checkboxes = document.querySelectorAll(
      '.dropdown__list input[type="checkbox"]'
    )
    checkboxes.forEach(checkbox => {
      checkbox.checked = false
    })
  })
}

if (sortOrderBtn) {
  sortOrderBtn.addEventListener('click', e => {
    e.preventDefault()

    sortOrderPopup.classList.toggle('active');
  })
}


// const body = document.querySelector('body');
// const popupOverlay = document.querySelector('.popup-overlay');

// const tellUsPopup = document.querySelector('.tell-us__popup');
// const tellUsSubmitBtn = document.querySelector('.tell-form .btn');
// const tellUsPopupCloseIcon = document.querySelector('.tell-us__popup .popup__close');

// const subscribePopup = document.querySelector('.subscribe__popup');
// const subscribeSubmitBtn = document.querySelector('.subscribe__form .btn');
// const subscribePopupCloseIcon = document.querySelector('.subscribe__popup .popup__close');

// if (tellUsPopup) {
//   tellUsSubmitBtn.addEventListener('click', e => {
//     e.preventDefault();

//     body.classList.add('active')
//     tellUsPopup.classList.add('active')
//     popupOverlay.classList.add('active')
//   })
// }

// if (tellUsPopupCloseIcon) {
//   tellUsPopupCloseIcon.addEventListener('click', e => {
//     e.preventDefault()

//     body.classList.remove('active')
//     tellUsPopup.classList.remove('active')
//     popupOverlay.classList.remove('active')
//   })
// }

// if (subscribePopup) {
//   subscribeSubmitBtn.addEventListener('click', e => {
//     e.preventDefault()

//     body.classList.add('active')
//     subscribePopup.classList.add('active')
//     popupOverlay.classList.add('active')
//   })
// }

// if (subscribePopupCloseIcon) {
//   subscribePopupCloseIcon.addEventListener('click', e => {
//     e.preventDefault()

//     body.classList.remove('active')
//     subscribePopup.classList.remove('active')
//     popupOverlay.classList.remove('active')
//   })
// }
// gsap.registerPlugin(Flip)


const body = document.querySelector('body')
const popupOverlay = document.querySelector('.popup-overlay')

// Функция для открытия попапа
function openPopup(popup) {
  body.classList.add('active')
  popup.classList.add('active')
  popupOverlay.classList.add('active')
}

// Функция для закрытия попапа
function closePopup(popup) {
  body.classList.remove('active')
  popup.classList.remove('active')
  popupOverlay.classList.remove('active')
}

// Функция для привязки событий к кнопке открытия попапа
function setupPopupEvents(
  triggerBtnSelector,
  popupSelector,
  closeIconSelector
) {
  const triggerBtn = document.querySelector(triggerBtnSelector)
  const popup = document.querySelector(popupSelector)
  const closeIcon = document.querySelector(closeIconSelector)

  if (triggerBtn && popup) {
    triggerBtn.addEventListener('click', e => {
      e.preventDefault()
      openPopup(popup)
    })
  }

  if (closeIcon) {
    closeIcon.addEventListener('click', e => {
      e.preventDefault()
      closePopup(popup)
    })
  }
}

// Настройка событий для попапов
setupPopupEvents(
  '.tell-form .btn',
  '.tell-us__popup',
  '.tell-us__popup .popup__close'
)
setupPopupEvents(
  '.subscribe__form .btn',
  '.subscribe__popup',
  '.subscribe__popup .popup__close'
)
