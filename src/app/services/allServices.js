import { getDataDefault } from './requestAPI';

export const getBookListService = (categoryName) => {
    const url = `https://www.reddit.com/r/${categoryName}.json`;
    return getDataDefault(url);
}