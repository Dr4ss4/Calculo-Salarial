function novoSalario() {
    var salarioAtual = parseFloat(prompt("Insira o salário atual do funcionário:"));

    if (salarioAtual <= 1200) {
        var aumento = salarioAtual * 0.15; // 15% de aumento
    } else if (salarioAtual <= 2400) {
        var aumento = salarioAtual * 0.10; // 10% de aumento
    } else {
        var aumento = salarioAtual * 0.05; // 5% de aumento
    }

    var novoSalario = salarioAtual + aumento;
    document.getElementById('output').innerHTML = "Novo Salário: R$ " + novoSalario.toFixed(2);
}

function calcularFerias() {
    var salarioAtual = parseFloat(prompt("Insira o salário atual do funcionário:"));
    var valorFerias = salarioAtual + (salarioAtual / 3);
    document.getElementById('output').innerHTML = "Valor de Férias: R$ " + valorFerias.toFixed(2);
}

function calcularDecimo() {
    var salarioAtual = parseFloat(prompt("Insira o salário atual do funcionário:"));
    var mesesTrabalhados = parseInt(prompt("Insira o número de meses trabalhados:"));

    if (mesesTrabalhados < 0 || mesesTrabalhados > 12) {
        document.getElementById('output').innerHTML = "Insira um valor entre 0 e 12 meses.";
        return; // Encerra a execução da função se o número de meses for inválido
    }

    var valorDecimo = (salarioAtual / 12) * mesesTrabalhados;
    document.getElementById('output').innerHTML = "Valor do Décimo Terceiro: R$ " + valorDecimo.toFixed(2);
}

function sair() {
    document.getElementById('output').innerHTML = "Sessão encerrada. Obrigado!";
}