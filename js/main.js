// Estudo de funções

function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado novamente por clicar</b>";
    console.log(document.getElementById("agradecimento"));
    return alert("Obrigado por clicar")
}

function redirecionar(){
    window.open("https://google.com");
}

function trocar(){
    document.getElementById("mouse").innerHTML = "Obrigado por passar o mouse"
    //alert("TCHARAMMMM")
}

function voltar(){
    document.getElementById("mouse").innerHTML = "Passe o mouse aqui"
    //alert("VOLTEIIII")
}

function load(){
    alert("Página carregada");
}

function funcaoChange(elemento){
    console.log(elemento.value)
}

/*
function clicou(){
    alert("Obrigado por clicar");
}*/


/*function soma(n1, n2){
    return n1 + n2
};

alert(soma(10, 15));*/


//date and time
/*
var d = new Date();
alert(d.getMonth()+1);
*/

// for statement
/*
var count;
for(count = 0; count <= 5; count++){
    console.log(count);
    alert(count);
};*/

// while statement
/*
var count = 0;
while(count < 5){
    console.log(count);
    alert(count);
    //count = count + 1
    count++;
}*/

// if statement
/*
var idade = prompt("Qual a sua idade?")
if (idade >= 18){
    alert("maior de idade")
}else{
    alert("menor de idade")
}*/

//var nome = "Felipe Lopes";
//var ano = "2020";
//alert("Bem-vindo a página de " + nome + ".\n" + 
//"Estamos no ano de " + ano);

//var frutas = [{nome:"maça", cor:"vermelho"},
//{nome: "abacaxi", cor: "amarelo"}] // Array de dicionários
//console.log(frutas); // log da array de dicionário
//alert(frutas[0].cor); // exibe alert da var cor do index 0 - maça

//var frutas = {nome: "maça", cor:"vermelho"} // Dicionário
//console.log(frutas);
//alert("Meu coração é " + frutas.cor)


//console.log(ano.replace("2020","2021")); // substitui a String no log

//var lista = ["maça", "pêra", "laranja"]
//lista.push("uva") // inclui
//console.log(lista[1]) // exibe parametro da variavél no console do navegador
//lista.push("abacaxi"); // inclui
//lista.pop("abacaxi"); // exclui

//console.log(lista.length); // tamanho da array
//console.log(lista.reverse); // inverte ordem da array
//console.log(lista.toString); // conver array em String

//console.log(lista.join(" - ")) // adiciona o - entre a array e transforma em String
