let openmenu = document.querySelector('.openmenu')
let menuclose = document.querySelector('.closemenu')
let navigation = document.querySelector('.side-bar')

openmenu.addEventListener('click', () => {
    navigation.classList.toggle('show')
    openmenu.style.display = 'none'
    menuclose.style.display = 'block'
})

menuclose.addEventListener('click', () => {
    navigation.classList.remove('show')
    menuclose.style.display = 'none'
    openmenu.style.display = 'block'
    openmenu.style.cursor = 'pointer'
})