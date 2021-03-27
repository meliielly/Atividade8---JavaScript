const calcularImc = function (peso, altura) {
    this.imc = (peso)/(altura*altura);
    return this.imc;
}

const pessoa = {

    nome: '',
    peso: '',
    altura: '',
    calcularImc,
};

const Outrapessoa = {

    nome: '',
    peso: '',
    altura: '',
    calcularImc,
};

pessoa.nome = prompt('Informe seu nome: ');
pessoa.altura = prompt('Informe sua altura: ');
pessoa.peso = prompt('Informe seu peso');

console.log(pessoa.calcularImc(pessoa.peso, pessoa.altura));
console.log(pessoa);

console.log('--------------------------------------------');


Outrapessoa.nome = prompt('Informe seu nome: ');
Outrapessoa.altura = prompt('Informe sua altura: ');
Outrapessoa.peso = prompt('Informe seu peso');

console.log(Outrapessoa.calcularImc(Outrapessoa.peso, Outrapessoa.altura));
console.log(Outrapessoa);
