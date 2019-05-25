import theme from '../theme/color'

export default {
    TopTabs: {
        swipeEnabled: true,
        tabBarPosition: 'top',
        animationEnabled: true,
        lazy: true,
        tabBarOptions:{
            activeTintColor:'#fff',
            style:{
                backgroundColor: theme.brand.primary,
            },
            labelStyle:{
                fontSize: 14
            },
            // pressColor: '', // 被按下的tab的背景色  Android>5.0
            // scrollEnabled: true, //tab是否能够滑动，值为true时，当tab超出屏幕宽度的时候tab能够滚动
            indicatorStyle:{
                backgroundColor: '#fff'
            },
            // upperCaseLabel: false,//是否使标签大写，默认为true
            tabStyle:{//定义tab bar中tab的样式
                // backgroundColor:"",
                // height:30
                minWidth:40//tab的宽度
            },
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
            iconStyle:{//定义icon的样式
            },
            // indicatorStyle:{//指示器的样式[激活条样式]
            // },
            style:{// 整体TabBar的样式
                borderTopWidth: 1,
                borderTopColor: '#eee'
            },
        }
    }
}