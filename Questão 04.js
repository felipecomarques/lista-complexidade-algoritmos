/*
Dado um array nums de tamanho n, retorne o elemento majoritário. O elemento majoritário é
aquele que aparece mais de [n/2] vezes. Você pode assumir que o elemento majoritário sempre
existe no array.
*/

function encontrar(nums) {
    let candidato = null;
    let contagem = 0;

    for (let num of nums) {
        if (contagem === 0) {
            candidato = num;
        }

        contagem += (num === candidato) ? 1 : -1;
    }

    return candidato;
}


const array = [2, 2, 1, 1, 1, 2, 2];
const elementoMajoritario = encontrar(array);

console.log(elementoMajoritario);

// A complexidade de tempo deste algoritmo é O(n)
