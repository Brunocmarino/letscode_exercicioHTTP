 const recebeNomePesquisaCockatil = () => {
    let nome = prompt('Insira o nome do cocktail que deseja buscar')
    const pesquisaPeloNomeCocktail = (nome) => {
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${nome}`)
        .then(response => {
            return response.json()
        })
        .then(responseData => {
            console.log(...responseData.drinks)
            
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
        console.log(...responseData.drinks)
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
            console.log(...responseData.drinks)
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
        console.log(...responseData.drinks)
    })
}

 const listaAlcoolicos = () => {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic`)
    .then(response => {
        return response.json()
    })
    .then(responseData => {
        console.log(...responseData.drinks)
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
            console.log(...responseData.ingredients)
        })
    }
    procuraIngrediente(ing)
}

async function randomCocktailRecipe(){
    async function randomCocktailRequest(){   
        const url = "https://www.thecocktaildb.com/api/json/v1/1/random.php"
            const response = await fetch(url)
                            .then((res)=>(res.json()))
                            console.log(response.drinks[0])
        return response.drinks[0]
    } 
 
    function recipe(drink){
    
        const name = drink.strDrink
        const img = drink.strDrinkThumb
        const ingredients = []
        const measures = []
        const setIngredientsAndMeasures = () => {
            if(drink.strIngredient1){
                ingredients.push(drink.strIngredient1)
                measures.push(drink.strMeasure1)
            } 
            if(drink.strIngredient2){
                ingredients.push(drink.strIngredient2)
                measures.push(drink.strMeasure2)
            } 
            if(drink.strIngredient3){
                ingredients.push(drink.strIngredient3)
                measures.push(drink.strMeasure3)
            } 
            if(drink.strIngredient4){
                ingredients.push(drink.strIngredient4)
                measures.push(drink.strMeasure4)
            } 
            if(drink.strIngredient5){
                ingredients.push(drink.strIngredient5)
                measures.push(drink.strMeasure5)
            } 
            if(drink.strIngredient6){
                ingredients.push(drink.strIngredient6)
                measures.push(drink.strMeasure6)
            } 
            if(drink.strIngredient7){
                ingredients.push(drink.strIngredient7)
                measures.push(drink.strMeasure7)
            } 
            if(drink.strIngredient8){
                ingredients.push(drink.strIngredient8)
                measures.push(drink.strMeasure8)
            } 
            if(drink.strIngredient9){
                ingredients.push(drink.strIngredient9)
                measures.push(drink.strMeasure9)
            } 
            if(drink.strIngredient10){
                ingredients.push(drink.strIngredient10)
                measures.push(drink.strMeasure10)
            } 
            if(drink.strIngredient11){
                ingredients.push(drink.strIngredient11)
                measures.push(drink.strMeasure11)
            } 
            if(drink.strIngredient12){
                ingredients.push(drink.strIngredient12)
                measures.push(drink.strMeasure12)
            } 
            if(drink.strIngredient13){
                ingredients.push(drink.strIngredient13)
                measures.push(drink.strMeasure13)
            } 
            if(drink.strIngredient14){
                ingredients.push(drink.strIngredient14)
                measures.push(drink.strMeasure14)
            } 
            if(drink.strIngredient15){
                ingredients.push(drink.strIngredient15)
                measures.push(drink.strMeasure15)
            } 
        }
        setIngredientsAndMeasures()
        let text = `Receita para o drink ${drink.strDrink}:\n`
        for(let i in ingredients){
            text +=  `${measures[i]?`${measures[i]} de`:""} ${ingredients[i]}\n`
        }4
        return text
    }
    const res = await randomCocktailRequest()
    const text = recipe(res)
    console.log(text)
    return text
}

const displayText =  "Escolha uma opção\n"+
                    "1. Pesquisar um drink pelo nome\n"+
                    "2. Lista todas as categorias\n"+
                    "3. Filtra categoria\n"+
                    "4. Pesquisa receita para um drink aleatório\n"+
                    "5. Filtra drinks não alcoolicos\n"+
                    "6. Filtra drinks alcoolicos\n"+
                    "7. Pesquisa informações de um ingrediente\n"+
                    "8. Sair do Programa\n"
let code = Number(prompt(displayText))
while(code!=8){
    switch(code){
        case 1:
            recebeNomePesquisaCockatil()
            alert("Resposta está no console.log")
            break;
        case 2:
            listaCategorias()
            alert("Resposta está no console.log")
            break;
        case 3:
            recebeListaPorCategoria()
            alert("Resposta está no console.log")
            break;
        case 4:
            alert( await randomCocktailRecipe())    
            break;
        case 5:
            listaNaoAlcoolicos()
            alert("Resposta está no console.log")
            break;
        case 6:  
            listaAlcoolicos()
            alert("Resposta está no console.log")
            break;
        case 7: 
            recebeProcuraIngrediente()
            alert("Resposta está no console.log")
            break;
    }
    code = Number(prompt(displayText))
    
}
