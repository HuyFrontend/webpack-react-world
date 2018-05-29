import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import CONSTANT_ACTION from './constantActions';

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
    phone: '+84942.404.202'
};
const reducerFamilyMember = (state = info, action) => {
	switch (action.type) {
		case CONSTANT_ACTION.MOM:
			return {
				name: 'Tran Thi My Le', age: 25, phone: '+8489.893.2519'
			};
		case CONSTANT_ACTION.CHILD:
			return info;
		case CONSTANT_ACTION.FATHER:
			return {
				name: 'Huy', age: 30, phone: '+6017.264.2108'
			};
		default:
			return state;
	}
};

const reducerBookList = (state = {isLoading: false, list: []}, action) => {
	switch (action.type) {
		case CONSTANT_ACTION.BOOKS_LOAD_START:
			return { list: state.list, isLoading: true };
		case CONSTANT_ACTION.BOOKS_LOAD_DONE:
			state = { list: action.payLoad };
			return state;
		case CONSTANT_ACTION.BOOKS_LOAD_ERROR:
			return { list: state.list };
		case CONSTANT_ACTION.BOOKS_REMOVE:
			return { list: [] };
		default:
            return state;
    }
};

const stories = [
	{
		"by": "bleakgadfly",
		"id": 14967192,
		"title": "To Protect Voting, Use Open-Source Software",
		"url": "https://mobile.nytimes.com/2017/08/03/opinion/open-source-software-hacker-voting.html"
	},
	{
		"by": "mtyurt",
		"id": 14966545,
		"title": "Git: Using Advanced Rebase Features for a Clean Repository",
		"url": "https://mtyurt.net/2017/08/08/git-using-advanced-rebase-features-for-a-clean-repository/"
	},
	{
		"by": "callumlocke",
		"id": 14967335,
		"title": "Inside an AI brain: What does machine learning look like?",
		"url": "https://www.graphcore.ai/posts/what-does-machine-learning-look-like"
	}
];
const initialState = {
	items: [],
};
const storiesReducer = (state = initialState, action) => {
	switch (action.type) {
		case CONSTANT_ACTION.STORIES_LOAD:
			return {
				items: stories.slice(),
			};
		case CONSTANT_ACTION.STORIES_CLEAR:
			return {
				items: [],
			};
		default:
			return state;
	}
};

const userReducer = (state = {}, action) => {
	switch (action.type) {
		case CONSTANT_ACTION.USER_FULFILLED:
			return Object.assign({state, [action.payload.login]: action.payload});
		default:
			return state;
	}
};

const allReducers = combineReducers({
	counter: reducerCounter,
	familyInfo: reducerFamilyMember,
	bookList: reducerBookList,
	storiesReducer: storiesReducer,
	userReducer: userReducer,
	router: routerReducer
});
export default allReducers;