export const genericAction = (action:string) => ({
    fulfilled: `${action}-FULFILLED`,
    rejected: `${action}-REJECTED`,
    requested: `${action}-REQUESTED`
})


const getCategories = 'GET-CATEGORIES';
export const getCategoriesAction = genericAction(getCategories);

const getRecipeList = 'GET-RECIPE-LIST';
export const getRecipeListAction = genericAction(getRecipeList);

const getRecipeDetails = 'GET-RECIPE-DETAILS';
export const getRecipeDetailsAction = genericAction(getRecipeDetails);