import { Observable } from 'rxjs/Observable';
import { combineEpics } from 'redux-observable';
import { ajax } from 'rxjs/observable/dom/ajax';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';
import { clearStories, fetchUserFulfilled } from './allActions';
import CONSTANT_ACTION from './constantActions';

const loadStoriesEpic = (action$) => {
    return action$.ofType(CONSTANT_ACTION.STORIES_LOAD)
        .switchMap(() => {
            return Observable.of(clearStories()).delay(2000);
        });
};
const fetchUserEpic = (action$) => {
  return action$.ofType(CONSTANT_ACTION.USER_FETCH)
    .mergeMap((action) => {
      return ajax.getJSON(`https://api.github.com/users/${action.payload}`)
        .map((response) => {
            console.log('Fulfiled', response);
            return fetchUserFulfilled(response);
        })
    });
};
export const rootEpic = combineEpics(loadStoriesEpic, fetchUserEpic);