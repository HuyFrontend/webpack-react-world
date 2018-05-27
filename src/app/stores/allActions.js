import { getBookListService } from '../services/allServices';
export const selectFamilyType = (value) => {
	return {
        type: value,
    };
};

export const selectCategoryType = (value) => {
    return (dispatch) => {
        dispatch({type: 'LOAD'})
        return getListByCategory(value).then((res) => {
            const data = res.data.children.map(child => child.data);
            return dispatch({ type: 'LOADED', payLoad: data});
        });
    }
};

const getListByCategory = (value) => {
    return getBookListService(value);
};

export const removeBooklist = () => {
	return {
        type: 'REMOVE',
    };
};
