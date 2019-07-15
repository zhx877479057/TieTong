export default [
  // user
  {
    path: '/user',
    component: '../layouts/UserLayout',
    routes: [
      { path: '/user', redirect: '/user/login' },
      { path: '/user/login', name: 'login', component: './User/Login' },
      { path: '/user/register', name: 'register', component: './User/Register' },
      {
        path: '/user/register-result',
        name: 'register.result',
        component: './User/RegisterResult',
      },
      {
        component: '404',
      },
    ],
  },
  // app
  {
    path: '/',
    component: '../layouts/BasicLayout',
    Routes: ['src/pages/Authorized'],
    routes: [
      { path: '/', redirect: '/dashboard/analysis', authority: ['admin', 'user'] },
      // 人员管理
      {
        path: '/dashboard',
        name: '人员管理',
        icon: 'smile',
        routes: [
          {
            path: '/dashboard/analysis',
            name: 'analysis',
            component: './Dashboard/Analysis',
          },
          {
            path: '/dashboard/monitor',
            name: 'monitor',
            component: './Dashboard/Monitor',
          },
          {
            path: '/dashboard/workplace',
            name: 'workplace',
            component: './Dashboard/Workplace',
          },
        ],
      },
      // 在线学习
      {
        path: '/form',
        icon: 'read',
        name: '在线学习',
        routes: [
          {
            path: '/form/basic-form',
            name: 'basicform',
            component: './Forms/BasicForm',
          },
          {
            path: '/form/step-form',
            name: 'stepform',
            component: './Forms/StepForm',
            hideChildrenInMenu: true,
            routes: [
              {
                path: '/form/step-form',
                redirect: '/form/step-form/info',
              },
              {
                path: '/form/step-form/info',
                name: 'info',
                component: './Forms/StepForm/Step1',
              },
              {
                path: '/form/step-form/confirm',
                name: 'confirm',
                component: './Forms/StepForm/Step2',
              },
              {
                path: '/form/step-form/result',
                name: 'result',
                component: './Forms/StepForm/Step3',
              },
            ],
          },
          {
            path: '/form/advanced-form',
            name: 'advancedform',
            authority: ['admin'],
            component: './Forms/AdvancedForm',
          },
        ],
      },
      // 培训班管理
      {
        path: '/list',
        icon: 'table',
        name: '培训管理',
        routes: [
          {
            path: '/list/StuReg',
            name: '培训班管理',
            // component: './List/StuReg',
            routes: [
              {
                path: './List/StuReg',
                name: '班级管理',
                component: './List/StuReg',
              },
              {
                path: './List/ClassMana',
                name: '课程管理',
                component: './List/ClassMana',
              },
              {
                path: './List/MemberMana',
                name: '学员管理',
                component: './List/MemberMana',
              },
            ],
          },
          {
            path: '/list/basic-list',
            name: '*培训资料管理',
            component: './List/BasicList',
          },
          {
            path: '/list/card-list',
            name: '*培训班档案管理',
            component: './List/CardList',
          },
          {
            path: '/list/#1',
            name: '*学员档案管理',
            component: './List/List',
          },
          {
            path: '/list/TrainPaln',
            name: '培训计划管理',
            component: './List/TrainPaln',
          },
          {
            path: '/list/TrainTeacher',
            name: '内训师管理',
            routes: [
              {
                path: '/list/TrainTeacher/Teacher',
                name: '内训师个人信息管理',
                component: './List/TrainTeacher/Teacher',
              },
              {
                path: '/list/TrainTeacher/ClassStyle',
                name: '内训师课程呈现',
                component: './List/TrainTeacher/ClassStyle',
              },
              {
                path: '/list/TrainTeacher/ClassAnalyze',
                name: '内训师授课情况统计',
                component: './List/TrainTeacher/ClassAnalyze',
              },
            ],
          },
          {
            path: '/list/#2',
            name: '*课程清单管理',
            component: './List/List',
          },
          {
            path: '/list/#3',
            name: '*培训需求管理',
            component: './List/List',
          },
        ],
      },
      // 线上测评
      {
        path: '/profile',
        name: '线上测评',
        icon: 'profile',
        routes: [
          {
            path: '/profile/basic',
            name: 'basic',
            component: './Profile/BasicProfile',
          },
          {
            path: '/profile/basic/:id',
            hideInMenu: true,
            component: './Profile/BasicProfile',
          },
          {
            path: '/profile/advanced',
            name: 'advanced',
            authority: ['admin'],
            component: './Profile/AdvancedProfile',
          },
        ],
      },
      // 统计分析
      {
        name: '统计分析',
        icon: 'pie-chart',
        path: '/result',
        routes: [
          {
            path: '/result/success',
            name: 'success',
            component: './Result/Success',
          },
          { path: '/result/fail', name: 'fail', component: './Result/Error' },
        ],
      },
      {
        component: '404',
      },
    ],
  },
];
