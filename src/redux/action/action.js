import {UPDATE_LOADING, UPDATE_ROUTE, UPDATE_SELECTED_ROW} from "../constants/ActionTypes";

const updateSelectedRow = (selectedRow) => {
    return {
        type: UPDATE_SELECTED_ROW,
        selectedRow: selectedRow
    }
}

const updateLoading = (loading) => {
    return {
        type: UPDATE_LOADING,
        loading: loading
    }
}

const updateRoute = (route) => {
    return {
        type: UPDATE_ROUTE,
        route: route
    }
}

export {updateSelectedRow, updateLoading, updateRoute}