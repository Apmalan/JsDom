
function comparadorValores (){
  
    
    var valor1 = document.getElementById("valor1").value;
    var valor2 = document.getElementById("valor2").value;
    
    
    if(valor1 == valor2){
        
        exibirMensagemResultado(valor1,valor2);

    }else if(valor1 > valor2){
        exibirMensagemvalor1(valor1,valor2);
    }else{
        exibirMensagemvalor2(valor1,valor2);
    }

    

    
    function exibirMensagemResultado (){
        let html = '<div class="col-sm-9 col-md-9 col-lg-9 pt-30">' + 
                    '<div class="alert alert-danger" role="alert">'+
                    '<h5>Não é permitido valores iguais, favor digitar números diferentes</h5>' + 
                    '</div>' + 
                    '</div>';
                    let mensagemResultado = document.getElementById('mensagemResultado');
                    mensagemResultado.className = 'row visible';
                    mensagemResultado.innerHTML = html;
    
    }
    
    function exibirMensagemvalor1 (){
        let html = '<div class="col-sm-9 col-md-9 col-lg-9 pt-30">' + 
                    '<div class="alert alert-success" role="alert">'+
                    '<h5>O valor 1 é maior que o valor 2</h5>' + 
                    '</div>' + 
                    '</div>';
                    let mensagemResultado = document.getElementById('mensagemResultado');
                    mensagemResultado.className = 'row visible';
                    mensagemResultado.innerHTML = html;
    
    }

    function exibirMensagemvalor2 (){
        let html = '<div class="col-sm-9 col-md-9 col-lg-9 pt-30">' + 
                    '<div class="alert alert-success" role="alert">'+
                    '<h5>Valor 2 é maior que valor 1</h5>' + 
                    '</div>' + 
                    '</div>';
                    let mensagemResultado = document.getElementById('mensagemResultado');
                    mensagemResultado.className = 'row visible';
                    mensagemResultado.innerHTML = html;
    
    }

    
}
