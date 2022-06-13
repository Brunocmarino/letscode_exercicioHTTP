
const recebeNomePesquisaCockatil = () => {
    let nome = prompt('Insira o nome do cocktail que deseja buscar')
    const pesquisaPeloNomeCocktail = (nome) => {
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${nome}`)
        .then(response => {
            return response.json()
        })
        .then(responseData => {
            console.log(responseData)
        })
    }
    pesquisaPeloNomeCocktail(nome)
}  


const listaCategorias = () => {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list`)
    .then(response => {
        return response.json()
    })
    .then(responseData => {
        console.log(responseData)
    })
}

const recebeListaPorCategoria = () => {
    let cat =  prompt('Insira a categoria')
    const listaPorCategorias = (cat) => {
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${cat}`)
        .then(response => {
            return response.json()
        })
        .then(responseData => {
            console.log(responseData)
        })
    }
    listaPorCategorias(cat)
}

const listaNaoAlcoolicos = () => {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic`)
    .then(response => {
        return response.json()
    })
    .then(responseData => {
        console.log(responseData)
    })
}

const listaAlcoolicos = () => {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic`)
    .then(response => {
        return response.json()
    })
    .then(responseData => {
        console.log(responseData)
    })
}

const recebeProcuraIngrediente = () => {
    let ing =  prompt('Insira um ingrediente')
    const procuraIngrediente = (ing) => {
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?i=${ing}`)
        .then(response => {
            return response.json()
        })
        .then(responseData => {
            console.log(responseData)
        })
    }
    procuraIngrediente(ing)
}