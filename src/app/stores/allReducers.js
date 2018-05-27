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
	console.log('reducerBookList', 'state', state);
	switch (action.type) {
		case 'LOAD':
			return state;
		case 'LOADED':
			return action.payLoad;
		case 'REMOVE':
			return [];
        default:
            return state;
    }
};

const allReducers = combineReducers({
	counter: reducerCounter,
	familyInfo: reducerFamilyMember,
	bookList: reducerBookList
});
export default allReducers;