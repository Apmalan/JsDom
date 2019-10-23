$(function () {
    $('[data-toggle="tooltip"]').tooltip();
});

var vendedor = {}; //Objeto inicializado vazio

var encargos = {   //Objeto inicializado com propriedades
    inss: null,
    irrf: null
};

function calcularSalarioLiquido() {
    vendedor.nome = document.getElementById('nomeVendedor').value;
    vendedor.salarioBase = parseFloat(document.getElementById('salarioBase').value);
    vendedor.totalVendas = parseFloat(document.getElementById('totalVendas').value);
    vendedor.salarioBruto = calcularSalarioBruto(vendedor.salarioBase, vendedor.totalVendas);
    console.log(vendedor);
    encargos.inss = calcularInss(vendedor.salarioBruto);
    console.log(encargos);
}

function calcularSalarioBruto(salario, vendas) {
    const PERCENTUAL_COMISSAO = 0.10;
    return salario  + vendas * PERCENTUAL_COMISSAO;
}

function calcularInss(salario) {
    const FAIXA_1 = 1751.81;
    const FAIXA_2 = 2919.72;

    if (salario <= FAIXA_1) {
        return salario * 0.08;
    } else if (salario <= FAIXA_2) {
        return salario * 0.09;
    } else {
        return salario * 0.11;
    }
}