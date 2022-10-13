
new Vue({
    el: '#app',
    data: {
        isIniciarJogo: false,
        isPainelResult: false,
        vidaJogador: 100,
        vidaInvasor: 100,
        danoInvasor: 0,
        danoJogador: 0,
        isAtaque: true,
        isAtaqueEspecial: true,
        isCurar: true,
        isDesistir: true,
        isvoceGanhou: false,
        vocePerdeu: false,
        painelLog: false,
        addClassDangerJogador: false,
        addClassDangerInvasor: false,
        msgAtaqueInvasor: "invasor atingiu jogador com",
        msgAtaqueJogador: "jogador atingiu invasor com",
        logs: []
    }, methods: {

        ataque() {
            this.danoJogador = this.gerarAleatorio(7, 12)
            this.danoInvasor = this.gerarAleatorio(7, 9)
            this.vidaJogador -= this.danoJogador
            this.vidaInvasor -= this.danoInvasor
            this.painelLog = true;
            if (this.vidaJogador < 0) {
                this.vidaJogador = 0
            }
            if (this.vidaInvasor < 0) {
                this.vidaInvasor = 0
            }

            this.isGanhou()
            this.modificarBarras(this.vidaJogador, this.vidaInvasor)
            this.addLogs(this.danoInvasor, this.danoJogador)
            this.addClass()
        }, ataqueEspecial() {
            this.danoJogador = this.gerarAleatorio(1, 3)
            this.danoInvasor = this.gerarAleatorio(5, 9)
            this.vidaJogador -= this.danoJogador
            this.vidaInvasor -= this.danoInvasor
            this.painelLog = true;
            if (this.vidaJogador < 0) {
                this.vidaJogador = 0
            }
            if (this.vidaInvasor < 0) {
                this.vidaInvasor = 0
            }
            this.modificarBarras(this.vidaJogador, this.vidaInvasor)
            this.addLogs(this.danoInvasor, this.danoJogador)
            this.isGanhou()
            this.addClass()

        }, curar() {
            this.danoInvasor = this.gerarAleatorio(7, 12)
            this.danoJogador = this.gerarAleatorio(5, 7)
            this.vidaJogador += this.danoJogador
            this.vidaInvasor += this.danoInvasor
            this.painelLog = true;
            if (this.vidaJogador >= 100) {
                this.vidaJogador = 100
                this.danoJogador = 0
            }
            if (this.vidaInvasor >= 100) {
                this.vidaInvasor = 100
                this.danoInvasor = 0
            }
            this.addLogs(this.danoInvasor, this.danoJogador)
            this.modificarBarras(this.vidaJogador, this.vidaInvasor)

        },
        desistir() {
            this.isIniciarJogo = true
            this.isAtaque = false
            this.isAtaqueEspecial = false
            this.isCurar = false
            this.isDesistir = false
            this.painelLog = false
            this.logs = []
        },

        //funcoes complementares do jogo


        iniciarGame() {
            this.isIniciarJogo = false
            this.isAtaque = true
            this.isAtaqueEspecial = true
            this.isCurar = true
            this.isDesistir = true
            this.isPainelResult = false
            this.addClassDangerJogador = false
            this.addClassDangerInvasor = false
            this.vidaJogador = 100
            this.vidaInvasor = 100
            this.modificarBarras(100, 100)

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
        ,
        addLogs(danoJogador, danoInvasor) {
            this.logs.push({ invasor: this.msgAtaqueInvasor + danoInvasor, jogador: this.msgAtaqueJogador + danoJogador })
        },
        isGanhou() {
            if (this.vidaJogador <= 0) {
                this.isPainelResult = true
                this.desistir()
                this.isvoceGanhou = false
            } else if (this.vidaInvasor <= 0) {
                this.isPainelResult = true
                this.desistir()
                this.isvoceGanhou = true
            }

        }, addClass() {

            if (this.vidaJogador <= 20) {
                this.addClassDangerJogador = true
            } if (this.vidaInvasor <= 20) {
                this.addClassDangerInvasor = true
            }
        }
    }
})



