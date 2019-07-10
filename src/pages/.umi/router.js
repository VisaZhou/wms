import React from 'react';
import { Router as DefaultRouter, Route, Switch } from 'react-router-dom';
import dynamic from 'umi/dynamic';
import renderRoutes from 'umi/_renderRoutes';
import RendererWrapper0 from 'D:/workspace/ant_design_pro/my-project/src/pages/.umi/LocaleWrapper.jsx'
import _dvaDynamic from 'dva/dynamic'

let Router = require('dva/router').routerRedux.ConnectedRouter;

let routes = [
  {
    "path": "/user",
    "component": _dvaDynamic({
  
  component: () => import(/* webpackChunkName: "layouts__UserLayout" */'../../layouts/UserLayout'),
  LoadingComponent: require('D:/workspace/ant_design_pro/my-project/src/components/PageLoading/index').default,
}),
    "routes": [
      {
        "path": "/user",
        "redirect": "/user/login",
        "exact": true
      },
      {
        "path": "/user/login",
        "name": "login",
        "component": _dvaDynamic({
  app: window.g_app,
models: () => [
  import(/* webpackChunkName: 'p__User__models__register.js' */'D:/workspace/ant_design_pro/my-project/src/pages/User/models/register.js').then(m => { return { namespace: 'register',...m.default}})
],
  component: () => import(/* webpackChunkName: "p__User__Login" */'../User/Login'),
  LoadingComponent: require('D:/workspace/ant_design_pro/my-project/src/components/PageLoading/index').default,
}),
        "exact": true
      },
      {
        "path": "/user/register",
        "name": "register",
        "component": _dvaDynamic({
  app: window.g_app,
models: () => [
  import(/* webpackChunkName: 'p__User__models__register.js' */'D:/workspace/ant_design_pro/my-project/src/pages/User/models/register.js').then(m => { return { namespace: 'register',...m.default}})
],
  component: () => import(/* webpackChunkName: "p__User__Register" */'../User/Register'),
  LoadingComponent: require('D:/workspace/ant_design_pro/my-project/src/components/PageLoading/index').default,
}),
        "exact": true
      },
      {
        "path": "/user/register-result",
        "name": "register.result",
        "component": _dvaDynamic({
  app: window.g_app,
models: () => [
  import(/* webpackChunkName: 'p__User__models__register.js' */'D:/workspace/ant_design_pro/my-project/src/pages/User/models/register.js').then(m => { return { namespace: 'register',...m.default}})
],
  component: () => import(/* webpackChunkName: "p__User__RegisterResult" */'../User/RegisterResult'),
  LoadingComponent: require('D:/workspace/ant_design_pro/my-project/src/components/PageLoading/index').default,
}),
        "exact": true
      },
      {
        "component": _dvaDynamic({
  
  component: () => import(/* webpackChunkName: "p__404" */'../404'),
  LoadingComponent: require('D:/workspace/ant_design_pro/my-project/src/components/PageLoading/index').default,
}),
        "exact": true
      },
      {
        "component": () => React.createElement(require('D:/workspace/ant_design_pro/my-project/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: true })
      }
    ]
  },
  {
    "path": "/",
    "component": _dvaDynamic({
  
  component: () => import(/* webpackChunkName: "layouts__BasicLayout" */'../../layouts/BasicLayout'),
  LoadingComponent: require('D:/workspace/ant_design_pro/my-project/src/components/PageLoading/index').default,
}),
    "Routes": [require('../Authorized').default],
    "routes": [
      {
        "path": "/",
        "redirect": "/workplace/panel",
        "exact": true
      },
      {
        "path": "/workplace",
        "name": "workplace",
        "icon": "dashboard",
        "authority": [
          "admin"
        ],
        "routes": [
          {
            "path": "/workplace/panel",
            "name": "panel",
            "component": _dvaDynamic({
  
  component: () => import(/* webpackChunkName: "p__Workplace__Panel" */'../Workplace/Panel'),
  LoadingComponent: require('D:/workspace/ant_design_pro/my-project/src/components/PageLoading/index').default,
}),
            "exact": true
          },
          {
            "component": () => React.createElement(require('D:/workspace/ant_design_pro/my-project/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: true })
          }
        ]
      },
      {
        "path": "/basicdata",
        "icon": "form",
        "name": "basicdata",
        "authority": [
          "admin"
        ],
        "routes": [
          {
            "path": "/basicdata/warehouse",
            "name": "warehouse",
            "authority": [
              "admin"
            ],
            "routes": [
              {
                "path": "/basicdata/warehouse",
                "redirect": "/basicdata/warehouse/administration",
                "authority": [
                  "admin"
                ],
                "exact": true
              },
              {
                "path": "/basicdata/warehouse/administration",
                "name": "administration",
                "component": _dvaDynamic({
  app: window.g_app,
models: () => [
  import(/* webpackChunkName: 'p__Basicdata__Warehouse__models__warehouse.js' */'D:/workspace/ant_design_pro/my-project/src/pages/Basicdata/Warehouse/models/warehouse.js').then(m => { return { namespace: 'warehouse',...m.default}}),
  import(/* webpackChunkName: 'p__Basicdata__Warehouse__models__warehouseType.js' */'D:/workspace/ant_design_pro/my-project/src/pages/Basicdata/Warehouse/models/warehouseType.js').then(m => { return { namespace: 'warehouseType',...m.default}}),
  import(/* webpackChunkName: 'p__Basicdata__models__carrier.js' */'D:/workspace/ant_design_pro/my-project/src/pages/Basicdata/models/carrier.js').then(m => { return { namespace: 'carrier',...m.default}}),
  import(/* webpackChunkName: 'p__Basicdata__models__customer.js' */'D:/workspace/ant_design_pro/my-project/src/pages/Basicdata/models/customer.js').then(m => { return { namespace: 'customer',...m.default}}),
  import(/* webpackChunkName: 'p__Basicdata__models__equipment.js' */'D:/workspace/ant_design_pro/my-project/src/pages/Basicdata/models/equipment.js').then(m => { return { namespace: 'equipment',...m.default}}),
  import(/* webpackChunkName: 'p__Basicdata__models__measurement.js' */'D:/workspace/ant_design_pro/my-project/src/pages/Basicdata/models/measurement.js').then(m => { return { namespace: 'measurement',...m.default}}),
  import(/* webpackChunkName: 'p__Basicdata__models__product.js' */'D:/workspace/ant_design_pro/my-project/src/pages/Basicdata/models/product.js').then(m => { return { namespace: 'product',...m.default}}),
  import(/* webpackChunkName: 'p__Basicdata__models__rule.js' */'D:/workspace/ant_design_pro/my-project/src/pages/Basicdata/models/rule.js').then(m => { return { namespace: 'rule',...m.default}})
],
  component: () => import(/* webpackChunkName: "layouts__BasicLayout" */'../Basicdata/Warehouse/Administration'),
  LoadingComponent: require('D:/workspace/ant_design_pro/my-project/src/components/PageLoading/index').default,
}),
                "authority": [],
                "exact": true
              },
              {
                "path": "/basicdata/warehouse/type",
                "name": "type",
                "component": _dvaDynamic({
  app: window.g_app,
models: () => [
  import(/* webpackChunkName: 'p__Basicdata__Warehouse__models__warehouse.js' */'D:/workspace/ant_design_pro/my-project/src/pages/Basicdata/Warehouse/models/warehouse.js').then(m => { return { namespace: 'warehouse',...m.default}}),
  import(/* webpackChunkName: 'p__Basicdata__Warehouse__models__warehouseType.js' */'D:/workspace/ant_design_pro/my-project/src/pages/Basicdata/Warehouse/models/warehouseType.js').then(m => { return { namespace: 'warehouseType',...m.default}}),
  import(/* webpackChunkName: 'p__Basicdata__models__carrier.js' */'D:/workspace/ant_design_pro/my-project/src/pages/Basicdata/models/carrier.js').then(m => { return { namespace: 'carrier',...m.default}}),
  import(/* webpackChunkName: 'p__Basicdata__models__customer.js' */'D:/workspace/ant_design_pro/my-project/src/pages/Basicdata/models/customer.js').then(m => { return { namespace: 'customer',...m.default}}),
  import(/* webpackChunkName: 'p__Basicdata__models__equipment.js' */'D:/workspace/ant_design_pro/my-project/src/pages/Basicdata/models/equipment.js').then(m => { return { namespace: 'equipment',...m.default}}),
  import(/* webpackChunkName: 'p__Basicdata__models__measurement.js' */'D:/workspace/ant_design_pro/my-project/src/pages/Basicdata/models/measurement.js').then(m => { return { namespace: 'measurement',...m.default}}),
  import(/* webpackChunkName: 'p__Basicdata__models__product.js' */'D:/workspace/ant_design_pro/my-project/src/pages/Basicdata/models/product.js').then(m => { return { namespace: 'product',...m.default}}),
  import(/* webpackChunkName: 'p__Basicdata__models__rule.js' */'D:/workspace/ant_design_pro/my-project/src/pages/Basicdata/models/rule.js').then(m => { return { namespace: 'rule',...m.default}})
],
  component: () => import(/* webpackChunkName: "layouts__BasicLayout" */'../Basicdata/Warehouse/Type'),
  LoadingComponent: require('D:/workspace/ant_design_pro/my-project/src/components/PageLoading/index').default,
}),
                "exact": true
              },
              {
                "component": () => React.createElement(require('D:/workspace/ant_design_pro/my-project/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: true })
              }
            ]
          },
          {
            "path": "/basicdata/storehouse",
            "name": "storehouse",
            "routes": [
              {
                "path": "/basicdata/storehouse",
                "redirect": "/basicdata/storehouse/administration",
                "exact": true
              },
              {
                "path": "/basicdata/storehouse/administration",
                "name": "administration",
                "component": _dvaDynamic({
  app: window.g_app,
models: () => [
  import(/* webpackChunkName: 'p__Basicdata__Storehouse__models__storehouse.js' */'D:/workspace/ant_design_pro/my-project/src/pages/Basicdata/Storehouse/models/storehouse.js').then(m => { return { namespace: 'storehouse',...m.default}}),
  import(/* webpackChunkName: 'p__Basicdata__Storehouse__models__storehouseType.js' */'D:/workspace/ant_design_pro/my-project/src/pages/Basicdata/Storehouse/models/storehouseType.js').then(m => { return { namespace: 'storehouseType',...m.default}}),
  import(/* webpackChunkName: 'p__Basicdata__models__carrier.js' */'D:/workspace/ant_design_pro/my-project/src/pages/Basicdata/models/carrier.js').then(m => { return { namespace: 'carrier',...m.default}}),
  import(/* webpackChunkName: 'p__Basicdata__models__customer.js' */'D:/workspace/ant_design_pro/my-project/src/pages/Basicdata/models/customer.js').then(m => { return { namespace: 'customer',...m.default}}),
  import(/* webpackChunkName: 'p__Basicdata__models__equipment.js' */'D:/workspace/ant_design_pro/my-project/src/pages/Basicdata/models/equipment.js').then(m => { return { namespace: 'equipment',...m.default}}),
  import(/* webpackChunkName: 'p__Basicdata__models__measurement.js' */'D:/workspace/ant_design_pro/my-project/src/pages/Basicdata/models/measurement.js').then(m => { return { namespace: 'measurement',...m.default}}),
  import(/* webpackChunkName: 'p__Basicdata__models__product.js' */'D:/workspace/ant_design_pro/my-project/src/pages/Basicdata/models/product.js').then(m => { return { namespace: 'product',...m.default}}),
  import(/* webpackChunkName: 'p__Basicdata__models__rule.js' */'D:/workspace/ant_design_pro/my-project/src/pages/Basicdata/models/rule.js').then(m => { return { namespace: 'rule',...m.default}})
],
  component: () => import(/* webpackChunkName: "layouts__BasicLayout" */'../Basicdata/Storehouse/Administration'),
  LoadingComponent: require('D:/workspace/ant_design_pro/my-project/src/components/PageLoading/index').default,
}),
                "exact": true
              },
              {
                "path": "/basicdata/storehouse/type",
                "name": "type",
                "component": _dvaDynamic({
  app: window.g_app,
models: () => [
  import(/* webpackChunkName: 'p__Basicdata__Storehouse__models__storehouse.js' */'D:/workspace/ant_design_pro/my-project/src/pages/Basicdata/Storehouse/models/storehouse.js').then(m => { return { namespace: 'storehouse',...m.default}}),
  import(/* webpackChunkName: 'p__Basicdata__Storehouse__models__storehouseType.js' */'D:/workspace/ant_design_pro/my-project/src/pages/Basicdata/Storehouse/models/storehouseType.js').then(m => { return { namespace: 'storehouseType',...m.default}}),
  import(/* webpackChunkName: 'p__Basicdata__models__carrier.js' */'D:/workspace/ant_design_pro/my-project/src/pages/Basicdata/models/carrier.js').then(m => { return { namespace: 'carrier',...m.default}}),
  import(/* webpackChunkName: 'p__Basicdata__models__customer.js' */'D:/workspace/ant_design_pro/my-project/src/pages/Basicdata/models/customer.js').then(m => { return { namespace: 'customer',...m.default}}),
  import(/* webpackChunkName: 'p__Basicdata__models__equipment.js' */'D:/workspace/ant_design_pro/my-project/src/pages/Basicdata/models/equipment.js').then(m => { return { namespace: 'equipment',...m.default}}),
  import(/* webpackChunkName: 'p__Basicdata__models__measurement.js' */'D:/workspace/ant_design_pro/my-project/src/pages/Basicdata/models/measurement.js').then(m => { return { namespace: 'measurement',...m.default}}),
  import(/* webpackChunkName: 'p__Basicdata__models__product.js' */'D:/workspace/ant_design_pro/my-project/src/pages/Basicdata/models/product.js').then(m => { return { namespace: 'product',...m.default}}),
  import(/* webpackChunkName: 'p__Basicdata__models__rule.js' */'D:/workspace/ant_design_pro/my-project/src/pages/Basicdata/models/rule.js').then(m => { return { namespace: 'rule',...m.default}})
],
  component: () => import(/* webpackChunkName: "layouts__BasicLayout" */'../Basicdata/Storehouse/Type'),
  LoadingComponent: require('D:/workspace/ant_design_pro/my-project/src/components/PageLoading/index').default,
}),
                "exact": true
              },
              {
                "component": () => React.createElement(require('D:/workspace/ant_design_pro/my-project/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: true })
              }
            ]
          },
          {
            "path": "/basicdata/equipment",
            "name": "equipment",
            "component": _dvaDynamic({
  app: window.g_app,
models: () => [
  import(/* webpackChunkName: 'p__Basicdata__models__carrier.js' */'D:/workspace/ant_design_pro/my-project/src/pages/Basicdata/models/carrier.js').then(m => { return { namespace: 'carrier',...m.default}}),
  import(/* webpackChunkName: 'p__Basicdata__models__customer.js' */'D:/workspace/ant_design_pro/my-project/src/pages/Basicdata/models/customer.js').then(m => { return { namespace: 'customer',...m.default}}),
  import(/* webpackChunkName: 'p__Basicdata__models__equipment.js' */'D:/workspace/ant_design_pro/my-project/src/pages/Basicdata/models/equipment.js').then(m => { return { namespace: 'equipment',...m.default}}),
  import(/* webpackChunkName: 'p__Basicdata__models__measurement.js' */'D:/workspace/ant_design_pro/my-project/src/pages/Basicdata/models/measurement.js').then(m => { return { namespace: 'measurement',...m.default}}),
  import(/* webpackChunkName: 'p__Basicdata__models__product.js' */'D:/workspace/ant_design_pro/my-project/src/pages/Basicdata/models/product.js').then(m => { return { namespace: 'product',...m.default}}),
  import(/* webpackChunkName: 'p__Basicdata__models__rule.js' */'D:/workspace/ant_design_pro/my-project/src/pages/Basicdata/models/rule.js').then(m => { return { namespace: 'rule',...m.default}})
],
  component: () => import(/* webpackChunkName: "p__Basicdata__Equipment" */'../Basicdata/Equipment'),
  LoadingComponent: require('D:/workspace/ant_design_pro/my-project/src/components/PageLoading/index').default,
}),
            "exact": true
          },
          {
            "path": "/basicdata/supplier",
            "name": "supplier",
            "routes": [
              {
                "path": "/basicdata/supplier",
                "redirect": "/basicdata/supplier/administration",
                "exact": true
              },
              {
                "path": "/basicdata/supplier/administration",
                "name": "administration",
                "component": _dvaDynamic({
  app: window.g_app,
models: () => [
  import(/* webpackChunkName: 'p__Basicdata__Supplier__models__supplier.js' */'D:/workspace/ant_design_pro/my-project/src/pages/Basicdata/Supplier/models/supplier.js').then(m => { return { namespace: 'supplier',...m.default}}),
  import(/* webpackChunkName: 'p__Basicdata__Supplier__models__supplierType.js' */'D:/workspace/ant_design_pro/my-project/src/pages/Basicdata/Supplier/models/supplierType.js').then(m => { return { namespace: 'supplierType',...m.default}}),
  import(/* webpackChunkName: 'p__Basicdata__models__carrier.js' */'D:/workspace/ant_design_pro/my-project/src/pages/Basicdata/models/carrier.js').then(m => { return { namespace: 'carrier',...m.default}}),
  import(/* webpackChunkName: 'p__Basicdata__models__customer.js' */'D:/workspace/ant_design_pro/my-project/src/pages/Basicdata/models/customer.js').then(m => { return { namespace: 'customer',...m.default}}),
  import(/* webpackChunkName: 'p__Basicdata__models__equipment.js' */'D:/workspace/ant_design_pro/my-project/src/pages/Basicdata/models/equipment.js').then(m => { return { namespace: 'equipment',...m.default}}),
  import(/* webpackChunkName: 'p__Basicdata__models__measurement.js' */'D:/workspace/ant_design_pro/my-project/src/pages/Basicdata/models/measurement.js').then(m => { return { namespace: 'measurement',...m.default}}),
  import(/* webpackChunkName: 'p__Basicdata__models__product.js' */'D:/workspace/ant_design_pro/my-project/src/pages/Basicdata/models/product.js').then(m => { return { namespace: 'product',...m.default}}),
  import(/* webpackChunkName: 'p__Basicdata__models__rule.js' */'D:/workspace/ant_design_pro/my-project/src/pages/Basicdata/models/rule.js').then(m => { return { namespace: 'rule',...m.default}})
],
  component: () => import(/* webpackChunkName: "layouts__BasicLayout" */'../Basicdata/Supplier/Administration'),
  LoadingComponent: require('D:/workspace/ant_design_pro/my-project/src/components/PageLoading/index').default,
}),
                "exact": true
              },
              {
                "path": "/basicdata/supplier/type",
                "name": "type",
                "component": _dvaDynamic({
  app: window.g_app,
models: () => [
  import(/* webpackChunkName: 'p__Basicdata__Supplier__models__supplier.js' */'D:/workspace/ant_design_pro/my-project/src/pages/Basicdata/Supplier/models/supplier.js').then(m => { return { namespace: 'supplier',...m.default}}),
  import(/* webpackChunkName: 'p__Basicdata__Supplier__models__supplierType.js' */'D:/workspace/ant_design_pro/my-project/src/pages/Basicdata/Supplier/models/supplierType.js').then(m => { return { namespace: 'supplierType',...m.default}}),
  import(/* webpackChunkName: 'p__Basicdata__models__carrier.js' */'D:/workspace/ant_design_pro/my-project/src/pages/Basicdata/models/carrier.js').then(m => { return { namespace: 'carrier',...m.default}}),
  import(/* webpackChunkName: 'p__Basicdata__models__customer.js' */'D:/workspace/ant_design_pro/my-project/src/pages/Basicdata/models/customer.js').then(m => { return { namespace: 'customer',...m.default}}),
  import(/* webpackChunkName: 'p__Basicdata__models__equipment.js' */'D:/workspace/ant_design_pro/my-project/src/pages/Basicdata/models/equipment.js').then(m => { return { namespace: 'equipment',...m.default}}),
  import(/* webpackChunkName: 'p__Basicdata__models__measurement.js' */'D:/workspace/ant_design_pro/my-project/src/pages/Basicdata/models/measurement.js').then(m => { return { namespace: 'measurement',...m.default}}),
  import(/* webpackChunkName: 'p__Basicdata__models__product.js' */'D:/workspace/ant_design_pro/my-project/src/pages/Basicdata/models/product.js').then(m => { return { namespace: 'product',...m.default}}),
  import(/* webpackChunkName: 'p__Basicdata__models__rule.js' */'D:/workspace/ant_design_pro/my-project/src/pages/Basicdata/models/rule.js').then(m => { return { namespace: 'rule',...m.default}})
],
  component: () => import(/* webpackChunkName: "layouts__BasicLayout" */'../Basicdata/Supplier/Type'),
  LoadingComponent: require('D:/workspace/ant_design_pro/my-project/src/components/PageLoading/index').default,
}),
                "exact": true
              },
              {
                "component": () => React.createElement(require('D:/workspace/ant_design_pro/my-project/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: true })
              }
            ]
          },
          {
            "path": "/basicdata/customer",
            "name": "customer",
            "component": _dvaDynamic({
  app: window.g_app,
models: () => [
  import(/* webpackChunkName: 'p__Basicdata__models__carrier.js' */'D:/workspace/ant_design_pro/my-project/src/pages/Basicdata/models/carrier.js').then(m => { return { namespace: 'carrier',...m.default}}),
  import(/* webpackChunkName: 'p__Basicdata__models__customer.js' */'D:/workspace/ant_design_pro/my-project/src/pages/Basicdata/models/customer.js').then(m => { return { namespace: 'customer',...m.default}}),
  import(/* webpackChunkName: 'p__Basicdata__models__equipment.js' */'D:/workspace/ant_design_pro/my-project/src/pages/Basicdata/models/equipment.js').then(m => { return { namespace: 'equipment',...m.default}}),
  import(/* webpackChunkName: 'p__Basicdata__models__measurement.js' */'D:/workspace/ant_design_pro/my-project/src/pages/Basicdata/models/measurement.js').then(m => { return { namespace: 'measurement',...m.default}}),
  import(/* webpackChunkName: 'p__Basicdata__models__product.js' */'D:/workspace/ant_design_pro/my-project/src/pages/Basicdata/models/product.js').then(m => { return { namespace: 'product',...m.default}}),
  import(/* webpackChunkName: 'p__Basicdata__models__rule.js' */'D:/workspace/ant_design_pro/my-project/src/pages/Basicdata/models/rule.js').then(m => { return { namespace: 'rule',...m.default}})
],
  component: () => import(/* webpackChunkName: "p__Basicdata__Customer" */'../Basicdata/Customer'),
  LoadingComponent: require('D:/workspace/ant_design_pro/my-project/src/components/PageLoading/index').default,
}),
            "exact": true
          },
          {
            "path": "/basicdata/measurement",
            "name": "measurement",
            "component": _dvaDynamic({
  app: window.g_app,
models: () => [
  import(/* webpackChunkName: 'p__Basicdata__models__carrier.js' */'D:/workspace/ant_design_pro/my-project/src/pages/Basicdata/models/carrier.js').then(m => { return { namespace: 'carrier',...m.default}}),
  import(/* webpackChunkName: 'p__Basicdata__models__customer.js' */'D:/workspace/ant_design_pro/my-project/src/pages/Basicdata/models/customer.js').then(m => { return { namespace: 'customer',...m.default}}),
  import(/* webpackChunkName: 'p__Basicdata__models__equipment.js' */'D:/workspace/ant_design_pro/my-project/src/pages/Basicdata/models/equipment.js').then(m => { return { namespace: 'equipment',...m.default}}),
  import(/* webpackChunkName: 'p__Basicdata__models__measurement.js' */'D:/workspace/ant_design_pro/my-project/src/pages/Basicdata/models/measurement.js').then(m => { return { namespace: 'measurement',...m.default}}),
  import(/* webpackChunkName: 'p__Basicdata__models__product.js' */'D:/workspace/ant_design_pro/my-project/src/pages/Basicdata/models/product.js').then(m => { return { namespace: 'product',...m.default}}),
  import(/* webpackChunkName: 'p__Basicdata__models__rule.js' */'D:/workspace/ant_design_pro/my-project/src/pages/Basicdata/models/rule.js').then(m => { return { namespace: 'rule',...m.default}})
],
  component: () => import(/* webpackChunkName: "p__Basicdata__Measurement" */'../Basicdata/Measurement'),
  LoadingComponent: require('D:/workspace/ant_design_pro/my-project/src/components/PageLoading/index').default,
}),
            "exact": true
          },
          {
            "path": "/basicdata/product",
            "name": "product",
            "component": _dvaDynamic({
  app: window.g_app,
models: () => [
  import(/* webpackChunkName: 'p__Basicdata__models__carrier.js' */'D:/workspace/ant_design_pro/my-project/src/pages/Basicdata/models/carrier.js').then(m => { return { namespace: 'carrier',...m.default}}),
  import(/* webpackChunkName: 'p__Basicdata__models__customer.js' */'D:/workspace/ant_design_pro/my-project/src/pages/Basicdata/models/customer.js').then(m => { return { namespace: 'customer',...m.default}}),
  import(/* webpackChunkName: 'p__Basicdata__models__equipment.js' */'D:/workspace/ant_design_pro/my-project/src/pages/Basicdata/models/equipment.js').then(m => { return { namespace: 'equipment',...m.default}}),
  import(/* webpackChunkName: 'p__Basicdata__models__measurement.js' */'D:/workspace/ant_design_pro/my-project/src/pages/Basicdata/models/measurement.js').then(m => { return { namespace: 'measurement',...m.default}}),
  import(/* webpackChunkName: 'p__Basicdata__models__product.js' */'D:/workspace/ant_design_pro/my-project/src/pages/Basicdata/models/product.js').then(m => { return { namespace: 'product',...m.default}}),
  import(/* webpackChunkName: 'p__Basicdata__models__rule.js' */'D:/workspace/ant_design_pro/my-project/src/pages/Basicdata/models/rule.js').then(m => { return { namespace: 'rule',...m.default}})
],
  component: () => import(/* webpackChunkName: "p__Basicdata__Product" */'../Basicdata/Product'),
  LoadingComponent: require('D:/workspace/ant_design_pro/my-project/src/components/PageLoading/index').default,
}),
            "exact": true
          },
          {
            "path": "/basicdata/carrier",
            "name": "carrier",
            "component": _dvaDynamic({
  app: window.g_app,
models: () => [
  import(/* webpackChunkName: 'p__Basicdata__models__carrier.js' */'D:/workspace/ant_design_pro/my-project/src/pages/Basicdata/models/carrier.js').then(m => { return { namespace: 'carrier',...m.default}}),
  import(/* webpackChunkName: 'p__Basicdata__models__customer.js' */'D:/workspace/ant_design_pro/my-project/src/pages/Basicdata/models/customer.js').then(m => { return { namespace: 'customer',...m.default}}),
  import(/* webpackChunkName: 'p__Basicdata__models__equipment.js' */'D:/workspace/ant_design_pro/my-project/src/pages/Basicdata/models/equipment.js').then(m => { return { namespace: 'equipment',...m.default}}),
  import(/* webpackChunkName: 'p__Basicdata__models__measurement.js' */'D:/workspace/ant_design_pro/my-project/src/pages/Basicdata/models/measurement.js').then(m => { return { namespace: 'measurement',...m.default}}),
  import(/* webpackChunkName: 'p__Basicdata__models__product.js' */'D:/workspace/ant_design_pro/my-project/src/pages/Basicdata/models/product.js').then(m => { return { namespace: 'product',...m.default}}),
  import(/* webpackChunkName: 'p__Basicdata__models__rule.js' */'D:/workspace/ant_design_pro/my-project/src/pages/Basicdata/models/rule.js').then(m => { return { namespace: 'rule',...m.default}})
],
  component: () => import(/* webpackChunkName: "p__Basicdata__Carrier" */'../Basicdata/Carrier'),
  LoadingComponent: require('D:/workspace/ant_design_pro/my-project/src/components/PageLoading/index').default,
}),
            "exact": true
          },
          {
            "component": () => React.createElement(require('D:/workspace/ant_design_pro/my-project/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: true })
          }
        ]
      },
      {
        "path": "/operation",
        "icon": "table",
        "name": "operation",
        "authority": [
          "admin"
        ],
        "routes": [
          {
            "path": "/operation/enter",
            "name": "enter",
            "routes": [
              {
                "path": "/operation/enter",
                "redirect": "/operation/enter/administration",
                "exact": true
              },
              {
                "path": "/operation/enter/administration",
                "name": "administration",
                "component": _dvaDynamic({
  app: window.g_app,
models: () => [
  import(/* webpackChunkName: 'p__Operation__Enter__models__inStorage.js' */'D:/workspace/ant_design_pro/my-project/src/pages/Operation/Enter/models/inStorage.js').then(m => { return { namespace: 'inStorage',...m.default}}),
  import(/* webpackChunkName: 'p__Operation__Enter__models__inStorageAdd.js' */'D:/workspace/ant_design_pro/my-project/src/pages/Operation/Enter/models/inStorageAdd.js').then(m => { return { namespace: 'inStorageAdd',...m.default}}),
  import(/* webpackChunkName: 'p__Operation__Enter__models__inStorageEdit.js' */'D:/workspace/ant_design_pro/my-project/src/pages/Operation/Enter/models/inStorageEdit.js').then(m => { return { namespace: 'inStorageEdit',...m.default}}),
  import(/* webpackChunkName: 'p__Operation__Enter__models__inStorageType.js' */'D:/workspace/ant_design_pro/my-project/src/pages/Operation/Enter/models/inStorageType.js').then(m => { return { namespace: 'inStorageType',...m.default}})
],
  component: () => import(/* webpackChunkName: "layouts__BasicLayout" */'../Operation/Enter/Administration'),
  LoadingComponent: require('D:/workspace/ant_design_pro/my-project/src/components/PageLoading/index').default,
}),
                "exact": true
              },
              {
                "path": "/operation/enter/type",
                "name": "type",
                "component": _dvaDynamic({
  app: window.g_app,
models: () => [
  import(/* webpackChunkName: 'p__Operation__Enter__models__inStorage.js' */'D:/workspace/ant_design_pro/my-project/src/pages/Operation/Enter/models/inStorage.js').then(m => { return { namespace: 'inStorage',...m.default}}),
  import(/* webpackChunkName: 'p__Operation__Enter__models__inStorageAdd.js' */'D:/workspace/ant_design_pro/my-project/src/pages/Operation/Enter/models/inStorageAdd.js').then(m => { return { namespace: 'inStorageAdd',...m.default}}),
  import(/* webpackChunkName: 'p__Operation__Enter__models__inStorageEdit.js' */'D:/workspace/ant_design_pro/my-project/src/pages/Operation/Enter/models/inStorageEdit.js').then(m => { return { namespace: 'inStorageEdit',...m.default}}),
  import(/* webpackChunkName: 'p__Operation__Enter__models__inStorageType.js' */'D:/workspace/ant_design_pro/my-project/src/pages/Operation/Enter/models/inStorageType.js').then(m => { return { namespace: 'inStorageType',...m.default}})
],
  component: () => import(/* webpackChunkName: "layouts__BasicLayout" */'../Operation/Enter/Type'),
  LoadingComponent: require('D:/workspace/ant_design_pro/my-project/src/components/PageLoading/index').default,
}),
                "exact": true
              },
              {
                "path": "/operation/enter/add",
                "component": _dvaDynamic({
  app: window.g_app,
models: () => [
  import(/* webpackChunkName: 'p__Operation__Enter__models__inStorage.js' */'D:/workspace/ant_design_pro/my-project/src/pages/Operation/Enter/models/inStorage.js').then(m => { return { namespace: 'inStorage',...m.default}}),
  import(/* webpackChunkName: 'p__Operation__Enter__models__inStorageAdd.js' */'D:/workspace/ant_design_pro/my-project/src/pages/Operation/Enter/models/inStorageAdd.js').then(m => { return { namespace: 'inStorageAdd',...m.default}}),
  import(/* webpackChunkName: 'p__Operation__Enter__models__inStorageEdit.js' */'D:/workspace/ant_design_pro/my-project/src/pages/Operation/Enter/models/inStorageEdit.js').then(m => { return { namespace: 'inStorageEdit',...m.default}}),
  import(/* webpackChunkName: 'p__Operation__Enter__models__inStorageType.js' */'D:/workspace/ant_design_pro/my-project/src/pages/Operation/Enter/models/inStorageType.js').then(m => { return { namespace: 'inStorageType',...m.default}})
],
  component: () => import(/* webpackChunkName: "layouts__BasicLayout" */'../Operation/Enter/Add'),
  LoadingComponent: require('D:/workspace/ant_design_pro/my-project/src/components/PageLoading/index').default,
}),
                "exact": true
              },
              {
                "path": "/operation/enter/edit",
                "component": _dvaDynamic({
  app: window.g_app,
models: () => [
  import(/* webpackChunkName: 'p__Operation__Enter__models__inStorage.js' */'D:/workspace/ant_design_pro/my-project/src/pages/Operation/Enter/models/inStorage.js').then(m => { return { namespace: 'inStorage',...m.default}}),
  import(/* webpackChunkName: 'p__Operation__Enter__models__inStorageAdd.js' */'D:/workspace/ant_design_pro/my-project/src/pages/Operation/Enter/models/inStorageAdd.js').then(m => { return { namespace: 'inStorageAdd',...m.default}}),
  import(/* webpackChunkName: 'p__Operation__Enter__models__inStorageEdit.js' */'D:/workspace/ant_design_pro/my-project/src/pages/Operation/Enter/models/inStorageEdit.js').then(m => { return { namespace: 'inStorageEdit',...m.default}}),
  import(/* webpackChunkName: 'p__Operation__Enter__models__inStorageType.js' */'D:/workspace/ant_design_pro/my-project/src/pages/Operation/Enter/models/inStorageType.js').then(m => { return { namespace: 'inStorageType',...m.default}})
],
  component: () => import(/* webpackChunkName: "layouts__BasicLayout" */'../Operation/Enter/Edit'),
  LoadingComponent: require('D:/workspace/ant_design_pro/my-project/src/components/PageLoading/index').default,
}),
                "exact": true
              },
              {
                "component": () => React.createElement(require('D:/workspace/ant_design_pro/my-project/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: true })
              }
            ]
          },
          {
            "path": "/operation/out",
            "name": "out",
            "routes": [
              {
                "path": "/operation/out",
                "redirect": "/operation/out/administration",
                "exact": true
              },
              {
                "path": "/operation/out/administration",
                "name": "administration",
                "component": _dvaDynamic({
  app: window.g_app,
models: () => [
  import(/* webpackChunkName: 'p__Operation__Out__models__outStorage.js' */'D:/workspace/ant_design_pro/my-project/src/pages/Operation/Out/models/outStorage.js').then(m => { return { namespace: 'outStorage',...m.default}}),
  import(/* webpackChunkName: 'p__Operation__Out__models__outStorageAdd.js' */'D:/workspace/ant_design_pro/my-project/src/pages/Operation/Out/models/outStorageAdd.js').then(m => { return { namespace: 'outStorageAdd',...m.default}}),
  import(/* webpackChunkName: 'p__Operation__Out__models__outStorageEdit.js' */'D:/workspace/ant_design_pro/my-project/src/pages/Operation/Out/models/outStorageEdit.js').then(m => { return { namespace: 'outStorageEdit',...m.default}}),
  import(/* webpackChunkName: 'p__Operation__Out__models__outStorageType.js' */'D:/workspace/ant_design_pro/my-project/src/pages/Operation/Out/models/outStorageType.js').then(m => { return { namespace: 'outStorageType',...m.default}})
],
  component: () => import(/* webpackChunkName: "layouts__BasicLayout" */'../Operation/Out/Administration'),
  LoadingComponent: require('D:/workspace/ant_design_pro/my-project/src/components/PageLoading/index').default,
}),
                "exact": true
              },
              {
                "path": "/operation/out/type",
                "name": "type",
                "component": _dvaDynamic({
  app: window.g_app,
models: () => [
  import(/* webpackChunkName: 'p__Operation__Out__models__outStorage.js' */'D:/workspace/ant_design_pro/my-project/src/pages/Operation/Out/models/outStorage.js').then(m => { return { namespace: 'outStorage',...m.default}}),
  import(/* webpackChunkName: 'p__Operation__Out__models__outStorageAdd.js' */'D:/workspace/ant_design_pro/my-project/src/pages/Operation/Out/models/outStorageAdd.js').then(m => { return { namespace: 'outStorageAdd',...m.default}}),
  import(/* webpackChunkName: 'p__Operation__Out__models__outStorageEdit.js' */'D:/workspace/ant_design_pro/my-project/src/pages/Operation/Out/models/outStorageEdit.js').then(m => { return { namespace: 'outStorageEdit',...m.default}}),
  import(/* webpackChunkName: 'p__Operation__Out__models__outStorageType.js' */'D:/workspace/ant_design_pro/my-project/src/pages/Operation/Out/models/outStorageType.js').then(m => { return { namespace: 'outStorageType',...m.default}})
],
  component: () => import(/* webpackChunkName: "layouts__BasicLayout" */'../Operation/Out/Type'),
  LoadingComponent: require('D:/workspace/ant_design_pro/my-project/src/components/PageLoading/index').default,
}),
                "exact": true
              },
              {
                "path": "/operation/out/add",
                "component": _dvaDynamic({
  app: window.g_app,
models: () => [
  import(/* webpackChunkName: 'p__Operation__Out__models__outStorage.js' */'D:/workspace/ant_design_pro/my-project/src/pages/Operation/Out/models/outStorage.js').then(m => { return { namespace: 'outStorage',...m.default}}),
  import(/* webpackChunkName: 'p__Operation__Out__models__outStorageAdd.js' */'D:/workspace/ant_design_pro/my-project/src/pages/Operation/Out/models/outStorageAdd.js').then(m => { return { namespace: 'outStorageAdd',...m.default}}),
  import(/* webpackChunkName: 'p__Operation__Out__models__outStorageEdit.js' */'D:/workspace/ant_design_pro/my-project/src/pages/Operation/Out/models/outStorageEdit.js').then(m => { return { namespace: 'outStorageEdit',...m.default}}),
  import(/* webpackChunkName: 'p__Operation__Out__models__outStorageType.js' */'D:/workspace/ant_design_pro/my-project/src/pages/Operation/Out/models/outStorageType.js').then(m => { return { namespace: 'outStorageType',...m.default}})
],
  component: () => import(/* webpackChunkName: "layouts__BasicLayout" */'../Operation/Out/Add'),
  LoadingComponent: require('D:/workspace/ant_design_pro/my-project/src/components/PageLoading/index').default,
}),
                "exact": true
              },
              {
                "path": "/operation/out/edit",
                "component": _dvaDynamic({
  app: window.g_app,
models: () => [
  import(/* webpackChunkName: 'p__Operation__Out__models__outStorage.js' */'D:/workspace/ant_design_pro/my-project/src/pages/Operation/Out/models/outStorage.js').then(m => { return { namespace: 'outStorage',...m.default}}),
  import(/* webpackChunkName: 'p__Operation__Out__models__outStorageAdd.js' */'D:/workspace/ant_design_pro/my-project/src/pages/Operation/Out/models/outStorageAdd.js').then(m => { return { namespace: 'outStorageAdd',...m.default}}),
  import(/* webpackChunkName: 'p__Operation__Out__models__outStorageEdit.js' */'D:/workspace/ant_design_pro/my-project/src/pages/Operation/Out/models/outStorageEdit.js').then(m => { return { namespace: 'outStorageEdit',...m.default}}),
  import(/* webpackChunkName: 'p__Operation__Out__models__outStorageType.js' */'D:/workspace/ant_design_pro/my-project/src/pages/Operation/Out/models/outStorageType.js').then(m => { return { namespace: 'outStorageType',...m.default}})
],
  component: () => import(/* webpackChunkName: "layouts__BasicLayout" */'../Operation/Out/Edit'),
  LoadingComponent: require('D:/workspace/ant_design_pro/my-project/src/components/PageLoading/index').default,
}),
                "exact": true
              },
              {
                "component": () => React.createElement(require('D:/workspace/ant_design_pro/my-project/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: true })
              }
            ]
          },
          {
            "component": () => React.createElement(require('D:/workspace/ant_design_pro/my-project/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: true })
          }
        ]
      },
      {
        "path": "/system",
        "icon": "profile",
        "name": "system",
        "routes": [
          {
            "path": "/system/systeminfo",
            "name": "systeminfo",
            "routes": [
              {
                "path": "/system/systeminfo",
                "redirect": "/system/systeminfo/virtual",
                "exact": true
              },
              {
                "path": "/system/systeminfo/virtual",
                "name": "virtual",
                "component": _dvaDynamic({
  app: window.g_app,
models: () => [
  import(/* webpackChunkName: 'p__System__Systeminfo__models__database.js' */'D:/workspace/ant_design_pro/my-project/src/pages/System/Systeminfo/models/database.js').then(m => { return { namespace: 'database',...m.default}}),
  import(/* webpackChunkName: 'p__System__Systeminfo__models__server.js' */'D:/workspace/ant_design_pro/my-project/src/pages/System/Systeminfo/models/server.js').then(m => { return { namespace: 'server',...m.default}}),
  import(/* webpackChunkName: 'p__System__Systeminfo__models__virtual.js' */'D:/workspace/ant_design_pro/my-project/src/pages/System/Systeminfo/models/virtual.js').then(m => { return { namespace: 'virtual',...m.default}})
],
  component: () => import(/* webpackChunkName: "layouts__BasicLayout" */'../System/Systeminfo/Virtual'),
  LoadingComponent: require('D:/workspace/ant_design_pro/my-project/src/components/PageLoading/index').default,
}),
                "exact": true
              },
              {
                "path": "/system/systeminfo/server",
                "name": "server",
                "component": _dvaDynamic({
  app: window.g_app,
models: () => [
  import(/* webpackChunkName: 'p__System__Systeminfo__models__database.js' */'D:/workspace/ant_design_pro/my-project/src/pages/System/Systeminfo/models/database.js').then(m => { return { namespace: 'database',...m.default}}),
  import(/* webpackChunkName: 'p__System__Systeminfo__models__server.js' */'D:/workspace/ant_design_pro/my-project/src/pages/System/Systeminfo/models/server.js').then(m => { return { namespace: 'server',...m.default}}),
  import(/* webpackChunkName: 'p__System__Systeminfo__models__virtual.js' */'D:/workspace/ant_design_pro/my-project/src/pages/System/Systeminfo/models/virtual.js').then(m => { return { namespace: 'virtual',...m.default}})
],
  component: () => import(/* webpackChunkName: "layouts__BasicLayout" */'../System/Systeminfo/Server'),
  LoadingComponent: require('D:/workspace/ant_design_pro/my-project/src/components/PageLoading/index').default,
}),
                "exact": true
              },
              {
                "path": "/system/systeminfo/database",
                "name": "database",
                "component": _dvaDynamic({
  app: window.g_app,
models: () => [
  import(/* webpackChunkName: 'p__System__Systeminfo__models__database.js' */'D:/workspace/ant_design_pro/my-project/src/pages/System/Systeminfo/models/database.js').then(m => { return { namespace: 'database',...m.default}}),
  import(/* webpackChunkName: 'p__System__Systeminfo__models__server.js' */'D:/workspace/ant_design_pro/my-project/src/pages/System/Systeminfo/models/server.js').then(m => { return { namespace: 'server',...m.default}}),
  import(/* webpackChunkName: 'p__System__Systeminfo__models__virtual.js' */'D:/workspace/ant_design_pro/my-project/src/pages/System/Systeminfo/models/virtual.js').then(m => { return { namespace: 'virtual',...m.default}})
],
  component: () => import(/* webpackChunkName: "layouts__BasicLayout" */'../System/Systeminfo/Database'),
  LoadingComponent: require('D:/workspace/ant_design_pro/my-project/src/components/PageLoading/index').default,
}),
                "exact": true
              },
              {
                "component": () => React.createElement(require('D:/workspace/ant_design_pro/my-project/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: true })
              }
            ]
          },
          {
            "path": "/system/authentication",
            "name": "authentication",
            "routes": [
              {
                "path": "/system/authentication",
                "redirect": "/system/authentication/user",
                "exact": true
              },
              {
                "path": "/system/authentication/userinfo",
                "name": "userinfo",
                "component": _dvaDynamic({
  app: window.g_app,
models: () => [
  import(/* webpackChunkName: 'p__System__Authentication__models__userinfo.js' */'D:/workspace/ant_design_pro/my-project/src/pages/System/Authentication/models/userinfo.js').then(m => { return { namespace: 'userinfo',...m.default}})
],
  component: () => import(/* webpackChunkName: "layouts__BasicLayout" */'../System/Authentication/Userinfo'),
  LoadingComponent: require('D:/workspace/ant_design_pro/my-project/src/components/PageLoading/index').default,
}),
                "exact": true
              },
              {
                "path": "/system/authentication/role",
                "name": "role",
                "component": _dvaDynamic({
  app: window.g_app,
models: () => [
  import(/* webpackChunkName: 'p__System__Authentication__models__userinfo.js' */'D:/workspace/ant_design_pro/my-project/src/pages/System/Authentication/models/userinfo.js').then(m => { return { namespace: 'userinfo',...m.default}})
],
  component: () => import(/* webpackChunkName: "layouts__BasicLayout" */'../System/Authentication/Role'),
  LoadingComponent: require('D:/workspace/ant_design_pro/my-project/src/components/PageLoading/index').default,
}),
                "exact": true
              },
              {
                "path": "/system/authentication/permission",
                "name": "permission",
                "component": _dvaDynamic({
  app: window.g_app,
models: () => [
  import(/* webpackChunkName: 'p__System__Authentication__models__userinfo.js' */'D:/workspace/ant_design_pro/my-project/src/pages/System/Authentication/models/userinfo.js').then(m => { return { namespace: 'userinfo',...m.default}})
],
  component: () => import(/* webpackChunkName: "layouts__BasicLayout" */'../System/Authentication/Permission'),
  LoadingComponent: require('D:/workspace/ant_design_pro/my-project/src/components/PageLoading/index').default,
}),
                "exact": true
              },
              {
                "component": () => React.createElement(require('D:/workspace/ant_design_pro/my-project/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: true })
              }
            ]
          },
          {
            "component": () => React.createElement(require('D:/workspace/ant_design_pro/my-project/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: true })
          }
        ]
      },
      {
        "component": _dvaDynamic({
  
  component: () => import(/* webpackChunkName: "p__404" */'../404'),
  LoadingComponent: require('D:/workspace/ant_design_pro/my-project/src/components/PageLoading/index').default,
}),
        "exact": true
      },
      {
        "component": () => React.createElement(require('D:/workspace/ant_design_pro/my-project/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: true })
      }
    ]
  },
  {
    "component": () => React.createElement(require('D:/workspace/ant_design_pro/my-project/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: true })
  }
];
window.g_routes = routes;
window.g_plugins.applyForEach('patchRoutes', { initialValue: routes });

// route change handler
function routeChangeHandler(location, action) {
  window.g_plugins.applyForEach('onRouteChange', {
    initialValue: {
      routes,
      location,
      action,
    },
  });
}
window.g_history.listen(routeChangeHandler);
routeChangeHandler(window.g_history.location);

export default function RouterWrapper() {
  return (
<RendererWrapper0>
          <Router history={window.g_history}>
      { renderRoutes(routes, {}) }
    </Router>
        </RendererWrapper0>
  );
}
