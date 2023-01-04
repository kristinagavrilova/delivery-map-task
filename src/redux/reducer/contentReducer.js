import {UPDATE_LOADING, UPDATE_SELECTED_ROW, UPDATE_ROUTE} from "../constants/ActionTypes";

const INITIAL_STATE = {
        data: [
        {
            key: 1,
            fromLat: '59.84660399',
            fromLng: '30.29496392',
            beforeLat: '59.82934196',
            beforeLng: '30.42423701'
        },
        {
            key: 2,
            fromLat: '59.82934196',
            fromLng: '30.42423701',
            beforeLat: '59.82761295',
            beforeLng: '30.41705607'
        },
        {
            key: 3,
            fromLat: '59.83567701',
            fromLng: '30.38064206',
            beforeLat: '59.84660399',
            beforeLng: '30.29496392'
        },
        {
            key: 4,
            fromLat: '59.84660399',
            fromLng: '30.29496392',
            beforeLat: '59.82761295',
            beforeLng: '30.41705607'
        },
        {
            key: 5,
            fromLat: '59.83567701',
            fromLng: '30.29496392',
            beforeLat: '59.84660399',
            beforeLng: '30.29496392'
        },
    ],
        selectedRow: null,
        loading: false,
        route: null
}

export default (state = INITIAL_STATE, action = {}) => {
    switch (action.type) {
        case UPDATE_SELECTED_ROW:
            return {
                ...state,
                selectedRow: action.selectedRow
            };
        case UPDATE_LOADING:
            return {
                ...state,
                loading: action.loading
            };
        case UPDATE_ROUTE:
            return {
                ...state,
                route: action.route
            };
        default:
            return state;
    }
};