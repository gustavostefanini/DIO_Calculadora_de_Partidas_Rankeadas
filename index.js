let vitorias = prompt("Quantas vitórias o jogador tem?");
let derrotas = prompt("Quantas derrotas o jogador tem?");

let saldoVitorias = calcularRankeadas(vitorias, derrotas);

if(saldoVitorias <= 10){
	nvl = "Ferro";
}else if(saldoVitorias <= 20){
	nvl = "Bronze";
}else if(saldoVitorias <= 50){
	nvl = "Prata";
}else if(saldoVitorias <= 80){
        nvl = "Ouro";
}else if(saldoVitorias <= 90){
        nvl = "Diamante";
}else if(saldoVitorias <= 100){
        nvl = "Lendário";
}else if(saldoVitorias > 100){
        nvl = "Imortal";
}

console.log("O Herói tem de saldo "+saldoVitorias+" Vitórias e está no nível "+nvl)

function calcularRankeadas(vitorias, derrotas){
	return vitorias - derrotas;
}
