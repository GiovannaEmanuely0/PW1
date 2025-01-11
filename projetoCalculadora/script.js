function mostrar(num){
    let numero = document.getElementById("resultado").innerHTML;
    document.getElementById("resultado").innerHTML = numero+num;
}
function clean(){
    document.getElementById("resultado").innerHTML = ""
}
function calcular(){
    var resultado = document.getElementById("resultado").innerHTML;
    if (resultado == ""){
        alert("erro")
    }else{
        document.getElementById("resultado").innerHTML = eval(resultado);
        console.log(resultado)    
    }
}