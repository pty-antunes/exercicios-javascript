function operacoesMatematicas() {
    const num1 = parseFloat(prompt("Digite o primeiro número:"));
    const num2 = parseFloat(prompt("Digite o segundo número:"));

    const soma = num1 + num2;
    const sub = num1 - num2;
    const multi = num1 * num2;
    const divi = num1 / num2;

    console.log(`Soma: ${soma}`);
    console.log(`Subtração: ${sub}`);
    console.log(`Multiplicação: ${multi}`);
    console.log(`Divisão: ${divi}`);
}

operacoesMatematicas();