import { fetchRecipes } from "./fetchApi.js";
import { fetchRecipeDetails } from "./fetchApi.js";


// Skapa widgetens innehåll när DOM har laddat klart
document.addEventListener("DOMContentLoaded", async () => {
    const apiSection = document.querySelector("#api");

    // Title
    const title = document.createElement("h3");
    title.innerHTML = "Didn't find anything you like? <br> Try searching!";
    apiSection.appendChild(title);

    // Input field
    const input = document.createElement("input");
    input.type = "text";
    input.placeholder = "Enter query";
    apiSection.appendChild(input);

    // Search button
    const button = document.createElement("button");
    button.textContent = "Search";
    apiSection.appendChild(button);

    // Resultatflöde
    const resultFeed = document.createElement("div");
    resultFeed.id = "resultFeed";
    apiSection.appendChild(resultFeed);

    // Sökning
    // Input
    input.addEventListener("keypress", async (event) => {
        if (event.key === "Enter") {
            try {
                const results = await fetchRecipes(input.value);
                createArticles(results, resultFeed);
            } catch (error) {
                console.error('An error occurred during search:', error);
            }
        }
    });

    // Button
    button.addEventListener("click", async () => {
        try {
            const results = await fetchRecipes(input.value);
            createArticles(results, resultFeed);
        } catch (error) {
            console.error('An error occurred during search:', error);
        }
    });

    // Se detaljer för ett recept
    resultFeed.addEventListener("click", async (event) => {
        event.stopPropagation();
        const recipe = event.target.closest("article");
        if (recipe) {
            const id = recipe.querySelector("#id");
            if (id) {
                try {
                    const details = await fetchRecipeDetails(id.textContent)
                    if (details) {
                        displayRecipe(details, resultFeed)
                    } else {
                        console.error('Could not fetch recipe details.');
                    }
                } catch (error) {
                    console.error('An error occurred while fetching recipe details:', error);
                }
            }
        }
    });

});


// Skapa och lägg till artiklar av resultaten
function createArticles(recipeList, resultFeed) {

    // Rensar ev. tidigare sökresultat
    resultFeed.innerHTML = "";

    recipeList.forEach(recipe => {
        const article = document.createElement("article");

        const p = document.createElement("p");
        p.id = "id";
        p.textContent = recipe.id;
        article.appendChild(p);

        const img = document.createElement("img");
        img.src = recipe.image;
        img.alt = recipe.title;
        article.appendChild(img);

        const h3 = document.createElement("h3");
        h3.textContent = recipe.title;
        article.appendChild(h3);

        resultFeed.appendChild(article);
    });
}

// Få upp detaljerad information om ett recept
function displayRecipe(details, resultFeed) {

    // Rensar sökresultat
    resultFeed.innerHTML = "";

    const recipe = document.createElement("article");
    recipe.id = "displayed"

    const img = document.createElement("img");
    img.src = details.image;
    recipe.appendChild(img);

    const title = document.createElement("h3");
    title.textContent = details.title;
    recipe.appendChild(title);

    const instructions = document.createElement("p");
    instructions.id = "instructions";
    instructions.innerHTML = details.instructions;
    recipe.appendChild(instructions)

    const servings = document.createElement("p");
    servings.id = "servings";
    servings.textContent = `Servings: ${details.servings}`;
    recipe.appendChild(servings);


    const ingredients = document.createElement("ul");
    ingredients.id = "ingredients"
    details.extendedIngredients.forEach(ingredient => {
        const li = document.createElement("li");
        li.textContent = `${ingredient.amount} ${ingredient.unit} ${ingredient.name}`;
        ingredients.appendChild(li);
    });
    recipe.appendChild(ingredients);

    resultFeed.appendChild(recipe);
}
