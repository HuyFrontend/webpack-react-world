import { combineReducers } from 'redux';

const reducerCounter = (state = { count: 10 }, action) => {
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
    name: 'Vo Xuan An Nhien',
    age: 1,
    phone: '0942.404.202'
};

const reducerFamilyMember = (state = info, action) => {
	switch(action.type) {
	  case 'CHILD':
			return info;
	  case 'FATHER':
			return {
				name: 'Huy', age: 30, phone: '+6017.264.2108'
			};
	  default:
			return state;
	}
};

const reducerBookList = (state = [{name: 'Book Title'}], action) => {
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