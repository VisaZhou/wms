import { parse } from 'url';

// mock tableListDataSource
let tableListDataSource = [];
for (let i = 0; i < 4; i += 1) {
  if (i === 0) {
    tableListDataSource.push({
      id: 0,
      number: '000000001',
      name: '测试仓库3',
      typeName: 'test1',
      departmentName: '设备部',
      leaseTime: '1970-01-01',
      area: 500,
      contact: 'zoubiao',
      phone: '66668888',
      address: '-',
    });
  }
  if (i === 1) {
    tableListDataSource.push({
      id: 1,
      number: '000000002',
      name: 'test',
      typeName: 'test2',
      departmentName: '人事部',
      leaseTime: '2018-03-22',
      area: 1000,
      contact: 'test',
      phone: 'test',
      address: 'test',
    });
  }
  if (i === 2) {
    tableListDataSource.push({
      id: 2,
      number: '000000003',
      name: 'storage2',
      typeName: 'test1',
      departmentName: '人事部',
      leaseTime: '2018-01-23',
      area: 2222,
      contact: '2222',
      phone: '2222',
      address: '2222',
    });
  }
  if (i === 3) {
    tableListDataSource.push({
      id: 3,
      number: '000000004',
      name: 'storage',
      typeName: 'test2',
      departmentName: '人事部',
      leaseTime: '2018-01-11',
      area: 3333,
      contact: '3333',
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
    dataSource = dataSource.filter(data => data.number.indexOf(params.number) > -1);
  }
  if (params.department) {
    dataSource = dataSource.filter(data => data.departmentName === params.departmentName);
  }
  if (params.category) {
    dataSource = dataSource.filter(data => data.typeName === params.typeName);
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
  const { method,number, name, typeName, departmentName, leaseTime, area, contact, phone, address } = body;

  switch (method) {
    /* eslint no-case-declarations:0 */
    case 'delete':
      tableListDataSource = tableListDataSource.filter(item => id !== item.id);
      break;
    case 'batchDelete':
      tableListDataSource = tableListDataSource.filter(item => id.indexOf(item.id) === -1);
      break;
    case 'post':
      const i = Math.ceil(Math.random() * 10000);

      tableListDataSource.unshift({
        id: i,
        number,
        name,
        typeName,
        departmentName,
        leaseTime,
        area,
        contact,
        phone,
        address,
      });
      break;
    case 'update':
      tableListDataSource = tableListDataSource.map(item => {
        if (item.id === id) {
          Object.assign(item, { name,number, typeName, departmentName, leaseTime, area, contact, phone, address });
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
