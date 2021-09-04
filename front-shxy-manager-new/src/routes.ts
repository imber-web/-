import { IRouterConfig, lazy } from 'ice';
import Home from '@/pages/Home';
import Login from '@/pages/Login';
import NotFound from '@/components/NotFound';
// import UserLayout from '@/components/NotFound';
// import FeedbackForbidden from '@/components/NotFound';
// import FeedbackNotFound from '@/components/NotFound';
// import FeedbackServerError from '@/components/NotFound';
// import wrapperPage from '@/components/LoginWrapper'
const Register = lazy(() => import('@/pages/Register'));
const ForgotPassword = lazy(() => import('@/pages/ForgotPassword/components/StepForm'));
const Instruction = lazy(() => import('@/pages/Instruction'));

const routes: IRouterConfig[] = [
    //新的分组路由需要到 layout里的FrameworkLayout、app.tsx里的request 改判断
    {
        path: '/login',
        component: Login,
    },
    {
        path: '/register',
        component: Register,
    },
    {
        path: '/forgotpassword',
        component: ForgotPassword,
    },
    {
        path: '/instruction',
        component: Instruction,

    },
    {
        path: '/',
        exact: true,//精准匹配
        component: Home,
        // wrappers: [wrapperPage],
        // children: [
        //     {
        //         path: '/feedback/403',
        //         component: FeedbackForbidden,
        //     },
        //     {
        //         path: '/feedback/404',
        //         component: FeedbackNotFound,
        //     },
        //     {
        //         path: '/feebback/500',
        //         component: FeedbackServerError,
        //     },
        // ]
    },
    // {
    //     path: '/user',
    //     component: UserLayout,
    //     children: [
    //         {
    //             path: '/login',
    //             component: Login,
    //         },
    //         {
    //             path: '/',
    //             redirect: '/user/login',
    //         },
    //     ],
    // },
    {
        component: NotFound,
    }
];

export default routes;
