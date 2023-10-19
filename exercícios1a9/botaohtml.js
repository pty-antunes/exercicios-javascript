function criarBotao() {
    const button = document.createElement("button");
    button.innerHTML = "Clique em mim!";
    button.onclick = function() {
        alert("Você clicou no botão!");
    };
    document.body.appendChild(button);
}
criarBotao();