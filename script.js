let num = document.querySelector('input#fnum') // Seleciona o input onde é adicionado o número
let lista = document.querySelector('select#flista') // Seleciona a lsita onde é armazenado o número
let res = document.querySelector('div#res') // Seleciona o resultado na div correspondente
let valores = [] // Armazena os valores dentro do array


function isNumero (n) { // Verifica se o número atende aos critérios estabelecidos
    if(Number(n) >= 1 && Number(n) <= 100) { // Se o número em n for maor que um e menor que 100
        return true // verdadeiro
    } else { // Senão
        return false //Falso
    }
}

function inLista (n, l) { // Verifica se o número já está na lista
    if(l.indexOf(Number(n)) != -1) { // se o número n for encontrado na lista
        return true // Verdadeiro
    } else { // Senão 
        return false // Falso
    }
}



function adicionar() {
    if(isNumero(num.value) && !inLista(num.value, valores)) { // Se for um número e não estiver na lista
        valores.push(Number(num.value)) // Adiciona o número ao vetor 'valores'
        let item = document.createElement('option') // Cria o option e adiciona o valor dentro do Select
        item.text = `Valor ${num.value} adicionado.` // Informa que o valor foi adicionado ao lado dele na lista
        lista.appendChild(item) // Adiciona o item na lista dentro do select
        res.innerHTML = ''
    } else {
        alert('Valor inválido ou já cadastrado') // Senão vai exiir essa mensagem 
    }
    num.value = '' // Limpa o input após clicar em adicionar
    num.focus() // Após limpar o input ele retoa o foco nele
}

function finalizar() {
    // Verifica se a lista de valores está vazia
    if (valores.length == 0) {
        // Se estiver vazia, exibe um alerta informando que é necessário adicionar valores
        alert('Adicione valores antes de finalizar')
    } else {
        // Se a lista não estiver vazia, começamos a análise dos números
        let tot = valores.length // Total de números cadastrados
        let maior = valores[0]   // Inicializa o maior valor como o primeiro da lista
        let menor = valores[0]   // Inicializa o menor valor como o primeiro da lista
        let soma = 0             // Inicializa a soma em 0, será usada para somar todos os números
        let media = 0            // Inicializa a média em 0, será calculada após a soma

        // Loop que percorre todos os elementos da lista 'valores'
        for (let pos in valores) {
            // Soma o valor atual ao total da soma
            soma += valores[pos]

            // Verifica se o valor atual é maior do que o valor armazenado em 'maior'
            if (valores[pos] > maior) {
                maior = valores[pos] // Se for maior, atualiza o valor de 'maior'
            }

            // Verifica se o valor atual é menor do que o valor armazenado em 'menor'
            if (valores[pos] < menor) {
                menor = valores[pos] // Se for menor, atualiza o valor de 'menor'
            }
        }

        // Calcula a média dos valores, dividindo a soma pelo total de elementos
        media = soma / tot

        // Limpa o conteúdo da div de resultados para atualizar com novos dados
        res.innerHTML = ''

        // Exibe o total de números cadastrados
        res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados.</p>`

        // Exibe o maior valor encontrado
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`

        // Exibe o menor valor encontrado
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`

        // Exibe a soma de todos os valores
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`

        // Exibe a média dos valores
        res.innerHTML += `<p>A média dos valores é ${media}.</p>`
    }
}
