function somarArray() {
   
   numero = new Array();
  soma = 0;
   for(i=0; i<=4; i++) {
     numero[i] = parseInt(prompt("Insira um número: ")); 
     soma+=numero[i]; //soma=soma+numero[i];
   }
   document.write(soma);
}