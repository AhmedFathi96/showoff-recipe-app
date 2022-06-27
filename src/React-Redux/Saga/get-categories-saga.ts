import { call, put, takeLatest  } from "redux-saga/effects";
import { getCategoriesAction } from "../Actions";
import { getCategories } from "../../Axios/get-categories";
import { getCategoriesFailed,getCategoriesSucceeded } from "../Actions/categories-action";
import { store } from "react-notifications-component";

function* getCategoriesSaga():any {

    try {
        const res = yield call(getCategories);
        console.log("=====================>",res.data.categories)
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
        yield put(getCategoriesSucceeded(res.data.categories));
    } catch (e:any) {
        yield put(getCategoriesFailed(e));
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

export function* watchGetCategoriesSaga() {
    yield takeLatest(getCategoriesAction.requested, getCategoriesSaga);
}
