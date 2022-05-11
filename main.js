window.addEventListener('scroll', onScroll)

onScroll()
function onScroll() {
    showNavOnScroll()
    showBackToTopButtonOnScroll ()

    activateMenuAtCurrentSection(home)
    activateMenuAtCurrentSection(services)
    activateMenuAtCurrentSection(about)
    activateMenuAtCurrentSection(contact)
}

function activateMenuAtCurrentSection(section)
{
    const targetLine = scrollY + innerHeight / 2

    
    // verificar se a seção passou da linha
    // quais dados vou precisar?

    //O topo da seção:
    const sectionTop = section.offsetTop
    //A altura da seção:
    const sectionHeight = section.offsetHeight

    // O topo da seção chegou ou ultrapassou da linha alvo
    const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop


    // Informações dos dados e da lógica
    console.log('O topo da seção chegou ou passou da linha?', sectionTopReachOrPassedTargetLine)


    //verificar se a base está abaixo da linha alvo
    //quais dados vou precisar?

    //a seção termina onde?
    const sectionEndsAt = sectionTop + sectionHeight

    // o final da seção passou da linha alvo
    const sectionEndPassedTargetline = sectionEndsAt <= targetLine

    console.log('O funo da seção passou da linha?', sectionEndPassedTargetline)


    //limites da seção
    const sectionBoundaries = sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetline 

    const sectionId = section.getAttribute('id')
    const menuElement = document
    .querySelector(`.menu a[href*=${sectionId}]`)


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

function showBackToTopButtonOnScroll () {
        if (scrollY > 910) {
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
    distance: '100px',
    duration: 900,
}).reveal(`
#home,
#home img,
#home .CaixaMain,
#services,
#services header,
#services .card,
#about,
#about header,
#about .content`);