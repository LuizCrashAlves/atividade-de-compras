const texto = document.getElementById("texto");
const depositar = document.getElementById("deposito");
const valorDep = document.getElementById("valorDep");
const sacar = document.getElementById("saque");
const valorSac = document.getElementById("valorSaq");
const compra = document.getElementById("compra");
const valorCom = document.getElementById("valorCom");
let saldo = 100.00;
let depositou;
let valor;
let pagamento;

function controleSaldo() {
    pagamento = Number(compra.value);
    if (saldo < pagamento) {
        texto.innerHTML = `Não é possivel realizar a compra! Seu saldo é: ${saldo}`;
    } else {
        saldo = (saldo - pagamento);
        texto.innerHTML = `Compra realizada! Seu novo saldo é ${saldo}`;
        return
    }
};

function deposito() {
    depositou = Number(depositar.value);
    saldo = (saldo + depositou);
    texto.innerHTML = `seu novo saldo é: ${saldo}`
    return
};

function saque() {
    sacou = Number(sacar.value);
    saldo = (saldo - sacou);
    if (saldo < 0) {
        saldo = (sacou + saldo)
        texto.innerHTML = `Não foi possivel realizar o saque, seu saldo é: ${saldo}`
    } else {
        texto.innerHTML = `seu novo saldo é: ${saldo}`
    }
    return
};

valorDep.addEventListener('click', () => {
    deposito();
});
valorSac.addEventListener('click', () => {
    saque();
});
valorCom.addEventListener('click', () => {
    controleSaldo();
});
