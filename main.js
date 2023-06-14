//Number - número
//String - texto
//Boolean -  true|false (verdadeiro | falso)

window.addEventListener('scroll', onScroll) // para não ter problema com o carregamento da função

var navigation = document.getElementById('navigation')
var backToTopButton = document.getElementById('backToTopButton')


onScroll() //executar função

function onScroll() {
   showNavOnScroll()
    showBackToTopButtonOnScroll()
}

function showNavOnScroll() {
    if (scrollY > 0) {
        navigation.classList.add('scroll')  
      } else{
          navigation.classList.remove('scroll') 
      }
}

function showBackToTopButtonOnScroll() {
    if (scrollY > 400) {
        backToTopButton.classList.add('show')  
      } else{
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
    duration: 800,

//caso queira quebrar linha nas strings usar `` no lugar das aspas simples 
}).reveal(`#home, 
#home img, 
#home .estatisticas, 
#services,
#services header,
#services .card,
#about,
#about header,
#about .contente`); 
