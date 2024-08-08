import '../scss/style.scss'
import Swiper from './swiper-bundle.js'

const swiper = new Swiper('.swiper-container', {
  slidesPerView: 'auto',
  spaceBetween: 16,
  breakpoints: {
    768: {
      spaceBetween: 24,
      allowSlideNext: false,
      allowSlidePrev: false
    },
    1120: {
      spaceBetween: 32,
      allowSlideNext: false,
      allowSlidePrev: false
    }
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  }
})

const main = document.querySelector('.main')

function toggleClass(
  wrapper,
  wrapperClass,
  button,
  buttonClass,
  showText,
  hideText
) {
  wrapper.classList.toggle(wrapperClass)
  button.textContent = wrapper.classList.contains(wrapperClass)
    ? showText
    : hideText
  button.classList.toggle(buttonClass)
}

const setupToggleButton = (
  wrapperSelector,
  buttonSelector,
  wrapperClass,
  buttonClass
) => {
  const wrapper = main.querySelector(wrapperSelector)
  const button = main.querySelector(buttonSelector)
  button.addEventListener('click', () =>
    toggleClass(
      wrapper,
      wrapperClass,
      button,
      buttonClass,
      'Показать',
      'Скрыть'
    )
  )
}

setupToggleButton(
  '.repair-brands__swiper-wrapper',
  '.repair-brands__button-more',
  'repair-brands__swiper-wrapper--hidden',
  'repair-brands__button-more--rotate'
)
setupToggleButton(
  '.repair-technics__swiper-wrapper',
  '.repair-technics__button-more',
  'repair-technics__swiper-wrapper--hidden',
  'repair-technics__button-more--rotate'
)
setupToggleButton(
  '.company-info__text',
  '.company-info__button-more',
  'company-info__text--hidden',
  'company-info__button-more--rotate'
)

const blur = document.querySelector('.blur')
const headerWrapper = document.querySelector('.header')
const burgerButton = headerWrapper.querySelector('.button-link__logo--burger')
const mobileMenu = document.querySelector('.mobile-menu')

burgerButton.addEventListener('click', () => {
  mobileMenu.classList.toggle('mobile-menu--hidden')
  document.body.style.overflow = mobileMenu.classList.contains(
    'mobile-menu--hidden'
  )
    ? 'auto'
    : 'hidden'
  blur.style.zIndex = mobileMenu.classList.contains('mobile-menu--hidden')
    ? '-1'
    : '5'
})

function toggleModal(modal, hiddenClass, zIndexValue) {
  modal.classList.toggle(hiddenClass)
  document.body.style.overflow = modal.classList.contains(hiddenClass)
    ? 'auto'
    : 'hidden'
  blur.style.zIndex = modal.classList.contains(hiddenClass) ? '-1' : zIndexValue
  if (!modal.classList.contains(hiddenClass)) modal.focus()
}

const setupModal = (
  triggerSelector,
  modalSelector,
  closeSelector,
  hiddenClass,
  zIndexValue
) => {
  const trigger = document.querySelector(triggerSelector)
  const modal = document.querySelector(modalSelector)
  const closeButton = modal.querySelector(closeSelector)

  trigger.addEventListener('click', () =>
    toggleModal(modal, hiddenClass, zIndexValue)
  )
  closeButton.addEventListener('click', () =>
    toggleModal(modal, hiddenClass, zIndexValue)
  )
}

setupModal(
  '.mobile-button-link__btn--call',
  '.modal-call',
  '.modal-call__btn--close',
  'modal-call--hidden',
  '8'
)
setupModal(
  '.button-link__logo--call',
  '.modal-call',
  '.modal-call__btn--close',
  'modal-call--hidden',
  '8'
)
setupModal(
  '.mobile-button-link__btn--chat',
  '.modal-feedback',
  '.modal-feedback__btn--close',
  'modal-feedback--hidden',
  '8'
)
setupModal(
  '.button-link__logo--chat',
  '.modal-feedback',
  '.modal-feedback__btn--close',
  'modal-feedback--hidden',
  '8'
)

const closeMenuButton = mobileMenu.querySelector(
  '.mobile-button-link__btn--close'
)

closeMenuButton.addEventListener('click', () => {
  mobileMenu.classList.add('mobile-menu--hidden')
  document.body.style.overflow = 'auto'
  blur.style.zIndex = '-1'
})

blur.addEventListener('click', () => {
  if (!mobileMenu.classList.contains('mobile-menu--hidden')) {
    mobileMenu.classList.add('mobile-menu--hidden')
    document.body.style.overflow = 'auto'
    blur.style.zIndex = '-1'
  }
  if (
    !document
      .querySelector('.modal-call')
      .classList.contains('modal-call--hidden')
  ) {
    document.querySelector('.modal-call').classList.add('modal-call--hidden')
    document.body.style.overflow = 'auto'
    blur.style.zIndex = '-1'
  }
  if (
    !document
      .querySelector('.modal-feedback')
      .classList.contains('modal-feedback--hidden')
  ) {
    document
      .querySelector('.modal-feedback')
      .classList.add('modal-feedback--hidden')
    document.body.style.overflow = 'auto'
    blur.style.zIndex = '-1'
  }
})
