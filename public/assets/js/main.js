const modal = document.getElementById('modal')

const lookupCocktail = (id) => {
    // console.log(id)
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
        // fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=12450`)
        .then(data => data.json())
        .then(data => {
            console.log(data)
            modal.classList.toggle('show')
            let ingredients = []
            let meshure = []
            for (let item in data.drinks[0]) {
                console.log(item)
                // console.log(item.includes('strIngredient'))
                if (item.includes('strIngredient')) {
                    if (data.drinks[0][item] != null) {
                        ingredients.push(data.drinks[0][item])
                    }
                }
                if (item.includes('strMeasure')) {
                    if (data.drinks[0][item] != null) {
                        meshure.push(data.drinks[0][item])
                    }
                }
            }
            // console.log(ingredients)
            // console.log(meshure)
            modal.innerHTML = `
            <figure>
            <img src=${data.drinks[0].strDrinkThumb} alt=${data.drinks[0].strDrink} >
            <figcaption>
                <h2>${data.drinks[0].strDrink}</h2>
                <h4>Zutaten</h4>
                    <ul>
                    ${ingredients.map((inc, i) => `<li>${meshure[i]} ${inc}</li>`).join('')}
                    </ul>
            </figcaption>
            </figure>
            `
        })
}