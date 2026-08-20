const texto = document.getElementById("texto");
const depositar = document.getElementById("deposito");
const valorDep = document.getElementById("valorDep");
const sacar = document.getElementById("saque");
const valorSac = document.getElementById("valorSaq");
const compra = document.getElementById("compra");
const valorCom = document.getElementById("valorCom");
let saldo = 0.00;
let saldoTela = 0.00;
let depositou;
let sacou;
let pagamento;
let historico = [];

function comprar() {
    pagamento = Number(compra.value);
    if (saldo < pagamento) {
        texto.innerHTML = `Não é possivel realizar a compra! Seu saldo é: ${saldo}`;
    } else {
        saldo = (saldo - pagamento);
        texto.innerHTML = `Compra realizada! Seu novo saldo é ${saldo}`;
        historico.push(pagamento * -1);
        return
    }
};

function deposito() {
    depositou = Number(depositar.value);
    saldo = (saldo + depositou);
    texto.innerHTML = `seu novo saldo é: ${saldo}`
    historico.push(depositou);
    return
};

function saque() {
    sacou = Number(sacar.value);
    console.log(sacou);
    saldo = (saldo - sacou);
    if (saldo < 0) {
        saldo = (sacou + saldo)
        texto.innerHTML = `Não foi possivel realizar o saque, seu saldo é: ${saldo}`
    } else {
        texto.innerHTML = `seu novo saldo é: ${saldo}`
        historico.push(sacou * -1);
    }
    return
};

function controleSaldo() {
    for (let i = 0; i < historico.length; i++) {
        saldoTela += historico[i];
        console.log(historico);
        console.log(saldoTela);
    };
};

valorDep.addEventListener('click', () => {
    deposito();
    controleSaldo();
});
valorSac.addEventListener('click', () => {
    saque();
    controleSaldo();
});
valorCom.addEventListener('click', () => {
    comprar();
    controleSaldo();
});
