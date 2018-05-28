
import { Observable } from 'rxjs/Observable';
import 'rxjs';
import { ajax } from 'rxjs/ajax';
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
        // headerObj = {
        //     ...defaultHeaders,
        //     tokenHeader
        // }
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
export const getData = (url) => {
    const headers = customHeaders();
    return fetch(url, {
        headers: headers
    }).then((res) => {
        return jsonResponse(res);
    });
};
export function postData(url, body, token) {
    const headers = customHeaders(token);
    return fetch(url, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(body)
    }).then((res) => {
        return jsonResponse(res);
    });
};
export function putData(url, body, token) {
    const headers = customHeaders(token);
    return fetch(url, {
        method: 'PUT',
        headers: headers,
        body: JSON.stringify(body)
    }).then((res) => {
        return jsonResponse(res);
    });
};
export const getDataPromise = (url) => {
    return fetch(url)
        .then((res) => {
            return jsonResponse(res);
        })
        .then((json) => {
            return json;
        }).catch((err) => {});
};
export const getDataDefault = (url) => {
    const options = {};
    const fetchData = fetch(url, options);
    return convertObservable(fetchData);
};

const convertObservable = (url) => {
    return Observable
        .from(fetch(url))
        .flatMap((res) => {
            return Observable.from(res.json());
        })
        // .subscribe((fetchRes) => {
        //     console.log('fetch sub', fetchRes);
        // })
};