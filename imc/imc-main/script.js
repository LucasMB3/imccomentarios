// Esta função é chamada quando o botão de cálculo do IMC é clicado.
function CalcularIMC() {
    // Obtém os valores do peso e altura a partir dos elementos de input no HTML.
    var peso = document.getElementById("peso").value;
    var altura = document.getElementById("altura").value;
    
    // Calcula o IMC utilizando a fórmula: peso / (altura * altura).
    var imc = peso / (altura * altura);
    
    // Obtém a referência ao elemento onde o resultado será exibido.
    var resultado = document.getElementById("resultado");

    // Verifica se algum dos campos de entrada (peso ou altura) está vazio e exibe mensagens de erro apropriadas.
    if (peso === "" && altura === "") {
        resultado.innerHTML = "Preencha todos os campos!";
    }
    if (peso === "" && altura != "") {
        resultado.innerHTML = "Preencha o seu peso";
    }
    if (peso != "" && altura === "") {
        resultado.innerHTML = "Preencha sua altura";
    }
    
    // Se ambos os campos estiverem preenchidos, exibe o valor calculado do IMC com 2 casas decimais.
    if (peso && altura != "") {
        resultado.innerHTML = " " + imc.toFixed(2);
    }
}

// Esta função é chamada quando o botão "Limpar" é clicado e redefine os valores dos campos e o resultado.
function Limpar() {
    document.getElementById('peso').value = '';
    document.getElementById('altura').value = '';
    document.getElementById('resultado').innerHTML = '';
}
