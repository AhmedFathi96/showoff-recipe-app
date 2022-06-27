

export const getCategoriesURL = `https://www.themealdb.com/api/json/v1/1/categories.php`;
export const getRecipeListURL = (category:string) => `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`;
export const getRecipeDetailsURL = (id:string) =>`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;























