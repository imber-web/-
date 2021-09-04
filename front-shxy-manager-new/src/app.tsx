import { runApp, request, IAppConfig } from 'ice';
import { appHistory } from '@ice/stark-app';//很关键：主应用里也必须使用appHistory
import { ConfigProvider, Message } from '@alifd/next';
import PageLoading from '@/components/PageLoading';
import FrameworkLayout from '@/layouts/FrameworkLayout';
import FeedbackForbidden from '@/components/FeedBack/FeedbackForbidden'

const appConfig: IAppConfig = {
    app: {
        rootId: 'icestark-container',
        addProvider: ({ children }) => (//注入icestark
            <ConfigProvider prefix="next-icestark-">{children}</ConfigProvider>
        ),
        getInitialData: async () => {
            // 业务上封装统一的请求方法，与服务端约定接口协议，前端根据状态码判断无权限、未登录等状态，然后跳转到指定页面。！！！！！！！！！！
            try {
                const data = await request('/papi/v1/menu/user/permission');// 发请求拿权限或者验证权限
                return { auth: data }
            } catch (e) { return { auth: {} } }

            //页面级权限设置(暂不使用)
            // let auth = {};//用于存储LoginWrapper中判断权限字段
            //  ? auth = { isLogin: true } : auth = { isLogin: false };//判断登录状态
            // return { auth }
        },
    },
    auth: {
        NoAuthFallback: <FeedbackForbidden />,//设置无权限时的展示组件默认为 null
        // 或者传递一个函数组件：NoAuthFallback: () => <div>没有权限..</div>
    },
    router: {
        type: 'browser',// 统一History路由
        fallback: <PageLoading />
    },
    request: {
        withFullResponse: false,//全局设置 request 是否返回 response 对象，默认为 false-----截取响应数据
        interceptors: {//拦截
            request: {//全局拦截请求
                onConfig: (config) => {
                    const accessToken = localStorage.getItem('ACCESS_TOKEN');
                    if (accessToken) {
                        config.headers = { Authorization: `Bearer ${accessToken}` } //每次请求携带Token
                    } else if (location.pathname !== '/login' && location.pathname !== '/register' && location.pathname !== '/forgotpassword'&& location.pathname !== '/instruction') {//分组路由限制
                        appHistory.push('/login');
                    }
                    return config;
                }
            },

            response: {//全局拦截响应
                onConfig: (response: any) => {
                    const success = response.data.success ? response.data.success : response.data.message === '成功';//还需了解
                    if (!success) {
                        // 提示失败信息
                        const { data: { msg } } = response;//连续解构赋值
                        Message.error(msg);
                        return Promise.reject(msg);
                    }
                    return response.data;
                },
                onError: (error: any) => {//全局拦截请求报错
                    // 业务上封装统一的请求方法，与服务端约定接口协议，前端根据状态码判断无权限、未登录等状态，然后跳转到指定页面。！！！！！！！！！！
                    const status = error.response.status;
                    console.log(status);
                    if (status === 401) {
                        const accessToken = localStorage.getItem('ACCESS_TOKEN');
                        if (accessToken) Message.error("用户身份信息已失效，请重新登录")
                        appHistory.push('/login');// 跳转到登录页面，重新登录(账号密码输入错误的时候)
                    } else if (status === 403) {
                        appHistory.push('/feedback/403');// 跳转到没有权限页面
                    } else if (status === 404) {
                        appHistory.push('/feedback/404');// not found页面
                    } else {
                        appHistory.replace('/login');
                    }
                    return Promise.reject(error);
                }

            },
        }
    },
    icestark: {//连入微应用
        type: 'framework',
        Layout: FrameworkLayout,//判断外层选用的layout
        getApps: async () => {
            const apps = [
                {
                    path: '/baseDataManage',
                    title: '基础数据管理',
                    sandbox: true,
                    url: [
                        'http://localhost:3334/js/index.js',
                        'http://localhost:3334/css/index.css',
                    ],
                },
                {
                    path: '/normalTrainManage',
                    title: '常规培训管理',
                    sandbox: true,
                    url: [
                        'http://localhost:3335/js/index.js',
                        'http://localhost:3335/css/index.css',
                    ],
                },
                {
                    path: '/specialTrainManage',
                    title: '专项培训管理',
                    sandbox: true,
                    url: [
                        'http://localhost:3336/js/index.js',
                        'http://localhost:3336/css/index.css',
                    ],
                },
                {
                    path: '/studyTimeManage',
                    title: '学时档案管理',
                    sandbox: true,
                    url: [
                        'http://localhost:3337/js/index.js',
                        'http://localhost:3337/css/index.css',
                    ],
                },
            ];
            return apps;
        },
        appRouter: {
            LoadingComponent: PageLoading,//配置菊花
        },
    },
};

runApp(appConfig);
