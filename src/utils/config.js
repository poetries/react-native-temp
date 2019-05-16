
// production、development
const APP_ENV = 'development';
export function getOrigin(url = '') {
    // eslint-disable-next-line
    const urlP = /^((https?|ftp|file):\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;
    let origin = '';
    if (urlP.test(url)) {
        return url
    }
    switch (APP_ENV) {
        case 'production': {
            // 生产环境地址 @TODO
            origin = '';
            break;
        }
        case 'development': {
            // 测试
            origin = 'https://easy-mock.com';

            // 夏庆林
            // origin =  'http://192.168.99.10:8823/',
            // 王震
            // origin = 'http://192.168.99.107:8823/',
            // 刘智杨
            // origin = 'http://192.168.99.26:8823',
            // 罗新智
            // origin = 'http://192.168.99.1:8823',
            // 全飞
            // origin = 'http://192.168.99.24:8823',
            break;
        }
    }
    return origin + url;
}
