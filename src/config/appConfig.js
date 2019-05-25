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
    },
    drawerOptions: {
        drawerLockMode: 'locked-closed',//设置是否响应手势
        //'unlocked'   可以通过手势和代码 打开关闭抽屉
        //'locked-closed' 抽屉关闭状态  不能通过手势打开  只能通过代码实现
        //'locked-open'  抽屉打开状态  不能通过手势关闭  只能通过代码实现

        drawerWidth: 200, //抽屉的宽度或返回的功能。
        drawerPosition: 'left', //选项是left或right。默认是left位置。
        // useNativeAnimations: false, //启用原生动画。默认是true。
        drawerBackgroundColor: '#03a9f4', //使用抽屉背景获取某种颜色。默认是white。

        //配置抽屉内容  items相关
        contentOptions: {
            // items: [OtherScreen],//可以修改或覆盖路由数组  不知道干嘛用的
            // activeItemKey: 'AppInfo', //识别活动路线的关键  也不知道干嘛用的

            activeTintColor: 'white', //活动标签的标签和图标颜色
            activeBackgroundColor: 'blue', //活动标签的背景颜色
            inactiveTintColor: 'black', //非活动标签的标签和图标颜色
            inactiveBackgroundColor: 'red', //非活动标签的背景颜色

            // //按下项目时要调用的函数 不知道是否使用错误 一直没反应
            //github上面有答案 在自定义视图的时候 会有用
            // onItemPress(route) {
            //     console.log('onItemPress'+route);
            // },

            // itemsContainerStyle: '', //内容部分的样式对象
            // itemStyle: '', //单个项目的样式对象，可以包含图标和 / 或标签
            // labelStyle: '', //Text当标签是字符串时，样式对象在内容部分内覆盖样式
            // activeLabelStyle: '', //Text当标签是字符串（与之合并labelStyle）时，样式对象覆盖活动标签的样式
            // inactiveLabelStyle: '', //Text当标签是字符串（与之合并labelStyle）时，样式对象覆盖非活动标签的样式
            // iconContainerStyle: '', //样式对象以覆盖View图标容器样式。
        }
    }
}