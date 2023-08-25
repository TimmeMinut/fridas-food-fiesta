export async function fetchRecipes(query) {
    try {
        const apiUrl = `https://api.spoonacular.com/recipes/complexSearch?apiKey=20239bb5195741a3af38e2e7d263189a&query=${query}`;
        const response = await fetch(apiUrl);

        if (!response.ok) {
            throw new Error(`Error fetching data: ${response.statusText}`);
        }
        const rawData = await response.json();
        return rawData.results;
    } catch (error) {
        console.error('An error occurred while fetching recipes:', error);
        return [];
    }
}


export async function fetchRecipeDetails(id) {
    try {
        const apiUrl = `https://api.spoonacular.com/recipes/${id}/information?apiKey=20239bb5195741a3af38e2e7d263189a`;
        const response = await fetch(apiUrl);
        
        if (!response.ok) {
            throw new Error(`Error fetching data: ${response.statusText}`);
        }
        const rawData = await response.json();
        return rawData;
    } catch (error) {
        console.error('An error occurred while fetching recipe details:', error);
        return null;
    }
}

