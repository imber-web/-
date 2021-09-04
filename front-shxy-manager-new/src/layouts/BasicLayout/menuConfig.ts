const headerMenuConfig = [];

const asideMenuConfig = [
    {
        name: '首页',
        path: '/',
        icon: 'dashboard',
    },
    {
        name: '基础数据管理',
        path: '/baseDataManage',
        icon: 'chart-bar',
    },
    {
        name: '常规培训管理',
        path: '/normalTrainManage',
        icon: 'form',
        children: [
            {
                name: '培训资源管理',
                path: '/normalTrainManage/list',
            },
            {
                name: '培训实施管理',
                path: '/normalTrainManage/detail',
            }
        ]
    },
    {
        name: '专项培训管理',
        path: '/specialTrainManage',
        icon: 'detail',

    },
    {
        name: '学时档案管理',
        icon: 'calendar',
        path: '/studyTimeManage',
    },
    {
        name: '遴选评价业务',
        icon: 'filter',
        path: '/waiter1',
    },
    {
        name: '系统管理',
        icon: 'set',
        path: '/waiter2',
    },
];

export { headerMenuConfig, asideMenuConfig };//统一暴露
