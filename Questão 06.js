/* 
Uma subsequência é palíndroma se ela é igual lendo da direita para esquerda ou lendo da esquerda
para direita. Por exemplo, a sequência (ACGTGTCAAAATCG) possui muitas subsequências
palíndromas, como (ACGCA) e (AGTGA). Mas a subsequência (ACT) não é palíndroma.
Escreva um algoritmo O(n^2) que recebe uma sequência S[1...n] e retorna a subsequência 
palíndroma de tamanho máximo.
*/

function PalindromoMax(S) {
    const n = S.length;
    const dp = Array.from({ length: n }, () => Array(n).fill(0));

    for (let i = 0; i < n; i++) {
        dp[i][i] = 1;
    }

    for (let tamanho = 2; tamanho <= n; tamanho++) {
        for (let i = 0; i <= n - tamanho; i++) {
            const j = i + tamanho - 1;

            if (S[i] === S[j] && tamanho === 2) {
                dp[i][j] = 2;
            } else if (S[i] === S[j]) {
                dp[i][j] = dp[i + 1][j - 1] + 2;
            } else {
                dp[i][j] = Math.max(dp[i][j - 1], dp[i + 1][j]);
            }
        }
    }

    const resultado = [];
    let i = 0;
    let j = n - 1;

    while (i <= j) {
        if (S[i] === S[j]) {
            resultado.push(S[i]);
            if (i !== j) {
                resultado.unshift(S[j]);
            }
            i++;
            j--;
        } else if (dp[i][j - 1] > dp[i + 1][j]) {
            j--;
        } else {
            i++;
        }
    }

    return resultado.join('');
}

const sequencia = "ACGTGTCAAAATCG";
const resultado = PalindromoMax(sequencia);

console.log(resultado);

// Possui complexidade de O(n^2)
