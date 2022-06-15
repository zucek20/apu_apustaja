const burger = document.querySelector('p#burger')
const times = document.querySelector('p#times')
const responsiveNav = document.querySelector('div.responsiveNav')
const buttons = document.querySelectorAll('a.button')

burger.addEventListener("click", function() {
  responsiveNav.style.width = "100%"
})

times.addEventListener("click", function() {
  responsiveNav.style.width = '0%'
})

buttons.forEach(button => {
  button.addEventListener("click", function() {
    responsiveNav.style.width = '0%'
  })
})