import { call, put, takeLatest  } from "redux-saga/effects";
import { getRecipeListAction } from "../Actions";
import { getRecipeListAPI } from "../../Axios/get-recipe-list";
import { getRecipeListFailed,getRecipeListSucceeded,getRecipeList } from "../Actions/recipe-list-action";
import { store } from "react-notifications-component";
import { union } from "ts-action";

const actionType = union(getRecipeList);

function* getRecipeListSaga(action: typeof actionType.actions):any {

    try {
        const res = yield call(getRecipeListAPI,action.payload.id);
        yield put(getRecipeListSucceeded(res.data.meals));
    } catch (e:any) {
        yield put(getRecipeListFailed(e));
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

export function* watchGetRecipeListSaga() {
    yield takeLatest(getRecipeListAction.requested, getRecipeListSaga);
}
