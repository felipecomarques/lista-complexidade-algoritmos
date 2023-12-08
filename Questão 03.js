/*
Dado um um vetor de números inteiros e um inteiro X, retorne os índices dos dois números
de forma que somados é igual a X. Você pode assumir que cada entrada teria exatamente
uma solução e não pode usar o mesmo elemento duas vezes. Você pode retornar a resposta em
qualquer ordem.
*/

function IndiceSoma(arr, alvo) {
    const map = {};

    for (let i = 0; i < arr.length; i++) {
        const complemento = alvo - arr[i];

        if (map[complemento] !== undefined) {
            return [map[complemento], i];
        }

        map[arr[i]] = i;
    }
    return [];
}

const vetor = [2, 7, 11, 15];
const alvo = 9;
const indices = IndiceSoma(vetor, alvo);

console.log(indices);

// A complexidade de tempo deste algoritmo é O(n)
