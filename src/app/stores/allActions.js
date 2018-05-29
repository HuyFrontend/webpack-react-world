// import { getBookListService } from '../services/allServices';
import CONSTANT_ACTION from './constantActions';
import SERVICES from '../services/allServices';
export const selectFamilyType = (value) => {
	return {
        type: value,
    };
};

export const selectCategoryType = (value) => {
    return (dispatch) => {
        dispatch({ type: CONSTANT_ACTION.BOOKS_LOAD_START })
        return SERVICES.getBookListService(value).subscribe((res) => {
            console.log('Response,', res);
            const data = res.data.children.map(child => child.data);
            return dispatch({ type: CONSTANT_ACTION.BOOKS_LOAD_DONE, payLoad: data});
        }, (err) => {
            console.log('Error', err);
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

export const clearStories = () => {
    return {
        type: CONSTANT_ACTION.STORIES_CLEAR
    }
};

export const fetchUser = (username) => {
    return (
        { type: CONSTANT_ACTION.USER_FETCH, payload: username }
    );
};
export const fetchUserFulfilled = (payload) => {
    return ({ type: CONSTANT_ACTION.USER_FULFILLED, payload });
};
