export async function fetchRecipes(query) {
    
    const apiUrl = `https://api.spoonacular.com/recipes/complexSearch?apiKey=20239bb5195741a3af38e2e7d263189a&query=${query}`;

    const response = await fetch(apiUrl);
    const rawData = await response.json();

    return rawData.results;
}

export async function fetchRecipeDetails(id) {

    const apiUrl = `https://api.spoonacular.com/recipes/${id}/information?apiKey=20239bb5195741a3af38e2e7d263189a`

    const response = await fetch(apiUrl);
    const rawData = await response.json();

    return rawData;
}

