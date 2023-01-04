import {takeEvery, put, call} from 'redux-saga/effects'
import {UPDATE_SELECTED_ROW} from "../constants/ActionTypes";
import {updateLoading, updateRoute} from "../action/action";
import {fetchRoute} from "../../http/url";

export function* sagaWatcher() {
    yield takeEvery(UPDATE_SELECTED_ROW, sagaWorker)
}

function* sagaWorker(action) {
    const {fromLat, fromLng, beforeLat, beforeLng} = action.selectedRow
    yield put(updateLoading(true))
    const payload = yield call(fetchRoute, fromLat, fromLng, beforeLat, beforeLng)
    yield put(updateRoute(payload))
    yield put(updateLoading(false))
}
