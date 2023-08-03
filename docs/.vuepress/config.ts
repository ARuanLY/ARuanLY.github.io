import { defineUserConfig } from 'vuepress'
import { defaultTheme } from 'vuepress'

export default defineUserConfig({
    base: '/Blog/',
    head: [['link', { rel: 'icon', href: '/images/favicon.ico' }]],
    // lang: 'zh-CN',
    // title: 'ARuanLY个人博客',
    // description: '这是ARuanLY的第一个 VuePress 站点',
    locales: {
        // 键名是该语言所属的子路径
        // 作为特例，默认语言可以使用 '/' 作为其路径。
        '/': {
            lang: 'zh-CN',
            title: 'ARuanLY个人博客',
            description: '这是ARuanLY的第一个 VuePress 站点',
        },
        '/en/': {
            lang: 'en-US',
            title: 'ARuanLY Blog',
            description: 'This is ARuanLY\'s first VuePress site',
        },
    },
    theme: defaultTheme({
        locales: {
            '/': {
                selectLanguageText: '选择语音',
                selectLanguageName: '简体中文',
            },
            '/en/': {
                selectLanguageName: 'English',
            },
        },
    }),
})