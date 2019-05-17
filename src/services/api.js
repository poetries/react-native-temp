import request from '../utils/request';
// import { stringify } from 'qs';

export async function queryTestData(params) {
    return request("/mock/5b7fd63f719c7b7241f4e2fa/tangshi/tang-shi");
}
export async function queryReport(params) {
    return request("/mock/5a27ab137f2b435f137d0921/v1/advertiser-reports");
}
export async function queryMonitorData(params) {
    return request("/mock/5a535c5390626970a9649c4c/crm/v1/recharge-reports");
}
export async function queryRoles(params) {
    return request("/mes/role/list");
}

// 登录
export async function mesLogin(params) {
    const formData = new FormData()

    for(var key in params) {
    formData.append(key, params[key])
    }
    
    return request('/mes/login', {
    method: 'POST',
    body: formData,
    });
}

// 登出
export async function mesLogout(params) {
    return request('/mes/login/logout');
}

// 获取用户信息
export async function queryCurrentUser(params) {
    return request('/mes/login/user');
}