import {BASE_URL} from  '../../src/config/host'

export function getOrigin(url = '') {
    // eslint-disable-next-line
    const urlP = /^((https?|ftp|file):\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;
    if (urlP.test(url)) {
        return url
    }
    return BASE_URL + url;
}
