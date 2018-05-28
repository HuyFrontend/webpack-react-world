import { Observable } from 'rxjs/Observable';
import { combineEpics } from 'redux-observable';
import 'rxjs';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';
import { getBookListService } from '../services/allServices';
import CONSTANT_ACTION from './constantActions';

export const selectFamilyType = (value) => {
	return {
        type: value,
    };
};

export const selectCategoryType = (value) => {
    return (dispatch) => {
        dispatch({ type: CONSTANT_ACTION.BOOKS_LOAD_START })
        return getListByCategory(value).then((res) => {
            const data = res.data.children.map(child => child.data);
            return dispatch({ type: CONSTANT_ACTION.BOOKS_LOAD_DONE, payLoad: data});
        });
    }
};

const getListByCategory = (value) => {
    return getBookListService(value);
};

export const removeBooklist = () => {
	return {
        type: CONSTANT_ACTION.BOOKS_REMOVE,
    };
};

export const loadStories = () => {
    return {
        type: CONSTANT_ACTION.STORIES_LOAD
    }
};

export const clear = () => {
    return {
        type: CONSTANT_ACTION.STORIES_CLEAR
    }
};
// action creators
export const fetchUser = (username) => {
    return (
        { type: CONSTANT_ACTION.USER_FETCH, payload: username }
    );
};
export const fetchUserFulfilled = (payload) => {
    return ({ type: CONSTANT_ACTION.USER_FULFILLED, payload });
};
