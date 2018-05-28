import { getDataDefault } from './requestAPI';
import requestAPI from './requestAPI';
export const getBookListService = (categoryName) => {
    const url = `https://www.reddit.com/r/${categoryName}.json`;
    return requestAPI.getDataObservable(url);
}