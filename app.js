
new Vue({
    el: '#app',
    data: {
        nome: 'Maria',
        isIniciarJogo: false,
        vidaJogador: 100,
        vidaInvasor: 100,
        isAtaque: true,
        isAtaqueEspecial: true,
        isCurar: true,
        isDesistir: true,
        voceGanhou: false,
        logs: []

    }, methods: {

        iniciarGame() {
            this.isIniciarJogo = false
            this.isAtaque = true
            this.isAtaqueEspecial = true
            this.isCurar = true
            this.isDesistir = true
            this.vidaJogador = 100
            this.vidaInvasor = 100
            this.modificarBarras(100, 100)

        },
        desistir() {

            this.isIniciarJogo = true
            this.isAtaque = false
            this.isAtaqueEspecial = false
            this.isCurar = false
            this.isDesistir = false
        },



        ataque() {

            this.vidaJogador -= this.gerarAleatorio(7, 12)
            this.vidaInvasor -= this.gerarAleatorio(7, 9)
            if (this.vidaJogador < 0) {
                this.vidaJogador = 0
            }
            if (this.vidaInvasor < 0) {
                this.vidaInvasor = 0
            }
            this.modificarBarras(this.vidaJogador, this.vidaInvasor)

        }, curar() {
            this.vidaJogador += this.gerarAleatorio(7, 12)
            this.vidaInvasor += this.gerarAleatorio(7, 10)
            if (this.vidaJogador >= 100) {
                this.vidaJogador = 100
            }
            if (this.vidaInvasor >= 100) {
                this.vidaInvasor = 100
            }
            this.modificarBarras(this.vidaJogador, this.vidaInvasor)

        }, ataqueEspecial() {

            this.vidaJogador -= this.gerarAleatorio(1, 3)
            this.vidaInvasor -= this.gerarAleatorio(5, 9)
            if (this.vidaJogador < 0) {
                this.vidaJogador = 0
            }
            if (this.vidaInvasor < 0) {
                this.vidaInvasor = 0
            }
            this.modificarBarras(this.vidaJogador, this.vidaInvasor)

        },
        gerarAleatorio(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min) + min);
        },

        modificarBarras(jogador, invasor) {

            let barras = document.getElementsByClassName("life")
            barras[0].style.width = `${jogador}%`
            barras[1].style.width = `${invasor}%`


            if (this.vidaJogador <= 0) {
                barras[0].style.width = `${0}%`
            }
            if (this.vidaInvasor <= 0) {
                barras[1].style.width = `${0}% `
            }

            if (this.vidaJogador >= 100) {
                barras[0].style.width = `${100}% `
            }
            if (this.vidaInvasor >= 100) {
                barras[1].style.width = `${100}% `
            }
        }
        , voceGanhou() {
            if (this.vidaJogador <= 0) {
                return this.voceGanhou = false
            } else if (this.vidaInvasor <= 0)
                return this.voceGanhou = true
        }

    }
})



