window.addEventListener('scroll', onScroll)

onScroll()
function onScroll() {
    showNavOnScroll()
    showBackToTopbuttonOnScroll() 

    activateMenuAtCurrentSection(home)
    activateMenuAtCurrentSection(services)
    activateMenuAtCurrentSection(about)
    activateMenuAtCurrentSection(contact)
}


function activateMenuAtCurrentSection(section) {
    // linha alvo
    const targetLine = scrollY + innerHeight / 2 

    // verificar se a seção passou da linha 
    // quais dados vou precisar?

    // topo da seção
    const sectionTop = section.offsetTop

    // a altura da seção
    const sectionHeight = section.offsetHeight

    // o topo da seção chegou ou ultrapassou a linha alvo
    const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop

    // informação de dados
    console.log('O topo da seção chegou ou passou da linha?',
    sectionTopReachOrPassedTargetLine)

    // verificar se a base está abaixo da linha alvo
    // quais dados vou precisar?

    // a seção termina onde?
     const sectionEndsAt = sectionTop + sectionHeight

     console.log(sectionEndsAt)

    // o final da seção passou da linha alvo
    const sectionEndPassedTargetLine = sectionEndsAt <= targetLine

    console.log('O fundo da seção passou da linha?',sectionEndPassedTargetLine )

    // limites da seção
    const sectionBoundaries = sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetLine

    const sectionId = section.getAttribute('id')
    const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)

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

function showBackToTopbuttonOnScroll() {
    if (scrollY > 650) {
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
    duration: 700,
}).reveal(`
#home, 
#home .img, 
#home .stats,
#services,
#services header,
#services .card,
#about,
#about header,
#about .content`);  //string especial que permite a quebra de linha. o acento agudo (`).