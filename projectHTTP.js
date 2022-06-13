randomCocktailRecipe()

async function randomCocktailRecipe(){
    async function cocktailRequest(){   
        const url = "https://www.thecocktaildb.com/api/json/v1/1/random.php"
            const response = await fetch(url)
                            .then((res)=>(res.json()))
        return response.drinks[0]
    } 
 
    function recipe(drink){
        
        const name = drink.strDrink
        const img = strDrinkThumb
        const srt = drink.strIngredient1
        const ingredients = []
        while(str !=null){
            console.log("aa")
            ingredients.push(`drink.${str}`)
            console.log(ingredients)
        }
    }
    const res = await cocktailRequest()
    console.log(res)
}