/* 

Elabore um algoritmo O(n) de decomposição de um vetor S em três subvetores. Esse algoritmo recebe como 
entrada, além do vetor S, um valor piv pertencente a S, e os índices p e r, 1 ≤ p ≤ r. O algoritmo deve 
rearrumar os elementos em S[p ... r] e retornar dois índices q1 e q2 satisfazendo as seguintes propriedades:
(a) se p ≤ k ≤ q1, então S[k] < piv;
(b) se q1 < k ≤ q2, então S[k] = piv;
(c) se q2 < k ≤ r, então S[k] > piv. 

*/

function decomporVetor(S, piv, p, r) {
    let q1 = p - 1;
    let q2 = r + 1;
    let i = p;

    while (i < q2) {
        if (S[i] < piv) {
            q1++;
            swap(S, i, q1);
            i++;
        } else if (S[i] === piv) {
            i++;
        } else {
            q2--;
            swap(S, i, q2);
        }
    }

    return [q1, q2];
}

function swap(arr, i, j) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

const vetor = [5, 2, 8, 5, 1, 6, 3];
const piv = 5;
const indices = decomporVetor(vetor, piv, 0, vetor.length - 1);

console.log("Vetor após a partição:", vetor);
console.log("q1:", indices[0], "q2:", indices[1]);

// A complexidade de tempo deste algoritmo é O(n)