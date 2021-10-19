const arr1 = [15, 2, 7];
const arr2 = [5, 27, 56, 4 ,6, 7, 9];

let arrPiccolo
let arrGrande

if (arr1.length === arr2.length) {
    console.log('I due array sono di uguale lunghezza')
} else if (arr1.length < arr2.length) {
    arrPiccolo = arr1
    arrGrande = arr2
} else if (arr1.length > arr2.length) {
    arrGrande = arr1
    arrPiccolo = arr2
}

// calcolo la differenza
const numbersToAdd = arrGrande - arrPiccolo

// aggiungo numeri casuali finchè arr1.length === arr2.length
while (arrPiccolo.length < arrGrande.length) {
    arrPiccolo.push(Math.round(Math.random() * 10))
}

console.log(arrPiccolo)
console.log(arrGrande)