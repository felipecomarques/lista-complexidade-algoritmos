/*
Dado um array ordenado de inteiros distintos e um valor alvo, retorne o índice se o alvo for
encontrado. Caso contrário, retorne o índice onde estaria se fosse inserido na ordem.

Você deve escrever um algoritmo com complexidade de tempo de execução O(logn).

# Exemplo 1:
Entrada: nums = [1 ,3 ,5 ,6] , alvo = 5
Saida: 2
# Exemplo 2:
Entrada : nums = [1 ,3 ,5 ,6] , alvo = 2
Saida: 1
*/

function procurar(nums, alvo) {
    let esquerda = 0;
    let direita = nums.length - 1;

    while (esquerda <= direita) {
        const meio = Math.floor((esquerda + direita) / 2);

        if (nums[meio] === alvo) {
            return meio;
        } else if (nums[meio] < alvo) {
            esquerda = meio + 1;
        } else {
            direita = meio - 1;
        }
    }

    return esquerda;
}

const nums1 = [1, 3, 5, 6];
const alvo1 = 5;
console.log(procurar(nums1, alvo1));

const nums2 = [1, 3, 5, 6];
const alvo2 = 2;
console.log(procurar(nums2, alvo2));
