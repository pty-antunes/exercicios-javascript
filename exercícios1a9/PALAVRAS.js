function capitalizarPalavras(str) {
    const palavras = str.split(" ");
    const resultado = palavras.map(palavra => {
        return palavra.charAt(0).toUpperCase() + palavra.slice(1);
    });
    return resultado.join(" ");
}
console.log(capitalizarPalavras("exemplo de capitalização de palavras"));