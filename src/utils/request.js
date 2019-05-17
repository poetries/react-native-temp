import hash from 'hash.js';
import Toast from 'react-native-root-toast';
import { Actions, Scene } from 'react-native-router-flux';
import { getOrigin } from './config'

const codeMessage = {
    200: '服务器成功返回请求的数据。',
    201: '新建或修改数据成功。',
    202: '一个请求已经进入后台排队（异步任务）。',
    204: '删除数据成功。',
    400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
    401: '用户没有权限（令牌、用户名、密码错误）。',
    403: '用户得到授权，但是访问是被禁止的。',
    404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
    406: '请求的格式不可得。',
    410: '请求的资源被永久删除，且不会再得到的。',
    422: '当创建一个对象时，发生一个验证错误。',
    500: '服务器发生错误，请检查服务器。',
    502: '网关错误。',
    503: '服务不可用，服务器暂时过载或维护。',
    504: '网关超时。',
  };

  
const checkStatus = response => {
    if (response.status >= 200 && response.status < 300) {
        return response;
    }
    const errortext = codeMessage[response.status] || response.statusText;
    const error = new Error(errortext);
    error.name = response.status;
    error.response = response;
    throw error;
};


/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [option] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */
export default function request(url, option) {
    const options = {
        ...option,
    };
    /**
     * Produce fingerprints based on url and parameters
     * Maybe url has the same parameters
     */
    const fingerprint = url + (options.body ? JSON.stringify(options.body) : '');

    const defaultOptions = {
        credentials: 'include',
    };
    const newOptions = { ...defaultOptions, ...options };
    if (
        newOptions.method === 'POST' ||
        newOptions.method === 'PUT' ||
        newOptions.method === 'DELETE'
    ) {
        if (!(newOptions.body instanceof FormData)) {
            newOptions.headers = {
                Accept: 'application/json',
                'Content-Type': 'application/json; charset=utf-8',
                ...newOptions.headers,
            };
            newOptions.body = JSON.stringify(newOptions.body);
        } else {
            // newOptions.body is FormData
            newOptions.headers = {
                Accept: 'application/json',
                ...newOptions.headers,
            };
        }
    }

    return fetch(getOrigin(url), newOptions)
        .then(checkStatus)
        .then(response => {
            // DELETE and 204 do not return data by default
            // using .json will report an error.
            if (newOptions.method === 'DELETE' || response.status === 204) {
              return response.text();
            }
            return response.json();
          })
          .then(res=>{
            // 401统一拦截到login
            if(res.code == 401) {
              Actions.login()
            }
            if(res.code == 500) {
              Toast.show('服务器繁忙，请稍后再试', {
                duration: Toast.durations.LONG,
                position: Toast.positions.BOTTOM,
                backgroundColor: '#595959',
                textColor: '#fff',
                shadow: false,
                animation: true,
                hideOnPress: true,
                delay: 0
            })
            }
            // 接口没权限提示
            if(res.code == 403) {
              Toast.show('页面没权限', {
                duration: Toast.durations.LONG,
                position: Toast.positions.BOTTOM,
                backgroundColor: '#595959',
                textColor: '#fff',
                shadow: false,
                animation: true,
                hideOnPress: true,
                delay: 0
            })
            }
            return res
          })
          .catch(e => {
            const status = e.name;
            if (status === 401) {
              return Toast.show('您还没登录', {
                duration: Toast.durations.LONG,
                position: Toast.positions.BOTTOM,
                backgroundColor: '#595959',
                textColor: '#fff',
                shadow: false,
                animation: true,
                hideOnPress: true,
                delay: 0
            })
            }
            // environment should not be used
            if (status === 403) {
              return Toast.show('您还没登录', {
                duration: Toast.durations.LONG,
                position: Toast.positions.BOTTOM,
                backgroundColor: '#595959',
                textColor: '#fff',
                shadow: false,
                animation: true,
                hideOnPress: true,
                delay: 0
            })
            }
            if (status <= 504 && status >= 500) {
              return Toast.show('抱歉，服务器出错了', {
                duration: Toast.durations.LONG,
                position: Toast.positions.BOTTOM,
                backgroundColor: '#595959',
                textColor: '#fff',
                shadow: false,
                animation: true,
                hideOnPress: true,
                delay: 0
            })
            }
            if (status >= 404 && status < 422) {
              return Toast.show('抱歉，接口不存在，请联系管理员', {
                duration: Toast.durations.LONG,
                position: Toast.positions.BOTTOM,
                backgroundColor: '#595959',
                textColor: '#fff',
                shadow: false,
                animation: true,
                hideOnPress: true,
                delay: 0
            })
            }
          });
}
