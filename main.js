const caixaTxt = document.querySelectorAll('.texto')
const imgIcone = document.querySelectorAll('.setinha')
const paragrafoTxt = document.querySelectorAll('.paragrafo')
const tituloTxt = document.querySelectorAll('.questao')

caixaTxt.forEach((item, index) => {
    item.addEventListener('click', () => {
        let valor = index
        let todos = [0, 1, 2, 3, 4]
        todos.forEach(elemento => {
            if (valor != elemento) {
                imgIcone[elemento].classList.remove('rotacao')
                paragrafoTxt[elemento].classList.remove('mostrar-txt')
                tituloTxt[elemento].classList.remove('titulo-dois')

            } else {
                imgIcone[valor].classList.add('rotacao')
                paragrafoTxt[valor].classList.add('mostrar-txt')
                tituloTxt[valor].classList.add('titulo-dois')
            }
        })
    })
})