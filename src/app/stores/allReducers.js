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

const reducerBookList = (state = [], action) => {
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
		case 'LOAD_STORIES':
			return {
				items: stories.slice(),
			};
		case 'CLEAR_STORIES':
			return {
				items: [],
			};
		default:
			return state;
	}
};

const allReducers = combineReducers({
	counter: reducerCounter,
	familyInfo: reducerFamilyMember,
	bookList: reducerBookList,
	storiesReducer: storiesReducer
});
export default allReducers;