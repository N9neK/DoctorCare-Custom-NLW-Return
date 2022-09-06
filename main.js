// String = Textos
// Number = Números
// Boolean = True || False

let navbar = document.getElementById("navigation")
window.addEventListener('scroll', onScroll)

onScroll()

// Gerenciar os diversos Scrolls da page
function onScroll() {
  showNavOnScroll()
  showBackToTopButtonOnScroll()

  activateMenuAtCurrentSection(home)
  activateMenuAtCurrentSection(services)
  activateMenuAtCurrentSection(about)
  activateMenuAtCurrentSection(contact)
}

function activateMenuAtCurrentSection(section) {
  const targetLine = scrollY + innerHeight / 2

  // verificar se a seção passou da linha
  const sectionTop = section.offsetTop //topo da seção
  const sectionHeight = section.offsetHeight // altura da seção
  // O topo da seção chegou/passou a linha alvo
  const sectionTopReachOrPassedTargetline = targetLine >= sectionTop

  // verificar se a base está abaixo da linha alvo
  // onde a seção termina
  const sectionEndsAt = sectionTop + sectionHeight
  // final da seção passou da linha alvo
  const sectionEndPassedTargetline = sectionEndsAt <= targetLine

  // limites seção
  const sectionBoundaries =
    sectionTopReachOrPassedTargetline && !sectionEndPassedTargetline

  const sectionId = section.getAttribute('id')
  const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)

  menuElement.classList.remove('active')
  if (sectionBoundaries) {
    menuElement.classList.add('active')
  }
}

//Mostrar o Nav ao fazer o Scroll
function showNavOnScroll() {
  if (scrollY > 0) {
    navbar.classList.add('scroll')
  } else {
    navbar.classList.remove('scroll')
  }
}

//Mostrar o botão 'BackToTop' ao fazer Scroll
function showBackToTopButtonOnScroll() {
  if (scrollY > 360) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

//Abrir o menu-expanded ao clicar no ícone dos 3 tracinhos
function openMenu() {
  document.body.classList.add('menu-expanded')
}

//Fechar o menu-expanded ao clicar
function closeMenu() {
  document.body.classList.remove('menu-expanded')
}

//Efeito dos elementos da página vão aparecerendo a medida que desce a page
ScrollReveal({
  origin: 'top',
  distance: '40px',
  duration: 800
}).reveal(`#home, 
  #home img, 
  #home .stats, 
  #services,
  #services header,
  #services .card,
  #about,
  #about header,
  #about .content`)
