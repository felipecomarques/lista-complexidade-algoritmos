/*
    Faça um algoritmo de divisão e conquista para multiplicar duas matrizes quadradas (ou seja,
    o número de linhas é igual ao número de colunas), dividindo cada matriz em 9 submatrizes
    quadradas. Calcule a complexidade de tempo em notação assintótica.
*/

function multiplyMatrices(A, B) {
    if (A.length === 0 || B.length === 0)
        return [];

    const n = A.length;
    const subMatricesA = divideMatrix(A, 3);
    const subMatricesB = divideMatrix(B, 3);

    const subProducts = [];
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            subProducts.push(multiplySubMatrices(subMatricesA[i], subMatricesB[j]));
        }
    }

    const C = combineProducts(subProducts);
    return C;
}

function divideMatrix(A, n) {
    const subMatrices = [];
    for (let i = 0; i < A.length / n; i++) {
        subMatrices.push(A.slice(i * n, (i + 1) * n));
    }
    return subMatrices;
}

function multiplySubMatrices(A, B) {
    const C = [];
    for (let i = 0; i < A.length; i++) {
        C.push([]);
        for (let j = 0; j < B[0].length; j++) {
            C[i].push(0);
            for (let k = 0; k < A[0].length; k++) {
                C[i][j] += A[i][k] * B[k][j];
            }
        }
    }
    return C;
}

function combineProducts(subProducts) {
    const C = [];
    for (let i = 0; i < subProducts[0].length; i++) {
        C.push([]);
        for (let j = 0; j < subProducts[0][0].length; j++) {
            C[i].push(0);
            for (let k = 0; k < 3; k++) {
                for (let l = 0; l < 3; l++) {
                    C[i][j] += subProducts[k][i][j] * subProducts[l][i][j];
                }
            }
        }
    }
    return C;
}

const A = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
const B = [[10, 11, 12], [13, 14, 15], [16, 17, 18]];

const C = multiplyMatrices(A, B);

console.log(C)

// A complexidade de tempo deste algoritmo é O(n^3)