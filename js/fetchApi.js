export async function fetchRecipes(query) {
    
    const apiUrl = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&query=${query}`;

    const response = await fetch(apiUrl);
    const rawData = await response.json();

    return rawData.results;
}

export async function fetchRecipeDetails(id) {

    const apiUrl = `https://api.spoonacular.com/recipes/${id}/information?apiKey=${apiKey}`

    const response = await fetch(apiUrl);
    const rawData = await response.json();

    return rawData;
}

