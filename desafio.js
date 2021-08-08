let olympicsMedalTable = [
    { id: 1, 
      country: "BRASIL", 
      gold: 7, 
      silver: 6, 
      bronze: 6, 
      continent: "AMERICA DO SUL" },
    { id: 2, 
      country: "USA", 
      gold: 46, 
      silver: 37, 
      bronze: 17, 
      continent: "AMERICA DO NORTE" },
    { id: 3, 
      country: "CHINA", 
      gold: 26, 
      silver: 18, 
      bronze: 26, 
      continent: "ASIA" },
    { id: 4, 
      country: "RUSSIA", 
      gold: 19, 
      silver: 18, 
      bronze: 19, 
      continent: "EUROPA" },
    { id: 5, 
      country: "REINO UNIDO", 
      gold: 27, 
      silver: 23, 
      bronze: 17, 
      continent: "EUROPA" },
    { id: 6, 
      country: "ALEMANHA", 
      gold: 17, 
      silver: 10, 
      bronze: 15, 
      continent: "EUROPA" },
    { id: 7,
      country: "JAPÃO", 
      gold: 12, 
      silver: 8, 
      bronze: 21, 
      continent: "ASIA" },
    { id: 8, 
      country: "ARGENTINA", 
      gold: 3, 
      silver: 1, 
      bronze: 0, 
      continent: "AMERICA DO SUL" },
    { id: 9, 
      country: "ITALIA", 
      gold: 8, 
      silver: 12,
      bronze: 8, continent: "EUROPA" },
    { id: 10, 
      country: "QUÊNIA", 
      gold: 6,
      silver: 6,
      bronze: 1, 
      continent: "AFRICA" },
];

Array.prototype.customFind = function (item) {
     return {
         country : item.country === "QUÊNIA"
     }
}

Array.prototype.customSome = function (item) {
    return {
        continent : item.continent === "AMERICA DO SUL",
        goldenMedal : item.gold >= 20
    }
    
}

Array.prototype.customFilter = function (item) {
   
    if(item.gold > 10)
    return item;

    return [];
}

Array.prototype.customMap = function (item) {
    return{
        country = item.country,
        medals = item.gold + item.silver + item.bronze
    }
}

Array.prototype.customReduce = function (prevVal, elem) {
    return prevVal + elem.gold;
}

// Código modelo utilizando filter, map e reduce

const resultFilterMapReduce = olympicsMedalTable.filter(i => i.continent === "ASIA") // JAPÃO e CHINA 
    .map(i => i.gold) // 26 e 12
    .reduce((total, quantity) => total + quantity); // 38

console.log(`Medalhas de Ouro no continente Asiático: ${resultFilterMapReduce}`);


// Implemente as funções customizadas - customFilter, customMap e customReduce e verique se o retorno é igual ao do código modelo

const resultByCustomFilterMapReduce = olympicsMedalTable.customFilter(i => i.continent === "ASIA")
    .customMap(i => i.gold)
    .customReduce((total, quantity) => total + quantity);

console.log(`Resultado custom - Medalhas de Ouro no continente Asiático: ${resultByCustomFilterMapReduce}`);

/* DESAFIOS - CONCLUA AS FUNÇÕES customSome, customFind E UTILIZANDO TODAS AS FUNÇÕES 'CUSTOM' CONCLUA OS DESAFIOS ABAIXO: */

// 1 - Crie um algoritmo que encontre o único pais do continente Africano 
const paisAfricano = olympicsMedalTable.find(african => african.country === "QUÊNIA")
console.log(paisAfricano);

// 2 - Crie um algoritmo que retorne o total de medalhas por país
const medalhasPorPais = olympicsMedalTable.map(function(item){
    return{
        country = item.country,
        medals = item.gold + item.silver + item.bronze
    }
});

console.log(medalhasPorPais);

// 3 - Crie um algoritmo para encontrar os países que conquistaram mais que 10 medalhas de ouro
function goldenMedal(item){
    if(item.gold > 10)
    return item;
}  

const paisesCom10MedalhasOuroNoMinimo = olympicsMedalTable.filter(goldenMedal);
paisesCom10MedalhasOuroNoMinimo.forEach(gold => {console.log(gold)})


// 4 - Crie um algoritmo para encontrar os países que conquistaram no minímo 30 medalhas (Ouro, Prata e Bronze)
function totalMedals(item){
    if((item.gold + item.silver + item.bronze) >= 30)
        return item;
    
}

const paisesCom30MedalhasNoMinimo = olympicsMedalTable.filter(totalMedals);
paisesCom30MedalhasNoMinimo.forEach(medals => {console.log(medals)})

// 5 - Crie um algoritmo para verificar se o continente América do Sul conquistou pelo menos 20 medalhas de ouro 
const paisesComPeloMenos20MedalhasDeOuro = olympicsMedalTable.some(function(item){

    return{
        continent : item.continent === "AMERICA DO SUL",
        goldenMedal : item.gold >= 20
    }
});

console.log(paisesComPeloMenos20MedalhasDeOuro);
