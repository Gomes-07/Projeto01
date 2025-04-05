let prevButton = document.getElementById('prev')
let nextButton = document.getElementById('next')
let container = document.querySelector('.container')
let items = container.querySelectorAll('.list .item')
let indicator = document.querySelector('.indicators')
let dots = indicator.querySelectorAll('ul li')
let list = container.querySelector('.list')

let active = 0
let firstPosition = 0
let lastPosition = items.length - 1

function setSlider() {
    // Remove ativa anterior
    container.querySelector('.list .item.active').classList.remove('active')
    indicator.querySelector('ul li.active').classList.remove('active')

    // Adiciona a nova ativa
    items[active].classList.add('active')
    dots[active].classList.add('active')

    // Atualiza número com zero à esquerda (se necessário)
    indicator.querySelector('.numbers').innerHTML = (active + 1).toString().padStart(2, '0')
}

nextButton.onclick = () => {
    list.style.setProperty('--calculation', 1)
    active = active + 1 > lastPosition ? 0 : active + 1
    setSlider()
}

prevButton.onclick = () => {
    list.style.setProperty('--calculation', -1)
    active = active - 1 < firstPosition ? lastPosition : active - 1
    setSlider()
}
