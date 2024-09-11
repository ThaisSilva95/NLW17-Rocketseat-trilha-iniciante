## Linguagem de Programação

Maneira de dar instruções ao computador
COmo um lego, você vai utilizaar algoritmo para resolver problemas.

 **Algoritmo**: Sequência de passos lógicos e finitos para resolução de um problema

## Peças de uma linguagem:

    - Comentários 
    - Declaração de variável (const, let)
    - Operadores (atribuição, concatenação, matemático, lógicos)
    - Tipos de dados (string, number, boleano)
    - Esrutura de Dados (functions, object, array)
    - Controle de fluxo (is/else)
    - Estrutura de Repetição (for,while)

## Fases da Resolução do Problema:

    - Coletar dados
    - Processar dados (manipular, alterar, ...)
    - Apresentar dados


// Duas barras é um comentário, ao colocar duas barras a linha não é interpretada

## Tipos de dados
    - Strings (textos): Podem ser escritas dentro de "" '' ``
    - Number (números): 2 ou 1.4
    - Function ()


## Escopo e variáveis:
    - Variávies globais (tudo o que está fora do {} é global) e locais (tudo o que está dentro de {} é um escopo, local): uma caixinha para guardar a informação para usar mais tarde
        let mensagem = "olá mundo"
        let mensagem = 2
        console.log (mensagem)
        //Aqui ele vai imprimir o que estiver na variável "mensagem"

    - Constantes: Não pode ser alterado o valor mais pra frente diferente das varáveis

## Operadores
    - Operador de atribuição de valor (=)
    - Operador de Concatenação (+) junção de uma ou mais strings

## Estruturas de dados 

    ### Arrays: uma lista que contém qualquer tipo de dados, vem em atribuido por []

            let metas = ["thais", "ola"]
            console.log(metas[1] + " " + metas[0])

    ### Objetos: após a atribuição de valor vem a {}

        Atributos 
        Metódos (mesma coisa que a função só que fica dentro do objeto)
        Criação e manipulação de objetos
        Acesso a proriedade de objetos


        let meta = { ///criação de atributos
             value: 'Ler um livro por mês',
             checked: false
            }

            console.log(meta.value) //acesso a propriedade

    ### Function
        Fica fora do objeto


