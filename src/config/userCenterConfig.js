
export const userCenterConfig = {
    githubPopular: {
        title: '',
        children:  [{
            title: 'Github Popular',
            icon: 'whatshot',
            type: 'MaterialIcons',
            action: ()=>Actions.pupularPanel()
        }]
    },
    customTrendingLanguage: {
        title: 'Custom Trending Language',
        children:  [{
            title: '自定义语言',
            icon: 'language',
            type: 'Entypo',
            action: ()=>Actions.customLanguage()
        },
        {
            title: '语言排序',
            icon: 'sort-by-alpha',
            type: 'MaterialIcons',
            action: ()=>Actions.sortLanguage()
        }]
    },
    customPopularKey: {
        title: 'Custom Popolar Key',
        children: [{
            title: '自定义Key',
            icon: 'restaurant-menu',
            type: 'MaterialIcons',
            action: ()=>Actions.customKey()
         },
        {
            title: 'Key排序',
            icon: 'sort',
            type: 'MaterialIcons',
            action: ()=>Actions.sortKey()
          },
          {
            title: '移除Key',
            icon: 'delete',
            type: 'MaterialCommunityIcons',
            action: ()=>Actions.removeKey()
        }]
    },
    settings: {
        title: "settings",
        children: [{
            title: '自定义主题',
            key: 'theme',
            icon: 'palette',
            type: 'MaterialIcons',
            action: ()=>Actions.customTheme()
        },
        {
            title: '关于作者',
            key: 'author',
            icon: 'school',
            type: 'MaterialIcons',
            action: ()=>Actions.aboutAuthor(),
            authorInfo: {
                name: "poetries",
                projectName: 'Github Popular',
                projectDesc: '一个用来查看GitHub最受欢迎与最热项目的App,基于React Native支持Android和iOS',
                description: "专注前端开发",
                avatar: "https://blog.poetries.top/images/avatar.jpg",
                aboutAuthorPost: "https://upload-images.jianshu.io/upload_images/1480597-b24faa3975738e54.png",
                aboutPupularPost: "https://upload-images.jianshu.io/upload_images/1480597-e5f0d07312f5cb26.png",
                popularLogo: "https://upload-images.jianshu.io/upload_images/1480597-11979675a21a8e1d.png",
                url: "http://blog.poetries.top/",
                popularSettings: [
                    {
                        title: '博客',
                        url: 'http://blog.poetries.top',
                        icon: 'camera',
                        type: 'MaterialIcons',
                        action: ()=>Actions.webView({url:'https://blog.poetries.top',title:'博客'})
                    },
                    {
                        title: '关于作者',
                        key: 'author',
                        icon: 'school',
                        type: 'MaterialIcons',
                        action: ()=>Actions.aboutAuthor()
                    },
                    {
                        title: '反馈',
                        icon: 'feedback',
                        type: 'MaterialIcons',
                        action: ()=>Actions.feedBack()
                      }
                ]
            },
            children: [
                {
                    title: '技术博客',
                    icon: 'camera',
                    type: 'MaterialIcons',
                    children: [
                        {
                            title: '个人博客',
                            url: 'http://blog.poetries.top'
                        },
                        {
                            title: '简书',
                            url: 'https://www.jianshu.com/u/94077fcddfc0'
                        },
                        {
                            title: 'Github',
                            url: 'https://github.com/poetries'
                        }
                    ]
                },
                {
                    title: '开源项目',
                    icon: 'code',
                    type: 'MaterialIcons',
                    baseUrl: 'https://api.github.com/repos/poetries/',
                    children:  [
                        "mywiki",
                        "FE-Interview-Questions",
                        "Code-snippets-and-plugins-collected",
                        "poetries.github.io",
                        "vue-music",
                        "boss",
                        "react-next-app",
                        "ionic-app",
                        "handbook",
                        "Data-Structure",
                        "Django-shop",
                        "node-blog",
                        "react-component",
                        "drawing-board",
                        "react-news-app"
                      ].map(v=>({title:v}))
                },
                {
                    title: '联系方式',
                    icon: 'call',
                    type: 'MaterialIcons',
                    children: [
                        {
                            title: 'QQ：1719662073'
                        },
                        {
                            title: '微信：yongxuan4070'
                        },
                        {
                            title: 'Email：me@poetries.top'
                        }
                    ]
                }
            ]
        }]
    }
}
