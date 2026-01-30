const prevButton = document.getElementById('prev')
const nextButton = document.getElementById('next')
const items = document.querySelectorAll('.item')
const dots = document.querySelectorAll('.dot')
const numbersIndicator = document.querySelector('.numbers')
const list = document.querySelector('.list')

let active = 0;
let timer;

let contador = 0;
let ParaFrente = true;

const total = items.length
let limiteMax = total - 1;


function update(direction) {

    document.querySelector('.item.active').classList.remove('active')
    document.querySelector('.dot.active').classList.remove('active')

    if (direction > 0) {
        active = active + 1

        if (active === total) {
            active = 0
        }
    }

    else if (direction < 0) {
        active = active - 1

        if (active < 0) {
            active = total - 1
        }
    }

    items[active].classList.add('active')
    dots[active].classList.add('active')

    numbersIndicator.textContent = String(active + 1).padStart(2, '0')

    const btn = items[active].querySelector('btn')
    if (btn){
        btn.computedStyleMap.transition = 'none'
        btn.offsetHeight
        btn.computedStyleMap.transition = ''
    }
}

clearInterval(timer)
timer = setInterval(() => {
    console.log(contador);

    if (ParaFrente) {
        update(1)
        contador++;
        if (contador === limiteMax) {
            ParaFrente = false;
        }
    }
    else {
        update(-1)
        contador--;
        if (contador === 0) {
            ParaFrente = true;
        }
    }
}, 8000);

prevButton.addEventListener('click', () => {
    update(-1)
    contador = active
})

nextButton.addEventListener('click', () => {
    update(+1)
    contador = active
})

