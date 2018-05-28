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
        return getBookListService(value).subscribe((res) => {
            console.log('R,', res);
            const data = res.data.children.map(child => child.data);
            return dispatch({ type: CONSTANT_ACTION.BOOKS_LOAD_DONE, payLoad: data});
        }, (err) => {
            return dispatch({type: CONSTANT_ACTION.BOOKS_LOAD_ERROR});
        })
    }
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
