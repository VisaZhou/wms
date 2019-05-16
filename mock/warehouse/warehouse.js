import { parse } from 'url';

// mock tableListDataSource
let tableListDataSource = [];
for (let i = 0; i < 4; i += 1) {
  if (i === 0) {
    tableListDataSource.push({
      key: 0,
      id: '000000001',
      name: '测试仓库3',
      category: 'test1',
      department: '设备部',
      rentTime: '1970-01-01',
      area: 500,
      link: 'zoubiao',
      phone: '66668888',
      address: '-',
    });
  }
  if (i === 1) {
    tableListDataSource.push({
      key: 1,
      id: '000000002',
      name: 'test',
      category: 'test2',
      department: '人事部',
      rentTime: '2018-03-22',
      area: 1000,
      link: 'test',
      phone: 'test',
      address: 'test',
    });
  }
  if (i === 2) {
    tableListDataSource.push({
      key: 2,
      id: '000000003',
      name: 'storage2',
      category: 'test1',
      department: '人事部',
      rentTime: '2018-01-23',
      area: 2222,
      link: '2222',
      phone: '2222',
      address: '2222',
    });
  }
  if (i === 3) {
    tableListDataSource.push({
      key: 3,
      id: '000000004',
      name: 'storage',
      category: 'test2',
      department: '人事部',
      rentTime: '2018-01-11',
      area: 3333,
      link: '3333',
      phone: '3333',
      address: '3333',
    });
  }
}

function getWarehouse(req, res, u) {
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
  if (params.id) {
    dataSource = dataSource.filter(data => data.id.indexOf(params.id) > -1);
  }
  if (params.department) {
    dataSource = dataSource.filter(data => data.department === params.department);
  }
  if (params.category) {
    dataSource = dataSource.filter(data => data.category === params.category);
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

function postWarehouse(req, res, u, b) {
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
        id: i,
        name,
        category,
        department,
        rentTime,
        area,
        link,
        phone,
        address,
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

  return getWarehouse(req, res, u);
}

export default {
  'GET /api/warehouse': getWarehouse,
  'POST /api/warehouse': postWarehouse,
};
