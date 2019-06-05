import React from 'react';
import { Router as DefaultRouter, Route, Switch } from 'react-router-dom';
import dynamic from 'umi/dynamic';
import renderRoutes from 'umi/_renderRoutes';
import RendererWrapper0 from 'D:/workspace/ant_wms/my-project/src/pages/.umi/LocaleWrapper.jsx'
import _dvaDynamic from 'dva/dynamic'

let Router = require('dva/router').routerRedux.ConnectedRouter;

let routes = [
  {
    "path": "/",
    "component": _dvaDynamic({
  
  component: () => import(/* webpackChunkName: "layouts__BasicLayout" */'../../layouts/BasicLayout'),
  LoadingComponent: require('D:/workspace/ant_wms/my-project/src/components/PageLoading/index').default,
}),
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
        "routes": [
          {
            "path": "/workplace/panel",
            "name": "panel",
            "component": _dvaDynamic({
  
  component: () => import(/* webpackChunkName: "p__Workplace__Panel" */'../Workplace/Panel'),
  LoadingComponent: require('D:/workspace/ant_wms/my-project/src/components/PageLoading/index').default,
}),
            "exact": true
          },
          {
            "component": () => React.createElement(require('D:/workspace/ant_wms/my-project/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: true })
          }
        ]
      },
      {
        "path": "/basicdata",
        "icon": "form",
        "name": "basicdata",
        "routes": [
          {
            "path": "/basicdata/warehouse",
            "name": "warehouse",
            "routes": [
              {
                "path": "/basicdata/warehouse",
                "redirect": "/basicdata/warehouse/administration",
                "exact": true
              },
              {
                "path": "/basicdata/warehouse/administration",
                "name": "administration",
                "component": _dvaDynamic({
  app: window.g_app,
models: () => [
  import(/* webpackChunkName: 'p__Basicdata__Warehouse__models__warehouse.js' */'D:/workspace/ant_wms/my-project/src/pages/Basicdata/Warehouse/models/warehouse.js').then(m => { return { namespace: 'warehouse',...m.default}}),
  import(/* webpackChunkName: 'p__Basicdata__Warehouse__models__warehouseType.js' */'D:/workspace/ant_wms/my-project/src/pages/Basicdata/Warehouse/models/warehouseType.js').then(m => { return { namespace: 'warehouseType',...m.default}}),
  import(/* webpackChunkName: 'p__Basicdata__models__carrier.js' */'D:/workspace/ant_wms/my-project/src/pages/Basicdata/models/carrier.js').then(m => { return { namespace: 'carrier',...m.default}}),
  import(/* webpackChunkName: 'p__Basicdata__models__customer.js' */'D:/workspace/ant_wms/my-project/src/pages/Basicdata/models/customer.js').then(m => { return { namespace: 'customer',...m.default}}),
  import(/* webpackChunkName: 'p__Basicdata__models__equipment.js' */'D:/workspace/ant_wms/my-project/src/pages/Basicdata/models/equipment.js').then(m => { return { namespace: 'equipment',...m.default}}),
  import(/* webpackChunkName: 'p__Basicdata__models__measurement.js' */'D:/workspace/ant_wms/my-project/src/pages/Basicdata/models/measurement.js').then(m => { return { namespace: 'measurement',...m.default}}),
  import(/* webpackChunkName: 'p__Basicdata__models__product.js' */'D:/workspace/ant_wms/my-project/src/pages/Basicdata/models/product.js').then(m => { return { namespace: 'product',...m.default}}),
  import(/* webpackChunkName: 'p__Basicdata__models__rule.js' */'D:/workspace/ant_wms/my-project/src/pages/Basicdata/models/rule.js').then(m => { return { namespace: 'rule',...m.default}})
],
  component: () => import(/* webpackChunkName: "layouts__BasicLayout" */'../Basicdata/Warehouse/Administration'),
  LoadingComponent: require('D:/workspace/ant_wms/my-project/src/components/PageLoading/index').default,
}),
                "exact": true
              },
              {
                "path": "/basicdata/warehouse/type",
                "name": "type",
                "component": _dvaDynamic({
  app: window.g_app,
models: () => [
  import(/* webpackChunkName: 'p__Basicdata__Warehouse__models__warehouse.js' */'D:/workspace/ant_wms/my-project/src/pages/Basicdata/Warehouse/models/warehouse.js').then(m => { return { namespace: 'warehouse',...m.default}}),
  import(/* webpackChunkName: 'p__Basicdata__Warehouse__models__warehouseType.js' */'D:/workspace/ant_wms/my-project/src/pages/Basicdata/Warehouse/models/warehouseType.js').then(m => { return { namespace: 'warehouseType',...m.default}}),
  import(/* webpackChunkName: 'p__Basicdata__models__carrier.js' */'D:/workspace/ant_wms/my-project/src/pages/Basicdata/models/carrier.js').then(m => { return { namespace: 'carrier',...m.default}}),
  import(/* webpackChunkName: 'p__Basicdata__models__customer.js' */'D:/workspace/ant_wms/my-project/src/pages/Basicdata/models/customer.js').then(m => { return { namespace: 'customer',...m.default}}),
  import(/* webpackChunkName: 'p__Basicdata__models__equipment.js' */'D:/workspace/ant_wms/my-project/src/pages/Basicdata/models/equipment.js').then(m => { return { namespace: 'equipment',...m.default}}),
  import(/* webpackChunkName: 'p__Basicdata__models__measurement.js' */'D:/workspace/ant_wms/my-project/src/pages/Basicdata/models/measurement.js').then(m => { return { namespace: 'measurement',...m.default}}),
  import(/* webpackChunkName: 'p__Basicdata__models__product.js' */'D:/workspace/ant_wms/my-project/src/pages/Basicdata/models/product.js').then(m => { return { namespace: 'product',...m.default}}),
  import(/* webpackChunkName: 'p__Basicdata__models__rule.js' */'D:/workspace/ant_wms/my-project/src/pages/Basicdata/models/rule.js').then(m => { return { namespace: 'rule',...m.default}})
],
  component: () => import(/* webpackChunkName: "layouts__BasicLayout" */'../Basicdata/Warehouse/Type'),
  LoadingComponent: require('D:/workspace/ant_wms/my-project/src/components/PageLoading/index').default,
}),
                "exact": true
              },
              {
                "component": () => React.createElement(require('D:/workspace/ant_wms/my-project/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: true })
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
  import(/* webpackChunkName: 'p__Basicdata__Storehouse__models__storehouse.js' */'D:/workspace/ant_wms/my-project/src/pages/Basicdata/Storehouse/models/storehouse.js').then(m => { return { namespace: 'storehouse',...m.default}}),
  import(/* webpackChunkName: 'p__Basicdata__Storehouse__models__storehouseType.js' */'D:/workspace/ant_wms/my-project/src/pages/Basicdata/Storehouse/models/storehouseType.js').then(m => { return { namespace: 'storehouseType',...m.default}}),
  import(/* webpackChunkName: 'p__Basicdata__models__carrier.js' */'D:/workspace/ant_wms/my-project/src/pages/Basicdata/models/carrier.js').then(m => { return { namespace: 'carrier',...m.default}}),
  import(/* webpackChunkName: 'p__Basicdata__models__customer.js' */'D:/workspace/ant_wms/my-project/src/pages/Basicdata/models/customer.js').then(m => { return { namespace: 'customer',...m.default}}),
  import(/* webpackChunkName: 'p__Basicdata__models__equipment.js' */'D:/workspace/ant_wms/my-project/src/pages/Basicdata/models/equipment.js').then(m => { return { namespace: 'equipment',...m.default}}),
  import(/* webpackChunkName: 'p__Basicdata__models__measurement.js' */'D:/workspace/ant_wms/my-project/src/pages/Basicdata/models/measurement.js').then(m => { return { namespace: 'measurement',...m.default}}),
  import(/* webpackChunkName: 'p__Basicdata__models__product.js' */'D:/workspace/ant_wms/my-project/src/pages/Basicdata/models/product.js').then(m => { return { namespace: 'product',...m.default}}),
  import(/* webpackChunkName: 'p__Basicdata__models__rule.js' */'D:/workspace/ant_wms/my-project/src/pages/Basicdata/models/rule.js').then(m => { return { namespace: 'rule',...m.default}})
],
  component: () => import(/* webpackChunkName: "layouts__BasicLayout" */'../Basicdata/Storehouse/Administration'),
  LoadingComponent: require('D:/workspace/ant_wms/my-project/src/components/PageLoading/index').default,
}),
                "exact": true
              },
              {
                "path": "/basicdata/storehouse/type",
                "name": "type",
                "component": _dvaDynamic({
  app: window.g_app,
models: () => [
  import(/* webpackChunkName: 'p__Basicdata__Storehouse__models__storehouse.js' */'D:/workspace/ant_wms/my-project/src/pages/Basicdata/Storehouse/models/storehouse.js').then(m => { return { namespace: 'storehouse',...m.default}}),
  import(/* webpackChunkName: 'p__Basicdata__Storehouse__models__storehouseType.js' */'D:/workspace/ant_wms/my-project/src/pages/Basicdata/Storehouse/models/storehouseType.js').then(m => { return { namespace: 'storehouseType',...m.default}}),
  import(/* webpackChunkName: 'p__Basicdata__models__carrier.js' */'D:/workspace/ant_wms/my-project/src/pages/Basicdata/models/carrier.js').then(m => { return { namespace: 'carrier',...m.default}}),
  import(/* webpackChunkName: 'p__Basicdata__models__customer.js' */'D:/workspace/ant_wms/my-project/src/pages/Basicdata/models/customer.js').then(m => { return { namespace: 'customer',...m.default}}),
  import(/* webpackChunkName: 'p__Basicdata__models__equipment.js' */'D:/workspace/ant_wms/my-project/src/pages/Basicdata/models/equipment.js').then(m => { return { namespace: 'equipment',...m.default}}),
  import(/* webpackChunkName: 'p__Basicdata__models__measurement.js' */'D:/workspace/ant_wms/my-project/src/pages/Basicdata/models/measurement.js').then(m => { return { namespace: 'measurement',...m.default}}),
  import(/* webpackChunkName: 'p__Basicdata__models__product.js' */'D:/workspace/ant_wms/my-project/src/pages/Basicdata/models/product.js').then(m => { return { namespace: 'product',...m.default}}),
  import(/* webpackChunkName: 'p__Basicdata__models__rule.js' */'D:/workspace/ant_wms/my-project/src/pages/Basicdata/models/rule.js').then(m => { return { namespace: 'rule',...m.default}})
],
  component: () => import(/* webpackChunkName: "layouts__BasicLayout" */'../Basicdata/Storehouse/Type'),
  LoadingComponent: require('D:/workspace/ant_wms/my-project/src/components/PageLoading/index').default,
}),
                "exact": true
              },
              {
                "component": () => React.createElement(require('D:/workspace/ant_wms/my-project/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: true })
              }
            ]
          },
          {
            "path": "/basicdata/equipment",
            "name": "equipment",
            "component": _dvaDynamic({
  app: window.g_app,
models: () => [
  import(/* webpackChunkName: 'p__Basicdata__models__carrier.js' */'D:/workspace/ant_wms/my-project/src/pages/Basicdata/models/carrier.js').then(m => { return { namespace: 'carrier',...m.default}}),
  import(/* webpackChunkName: 'p__Basicdata__models__customer.js' */'D:/workspace/ant_wms/my-project/src/pages/Basicdata/models/customer.js').then(m => { return { namespace: 'customer',...m.default}}),
  import(/* webpackChunkName: 'p__Basicdata__models__equipment.js' */'D:/workspace/ant_wms/my-project/src/pages/Basicdata/models/equipment.js').then(m => { return { namespace: 'equipment',...m.default}}),
  import(/* webpackChunkName: 'p__Basicdata__models__measurement.js' */'D:/workspace/ant_wms/my-project/src/pages/Basicdata/models/measurement.js').then(m => { return { namespace: 'measurement',...m.default}}),
  import(/* webpackChunkName: 'p__Basicdata__models__product.js' */'D:/workspace/ant_wms/my-project/src/pages/Basicdata/models/product.js').then(m => { return { namespace: 'product',...m.default}}),
  import(/* webpackChunkName: 'p__Basicdata__models__rule.js' */'D:/workspace/ant_wms/my-project/src/pages/Basicdata/models/rule.js').then(m => { return { namespace: 'rule',...m.default}})
],
  component: () => import(/* webpackChunkName: "p__Basicdata__Equipment" */'../Basicdata/Equipment'),
  LoadingComponent: require('D:/workspace/ant_wms/my-project/src/components/PageLoading/index').default,
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
  import(/* webpackChunkName: 'p__Basicdata__Supplier__models__supplier.js' */'D:/workspace/ant_wms/my-project/src/pages/Basicdata/Supplier/models/supplier.js').then(m => { return { namespace: 'supplier',...m.default}}),
  import(/* webpackChunkName: 'p__Basicdata__Supplier__models__supplierType.js' */'D:/workspace/ant_wms/my-project/src/pages/Basicdata/Supplier/models/supplierType.js').then(m => { return { namespace: 'supplierType',...m.default}}),
  import(/* webpackChunkName: 'p__Basicdata__models__carrier.js' */'D:/workspace/ant_wms/my-project/src/pages/Basicdata/models/carrier.js').then(m => { return { namespace: 'carrier',...m.default}}),
  import(/* webpackChunkName: 'p__Basicdata__models__customer.js' */'D:/workspace/ant_wms/my-project/src/pages/Basicdata/models/customer.js').then(m => { return { namespace: 'customer',...m.default}}),
  import(/* webpackChunkName: 'p__Basicdata__models__equipment.js' */'D:/workspace/ant_wms/my-project/src/pages/Basicdata/models/equipment.js').then(m => { return { namespace: 'equipment',...m.default}}),
  import(/* webpackChunkName: 'p__Basicdata__models__measurement.js' */'D:/workspace/ant_wms/my-project/src/pages/Basicdata/models/measurement.js').then(m => { return { namespace: 'measurement',...m.default}}),
  import(/* webpackChunkName: 'p__Basicdata__models__product.js' */'D:/workspace/ant_wms/my-project/src/pages/Basicdata/models/product.js').then(m => { return { namespace: 'product',...m.default}}),
  import(/* webpackChunkName: 'p__Basicdata__models__rule.js' */'D:/workspace/ant_wms/my-project/src/pages/Basicdata/models/rule.js').then(m => { return { namespace: 'rule',...m.default}})
],
  component: () => import(/* webpackChunkName: "layouts__BasicLayout" */'../Basicdata/Supplier/Administration'),
  LoadingComponent: require('D:/workspace/ant_wms/my-project/src/components/PageLoading/index').default,
}),
                "exact": true
              },
              {
                "path": "/basicdata/supplier/type",
                "name": "type",
                "component": _dvaDynamic({
  app: window.g_app,
models: () => [
  import(/* webpackChunkName: 'p__Basicdata__Supplier__models__supplier.js' */'D:/workspace/ant_wms/my-project/src/pages/Basicdata/Supplier/models/supplier.js').then(m => { return { namespace: 'supplier',...m.default}}),
  import(/* webpackChunkName: 'p__Basicdata__Supplier__models__supplierType.js' */'D:/workspace/ant_wms/my-project/src/pages/Basicdata/Supplier/models/supplierType.js').then(m => { return { namespace: 'supplierType',...m.default}}),
  import(/* webpackChunkName: 'p__Basicdata__models__carrier.js' */'D:/workspace/ant_wms/my-project/src/pages/Basicdata/models/carrier.js').then(m => { return { namespace: 'carrier',...m.default}}),
  import(/* webpackChunkName: 'p__Basicdata__models__customer.js' */'D:/workspace/ant_wms/my-project/src/pages/Basicdata/models/customer.js').then(m => { return { namespace: 'customer',...m.default}}),
  import(/* webpackChunkName: 'p__Basicdata__models__equipment.js' */'D:/workspace/ant_wms/my-project/src/pages/Basicdata/models/equipment.js').then(m => { return { namespace: 'equipment',...m.default}}),
  import(/* webpackChunkName: 'p__Basicdata__models__measurement.js' */'D:/workspace/ant_wms/my-project/src/pages/Basicdata/models/measurement.js').then(m => { return { namespace: 'measurement',...m.default}}),
  import(/* webpackChunkName: 'p__Basicdata__models__product.js' */'D:/workspace/ant_wms/my-project/src/pages/Basicdata/models/product.js').then(m => { return { namespace: 'product',...m.default}}),
  import(/* webpackChunkName: 'p__Basicdata__models__rule.js' */'D:/workspace/ant_wms/my-project/src/pages/Basicdata/models/rule.js').then(m => { return { namespace: 'rule',...m.default}})
],
  component: () => import(/* webpackChunkName: "layouts__BasicLayout" */'../Basicdata/Supplier/Type'),
  LoadingComponent: require('D:/workspace/ant_wms/my-project/src/components/PageLoading/index').default,
}),
                "exact": true
              },
              {
                "component": () => React.createElement(require('D:/workspace/ant_wms/my-project/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: true })
              }
            ]
          },
          {
            "path": "/basicdata/customer",
            "name": "customer",
            "component": _dvaDynamic({
  app: window.g_app,
models: () => [
  import(/* webpackChunkName: 'p__Basicdata__models__carrier.js' */'D:/workspace/ant_wms/my-project/src/pages/Basicdata/models/carrier.js').then(m => { return { namespace: 'carrier',...m.default}}),
  import(/* webpackChunkName: 'p__Basicdata__models__customer.js' */'D:/workspace/ant_wms/my-project/src/pages/Basicdata/models/customer.js').then(m => { return { namespace: 'customer',...m.default}}),
  import(/* webpackChunkName: 'p__Basicdata__models__equipment.js' */'D:/workspace/ant_wms/my-project/src/pages/Basicdata/models/equipment.js').then(m => { return { namespace: 'equipment',...m.default}}),
  import(/* webpackChunkName: 'p__Basicdata__models__measurement.js' */'D:/workspace/ant_wms/my-project/src/pages/Basicdata/models/measurement.js').then(m => { return { namespace: 'measurement',...m.default}}),
  import(/* webpackChunkName: 'p__Basicdata__models__product.js' */'D:/workspace/ant_wms/my-project/src/pages/Basicdata/models/product.js').then(m => { return { namespace: 'product',...m.default}}),
  import(/* webpackChunkName: 'p__Basicdata__models__rule.js' */'D:/workspace/ant_wms/my-project/src/pages/Basicdata/models/rule.js').then(m => { return { namespace: 'rule',...m.default}})
],
  component: () => import(/* webpackChunkName: "p__Basicdata__Customer" */'../Basicdata/Customer'),
  LoadingComponent: require('D:/workspace/ant_wms/my-project/src/components/PageLoading/index').default,
}),
            "exact": true
          },
          {
            "path": "/basicdata/measurement",
            "name": "measurement",
            "component": _dvaDynamic({
  app: window.g_app,
models: () => [
  import(/* webpackChunkName: 'p__Basicdata__models__carrier.js' */'D:/workspace/ant_wms/my-project/src/pages/Basicdata/models/carrier.js').then(m => { return { namespace: 'carrier',...m.default}}),
  import(/* webpackChunkName: 'p__Basicdata__models__customer.js' */'D:/workspace/ant_wms/my-project/src/pages/Basicdata/models/customer.js').then(m => { return { namespace: 'customer',...m.default}}),
  import(/* webpackChunkName: 'p__Basicdata__models__equipment.js' */'D:/workspace/ant_wms/my-project/src/pages/Basicdata/models/equipment.js').then(m => { return { namespace: 'equipment',...m.default}}),
  import(/* webpackChunkName: 'p__Basicdata__models__measurement.js' */'D:/workspace/ant_wms/my-project/src/pages/Basicdata/models/measurement.js').then(m => { return { namespace: 'measurement',...m.default}}),
  import(/* webpackChunkName: 'p__Basicdata__models__product.js' */'D:/workspace/ant_wms/my-project/src/pages/Basicdata/models/product.js').then(m => { return { namespace: 'product',...m.default}}),
  import(/* webpackChunkName: 'p__Basicdata__models__rule.js' */'D:/workspace/ant_wms/my-project/src/pages/Basicdata/models/rule.js').then(m => { return { namespace: 'rule',...m.default}})
],
  component: () => import(/* webpackChunkName: "p__Basicdata__Measurement" */'../Basicdata/Measurement'),
  LoadingComponent: require('D:/workspace/ant_wms/my-project/src/components/PageLoading/index').default,
}),
            "exact": true
          },
          {
            "path": "/basicdata/product",
            "name": "product",
            "component": _dvaDynamic({
  app: window.g_app,
models: () => [
  import(/* webpackChunkName: 'p__Basicdata__models__carrier.js' */'D:/workspace/ant_wms/my-project/src/pages/Basicdata/models/carrier.js').then(m => { return { namespace: 'carrier',...m.default}}),
  import(/* webpackChunkName: 'p__Basicdata__models__customer.js' */'D:/workspace/ant_wms/my-project/src/pages/Basicdata/models/customer.js').then(m => { return { namespace: 'customer',...m.default}}),
  import(/* webpackChunkName: 'p__Basicdata__models__equipment.js' */'D:/workspace/ant_wms/my-project/src/pages/Basicdata/models/equipment.js').then(m => { return { namespace: 'equipment',...m.default}}),
  import(/* webpackChunkName: 'p__Basicdata__models__measurement.js' */'D:/workspace/ant_wms/my-project/src/pages/Basicdata/models/measurement.js').then(m => { return { namespace: 'measurement',...m.default}}),
  import(/* webpackChunkName: 'p__Basicdata__models__product.js' */'D:/workspace/ant_wms/my-project/src/pages/Basicdata/models/product.js').then(m => { return { namespace: 'product',...m.default}}),
  import(/* webpackChunkName: 'p__Basicdata__models__rule.js' */'D:/workspace/ant_wms/my-project/src/pages/Basicdata/models/rule.js').then(m => { return { namespace: 'rule',...m.default}})
],
  component: () => import(/* webpackChunkName: "p__Basicdata__Product" */'../Basicdata/Product'),
  LoadingComponent: require('D:/workspace/ant_wms/my-project/src/components/PageLoading/index').default,
}),
            "exact": true
          },
          {
            "path": "/basicdata/carrier",
            "name": "carrier",
            "component": _dvaDynamic({
  app: window.g_app,
models: () => [
  import(/* webpackChunkName: 'p__Basicdata__models__carrier.js' */'D:/workspace/ant_wms/my-project/src/pages/Basicdata/models/carrier.js').then(m => { return { namespace: 'carrier',...m.default}}),
  import(/* webpackChunkName: 'p__Basicdata__models__customer.js' */'D:/workspace/ant_wms/my-project/src/pages/Basicdata/models/customer.js').then(m => { return { namespace: 'customer',...m.default}}),
  import(/* webpackChunkName: 'p__Basicdata__models__equipment.js' */'D:/workspace/ant_wms/my-project/src/pages/Basicdata/models/equipment.js').then(m => { return { namespace: 'equipment',...m.default}}),
  import(/* webpackChunkName: 'p__Basicdata__models__measurement.js' */'D:/workspace/ant_wms/my-project/src/pages/Basicdata/models/measurement.js').then(m => { return { namespace: 'measurement',...m.default}}),
  import(/* webpackChunkName: 'p__Basicdata__models__product.js' */'D:/workspace/ant_wms/my-project/src/pages/Basicdata/models/product.js').then(m => { return { namespace: 'product',...m.default}}),
  import(/* webpackChunkName: 'p__Basicdata__models__rule.js' */'D:/workspace/ant_wms/my-project/src/pages/Basicdata/models/rule.js').then(m => { return { namespace: 'rule',...m.default}})
],
  component: () => import(/* webpackChunkName: "p__Basicdata__Carrier" */'../Basicdata/Carrier'),
  LoadingComponent: require('D:/workspace/ant_wms/my-project/src/components/PageLoading/index').default,
}),
            "exact": true
          },
          {
            "component": () => React.createElement(require('D:/workspace/ant_wms/my-project/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: true })
          }
        ]
      },
      {
        "path": "/operation",
        "icon": "table",
        "name": "operation",
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
  import(/* webpackChunkName: 'p__Operation__Enter__models__rule.js' */'D:/workspace/ant_wms/my-project/src/pages/Operation/Enter/models/rule.js').then(m => { return { namespace: 'rule',...m.default}})
],
  component: () => import(/* webpackChunkName: "layouts__BasicLayout" */'../Operation/Enter/Administration'),
  LoadingComponent: require('D:/workspace/ant_wms/my-project/src/components/PageLoading/index').default,
}),
                "exact": true
              },
              {
                "path": "/operation/enter/type",
                "name": "type",
                "component": _dvaDynamic({
  app: window.g_app,
models: () => [
  import(/* webpackChunkName: 'p__Operation__Enter__models__rule.js' */'D:/workspace/ant_wms/my-project/src/pages/Operation/Enter/models/rule.js').then(m => { return { namespace: 'rule',...m.default}})
],
  component: () => import(/* webpackChunkName: "layouts__BasicLayout" */'../Operation/Enter/Type'),
  LoadingComponent: require('D:/workspace/ant_wms/my-project/src/components/PageLoading/index').default,
}),
                "exact": true
              },
              {
                "path": "/operation/enter/detail",
                "name": "detail",
                "component": _dvaDynamic({
  app: window.g_app,
models: () => [
  import(/* webpackChunkName: 'p__Operation__Enter__models__rule.js' */'D:/workspace/ant_wms/my-project/src/pages/Operation/Enter/models/rule.js').then(m => { return { namespace: 'rule',...m.default}})
],
  component: () => import(/* webpackChunkName: "layouts__BasicLayout" */'../Operation/Enter/Detail'),
  LoadingComponent: require('D:/workspace/ant_wms/my-project/src/components/PageLoading/index').default,
}),
                "exact": true
              },
              {
                "component": () => React.createElement(require('D:/workspace/ant_wms/my-project/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: true })
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
  import(/* webpackChunkName: 'p__Operation__Out__models__rule.js' */'D:/workspace/ant_wms/my-project/src/pages/Operation/Out/models/rule.js').then(m => { return { namespace: 'rule',...m.default}})
],
  component: () => import(/* webpackChunkName: "layouts__BasicLayout" */'../Operation/Out/Administration'),
  LoadingComponent: require('D:/workspace/ant_wms/my-project/src/components/PageLoading/index').default,
}),
                "exact": true
              },
              {
                "path": "/operation/out/type",
                "name": "type",
                "component": _dvaDynamic({
  app: window.g_app,
models: () => [
  import(/* webpackChunkName: 'p__Operation__Out__models__rule.js' */'D:/workspace/ant_wms/my-project/src/pages/Operation/Out/models/rule.js').then(m => { return { namespace: 'rule',...m.default}})
],
  component: () => import(/* webpackChunkName: "layouts__BasicLayout" */'../Operation/Out/Type'),
  LoadingComponent: require('D:/workspace/ant_wms/my-project/src/components/PageLoading/index').default,
}),
                "exact": true
              },
              {
                "path": "/operation/out/detail",
                "name": "detail",
                "component": _dvaDynamic({
  app: window.g_app,
models: () => [
  import(/* webpackChunkName: 'p__Operation__Out__models__rule.js' */'D:/workspace/ant_wms/my-project/src/pages/Operation/Out/models/rule.js').then(m => { return { namespace: 'rule',...m.default}})
],
  component: () => import(/* webpackChunkName: "layouts__BasicLayout" */'../Operation/Out/Detail'),
  LoadingComponent: require('D:/workspace/ant_wms/my-project/src/components/PageLoading/index').default,
}),
                "exact": true
              },
              {
                "component": () => React.createElement(require('D:/workspace/ant_wms/my-project/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: true })
              }
            ]
          },
          {
            "component": () => React.createElement(require('D:/workspace/ant_wms/my-project/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: true })
          }
        ]
      },
      {
        "path": "/system",
        "icon": "profile",
        "name": "system",
        "routes": [
          {
            "path": "/system/information",
            "name": "information",
            "routes": [
              {
                "path": "/system/information",
                "redirect": "/system/information/virtual",
                "exact": true
              },
              {
                "path": "/system/information/virtual",
                "name": "virtual",
                "exact": true
              },
              {
                "path": "/system/information/server",
                "name": "server",
                "exact": true
              },
              {
                "path": "/system/information/sql",
                "name": "sql",
                "exact": true
              },
              {
                "component": () => React.createElement(require('D:/workspace/ant_wms/my-project/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: true })
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
                "path": "/system/authentication/user",
                "name": "user",
                "exact": true
              },
              {
                "path": "/system/authentication/role",
                "name": "role",
                "exact": true
              },
              {
                "path": "/system/authentication/auth",
                "name": "auth",
                "exact": true
              },
              {
                "component": () => React.createElement(require('D:/workspace/ant_wms/my-project/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: true })
              }
            ]
          },
          {
            "component": () => React.createElement(require('D:/workspace/ant_wms/my-project/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: true })
          }
        ]
      },
      {
        "component": _dvaDynamic({
  
  component: () => import(/* webpackChunkName: "p__404" */'../404'),
  LoadingComponent: require('D:/workspace/ant_wms/my-project/src/components/PageLoading/index').default,
}),
        "exact": true
      },
      {
        "component": () => React.createElement(require('D:/workspace/ant_wms/my-project/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: true })
      }
    ]
  },
  {
    "component": () => React.createElement(require('D:/workspace/ant_wms/my-project/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: true })
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
