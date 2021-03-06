//禾思科技唯一全局变量
var ENV = {
    VERSION: (new Date()).getTime(), //开发，测试环境
    API: '/facemeeting/', //配合nginx跨域，所有ajax api前缀
    FILE_URL: '/facemeeting/',//图片上传地址
    //PAGE: '/meeting/', //页面地址
    PAGE: '/', //页面、js资源、图片地址
    H5: 'http://' + window.location.host + '/page/apply/index.html', //h5页面访问地址前缀
    BASE: 'http://' + window.location.host,//域名url，如本地则是为空
}

//js路径配置项
require.config({
    urlArgs: 'v=' + ENV.VERSION,
    baseUrl: ENV.PAGE,
    paths: {
        jquery: 'plugin/jquery/jquery-3.1.0.min',
        router: 'plugin/spa/router',
        routerConfig: 'router.config',
        cookie: 'plugin/jquery/jquery.cookie',
        layui: 'plugin/layui/layui',
        layuiAll: 'plugin/layui/layui.all',
        underscore: 'plugin/underscore/underscore',
        common: 'js/common',
        qrcode: 'plugin/qrcode/qrcode',
        jqprint: 'plugin/jquery/jquery.print',
        lrz: 'plugin/lrz/lrz.bundle',
        jqweui: 'plugin/jqweui/js/jquery-weui.min',
        dateFormat: 'plugin/util/dateFormat',
    },
    shim: {
        underscore: {
            exports: '_'
        },
        routerConfig: {
            deps: ['jquery', 'cookie', 'router'],
            exports: '$'
        },
        router: {
            deps: ['jquery'],
            exports: '$'
        },
        jqprint: {
            deps: ['jquery'],
            exports: '$'
        },
        cookie: {
            deps: ['jquery'],
            exports: '$'
        },
        common: {
            deps: ['jquery'],
            exports: '$'
        },
        jqweui: {
            deps: ['jquery'],
            exports: '$'
        }
    }
});