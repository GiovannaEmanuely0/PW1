function sequencia(){
    var enesimo = parseFloat(document.getElementById("enesimo").value);

    event.preventDefault();
    var anterior = 0;
    var atual = 1;
    for(var i=2;i<=enesimo;i++){
        var sucessor = anterior+atual;
        anterior = atual;
        atual = sucessor;
        
        //Neste daqui aparece apenas o último valor da sequência, mas na página
        document.getElementById("sucessor").innerHTML = sucessor+", ";

        /* Neste daqui, o resultado aparece com a sequência completa, mas em outra página
        document.write(sucessor+", "); */
        
    }
    
}