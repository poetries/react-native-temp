import theme from '../theme/color'

export default {
    TopTabs: {
        swipeEnabled: true,
        animationEnabled: true,
        lazy: true,
        tabBarOptions:{
            activeTintColor:'#fff',
            style:{
                backgroundColor: theme.brand.primary,
            },
            labelStyle:{
                fontSize: 16
            },
            indicatorStyle:{
                backgroundColor: '#fff'
            }
        },
    },
    bottomTabs: {
        animationEnabled: true,
        //是否可以滑动切换
        swipeEnabled: true,
        //切换是否有动画
        animationEnabled: true,
        initialRouteName: 'Monitor', // 设置默认的页面
        lazy:true,// 是否在app打开的时候将底部标签栏全部加载
        tabBarOptions:{
            activeTintColor: theme.brand.primary, // 选中时tab的label/icon的颜色
            // inactiveTintColor: '', // 未选中的颜色
            labelStyle: { // TabBar内单独tab的文字样式
                fontSize: 12,
            },
            showLabel: true,
            showIcon: true,
            style:{// 整体TabBar的样式
                borderTopWidth: 1,
                borderTopColor: '#eee'
            },
        }
    }
}