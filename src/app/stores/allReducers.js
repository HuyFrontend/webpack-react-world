import { combineReducers } from 'redux';

const reducerCounter = (state = {count: 10}, action) => {
	console.log('step 2 in redux: reducer and return new states');
	switch(action.type) {
	  case 'INCREMENT':
			return {
				count: state.count + 1
			};
	  case 'DECREMENT':
			return {
				count: state.count - 1
			};
	  default:
			return state;
	}
};
const info = {
    name: 'Nhien',
    age: 1,
    phone: ''
};

const reducerFamilyMember = (state = info, action) => {
	console.log('init reducerName');
	switch(action.type) {
	  case 'CHILD':
			return info;
	  case 'FATHER':
			return {
				name: 'Huy', age: 30, phone: '060 17 264 2108'
			};
	  default:
			return state;
	}
};

const reducerBookList = (state = [{name: 'Book Title'}], action) => {
	console.log(' init reducerBookList');
	switch (action.type) {
		case 'LOAD':
			// getItemByCategory(action.category);
			return state; //getItemByCategory(action.category);
        default:
            return state;
    }
};

const getItemByCategory = (categoryName) => {
		// return
		fetch(`https://www.reddit.com/r/${categoryName}.json`)
        .then(response => {
			console.log('aaaaaaaaaaaaaa');
			return response.json();
		})
        .then((json) => {
			console.log('json', json);
                return json;
        }).catch((err) => {
			console.log('errrro', err);

		});
}

export const selectFamilyType = (value) => {
	return {
        type: value,
    };
}

export const selectCatrgory = (value) => {
	getItemByCategory(value);
	console.log('selectCatrgory value', value);
	return { type: 'LOAD', category: value };
	// const action = { type: 'LOAD', category: value };
	// return (dispatch) => {
    //     return dispatch(action);
    // }
}

const allReducers = combineReducers({
	counter: reducerCounter,
	familyInfo: reducerFamilyMember,
	// familyType: reducerSelectedFamilyMember,
	listByCategory: reducerBookList
});
export default allReducers;