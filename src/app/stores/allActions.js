import { getBookListService } from '../services/allServices';

// import { Observable } from 'rxjs';
import { Observable } from 'rxjs/Observable';
import { combineEpics } from 'redux-observable';
import 'rxjs';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/of';
export const selectFamilyType = (value) => {
	return {
        type: value,
    };
};

export const selectCategoryType = (value) => {
    return (dispatch) => {
        dispatch({ type: 'LOAD' })
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

export const LOAD_STORIES = 'LOAD_STORIES';
export const CLEAR_STORIES = 'CLEAR_STORIES';
export const loadStories = () => {
  return {
    type: LOAD_STORIES
  }
};
export const clear = () => {
  return {
    type: CLEAR_STORIES
  }
};

function loadStoriesEpic(action$) {
    console.log('Action', action$);
  return action$.ofType(LOAD_STORIES)
    .switchMap(() => {
      return Observable.of(clear()).delay(2000);
    });
}

export const rootEpic = combineEpics(loadStoriesEpic);