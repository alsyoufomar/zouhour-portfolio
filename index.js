const nav = document.querySelector('.nav')
const handleNavColor = () => {
  if (window.scrollY >= 170) {
    nav.classList.add('nav-dark')
  } else {
    nav.classList.remove('nav-dark')
  }
}
window.addEventListener('scroll', handleNavColor)

const parallax = document.querySelector('.hero')
window.addEventListener('scroll', function () {
  let offset = window.pageYOffset
  parallax.style.backgroundPositionY = offset * 0.7 + 'px'
})
