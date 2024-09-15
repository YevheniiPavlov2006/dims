const headerBtn = document.getElementById('header-btn')
const wrapper = document.getElementById('wrapper')
const buttonMainDark = document.getElementById('button-dark')
const buttonMainLight = document.getElementById('button-light')

headerBtn.addEventListener('change', function(e) {
  const activeTheme = e.target.checked ? 'dark_theme' : 'light_theme'
  document.body.classList.remove('light_theme', 'dark_theme')
  document.body.classList.add(activeTheme)
})
