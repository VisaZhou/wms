import { parse } from 'url';

// mock tableListDataSource
let tableListDataSource = [];
for (let i = 0; i < 4; i += 1) {
  if (i === 0) {
    tableListDataSource.push({
      key: 0,
      name: '类型1',
    });
  }
  if (i === 1) {
    tableListDataSource.push({
      key: 1,
      name: '类型2',
    });
  }
  if (i === 2) {
    tableListDataSource.push({
      key: 2,
      name: '类型3',
    });
  }
  if (i === 3) {
    tableListDataSource.push({
      key: 3,
      name: '类型4',
    });
  }
}

function getWarehouseType(req, res, u) {
  let url = u;
  if (!url || Object.prototype.toString.call(url) !== '[object String]') {
    url = req.url; // eslint-disable-line
  }

  const params = parse(url, true).query;

  let dataSource = tableListDataSource;

  if (params.sorter) {
    const s = params.sorter.split('_');
    dataSource = dataSource.sort((prev, next) => {
      if (s[1] === 'descend') {
        return next[s[0]] - prev[s[0]];
      }
      return prev[s[0]] - next[s[0]];
    });
  }

  if (params.status) {
    const status = params.status.split(',');
    let filterDataSource = [];
    status.forEach(s => {
      filterDataSource = filterDataSource.concat(
        dataSource.filter(data => parseInt(data.status, 10) === parseInt(s[0], 10))
      );
    });
    dataSource = filterDataSource;
  }

  if (params.name) {
    dataSource = dataSource.filter(data => data.name.indexOf(params.name) > -1);
  }
  let pageSize = 10;
  if (params.pageSize) {
    pageSize = params.pageSize * 1;
  }

  const result = {
    list: dataSource,
    pagination: {
      total: dataSource.length,
      pageSize,
      current: parseInt(params.currentPage, 10) || 1,
    },
  };

  return res.json(result);
}

function postWarehouseType(req, res, u, b) {
  let url = u;
  if (!url || Object.prototype.toString.call(url) !== '[object String]') {
    url = req.url; // eslint-disable-line
  }

  const body = (b && b.body) || req.body;
  const { method, key, name, category, department, rentTime, area, link, phone, address } = body;

  switch (method) {
    /* eslint no-case-declarations:0 */
    case 'delete':
      tableListDataSource = tableListDataSource.filter(item => key !== item.key);
      break;
    case 'batchDelete':
      tableListDataSource = tableListDataSource.filter(item => key.indexOf(item.key) === -1);
      break;
    case 'post':
      const i = Math.ceil(Math.random() * 10000);

      tableListDataSource.unshift({
        key: i,
        name,
      });
      break;
    case 'update':
      tableListDataSource = tableListDataSource.map(item => {
        if (item.key === key) {
          Object.assign(item, { name, category, department, rentTime, area, link, phone, address });
          return item;
        }
        return item;
      });
      break;
    default:
      break;
  }

  return getWarehouseType(req, res, u);
}

export default {
  'GET /api/warehouseType': getWarehouseType,
  'POST /api/warehouseType': postWarehouseType,
};
