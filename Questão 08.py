# A linguagem de programação nas questões 08 e 09 foi alterada para seguir a lista ao pé da letra
'''
(Algoritmos não-recursivos) Determine a função de complexidade (no pior e melhor caso e no caso
médio), das funções implementadas em Python, apresentadas abaixo, fazendo as considerações
pertinentes.
'''

# Primeiro
'''
Pior caso: Quando o array está completamente bagunçado, com complexidade de O(n^2).
Melhor caso: Quando o array já está ordenado, com complexidade O(n).
Ou seja, o caso médio é O(n^2).
'''
def bubble_sort(A, n):
    for j in range(n):
        for i in range(n - 1):
            if A[i] > A[i + 1]:
                aux = A[i]
                A[i] = A[i + 1]
                A[i + 1] = aux



# Segundo
'''
Pior caso: Quando o array está completamente bagunçado, com complexidade de O(n^2).
Melhor caso: Quando o array já está ordenado, com complexidade O(n).
Ou seja, o caso médio é O(n^2).
'''
def bubble_sort2(A, n):
    troca = True
    while troca:
        troca = False
        for i in range(n - 1):
            if A[i] > A[i + 1]:
                aux = A[i]
                A[i] = A[i + 1]
                A[i + 1] = aux
                troca = True



# Terceiro
'''
Pior caso: quando o loop externo executa n - 1 vezes, o segundo loop executa n - i vezes para cada valor de i, 
e o terceiro loop executa j vezes para cada valor de j, possui complexidade O(n^3).
Melhor caso: Quando o array é pequeno, mas ainda é O(n^3)
Ou seja, o caso médio é O(n^3).
'''
def AlgumaCoisa(n):
    x = 0
    for i in range(1, n):
        for j in range(i + 1, n + 1):
            for k in range(1, j + 1):
                x = x + 1



# Quarto
'''
Pior caso: quando o loop externo executa n - 1 vezes, o segundo loop executa n - i vezes para cada valor de i, 
e o terceiro loop executa j vezes para cada valor de j, possui complexidade O(n^3).
Melhor caso: Quando o array é pequeno, mas ainda é O(n^3)
Ou seja, o caso médio é O(n^3).
'''
def AlgumaCoisa2(n):
    x = 0
    for i in range(1, n + 1):
        for j in range(i + 1, n):
            for k in range(1, j + 1):
                x = x + 1

