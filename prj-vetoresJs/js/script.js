function exemploArray(){
    numero = new Array();

    numero[0] = 15;
    numero[1] = 10;
    numero[2] = 8;

    //outra forma de escrever os elementos do vetor.
    numero = [2,3,7];

    //adicionar um elemento após a ultima posição.
    numero.push(200);

    //adiciona um elemento no início, e é o contrário do push.
    numero.unshift(41);

    //exclui o último elemento
    numero.pop();

    //ele pega um índice de determinado valor do vetor, indice é posição
    document.write(": "+numero.indexOf(7)+"<br/>")
    //ele pega a posição o índice do vetor, tipo ele vai pegar a posição de onde está o 7 na lista de vetor.

    /*document.write(numero[0]);
    document.write(numero[1]);
    document.write(numero[2]);*/
    //numero.length é para todos os vetores que eu adicionar, ele pega o tamanho de elementos do meu vetor.
    /*qtd = numero.length 
    document.write(qtd);
    */
    for(i=0;i<numero.length;i++){
        document.write(numero[i]+"<br/>");
    }
}
function exibirData(){
    dta = new Date();

    document.write(dta.getDate()+"/"+(dta.getMonth()+1)+"/"+dta.getFullYear());

    document.write(dta.getHours()+":"+dta.getMinutes()+":"+dta.getSeconds());
}
//w3c js