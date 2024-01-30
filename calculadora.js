function mostrarResultado(valor) {
    document.getElementById("resultado").value = valor
}

function suma() {
    let num1 = +document.getElementById("campo1").value
    let num2 = +document.getElementById("campo2").value
    mostrarResultado(num1 + num2)
}
function resta() {
    let num1 = +document.getElementById("campo1").value
    let num2 = +document.getElementById("campo2").value
    mostrarResultado(num1 - num2)
}
function multiplicacion() {
    let num1 = +document.getElementById("campo1").value
    let num2 = +document.getElementById("campo2").value
    mostrarResultado(num1 * num2)
}
function division() {
    let num1 = +document.getElementById("campo1").value
    let num2 = +document.getElementById("campo2").value
    mostrarResultado(num1 / num2)
}

function raiz() {
    let numero = +document.getElementById("campo2").value
    mostrarResultado(Math.sqrt(numero))
}
function potencia() {
    let num1 = +document.getElementById("campo1").value
    let num2 = +document.getElementById("campo2").value
    mostrarResultado(Math.pow(num1,num2))
}
function valorAbsoluto() {
    let numero = +document.getElementById("campo2").value
    mostrarResultado(Math.abs(numero))
}
function random() {
    let minimo = +document.getElementById("campo1").value
    let maximo = +document.getElementById("campo2").value
    maximo = maximo + 1 
    mostrarResultado(Math.floor(Math.random() * (maximo - minimo) + minimo))

}
function round(){
    let resultado = +document.getElementById("resultado").value
    mostrarResultado(Math.round(resultado))
}
function floor(){
    let resultado = +document.getElementById("resultado").value
    mostrarResultado(Math.floor(resultado))
}
function ceil(){
    let resultado = +document.getElementById("resultado").value
    mostrarResultado(Math.ceil(resultado))
}
function reset() {
    location.reload()
}

/*function suma(num1, num2) {
    console.log(num1, num2)
    let resultado = +num1 + +num2;
    return resultado;
}
function mostrarResultado() {
    let elementoNumero1 = document.getElementById("campo1");
    let elementoNumero2 = document.getElementById("campo2");
    let elementoTexto = document.getElementById("resultado");
    let elementoSuma = suma(elementoNumero1.value, elementoNumero2.value);
    console.log(elementoSuma)
    elementoTexto.value = elementoSuma;
}*/ 