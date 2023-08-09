module.exports = {
    host: 'localhost',
    port: '8080',
    base: '/learn-record/',
    theme: 'reco',
    locales: {
        '/': {
            lang: 'zh-CN'
        }
    },
    title: 'elvisの博客',
    themeConfig: {
        subSidebar: 'auto'
    },
    markdown: {
        lineNumbers: true //代码显示行号
    },
    plugins: [
        '@vuepress/plugin-last-updated',
        ['vuepress-plugin-code-copy', true],
        ['@vuepress/plugin-pwa', {
            serviceWorker: true,
            popupComponent: 'MySWUpdatePopup',
            updatePopup: true
        }],
        ['@vuepress/plugin-google-analytics', {
            'ga': 'UA-xxx-xx',
        }]
    ],
    themeConfig: {
        nav: [
            { 
                text: 'Github', 
                link: 'https://github.com/elvis-shiqi'
            }
        ],
        sidebar: [
            {
                title: 'ECMAScript规范及特性',
                collapsable: true, // 是否折叠
                children: [
                    { title: "ECMAScript5", path: "/handbook/ECMAScript/5" },
                    { title: "ECMAScript6", path: "/handbook/ECMAScript/6" },
                    { title: "ECMAScript7", path: "/handbook/ECMAScript/7" },
                    { title: "ECMAScript8", path: "/handbook/ECMAScript/8" }
                ]
            },
            {
                title: 'TypeScript',
                collapsable: true, // 是否折叠
                children: [
                    { title: "基础类型", path: "/handbook/TypeScript/BaseType" },
                ]
            },
            {
                title: 'Vue',
                collapsable: true, // 是否折叠
                children: [
                    { title: "Vue2", path: "/handbook/Vue/2" },
                    { title: "Vue3", path: "/handbook/Vue/3" },
                ]
            },
            {
                title: 'React',
                collapsable: true, // 是否折叠
                children: [
                    { title: "React 17", path: "/handbook/React/17" },
                ]
            },
            {
                title: 'Webpack',
                collapsable: true, // 是否折叠
                children: [
                    { title: "基础配置", path: "/handbook/Webpack/Base" },
                ]
            },
            {
                title: '性能优化',
                collapsable: true, // 是否折叠
                children: [
                    { title: "基础优化", path: "/handbook/PowerOptimize/Base" },
                ]
            },
            {
                title: 'Git',
                collapsable: true, // 是否折叠
                children: [
                    { title: "常用指令", path: "/handbook/Git/Common" },
                ]
            },
            {
                title: 'Node',
                collapsable: true, // 是否折叠
                children: [
                    { title: "基础使用", path: "/handbook/Node/Base" },
                ]
            },
            {
                title: 'Electron',
                collapsable: true, // 是否折叠
                children: [
                    { title: "通用规则", path: "/handbook/Electron/Base" },
                    { title: "Windows", path: "/handbook/Electron/Windows" },
                    { title: "Mac", path: "/handbook/Electron/Mac" },
                ]
            },
          ]
    }
}