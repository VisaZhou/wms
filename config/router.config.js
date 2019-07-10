
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
  // // app
  // {
  //   path: '/',
  //   component: '../layouts/BasicLayout',
  //   Routes: ['src/pages/Authorized'],
  //   routes: [
  //     // dashboard
  //     { path: '/', redirect: '/dashboard/analysis', authority: ['admin', 'user'] },
  //     {
  //       path: '/dashboard',
  //       name: 'dashboard',
  //       icon: 'dashboard',
  //       routes: [
  //         {
  //           path: '/dashboard/analysis',
  //           name: 'analysis',
  //           component: './Dashboard/Analysis',
  //         },
  //         {
  //           path: '/dashboard/monitor',
  //           name: 'monitor',
  //           component: './Dashboard/Monitor',
  //         },
  //         {
  //           path: '/dashboard/workplace',
  //           name: 'workplace',
  //           component: './Dashboard/Workplace',
  //         },
  //       ],
  //     },
  //     // forms
  //     {
  //       path: '/form',
  //       icon: 'form',
  //       name: 'form',
  //       routes: [
  //         {
  //           path: '/form/basic-form',
  //           name: 'basicform',
  //           component: './Forms/BasicForm',
  //         },
  //         {
  //           path: '/form/step-form',
  //           name: 'stepform',
  //           component: './Forms/StepForm',
  //           hideChildrenInMenu: true,
  //           routes: [
  //             {
  //               path: '/form/step-form',
  //               redirect: '/form/step-form/info',
  //             },
  //             {
  //               path: '/form/step-form/info',
  //               name: 'info',
  //               component: './Forms/StepForm/Step1',
  //             },
  //             {
  //               path: '/form/step-form/confirm',
  //               name: 'confirm',
  //               component: './Forms/StepForm/Step2',
  //             },
  //             {
  //               path: '/form/step-form/result',
  //               name: 'result',
  //               component: './Forms/StepForm/Step3',
  //             },
  //           ],
  //         },
  //         {
  //           path: '/form/advanced-form',
  //           name: 'advancedform',
  //           authority: ['admin'],
  //           component: './Forms/AdvancedForm',
  //         },
  //       ],
  //     },
  //     // list
  //     {
  //       path: '/list',
  //       icon: 'table',
  //       name: 'list',
  //       routes: [
  //         {
  //           path: '/list/table-list',
  //           name: 'searchtable',
  //           component: './List/TableList',
  //         },
  //         {
  //           path: '/list/basic-list',
  //           name: 'basiclist',
  //           component: './List/BasicList',
  //         },
  //         {
  //           path: '/list/card-list',
  //           name: 'cardlist',
  //           component: './List/CardList',
  //         },
  //         {
  //           path: '/list/search',
  //           name: 'searchlist',
  //           component: './List/List',
  //           routes: [
  //             {
  //               path: '/list/search',
  //               redirect: '/list/search/articles',
  //             },
  //             {
  //               path: '/list/search/articles',
  //               name: 'articles',
  //               component: './List/Articles',
  //             },
  //             {
  //               path: '/list/search/projects',
  //               name: 'projects',
  //               component: './List/Projects',
  //             },
  //             {
  //               path: '/list/search/applications',
  //               name: 'applications',
  //               component: './List/Applications',
  //             },
  //           ],
  //         },
  //       ],
  //     },
  //     {
  //       path: '/profile',
  //       name: 'profile',
  //       icon: 'profile',
  //       routes: [
  //         // profile
  //         {
  //           path: '/profile/basic',
  //           name: 'basic',
  //           component: './Profile/BasicProfile',
  //         },
  //         {
  //           path: '/profile/basic/:id',
  //           name: 'basic',
  //           hideInMenu: true,
  //           component: './Profile/BasicProfile',
  //         },
  //         {
  //           path: '/profile/advanced',
  //           name: 'advanced',
  //           authority: ['admin'],
  //           component: './Profile/AdvancedProfile',
  //         },
  //       ],
  //     },
  //     {
  //       name: 'result',
  //       icon: 'check-circle-o',
  //       path: '/result',
  //       routes: [
  //         // result
  //         {
  //           path: '/result/success',
  //           name: 'success',
  //           component: './Result/Success',
  //         },
  //         { path: '/result/fail', name: 'fail', component: './Result/Error' },
  //       ],
  //     },
  //     {
  //       name: 'exception',
  //       icon: 'warning',
  //       path: '/exception',
  //       routes: [
  //         // exception
  //         {
  //           path: '/exception/403',
  //           name: 'not-permission',
  //           component: './Exception/403',
  //         },
  //         {
  //           path: '/exception/404',
  //           name: 'not-find',
  //           component: './Exception/404',
  //         },
  //         {
  //           path: '/exception/500',
  //           name: 'server-error',
  //           component: './Exception/500',
  //         },
  //         {
  //           path: '/exception/trigger',
  //           name: 'trigger',
  //           hideInMenu: true,
  //           component: './Exception/TriggerException',
  //         },
  //       ],
  //     },
  //     {
  //       name: 'account',
  //       icon: 'user',
  //       path: '/account',
  //       routes: [
  //         {
  //           path: '/account/center',
  //           name: 'center',
  //           component: './Account/Center/Center',
  //           routes: [
  //             {
  //               path: '/account/center',
  //               redirect: '/account/center/articles',
  //             },
  //             {
  //               path: '/account/center/articles',
  //               component: './Account/Center/Articles',
  //             },
  //             {
  //               path: '/account/center/applications',
  //               component: './Account/Center/Applications',
  //             },
  //             {
  //               path: '/account/center/projects',
  //               component: './Account/Center/Projects',
  //             },
  //           ],
  //         },
  //         {
  //           path: '/account/settings',
  //           name: 'settings',
  //           component: './Account/Settings/Info',
  //           routes: [
  //             {
  //               path: '/account/settings',
  //               redirect: '/account/settings/base',
  //             },
  //             {
  //               path: '/account/settings/base',
  //               component: './Account/Settings/BaseView',
  //             },
  //             {
  //               path: '/account/settings/security',
  //               component: './Account/Settings/SecurityView',
  //             },
  //             {
  //               path: '/account/settings/binding',
  //               component: './Account/Settings/BindingView',
  //             },
  //             {
  //               path: '/account/settings/notification',
  //               component: './Account/Settings/NotificationView',
  //             },
  //           ],
  //         },
  //       ],
  //     },
  //     //  editor
  //     {
  //       name: 'editor',
  //       icon: 'highlight',
  //       path: '/editor',
  //       routes: [
  //         {
  //           path: '/editor/flow',
  //           name: 'flow',
  //           component: './Editor/GGEditor/Flow',
  //         },
  //         {
  //           path: '/editor/mind',
  //           name: 'mind',
  //           component: './Editor/GGEditor/Mind',
  //         },
  //         {
  //           path: '/editor/koni',
  //           name: 'koni',
  //           component: './Editor/GGEditor/Koni',
  //         },
  //       ],
  //     },
  //     {
  //       component: '404',
  //     },
  //   ],
  // },

  // app
  {
    path: '/',
    component: '../layouts/BasicLayout',
     Routes: ['src/pages/Authorized'],
    routes: [
      // 工作台
      { path: '/', redirect: '/workplace/panel' },
      {
        path: '/workplace',
        name: 'workplace',
        icon: 'dashboard',
        authority: ['admin'],
        routes: [
          {
            path: '/workplace/panel',
            name: 'panel',
            component: './Workplace/Panel',
          },
        ],
      },
      // 基本资料
      {
        path: '/basicdata',
        icon: 'form',
        name: 'basicdata',
        authority: ['admin'],
        routes: [
          {
            path: '/basicdata/warehouse',
            name: 'warehouse',
            authority: ['admin'],
            // component: './Forms/BasicForm',
            routes: [
              {
                path: '/basicdata/warehouse',
                redirect: '/basicdata/warehouse/administration',
                authority: ['admin'],
              },
              {
                path: '/basicdata/warehouse/administration',
                name: 'administration',
                component: './Basicdata/Warehouse/Administration',
                authority: [],
              },
              {
                path: '/basicdata/warehouse/type',
                name: 'type',
                component: './Basicdata/Warehouse/Type',
              },
            ],
          },
          {
            path: '/basicdata/storehouse',
            name: 'storehouse',
            // component: './Forms/AdvancedForm',
            routes: [
              {
                path: '/basicdata/storehouse',
                redirect: '/basicdata/storehouse/administration',
              },
              {
                path: '/basicdata/storehouse/administration',
                name: 'administration',
                component: './Basicdata/Storehouse/Administration',
              },
              {
                path: '/basicdata/storehouse/type',
                name: 'type',
                component: './Basicdata/Storehouse/Type',
              },
            ],
          },
          {
            path: '/basicdata/equipment',
            name: 'equipment',
            component: './Basicdata/Equipment',
          },
          {
            path: '/basicdata/supplier',
            name: 'supplier',
            // component: './Forms/AdvancedForm',
            routes: [
              {
                path: '/basicdata/supplier',
                redirect: '/basicdata/supplier/administration',
              },
              {
                path: '/basicdata/supplier/administration',
                name: 'administration',
                component: './Basicdata/Supplier/Administration',
              },
              {
                path: '/basicdata/supplier/type',
                name: 'type',
                component: './Basicdata/Supplier/Type',
              },
            ],
          },
          {
            path: '/basicdata/customer',
            name: 'customer',
            component: './Basicdata/Customer',
          },
          {
            path: '/basicdata/measurement',
            name: 'measurement',
            component: './Basicdata/Measurement',
          },
          {
            path: '/basicdata/product',
            name: 'product',
            component: './Basicdata/Product',
          },
          {
            path: '/basicdata/carrier',
            name: 'carrier',
            component: './Basicdata/Carrier',
          },
        ],
      },
      // 仓库作业
      {
        path: '/operation',
        icon: 'table',
        name: 'operation',
        authority: ['admin'],
        routes: [
          {
            path: '/operation/enter',
            name: 'enter',
            routes: [
              {
                path: '/operation/enter',
                redirect: '/operation/enter/administration',
              },
              {
                path: '/operation/enter/administration',
                name: 'administration',
                component: './Operation/Enter/Administration',
              },
              {
                path: '/operation/enter/type',
                name: 'type',
                component: './Operation/Enter/Type',
              },
              {
                path:'/operation/enter/add',
                component:'./Operation/Enter/Add',
              },
              {
                path:'/operation/enter/edit',
                component:'./Operation/Enter/Edit',
              },
            ],
          },
          {
            path: '/operation/out',
            name: 'out',
            routes: [
              {
                path: '/operation/out',
                redirect: '/operation/out/administration',
              },
              {
                path: '/operation/out/administration',
                name: 'administration',
               component: './Operation/Out/Administration',
              },
              {
                path: '/operation/out/type',
                name: 'type',
                component: './Operation/Out/Type',
              },
              {
                path:'/operation/out/add',
                component:'./Operation/Out/Add',
              },
              {
                path:'/operation/out/edit',
                component:'./Operation/Out/Edit',
              },
            ],
          },
        ],
      },
      // 系统管理
      {
        path: '/system',
        icon: 'profile',
        name: 'system',
        routes: [
          {
            path: '/system/systeminfo',
            name: 'systeminfo',
            routes: [
              {
                path: '/system/systeminfo',
                redirect: '/system/systeminfo/virtual',
              },
              {
                path: '/system/systeminfo/virtual',
                name: 'virtual',
                 component: './System/Systeminfo/Virtual',
              },
              {
                path: '/system/systeminfo/server',
                name: 'server',
                 component: './System/Systeminfo/Server',
              },
              {
                path: '/system/systeminfo/database',
                name: 'database',
                 component: './System/Systeminfo/Database',
              },
            ],
          },
          {
            path: '/system/authentication',
            name: 'authentication',
            routes: [
              {
                path: '/system/authentication',
                redirect: '/system/authentication/user',
              },
              {
                path: '/system/authentication/userinfo',
                name: 'userinfo',
                component: './System/Authentication/Userinfo',
              },
              {
                path: '/system/authentication/role',
                name: 'role',
                component: './System/Authentication/Role',
              },
              {
                path: '/system/authentication/permission',
                name: 'permission',
                component: './System/Authentication/Permission',
              },
            ],
          },
        ],
      },
      {
        component: '404',
      },
    ],
  },
];
