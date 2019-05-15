import request from '../utils/request';
// import { stringify } from 'qs';

/**
 * 测试
 * url: api 地址
 * @returns {Promise<void>}
 */
export async function findAppCommentList(params = {}) {
    return request(`/test`, {
        method: 'POST',
        body: {
            ...params,
        },
    });
}

export async function queryTestData(params) {
    return request("https://easy-mock.com/mock/5b7fd63f719c7b7241f4e2fa/tangshi/tang-shi");
  }