/* 
Analise os algoritmos abaixo de maneira mais justa possível. Definir o custo dos laços em termos
de n.
*/

// 1) Possui complexidade O(n^2)
let sum = 0;
for (let i = 0; i < n; i *= 2) {
    for (let j = 1; j <= n; j += i) {
        sum++;
    }
}

// 2) Possui complexidade O(n log n)
sum = 0;
for (let i = 1; i < n; i *= 2) {
    for (let j = 1; j <= n; j++) {
        sum++;
    }
}

// 3) Possui complexidade indefinida, pois se torna um loop infinito
sum = 0;
for (let i = 0; i < n; i *= 2) {
    for (let j = 1; j <= n; j += i) {
        sum++;
    }
}
