# A linguagem de programação nas questões 08 e 09 foi alterada para seguir a lista ao pé da letra
'''
(Algoritmos recursivos) Determine a função de complexidade, das funções recursivas apresentadas
abaixo, fazendo as considerações que considerar pertinente.
'''

# Primeira
'''
No pior caso, essa função tem complexidade O(n^3), pelo custo n^3 de percorrer. 
A chamada recursiva ocorre n/3.
'''
def Pesquisa1(A, n):
    if n > 1:
        InspecioneNElementos = n * n * n
        Pesquisa1(A, n // 3)



# Segunda
'''
No pior caso, essa função tem complexidade O(log5 n). 
A chamada recursiva descarta 2/5 dos elementos a cada iteração.
'''
def Pesquisa2(A, n):
    if n <= 1:
        return
    else:
        Pesquisa2(A, 3 * n // 5)



# Terceira
'''
No pior caso, essa função tem complexidade O(n log n). 
A chamada recursiva descarta 1/3 dos elementos a cada iteração.
'''
def Pesquisa3(A, n):
    if n <= 1:
        return
    else:
        Pesquisa3(A, 2 * n // 3)


# Magica !!
'''
As funções fazem uma ordenação parecida com Quick sort
Pior caso: o pivô pode resultar em uma partição desequilibrada, tendo complexidade O(n^2).
Melhor caso: pivô divide o array ao meio, a complexidade será O(n log n).
'''
class Item :
    def __init__ ( self , Chave ) :
        self . Chave = Chave

def Enigma2 (A , m , n , i , j ) :
    x = A [( i + j ) // 2]
    while True :
        while x . Chave > A [ i ]. Chave :
            i += 1
        while x . Chave < A [ j ]. Chave :
            j -= 1
        if i <= j :
            A [ i ] , A [ j] = A [ j ] , A [ i ]
            i += 1
            j -= 1
        if i > j :
            break

def Enigma1 (A , m , n ) :
    i , j = 0 , 0
    Enigma2 (A , m , n , i , j )
    if m < j :
        Enigma1 (A , m , j )
    if i < n :
        Enigma1 (A , i , n )
