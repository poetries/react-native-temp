
export default {
    // 全局model
    app : require('./global/app').default,
    test : require('./global/test').default,
    roles : require('./global/roles').default,
    user : require('./global/user').default,
    
    // 页面model
    monitor : require('./monitor/monitor').default,
}