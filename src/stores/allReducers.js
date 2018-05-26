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
// const reducerSelectedFamilyMember = (state = 'FATHER', action) => {
//     switch (action.type) {
//         case 'FATHER':
//             return 'FATHER';
//         default:
//             return 'CHILD';
//     }
// };

export function selectSub(sub) {
	return {
        type: sub,
    };
}

const allReducers = combineReducers({
	counter: reducerCounter,
	familyInfo: reducerFamilyMember,
	// familyType: reducerSelectedFamilyMember
});
export default allReducers;