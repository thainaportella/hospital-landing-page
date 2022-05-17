window.addEventListener('scroll', onScroll)

onScroll()
function onScroll() {
  showNavOnScroll()
  showBackToTopButtonOnScroll()

  activateMenuAtCurrentSection(home)
  activateMenuAtCurrentSection(services)
  activateMenuAtCurrentSection(about)
  activateMenuAtCurrentSection(contact)
}

function activateMenuAtCurrentSection(section) {
  // nessa parte, tivemos que encontrar a metade da tela para traçar onde está o meio dela, ou seja, onde fica o foco da nossa visão enquanto visualizamos uma página da web. depois disso, tivemos que encontrar o início e o fim de cada seção em px. A home, por exemplo, começa a 0px da página. O fim da home é a altura daquela seção. O final da seção home é, logicamente, o começo da próxima, que é a seção services. O fim da services é o começo da about, e o final da about é o começo da contact. isso tudo pra que pudéssemos fazer com que ao rolar a página, as sessões mudassem automaticamente no menuzinho lá de cima.

  // criamos constantes que calculassem o meio da página (linha alvo)
  // criamos constantes para que encontrássemos o topo de cada seção (topo da seção) e o bottom de cada seção (altura da seção)

  // criamos uma constante para que o site identifique se o topo de uma seção já ultrapassou a linha imaginária do meio da página, porque quando isso ocorrer, significa que agora estamos visualizando esta nova seção (caso rolemos pra baixo e a pagina suba), ou que estamos saindo da tal seção (caso rolemos pra cima e a pagina desça).

  // depois criamos uma outra constante que identifica o atributo que colocamos lá em cima pra rodar, passando por home, services, about e contact pra saber em qual estamos

  // por fim colocamos um if pra fazer funcionar e adicionar o active. mas antes de adicionar o active, tivemos que remove-lo para não ficar ativo o tempo todo

  // linha alvo
  const targetLine = scrollY + innerHeight / 2

  // verificar se a seção passou da linha
  // quais dados vou precisar?

  // o topo da seção
  const sectionTop = section.offsetTop

  // a altura da seção
  const sectionHeight = section.offsetHeight

  // o topo da seção chegou ou ultrapassou a linha alvo
  const sectionTopReachedOrPassedTargetline = targetLine >= sectionTop

  // informações dos dados que estou colhendo e da lógica
  // console.log(
  //  'O topo da seção chegou ou passou da linha?',
  //  sectionTopReachedOrPassedTargetline
  //  )

  // verificar se a base está abaixo da linha algo
  // quais dados vou precisar? altura da seção, e...

  // a seção termina quando?
  const sectionEndsAt = sectionTop + sectionHeight

  // o final da seção passou da linha alvo
  const sectionEndPassedTargetline = sectionEndsAt <= targetLine

  // console.log('O fundo da seção passou da linha?', sectionEndPassedTargetline
  // )

  // limites da seção
  const sectionBoundaries =
    sectionTopReachedOrPassedTargetline && !sectionEndPassedTargetline

  const sectionId = section.getAttribute('id')
  const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)
  // quando quero colocar uma variável dentro de uma string coloco `` e ${} dentro das chaves posso colocar qualquer codigo JS

  menuElement.classList.remove('active')
  if (sectionBoundaries) {
    menuElement.classList.add('active')
  }
}

function showNavOnScroll() {
  if (scrollY > 0) {
    navigation.classList.add('scroll')
  } else {
    navigation.classList.remove('scroll')
  }
}

function showBackToTopButtonOnScroll() {
  if (scrollY > 1000) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

function openMenu() {
  document.body.classList.add('menu-expanded')
}

function closeMenu() {
  document.body.classList.remove('menu-expanded')
}

ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700
}).reveal(`
#home, 
#home img, 
#home .stats, 
#services,
#services header,
#services .card,
#about,
#about header,
#about .content`)
