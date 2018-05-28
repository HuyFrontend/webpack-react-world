
import { Observable } from 'rxjs/Observable';
import { flatMap, map } from 'rxjs/operators';
import 'rxjs/add/observable/from';

const customHeaders = (token = '') => {
    const defaultHeaders = {
        'Content-Type': 'application/json'
    };
    let headerObj = defaultHeaders;
    if (token) {
        const tokenHeader = {
            'Authorization': `Basic ${token}`,
        };
        headerObj = Object.assign({
            defaultHeaders, tokenHeader
        });
    }
    return new Headers(headerObj);
};

const jsonResponse = (res) => {
    if (!res.ok) {
        let { status, statusText } = res;
        let message = JSON.stringify({status: status, statusText: statusText});
        throw Error( message );
    }
    return res.json();
};

const getDataPromise = (url) => {
    return fetch(url)
        .then((res) => {
            return jsonResponse(res);
        })
        .then((json) => {
            return json;
        }).catch((err) => {});
};

const postDataObservable = (url, body, token = '') => {
    const headers = customHeaders(token);
    const fetchFn = fetch(url, {
        method: 'POST',
        // headers: headers,
        body: JSON.stringify(body)
    });
    return convertObservable(fetchFn);
};

const putDataObservable = (url, body, token = '') => {
    const headers = customHeaders(token);
    const fetchFn = fetch(url, {
        method: 'PUT',
        // headers: headers,
        body: JSON.stringify(body)
    });
    return convertObservable(fetchFn);
};

const getDataObservable = (url) => {
    const options = {};
    const fetchFn = fetch(url, options);
    return convertObservable(fetchFn);
};

const convertObservable = (fetchFn) => {
    return Observable
        .from(fetchFn)
        .flatMap((res) => {
            return Observable.from(res.json());
        })
};

const requestAPI = {
    getDataPromise: (url) => getDataPromise(url),
    getDataObservable: (url) => getDataObservable(url),
    postDataObservable: (url, body, token) => postDataObservable(url, body, token),
    putDataObservable: (url, body, token) => putDataObservable(url, body, token),
}
export default requestAPI;