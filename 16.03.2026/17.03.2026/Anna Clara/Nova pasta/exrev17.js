//Criar um programa com uma condicional composta para avaliar o desempenho escola entre 'Excelente', 'Ótimo', ' Bom', 'Regular', ou 'Ruim'. Dependendo da nota
let nota = 70;
if(nota >=90){
    console.log("excelente")
} else if (nota < 90 && nota >=75){
    console.log("Ótimo")
} else if (nota < 75 && nota >=65) {
    console.log("bom")
} else if (nota < 65 && nota >=50 ){
    console.log("regular")
} else {
    console.log("ruim")
}