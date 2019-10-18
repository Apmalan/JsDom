
function simuladorSalario (){
const SALARIO_COMERCIAL = 1300;
const PERCENTUAL_COMISSAO = 0.1;
const META_VENDA = 1000;

var nomeVendedor = document.getElementById("nomeVendedor").value;
var totalVendas = document.getElementById("totalVendas").value;


if(totalVendas >= META_VENDA){
    var salarioBruto = SALARIO_COMERCIAL + (totalVendas * PERCENTUAL_COMISSAO);
    var comissao = totalVendas * PERCENTUAL_COMISSAO;
    exibirMensagemResultado(nomeVendedor,salarioBruto,comissao);

    
}else{
    exibirMensagemErro(nomeVendedor);
}
/*<div class="col-sm-9 col-md-9 col-lg-9 pt-30">
<div class="alert alert-success" role="alert" id="">
<h5>A simple success alert—check it out!</h5>
</div>
</div>*/




}

function exibirMensagemResultado (nome,salario,comissao){
    let html = '<div class="col-sm-9 col-md-9 col-lg-9 pt-30">' + 
                '<div class="alert alert-success" role="alert">'+
                '<h5>'+nome+', seu salário bruto será de R$ ' +salario+ ' reais.<br> Você recebeu R$ ' +comissao+ ' reais de comissão.</h5>' + 
                '</div>' + 
                '</div>';
                let mensagemResultado = document.getElementById('mensagemResultado');
                mensagemResultado.className = 'row visible';
                mensagemResultado.innerHTML = html;

}

function exibirMensagemErro (nome,salario,comissao){
    let html = '<div class="col-sm-9 col-md-9 col-lg-9 pt-30">' + 
                '<div class="alert alert-danger" role="alert">'+
                '<h5>'+nome+', Você não atingiu o percentual de comissão mínimo</h5>' + 
                '</div>' + 
                '</div>';
                let mensagemResultado = document.getElementById('mensagemResultado');
                mensagemResultado.className = 'row visible';
                mensagemResultado.innerHTML = html;

}
