const calculaGorjeta = function () {

    if (parseFloat(this.conta) < 50) {
        this.gorjeta = parseFloat(this.conta) * 0.2;
    } else if (parseFloat(this.conta) >= 50 && parseFloat(this.conta) <= 200) {
        this.gorjeta = parseFloat(this.conta) * 0.15;
    } else if (parseFloat(this.conta) > 200) {
        this.gorjeta = parseFloat(this.conta) * 0.1;
    }
    return this.gorjeta;
}
toString = function () {
    console.log(`${this.nome} - [Valor: R$ ${this.conta} | Gorjeta: R$ ${this.gorjeta} | Total: R$ ${this.total}]`);
}

const calculaTotal = function () {
    this.total = parseFloat(this.gorjeta) + parseFloat(this.conta);
    return this.total;
}


const num = prompt("Número de restaurantes:");

let restaurantes = [];

for (let i = 0; i < num; i++) {
    const nomeRestaurante = prompt("Informe o nome do restaurante:");
    const valorConta = prompt("Informe o valor:");
    const restaurante = {
        nome: nomeRestaurante,
        conta: valorConta,
        calculaGorjeta,
        calculaTotal,
        toString,
    }
    restaurante.calculaGorjeta();
    restaurante.calculaTotal();

    restaurantes.push(restaurante);
}

restaurantes.calculaGastoRestaurante = function () {
    let gastoTotal = 0;
    for (let i = 0; i < num; i++) {
        gastoTotal = parseFloat(gastoTotal) + parseFloat(restaurantes[i].total);
    }
    return gastoTotal;
}

restaurantes.mediaGastos = function () {
    const total = restaurantes.calculaGastoRestaurante();
    const media = parseFloat(total) / parseFloat(num);
    return media.toFixed(2);
}

restaurantes.maiorGasto = function () {
    let valor = 0;
    let nValor;
    for (let i = 0; i < num; i++) {
        if (valor < restaurantes[i].total) {
            valor = restaurantes[i].total;
            nValor = restaurantes[i].nome;
        }

    }

    for (let i = 0; i < num; i++) {
        if (nValor === restaurantes[i].nome) {
            return restaurantes[i];
        }
    }
}

restaurantes.mostra = function () {
    console.log(`Restaurantes visitados: ${num}`);
    console.log(`Gastos:`);
    for (let i = 0; i < num; i++) {
        restaurantes[i].toString();
    }

    console.log(`Total: ${restaurantes.calculaGastoRestaurante()}`);

    console.log(`Média: ${restaurantes.mediaGastos()}`);

    const maior = restaurantes.maiorGasto();
    console.log(`Restaurante com maior gasto: ${maior.nome} (R$ ${maior.total})`);


}

restaurantes.mostra();


