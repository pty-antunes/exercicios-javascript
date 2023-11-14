async function buscarDadosDeAPI() {
    try {
        const response = await fetch('https://www.pexels.com/pt-br/foto/caneca-de-ceramica-cinza-perto-de-camera-preta-e-prata-e-livro-aberto-3166841/');
        const data = await response.json();
        console.log(data); // Exibir os dados recebidos na resposta da API
    } catch (error) {
        console.error('Erro ao buscar dados da API:', error);
    }
}
