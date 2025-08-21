'use strict'

function dogApp() {
    return {
        mostrar: false,
        imagem: '',
        raca: '', 
        async buscarDog() {
            this.mostrar = true;
            let url = 'https://dog.ceo/api/breeds/image/random';
            if (this.raca) {
                url = `https://dog.ceo/api/breed/${this.raca}/images/random`;
            }
            try {
                const res = await fetch(url);
                const data = await res.json();
                this.imagem = data.message;
            } catch (e) {
                alert("Erro ao buscar doguinho");
            }
        },
        fechar() {
            this.mostrar = false;
            this.imagem = '';
        }
    }
}
