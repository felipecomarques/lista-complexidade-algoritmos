/*
Dado um array inteiro nums classificado em ordem não decrescente, retorne um array dos quadrados 
de cada número classificado em ordem não decrescente.
*/

// Solução Simples com complexidade O(n log n)
function quadradosOrdenadosSIMPLES(nums) {
    const quadrados = nums.map(num => num * num);
    quadrados.sort((a, b) => a - b);
    return quadrados;
}

const nums = [-4, -1, 0, 3, 10];
const resultadoSimples = quadradosOrdenadosSIMPLES(nums);
console.log(resultadoSimples);

// -----------------------------------------------------------------------------

// Solução extra com complexidade O(n)
function quadradosOrdenadosCOMPLEXO(nums) {
    const n = nums.length;
    const quadrados = new Array(n);

    let left = 0;
    let right = n - 1;
    let index = n - 1;

    while (left <= right) {
        const leftSquare = nums[left] * nums[left];
        const rightSquare = nums[right] * nums[right];

        if (leftSquare > rightSquare) {
            quadrados[index] = leftSquare;
            left++;
        } else {
            quadrados[index] = rightSquare;
            right--;
        }

        index--;
    }

    return quadrados;
}

const resultado = quadradosOrdenadosCOMPLEXO(nums);
console.log(resultado);
