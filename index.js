const texto = document.getElementById("texto");
const depositar = document.getElementById("deposito");
const valorDep = document.getElementById("valorDep");
const sacar = document.getElementById("saque");
const valorSac = document.getElementById("valorSaq");
const compra = document.getElementById("compra");
const valorCom = document.getElementById("valorCom");
const saldoReal = document.getElementById("saldo");
const mostrar = document.getElementById("ocultar");
let saldo = 0.00;
let saldoTela = 0.00;
let depositou;
let sacou;
let pagamento;
let historico = [];
let show = 0;

function comprar() {
    pagamento = Number(compra.value);
    if (saldo < pagamento) {
        texto.innerHTML = `Não é possivel realizar a compra! Seu saldo é: ${saldo}`;
        setInterval(() => {
            texto.innerHTML = "";
        }, 5000)
    } else {
        saldo = (saldo - pagamento);
        texto.innerHTML = `Compra realizada! Seu novo saldo é ${saldo}`;
        setInterval(() => {
            texto.innerHTML = "";
        }, 5000)
        historico.push(pagamento * -1);
        return
    }
};

function deposito() {
    depositou = Number(depositar.value);
    saldo = (saldo + depositou);
    texto.innerHTML = `seu novo saldo é: ${saldo}`;
    setInterval(() => {
        texto.innerHTML = "";
    }, 5000)
    historico.push(depositou);
    return
};

function saque() {
    sacou = Number(sacar.value);
    saldo = (saldo - sacou);
    if (saldo < 0) {
        saldo = (sacou + saldo)
        texto.innerHTML = `Não foi possivel realizar o saque, seu saldo é: ${saldo}`;
        setInterval(() => {
            texto.innerHTML = "";
        }, 5000)
    } else {
        texto.innerHTML = `seu novo saldo é: ${saldo}`;
        setInterval(() => {
            texto.innerHTML = "";
        }, 5000)
        historico.push(sacou * -1);
    }
    return
};

function controleSaldo() {
    if (saldoTela != 0.00) {
        saldoTela = 0.00;
    };
    for (let i = 0; i < historico.length; i++) {
        saldoTela += historico[i];
    };
    saldoNaTela();
    return
};

function saldoNaTela () {
    if (saldoReal != null) {
        saldoReal.innerHTML = "";
    }
    saldoReal.innerHTML = `Saldo: ${saldoTela}`;
};

function mostrarOcultarTela () {
    if (!show) {
        let show = 0;
        return
    }
    if (show === 0) {
        saldoNaTela();
        show++;
        console.log(show)
    }
    if (show === 1) {
        saldoReal.innerHTML = "";
        show--;
    }
}

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
mostrar.addEventListener('click', () => {
    mostrarOcultarTela();
});
