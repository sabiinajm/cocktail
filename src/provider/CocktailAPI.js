class CocktailAPI {
    path = 'https://www.thecocktaildb.com/api/json/v1/1'
    randomCocktail = function() {
        return fetch(`${this.path}/random.php`)
            .then(res => res.ok ? res.json() : {drinks:[]})
            .then(json => this.transform(json.drinks[0]))
    }
    byFirstLetter = function(letter = 'a') {
        return fetch(`${this.path}/search.php?f=${letter}`)
            .then(res => res.json())
            .then(json => json.drinks.map(obj => this.transform(obj)))
    }
    detailsById = function(id = 0) {
        return fetch(`${this.path}/lookup.php?i=${id}`)
            .then(res => res.json())
            .then(json => this.transform(json.drinks[0]))
    }

    transform = function(obj = {}) {
        return {
            id: obj.idDrink,
            name: obj.strDrink,
            cat: obj.strCategory,
            alc: obj.strAlcoholic,
            glass: obj.strGlass,
            desc: obj.strInstructions,
            img: obj.strDrinkThumb,
            ingr: Object.entries(obj).filter(e => e[0].includes("strIngredient") && e[1] ).map(e => e[1]),
            meas: Object.entries(obj).filter(e => e[0].includes("strMeasure") && e[1] ).map(e => e[1])
        }
    }
}

export default CocktailAPI