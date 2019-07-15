import React from 'react';
import { Router as DefaultRouter, Route, Switch } from 'react-router-dom';
import dynamic from 'umi/dynamic';
import renderRoutes from 'umi/lib/renderRoutes';
import history from '@tmp/history';
import RendererWrapper0 from 'E:/code/TieTong/Myproject/src/pages/.umi/LocaleWrapper.jsx'
import _dvaDynamic from 'dva/dynamic'

const Router = require('dva/router').routerRedux.ConnectedRouter;

const routes = [
  {
    "path": "/user",
    "component": __IS_BROWSER
    ? _dvaDynamic({
      
      component: () => import(/* webpackChunkName: "layouts__UserLayout" */'../../layouts/UserLayout'),
      LoadingComponent: require('E:/code/TieTong/Myproject/src/components/PageLoading/index').default,
    })
    : require('../../layouts/UserLayout').default,
    "routes": [
      {
        "path": "/user",
        "redirect": "/user/login",
        "exact": true
      },
      {
        "path": "/user/login",
        "name": "login",
        "component": __IS_BROWSER
    ? _dvaDynamic({
      app: require('@tmp/dva').getApp(),
models: () => [
  import(/* webpackChunkName: 'p__User__models__register.js' */'E:/code/TieTong/Myproject/src/pages/User/models/register.js').then(m => { return { namespace: 'register',...m.default}})
],
      component: () => import(/* webpackChunkName: "p__User__Login" */'../User/Login'),
      LoadingComponent: require('E:/code/TieTong/Myproject/src/components/PageLoading/index').default,
    })
    : require('../User/Login').default,
        "exact": true
      },
      {
        "path": "/user/register",
        "name": "register",
        "component": __IS_BROWSER
    ? _dvaDynamic({
      app: require('@tmp/dva').getApp(),
models: () => [
  import(/* webpackChunkName: 'p__User__models__register.js' */'E:/code/TieTong/Myproject/src/pages/User/models/register.js').then(m => { return { namespace: 'register',...m.default}})
],
      component: () => import(/* webpackChunkName: "p__User__Register" */'../User/Register'),
      LoadingComponent: require('E:/code/TieTong/Myproject/src/components/PageLoading/index').default,
    })
    : require('../User/Register').default,
        "exact": true
      },
      {
        "path": "/user/register-result",
        "name": "register.result",
        "component": __IS_BROWSER
    ? _dvaDynamic({
      app: require('@tmp/dva').getApp(),
models: () => [
  import(/* webpackChunkName: 'p__User__models__register.js' */'E:/code/TieTong/Myproject/src/pages/User/models/register.js').then(m => { return { namespace: 'register',...m.default}})
],
      component: () => import(/* webpackChunkName: "p__User__RegisterResult" */'../User/RegisterResult'),
      LoadingComponent: require('E:/code/TieTong/Myproject/src/components/PageLoading/index').default,
    })
    : require('../User/RegisterResult').default,
        "exact": true
      },
      {
        "component": __IS_BROWSER
    ? _dvaDynamic({
      
      component: () => import(/* webpackChunkName: "p__404" */'../404'),
      LoadingComponent: require('E:/code/TieTong/Myproject/src/components/PageLoading/index').default,
    })
    : require('../404').default,
        "exact": true
      },
      {
        "component": () => React.createElement(require('E:/code/TieTong/Myproject/node_modules/_umi-build-dev@1.10.11@umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: true })
      }
    ]
  },
  {
    "path": "/",
    "component": __IS_BROWSER
    ? _dvaDynamic({
      
      component: () => import(/* webpackChunkName: "layouts__BasicLayout" */'../../layouts/BasicLayout'),
      LoadingComponent: require('E:/code/TieTong/Myproject/src/components/PageLoading/index').default,
    })
    : require('../../layouts/BasicLayout').default,
    "Routes": [require('../Authorized').default],
    "routes": [
      {
        "path": "/",
        "redirect": "/dashboard/analysis",
        "authority": [
          "admin",
          "user"
        ],
        "exact": true
      },
      {
        "path": "/dashboard",
        "name": "人员管理",
        "icon": "smile",
        "routes": [
          {
            "path": "/dashboard/analysis",
            "name": "analysis",
            "component": __IS_BROWSER
    ? _dvaDynamic({
      app: require('@tmp/dva').getApp(),
models: () => [
  import(/* webpackChunkName: 'p__Dashboard__models__activities.js' */'E:/code/TieTong/Myproject/src/pages/Dashboard/models/activities.js').then(m => { return { namespace: 'activities',...m.default}}),
  import(/* webpackChunkName: 'p__Dashboard__models__chart.js' */'E:/code/TieTong/Myproject/src/pages/Dashboard/models/chart.js').then(m => { return { namespace: 'chart',...m.default}}),
  import(/* webpackChunkName: 'p__Dashboard__models__monitor.js' */'E:/code/TieTong/Myproject/src/pages/Dashboard/models/monitor.js').then(m => { return { namespace: 'monitor',...m.default}})
],
      component: () => import(/* webpackChunkName: "p__Dashboard__Analysis" */'../Dashboard/Analysis'),
      LoadingComponent: require('E:/code/TieTong/Myproject/src/components/PageLoading/index').default,
    })
    : require('../Dashboard/Analysis').default,
            "exact": true
          },
          {
            "path": "/dashboard/monitor",
            "name": "monitor",
            "component": __IS_BROWSER
    ? _dvaDynamic({
      app: require('@tmp/dva').getApp(),
models: () => [
  import(/* webpackChunkName: 'p__Dashboard__models__activities.js' */'E:/code/TieTong/Myproject/src/pages/Dashboard/models/activities.js').then(m => { return { namespace: 'activities',...m.default}}),
  import(/* webpackChunkName: 'p__Dashboard__models__chart.js' */'E:/code/TieTong/Myproject/src/pages/Dashboard/models/chart.js').then(m => { return { namespace: 'chart',...m.default}}),
  import(/* webpackChunkName: 'p__Dashboard__models__monitor.js' */'E:/code/TieTong/Myproject/src/pages/Dashboard/models/monitor.js').then(m => { return { namespace: 'monitor',...m.default}})
],
      component: () => import(/* webpackChunkName: "p__Dashboard__Monitor" */'../Dashboard/Monitor'),
      LoadingComponent: require('E:/code/TieTong/Myproject/src/components/PageLoading/index').default,
    })
    : require('../Dashboard/Monitor').default,
            "exact": true
          },
          {
            "path": "/dashboard/workplace",
            "name": "workplace",
            "component": __IS_BROWSER
    ? _dvaDynamic({
      app: require('@tmp/dva').getApp(),
models: () => [
  import(/* webpackChunkName: 'p__Dashboard__models__activities.js' */'E:/code/TieTong/Myproject/src/pages/Dashboard/models/activities.js').then(m => { return { namespace: 'activities',...m.default}}),
  import(/* webpackChunkName: 'p__Dashboard__models__chart.js' */'E:/code/TieTong/Myproject/src/pages/Dashboard/models/chart.js').then(m => { return { namespace: 'chart',...m.default}}),
  import(/* webpackChunkName: 'p__Dashboard__models__monitor.js' */'E:/code/TieTong/Myproject/src/pages/Dashboard/models/monitor.js').then(m => { return { namespace: 'monitor',...m.default}})
],
      component: () => import(/* webpackChunkName: "p__Dashboard__Workplace" */'../Dashboard/Workplace'),
      LoadingComponent: require('E:/code/TieTong/Myproject/src/components/PageLoading/index').default,
    })
    : require('../Dashboard/Workplace').default,
            "exact": true
          },
          {
            "component": () => React.createElement(require('E:/code/TieTong/Myproject/node_modules/_umi-build-dev@1.10.11@umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: true })
          }
        ]
      },
      {
        "path": "/form",
        "icon": "read",
        "name": "在线学习",
        "routes": [
          {
            "path": "/form/basic-form",
            "name": "basicform",
            "component": __IS_BROWSER
    ? _dvaDynamic({
      app: require('@tmp/dva').getApp(),
models: () => [
  import(/* webpackChunkName: 'p__Forms__models__form.js' */'E:/code/TieTong/Myproject/src/pages/Forms/models/form.js').then(m => { return { namespace: 'form',...m.default}})
],
      component: () => import(/* webpackChunkName: "p__Forms__BasicForm" */'../Forms/BasicForm'),
      LoadingComponent: require('E:/code/TieTong/Myproject/src/components/PageLoading/index').default,
    })
    : require('../Forms/BasicForm').default,
            "exact": true
          },
          {
            "path": "/form/step-form",
            "name": "stepform",
            "component": __IS_BROWSER
    ? _dvaDynamic({
      app: require('@tmp/dva').getApp(),
models: () => [
  import(/* webpackChunkName: 'p__Forms__models__form.js' */'E:/code/TieTong/Myproject/src/pages/Forms/models/form.js').then(m => { return { namespace: 'form',...m.default}})
],
      component: () => import(/* webpackChunkName: "p__Forms__StepForm" */'../Forms/StepForm'),
      LoadingComponent: require('E:/code/TieTong/Myproject/src/components/PageLoading/index').default,
    })
    : require('../Forms/StepForm').default,
            "hideChildrenInMenu": true,
            "routes": [
              {
                "path": "/form/step-form",
                "redirect": "/form/step-form/info",
                "exact": true
              },
              {
                "path": "/form/step-form/info",
                "name": "info",
                "component": __IS_BROWSER
    ? _dvaDynamic({
      app: require('@tmp/dva').getApp(),
models: () => [
  import(/* webpackChunkName: 'p__Forms__models__form.js' */'E:/code/TieTong/Myproject/src/pages/Forms/models/form.js').then(m => { return { namespace: 'form',...m.default}})
],
      component: () => import(/* webpackChunkName: "p__Forms__StepForm" */'../Forms/StepForm/Step1'),
      LoadingComponent: require('E:/code/TieTong/Myproject/src/components/PageLoading/index').default,
    })
    : require('../Forms/StepForm/Step1').default,
                "exact": true
              },
              {
                "path": "/form/step-form/confirm",
                "name": "confirm",
                "component": __IS_BROWSER
    ? _dvaDynamic({
      app: require('@tmp/dva').getApp(),
models: () => [
  import(/* webpackChunkName: 'p__Forms__models__form.js' */'E:/code/TieTong/Myproject/src/pages/Forms/models/form.js').then(m => { return { namespace: 'form',...m.default}})
],
      component: () => import(/* webpackChunkName: "p__Forms__StepForm" */'../Forms/StepForm/Step2'),
      LoadingComponent: require('E:/code/TieTong/Myproject/src/components/PageLoading/index').default,
    })
    : require('../Forms/StepForm/Step2').default,
                "exact": true
              },
              {
                "path": "/form/step-form/result",
                "name": "result",
                "component": __IS_BROWSER
    ? _dvaDynamic({
      app: require('@tmp/dva').getApp(),
models: () => [
  import(/* webpackChunkName: 'p__Forms__models__form.js' */'E:/code/TieTong/Myproject/src/pages/Forms/models/form.js').then(m => { return { namespace: 'form',...m.default}})
],
      component: () => import(/* webpackChunkName: "p__Forms__StepForm" */'../Forms/StepForm/Step3'),
      LoadingComponent: require('E:/code/TieTong/Myproject/src/components/PageLoading/index').default,
    })
    : require('../Forms/StepForm/Step3').default,
                "exact": true
              },
              {
                "component": () => React.createElement(require('E:/code/TieTong/Myproject/node_modules/_umi-build-dev@1.10.11@umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: true })
              }
            ]
          },
          {
            "path": "/form/advanced-form",
            "name": "advancedform",
            "authority": [
              "admin"
            ],
            "component": __IS_BROWSER
    ? _dvaDynamic({
      app: require('@tmp/dva').getApp(),
models: () => [
  import(/* webpackChunkName: 'p__Forms__models__form.js' */'E:/code/TieTong/Myproject/src/pages/Forms/models/form.js').then(m => { return { namespace: 'form',...m.default}})
],
      component: () => import(/* webpackChunkName: "p__Forms__AdvancedForm" */'../Forms/AdvancedForm'),
      LoadingComponent: require('E:/code/TieTong/Myproject/src/components/PageLoading/index').default,
    })
    : require('../Forms/AdvancedForm').default,
            "exact": true
          },
          {
            "component": () => React.createElement(require('E:/code/TieTong/Myproject/node_modules/_umi-build-dev@1.10.11@umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: true })
          }
        ]
      },
      {
        "path": "/list",
        "icon": "table",
        "name": "培训管理",
        "routes": [
          {
            "path": "/list/StuReg",
            "name": "培训班管理",
            "routes": [
              {
                "path": "/list/StuReg/List/StuReg",
                "name": "班级管理",
                "component": __IS_BROWSER
    ? _dvaDynamic({
      app: require('@tmp/dva').getApp(),
models: () => [
  import(/* webpackChunkName: 'p__List__models__rule.js' */'E:/code/TieTong/Myproject/src/pages/List/models/rule.js').then(m => { return { namespace: 'rule',...m.default}})
],
      component: () => import(/* webpackChunkName: "layouts__BasicLayout" */'../List/StuReg'),
      LoadingComponent: require('E:/code/TieTong/Myproject/src/components/PageLoading/index').default,
    })
    : require('../List/StuReg').default,
                "exact": true
              },
              {
                "path": "/list/StuReg/List/ClassMana",
                "name": "课程管理",
                "component": __IS_BROWSER
    ? _dvaDynamic({
      app: require('@tmp/dva').getApp(),
models: () => [
  import(/* webpackChunkName: 'p__List__models__rule.js' */'E:/code/TieTong/Myproject/src/pages/List/models/rule.js').then(m => { return { namespace: 'rule',...m.default}})
],
      component: () => import(/* webpackChunkName: "layouts__BasicLayout" */'../List/ClassMana'),
      LoadingComponent: require('E:/code/TieTong/Myproject/src/components/PageLoading/index').default,
    })
    : require('../List/ClassMana').default,
                "exact": true
              },
              {
                "path": "/list/StuReg/List/MemberMana",
                "name": "学员管理",
                "component": __IS_BROWSER
    ? _dvaDynamic({
      app: require('@tmp/dva').getApp(),
models: () => [
  import(/* webpackChunkName: 'p__List__models__rule.js' */'E:/code/TieTong/Myproject/src/pages/List/models/rule.js').then(m => { return { namespace: 'rule',...m.default}})
],
      component: () => import(/* webpackChunkName: "layouts__BasicLayout" */'../List/MemberMana'),
      LoadingComponent: require('E:/code/TieTong/Myproject/src/components/PageLoading/index').default,
    })
    : require('../List/MemberMana').default,
                "exact": true
              },
              {
                "component": () => React.createElement(require('E:/code/TieTong/Myproject/node_modules/_umi-build-dev@1.10.11@umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: true })
              }
            ]
          },
          {
            "path": "/list/basic-list",
            "name": "*培训资料管理",
            "component": __IS_BROWSER
    ? _dvaDynamic({
      app: require('@tmp/dva').getApp(),
models: () => [
  import(/* webpackChunkName: 'p__List__models__rule.js' */'E:/code/TieTong/Myproject/src/pages/List/models/rule.js').then(m => { return { namespace: 'rule',...m.default}})
],
      component: () => import(/* webpackChunkName: "p__List__BasicList" */'../List/BasicList'),
      LoadingComponent: require('E:/code/TieTong/Myproject/src/components/PageLoading/index').default,
    })
    : require('../List/BasicList').default,
            "exact": true
          },
          {
            "path": "/list/card-list",
            "name": "*培训班档案管理",
            "component": __IS_BROWSER
    ? _dvaDynamic({
      app: require('@tmp/dva').getApp(),
models: () => [
  import(/* webpackChunkName: 'p__List__models__rule.js' */'E:/code/TieTong/Myproject/src/pages/List/models/rule.js').then(m => { return { namespace: 'rule',...m.default}})
],
      component: () => import(/* webpackChunkName: "p__List__CardList" */'../List/CardList'),
      LoadingComponent: require('E:/code/TieTong/Myproject/src/components/PageLoading/index').default,
    })
    : require('../List/CardList').default,
            "exact": true
          },
          {
            "path": "/list/#1",
            "name": "*学员档案管理",
            "component": __IS_BROWSER
    ? _dvaDynamic({
      app: require('@tmp/dva').getApp(),
models: () => [
  import(/* webpackChunkName: 'p__List__models__rule.js' */'E:/code/TieTong/Myproject/src/pages/List/models/rule.js').then(m => { return { namespace: 'rule',...m.default}})
],
      component: () => import(/* webpackChunkName: "p__List__List" */'../List/List'),
      LoadingComponent: require('E:/code/TieTong/Myproject/src/components/PageLoading/index').default,
    })
    : require('../List/List').default,
            "exact": true
          },
          {
            "path": "/list/TrainPaln",
            "name": "培训计划管理",
            "component": __IS_BROWSER
    ? _dvaDynamic({
      app: require('@tmp/dva').getApp(),
models: () => [
  import(/* webpackChunkName: 'p__List__models__rule.js' */'E:/code/TieTong/Myproject/src/pages/List/models/rule.js').then(m => { return { namespace: 'rule',...m.default}})
],
      component: () => import(/* webpackChunkName: "p__List__TrainPaln" */'../List/TrainPaln'),
      LoadingComponent: require('E:/code/TieTong/Myproject/src/components/PageLoading/index').default,
    })
    : require('../List/TrainPaln').default,
            "exact": true
          },
          {
            "path": "/list/TrainTeacher",
            "name": "内训师管理",
            "routes": [
              {
                "path": "/list/TrainTeacher/Teacher",
                "name": "内训师个人信息管理",
                "component": __IS_BROWSER
    ? _dvaDynamic({
      app: require('@tmp/dva').getApp(),
models: () => [
  import(/* webpackChunkName: 'p__List__models__rule.js' */'E:/code/TieTong/Myproject/src/pages/List/models/rule.js').then(m => { return { namespace: 'rule',...m.default}})
],
      component: () => import(/* webpackChunkName: "layouts__BasicLayout" */'../List/TrainTeacher/Teacher'),
      LoadingComponent: require('E:/code/TieTong/Myproject/src/components/PageLoading/index').default,
    })
    : require('../List/TrainTeacher/Teacher').default,
                "exact": true
              },
              {
                "path": "/list/TrainTeacher/ClassStyle",
                "name": "内训师课程呈现",
                "component": __IS_BROWSER
    ? _dvaDynamic({
      app: require('@tmp/dva').getApp(),
models: () => [
  import(/* webpackChunkName: 'p__List__models__rule.js' */'E:/code/TieTong/Myproject/src/pages/List/models/rule.js').then(m => { return { namespace: 'rule',...m.default}})
],
      component: () => import(/* webpackChunkName: "layouts__BasicLayout" */'../List/TrainTeacher/ClassStyle'),
      LoadingComponent: require('E:/code/TieTong/Myproject/src/components/PageLoading/index').default,
    })
    : require('../List/TrainTeacher/ClassStyle').default,
                "exact": true
              },
              {
                "path": "/list/TrainTeacher/ClassAnalyze",
                "name": "内训师授课情况统计",
                "component": __IS_BROWSER
    ? _dvaDynamic({
      app: require('@tmp/dva').getApp(),
models: () => [
  import(/* webpackChunkName: 'p__List__models__rule.js' */'E:/code/TieTong/Myproject/src/pages/List/models/rule.js').then(m => { return { namespace: 'rule',...m.default}})
],
      component: () => import(/* webpackChunkName: "layouts__BasicLayout" */'../List/TrainTeacher/ClassAnalyze'),
      LoadingComponent: require('E:/code/TieTong/Myproject/src/components/PageLoading/index').default,
    })
    : require('../List/TrainTeacher/ClassAnalyze').default,
                "exact": true
              },
              {
                "component": () => React.createElement(require('E:/code/TieTong/Myproject/node_modules/_umi-build-dev@1.10.11@umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: true })
              }
            ]
          },
          {
            "path": "/list/#2",
            "name": "*课程清单管理",
            "component": __IS_BROWSER
    ? _dvaDynamic({
      app: require('@tmp/dva').getApp(),
models: () => [
  import(/* webpackChunkName: 'p__List__models__rule.js' */'E:/code/TieTong/Myproject/src/pages/List/models/rule.js').then(m => { return { namespace: 'rule',...m.default}})
],
      component: () => import(/* webpackChunkName: "p__List__List" */'../List/List'),
      LoadingComponent: require('E:/code/TieTong/Myproject/src/components/PageLoading/index').default,
    })
    : require('../List/List').default,
            "exact": true
          },
          {
            "path": "/list/#3",
            "name": "*培训需求管理",
            "component": __IS_BROWSER
    ? _dvaDynamic({
      app: require('@tmp/dva').getApp(),
models: () => [
  import(/* webpackChunkName: 'p__List__models__rule.js' */'E:/code/TieTong/Myproject/src/pages/List/models/rule.js').then(m => { return { namespace: 'rule',...m.default}})
],
      component: () => import(/* webpackChunkName: "p__List__List" */'../List/List'),
      LoadingComponent: require('E:/code/TieTong/Myproject/src/components/PageLoading/index').default,
    })
    : require('../List/List').default,
            "exact": true
          },
          {
            "component": () => React.createElement(require('E:/code/TieTong/Myproject/node_modules/_umi-build-dev@1.10.11@umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: true })
          }
        ]
      },
      {
        "path": "/profile",
        "name": "线上测评",
        "icon": "profile",
        "routes": [
          {
            "path": "/profile/basic",
            "name": "basic",
            "component": __IS_BROWSER
    ? _dvaDynamic({
      app: require('@tmp/dva').getApp(),
models: () => [
  import(/* webpackChunkName: 'p__Profile__models__profile.js' */'E:/code/TieTong/Myproject/src/pages/Profile/models/profile.js').then(m => { return { namespace: 'profile',...m.default}})
],
      component: () => import(/* webpackChunkName: "p__Profile__BasicProfile" */'../Profile/BasicProfile'),
      LoadingComponent: require('E:/code/TieTong/Myproject/src/components/PageLoading/index').default,
    })
    : require('../Profile/BasicProfile').default,
            "exact": true
          },
          {
            "path": "/profile/basic/:id",
            "hideInMenu": true,
            "component": __IS_BROWSER
    ? _dvaDynamic({
      app: require('@tmp/dva').getApp(),
models: () => [
  import(/* webpackChunkName: 'p__Profile__models__profile.js' */'E:/code/TieTong/Myproject/src/pages/Profile/models/profile.js').then(m => { return { namespace: 'profile',...m.default}})
],
      component: () => import(/* webpackChunkName: "p__Profile__BasicProfile" */'../Profile/BasicProfile'),
      LoadingComponent: require('E:/code/TieTong/Myproject/src/components/PageLoading/index').default,
    })
    : require('../Profile/BasicProfile').default,
            "exact": true
          },
          {
            "path": "/profile/advanced",
            "name": "advanced",
            "authority": [
              "admin"
            ],
            "component": __IS_BROWSER
    ? _dvaDynamic({
      app: require('@tmp/dva').getApp(),
models: () => [
  import(/* webpackChunkName: 'p__Profile__models__profile.js' */'E:/code/TieTong/Myproject/src/pages/Profile/models/profile.js').then(m => { return { namespace: 'profile',...m.default}})
],
      component: () => import(/* webpackChunkName: "p__Profile__AdvancedProfile" */'../Profile/AdvancedProfile'),
      LoadingComponent: require('E:/code/TieTong/Myproject/src/components/PageLoading/index').default,
    })
    : require('../Profile/AdvancedProfile').default,
            "exact": true
          },
          {
            "component": () => React.createElement(require('E:/code/TieTong/Myproject/node_modules/_umi-build-dev@1.10.11@umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: true })
          }
        ]
      },
      {
        "name": "统计分析",
        "icon": "pie-chart",
        "path": "/result",
        "routes": [
          {
            "path": "/result/success",
            "name": "success",
            "component": __IS_BROWSER
    ? _dvaDynamic({
      
      component: () => import(/* webpackChunkName: "p__Result__Success" */'../Result/Success'),
      LoadingComponent: require('E:/code/TieTong/Myproject/src/components/PageLoading/index').default,
    })
    : require('../Result/Success').default,
            "exact": true
          },
          {
            "path": "/result/fail",
            "name": "fail",
            "component": __IS_BROWSER
    ? _dvaDynamic({
      
      component: () => import(/* webpackChunkName: "p__Result__Error" */'../Result/Error'),
      LoadingComponent: require('E:/code/TieTong/Myproject/src/components/PageLoading/index').default,
    })
    : require('../Result/Error').default,
            "exact": true
          },
          {
            "component": () => React.createElement(require('E:/code/TieTong/Myproject/node_modules/_umi-build-dev@1.10.11@umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: true })
          }
        ]
      },
      {
        "component": __IS_BROWSER
    ? _dvaDynamic({
      
      component: () => import(/* webpackChunkName: "p__404" */'../404'),
      LoadingComponent: require('E:/code/TieTong/Myproject/src/components/PageLoading/index').default,
    })
    : require('../404').default,
        "exact": true
      },
      {
        "component": () => React.createElement(require('E:/code/TieTong/Myproject/node_modules/_umi-build-dev@1.10.11@umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: true })
      }
    ]
  },
  {
    "component": () => React.createElement(require('E:/code/TieTong/Myproject/node_modules/_umi-build-dev@1.10.11@umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: true })
  }
];
window.g_routes = routes;
const plugins = require('umi/_runtimePlugin');
plugins.applyForEach('patchRoutes', { initialValue: routes });

// route change handler
function routeChangeHandler(location, action) {
  plugins.applyForEach('onRouteChange', {
    initialValue: {
      routes,
      location,
      action,
    },
  });
}
history.listen(routeChangeHandler);
routeChangeHandler(history.location);

export { routes };

export default function RouterWrapper(props = {}) {
  return (
<RendererWrapper0>
          <Router history={history}>
      { renderRoutes(routes, props) }
    </Router>
        </RendererWrapper0>
  );
}
