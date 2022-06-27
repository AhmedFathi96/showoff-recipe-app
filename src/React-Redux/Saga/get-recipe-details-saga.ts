import { call, put, takeLatest  } from "redux-saga/effects";
import { getRecipeDetailsAction } from "../Actions";
import { getRecipeDetailsAPI } from "../../Axios/get-recipe-details";
import { getRecipeDetails,getRecipeDetailsFailed,getRecipeDetailsSucceeded } from "../Actions/recipe-details-action";
import { store } from "react-notifications-component";
import { union } from "ts-action";

const actionType = union(getRecipeDetails);


function* getRecipeDetailsSaga(action: typeof actionType.actions):any {

    try {
        const res = yield call(getRecipeDetailsAPI,action.payload.id);
        console.log("details =====================>",res.data.meals)
        // const re = res.data.categories.map((cat:any) =>{
        //     const result = Object.keys(cat).map((key) => [key, cat[key]]);
        //     return result.map(arr=>{
        //         return arr[0] === 'strCategoryThumb'?{
        //             value:arr[1],
        //             type:"image"
        //         }:{
        //             value:arr[1],
        //             type:"string"
        //         }
        //     })

        // })
        yield put(getRecipeDetailsSucceeded(res.data.meals));
    } catch (e:any) {
        yield put(getRecipeDetailsFailed(e));
        store.addNotification({
            title: "Error Message!",
            message: "Something went wrong",
            type: "danger",
            insert: "top",
            container: "top-left",
            animationIn: ["animated", "fadeIn"],
            animationOut: ["animated", "fadeOut"],
            dismiss: {
                duration: 5000,
                onScreen: true
            }
        });
    } 
}

export function* watchGetRecipeDetailsSaga() {
    yield takeLatest(getRecipeDetailsAction.requested, getRecipeDetailsSaga);
}
