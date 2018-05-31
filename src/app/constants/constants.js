import createHistory from 'history/createBrowserHistory';
export const history = createHistory();
export const isProduction = (process.env.NODE_ENV !== 'production') ? false : true;
// const CONSTANT = {
//     history: history
// }
const CONSTANT = {

};
export default CONSTANT;