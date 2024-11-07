function funcao(){
   /*var numero = parseInt (document.getElementById("numero").value);

  for(var i=1;i<=10;i++){
        var resultado = numero*i;
        if(i<10){
            document.write(resultado+" - ");
        }else{
            document.write(resultado);*/

            var numero = parseInt(prompt("Insira o número para saber a tabuada"));
            for(var i=0;i<=10;i++){
                var resultado = numero*i;
                document.write(numero+"*"+i+"="+resultado+"<br/>");
            }
        }

