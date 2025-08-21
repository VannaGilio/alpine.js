function dogApp() {
    return {
        mostrar: false,
        carregando: false,
        imagem: '',
        raca: '', // armazena a raça selecionada
        async buscarDog() {
            this.mostrar = true;
            this.carregando = true;
            let url = 'https://dog.ceo/api/breeds/image/random';
            if (this.raca) {
                url = `https://dog.ceo/api/breed/${this.raca}/images/random`;
            }
            try {
                const res = await fetch(url);
                const data = await res.json();
                this.imagem = data.message;
            } catch (e) {
                alert("Erro ao buscar doguinho 😢");
            }
            this.carregando = false;
        },
        fechar() {
            this.mostrar = false;
            this.imagem = '';
        }
    }
}
