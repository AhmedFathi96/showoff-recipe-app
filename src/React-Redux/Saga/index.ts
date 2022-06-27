import { all } from "redux-saga/effects";

import { watchGetCategoriesSaga } from './get-categories-saga';
import { watchGetRecipeDetailsSaga } from "./get-recipe-details-saga";
import { watchGetRecipeListSaga } from "./get-recipe-list-saga";



export default function* rootSaga() {
    yield all([
        watchGetCategoriesSaga(),
        watchGetRecipeListSaga(),
        watchGetRecipeDetailsSaga()
    ]);
}
