import React, { PureComponent, Fragment } from 'react';
import { connect } from 'dva';
import moment from 'moment';
import router from 'umi/router';
import {
  Row,
  Col,
  Card,
  Form,
  Input,
  Select,
  Icon,
  Button,
  Dropdown,
  Menu,
  Modal,
  message,
  Divider,
  Descriptions,
  Table,
} from 'antd';
import StandardTable from '@/components/StandardTable';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import styles from './Administration.less';

const FormItem = Form.Item;
const { Option } = Select;
const getValue = obj =>
  Object.keys(obj)
    .map(key => obj[key])
    .join(',');

@Form.create()
class CreateForm extends PureComponent {
  static defaultProps = {
    handleAdd: () => {},
    handleModalVisible: () => {},
    values: {},
  };

  constructor(props) {
    super(props);
    this.formLayout = {
      labelCol: { span: 7 },
      wrapperCol: { span: 13 },
    };
  }

  renderContent = () => {
    const { form } = this.props;
    return [
      <div className={styles.tableListForm}>
        <Row gutter={{ md: 8, lg: 24, xl: 48 }}>
          <Col span={12}>
            <FormItem key="matnr" labelCol={{ span: 5 }} wrapperCol={{ span: 15 }} label="sku">
              {form.getFieldDecorator('matnr', {
              })(<Input placeholder="请输入" />)}
            </FormItem>
          </Col>
          <Col span={12}>
            <FormItem key="zsatnr" labelCol={{ span: 5 }} wrapperCol={{ span: 15 }} label="品号">
              {form.getFieldDecorator('zsatnr', {
              })(<Input placeholder="请输入" />)}
            </FormItem>
          </Col>
          <Col span={12}>
            <FormItem key="color" labelCol={{ span: 5 }} wrapperCol={{ span: 15 }} label="色号">
              {form.getFieldDecorator('color', {
              })(<Input placeholder="请输入" />)}
            </FormItem>
          </Col>
          <Col span={12}>
            <FormItem key="spec" labelCol={{ span: 5 }} wrapperCol={{ span: 15 }} label="规格">
              {form.getFieldDecorator('spec', {
              })(<Input placeholder="请输入" />)}
            </FormItem>
          </Col>
          <Col span={12}>
            <FormItem key="charg" labelCol={{ span: 5 }} wrapperCol={{ span: 15 }} label="批次">
              {form.getFieldDecorator('charg', {
              })(<Input placeholder="请输入" />)}
            </FormItem>
          </Col>
          <Col span={12}>
            <FormItem key="barcd" labelCol={{ span: 5 }} wrapperCol={{ span: 15 }} label="主条码">
              {form.getFieldDecorator('barcd', {
              })(<Input placeholder="请输入" />)}
            </FormItem>
          </Col>
          <Col span={12}>
            <FormItem key="barcdAdd" labelCol={{ span: 5 }} wrapperCol={{ span: 15 }} label="辅条码">
              {form.getFieldDecorator('barcdAdd', {
              })(<Input placeholder="请输入" />)}
            </FormItem>
          </Col>
          <Col span={12}>
            <FormItem key="rfidEpc" labelCol={{ span: 5 }} wrapperCol={{ span: 15 }} label="主EPC">
              {form.getFieldDecorator('rfidEpc', {
              })(<Input placeholder="请输入" />)}
            </FormItem>
          </Col>
          <Col span={12}>
            <FormItem key="rfidAddEpc" labelCol={{ span: 5 }} wrapperCol={{ span: 15 }} label="辅EPC">
              {form.getFieldDecorator('rfidAddEpc', {
              })(<Input placeholder="请输入" />)}
            </FormItem>
          </Col>
          <Col span={12}>
            <FormItem key="inboundIdentity" labelCol={{ span: 5 }} wrapperCol={{ span: 15 }} label="入库标识">
              {form.getFieldDecorator('inboundIdentity', {
              })(<Input placeholder="请输入" />)}
            </FormItem>
          </Col>
          <Col span={12}>
            <FormItem key="pxQtySh" labelCol={{ span: 5 }} wrapperCol={{ span: 15 }} label="收货箱规">
              {form.getFieldDecorator('pxQtySh', {
              })(<Input placeholder="请输入" />)}
            </FormItem>
          </Col>
          <Col span={12}>
            <FormItem key="pxQtyFh" labelCol={{ span: 5 }} wrapperCol={{ span: 15 }} label="发货箱规">
              {form.getFieldDecorator('pxQtyFh', {
              })(<Input placeholder="请输入" />)}
            </FormItem>
          </Col>
          <Col span={12}>
            <FormItem key="lifnr" labelCol={{ span: 5 }} wrapperCol={{ span: 15 }} label="交换号">
              {form.getFieldDecorator('lifnr', {
              })(<Input placeholder="请输入" />)}
            </FormItem>
          </Col>
          <Col span={12}>
            <FormItem key="goodsPackag" labelCol={{ span: 5 }} wrapperCol={{ span: 15 }} label="收货包材料">
              {form.getFieldDecorator('goodsPackag', {
              })(<Input placeholder="请输入" />)}
            </FormItem>
          </Col>
          <Col span={12}>
            <FormItem key="deliveryPackag" labelCol={{ span: 5 }} wrapperCol={{ span: 15 }} label="发货包材">
              {form.getFieldDecorator('deliveryPackag', {
              })(<Input placeholder="请输入" />)}
            </FormItem>
          </Col>
          <Col span={12}>
            <FormItem key="brgew" labelCol={{ span: 5 }} wrapperCol={{ span: 15 }} label="重量">
              {form.getFieldDecorator('brgew', {
              })(<Input placeholder="请输入" />)}
            </FormItem>
          </Col>
          <Col span={12}>
            <FormItem key="productType" labelCol={{ span: 5 }} wrapperCol={{ span: 15 }} label="产品类别">
              {form.getFieldDecorator('productType', {
              })(<Input placeholder="请输入" />)}
            </FormItem>
          </Col>
        </Row>
      </div>
    ];
  };

  okHandle = () => {
    const { form, handleAdd } = this.props;
    form.validateFields((err, fieldsValue) => {
      if (err) return;
      form.resetFields();
      handleAdd(fieldsValue);
    });
  };

  render() {
    const { modalVisible, handleModalVisible } = this.props;
    return (
      <Modal
        width={640}
        bodyStyle={{ padding: '32px 40px 48px' }}
        destroyOnClose
        title="新增出库"
        visible={modalVisible}
        onOk={this.okHandle}
        onCancel={() => handleModalVisible()}
      >
        {this.renderContent()}
      </Modal>
    );
  }
}

@connect(({ outStorage, loading }) => ({
  outStorage,
  loading: loading.models.outStorage,
}))
@Form.create()
class ScanForm extends PureComponent {
  static defaultProps = {
    handleScan: () => {},
    handleScanModalVisible: () => {},
    values: {},
  };

  constructor(props) {
    super(props);
    this.state = {
      formVals: {
        id: props.values.id,
      },
    };
    this.formLayout = {
      labelCol: { span: 7 },
      wrapperCol: { span: 13 },
    };
  }

  componentWillMount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'outStorage/fetchScanAndCheck',
      payload: {
        id: this.props.values.id,
      },
    });

  }

  handleScanInfo = () => {
    const { form, handleScan } = this.props;
    const { formVals: oldValue } = this.state;
    form.validateFields((err, fieldsValue) => {
      if (err) return;
      const formVals = { ...oldValue, ...fieldsValue };
      this.setState(
        {
          formVals,
        },
        () => {
          handleScan(formVals);
        }
      );
    });
  };

  renderContent = formVals => {
    if(this.props.outStorage.scanAndCheck.data.status === 0){
      this.statusInfo = '待审核';
    }
    else if(this.props.outStorage.scanAndCheck.data.status === 1){
      this.statusInfo = '审核通过';
    }
    else if(this.props.outStorage.scanAndCheck.data.status === 2){
      this.statusInfo = '审核失败';
    }
    this.createTimeInfo = moment(this.props.outStorage.scanAndCheck.data.createTime).format('YYYY-MM-DD HH:mm:ss');

    const columns = [
      {
        title: 'SKU',
        dataIndex: 'matnr',
      },
      {
        title: '品号',
        dataIndex: 'zsatnr',
      },
      {
        title: '色号',
        dataIndex: 'color',
      },
      {
        title: '规格',
        dataIndex: 'spec',
      },
      {
        title: '批次',
        dataIndex: 'charg',
      },
      {
        title: '应发数量',
        dataIndex: 'bookAmount',
      },
      {
        title: '实发数量',
        dataIndex: 'realAmount',
      },
    ];
    const data = this.props.outStorage.scanAndCheck.list;
    return [
      <div id={'print'}>
      <Descriptions title="详细信息">
        <Descriptions.Item label="出库单号">{this.props.outStorage.scanAndCheck.data.number}</Descriptions.Item>
        <Descriptions.Item label="出库单类型">{this.props.outStorage.scanAndCheck.data.outTypeName}</Descriptions.Item>
        <Descriptions.Item label="状态">{this.statusInfo}</Descriptions.Item>
        <Descriptions.Item label="客户编号">{this.props.outStorage.scanAndCheck.data.clientNumber}</Descriptions.Item>
        <Descriptions.Item label="客户名称">{this.props.outStorage.scanAndCheck.data.clientName}</Descriptions.Item>
        <Descriptions.Item label="联系人">{this.props.outStorage.scanAndCheck.data.contact}</Descriptions.Item>
        <Descriptions.Item label="电话">{this.props.outStorage.scanAndCheck.data.phone}</Descriptions.Item>
        <Descriptions.Item label="地址">{this.props.outStorage.scanAndCheck.data.address}</Descriptions.Item>
        <Descriptions.Item label="制单人">{this.props.outStorage.scanAndCheck.data.creatorName}</Descriptions.Item>
        <Descriptions.Item label="制单日期">{this.createTimeInfo}</Descriptions.Item>
        <Descriptions.Item label="仓库">{this.props.outStorage.scanAndCheck.data.storageName}</Descriptions.Item>
        <Descriptions.Item label="备注">{this.props.outStorage.scanAndCheck.data.remark}</Descriptions.Item>
      </Descriptions>,
      <Table columns={columns} dataSource={data} size="middle" />
      </div>
    ];
  };

  renderFooter = () => {
    const { handleScanModalVisible, values } = this.props;
    return [
      <Button key="cancel" onClick={() => handleScanModalVisible(false, values)}>
        关闭
      </Button>,
      <Button key="submit" type="primary" onClick={() => this.handleScanInfo()}>
        打印
      </Button>,
    ];
  };

  render() {
    const { scanModalVisible, handleScanModalVisible, values } = this.props;
    const { formVals } = this.state;
    return (
      <Modal
        width={1000}
        bodyStyle={{ padding: '32px 40px 48px' }}
        destroyOnClose
        title="查看"
        visible={scanModalVisible}
        footer={this.renderFooter()}
        onCancel={() => handleScanModalVisible(false, values)}
        afterClose={() => handleScanModalVisible()}
      >
        {this.renderContent(formVals)}
      </Modal>
    );
  }
}

@connect(({ outStorage, loading }) => ({
  outStorage,
  loading: loading.models.outStorage,
}))
@Form.create()
class CheckForm extends PureComponent {
  static defaultProps = {
    handleCheck: () => {},
    handleCheckModalVisible: () => {},
    values: {},
  };

  constructor(props) {
    super(props);
    this.state = {
      formVals: {
        id: props.values.id,
      },
    };
    this.formLayout = {
      labelCol: { span: 7 },
      wrapperCol: { span: 13 },
    };
  }

  componentWillMount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'outStorage/fetchScanAndCheck',
      payload: {
        id: this.props.values.id,
      },
    });

  }

  handleCheckInfo = (p) => {
    const { form, handleCheck } = this.props;
    const { formVals: oldValue } = this.state;
    form.validateFields((err, fieldsValue) => {
      if (err) return;
      const formVals = { ...oldValue, ...fieldsValue };
      this.setState(
        {
          formVals,
        },
        () => {
          handleCheck(formVals,p);
        }
      );
    });
  };

  renderContent = formVals => {
    if(this.props.outStorage.scanAndCheck.data.status === 0){
      this.statusInfo = '待审核';
    }
    else if(this.props.outStorage.scanAndCheck.data.status === 1){
      this.statusInfo = '审核通过';
    }
    else if(this.props.outStorage.scanAndCheck.data.status === 2){
      this.statusInfo = '审核失败';
    }
    this.createTimeInfo = moment(this.props.outStorage.scanAndCheck.data.createTime).format('YYYY-MM-DD HH:mm:ss');

    const columns = [
      {
        title: 'SKU',
        dataIndex: 'matnr',
      },
      {
        title: '品号',
        dataIndex: 'zsatnr',
      },
      {
        title: '色号',
        dataIndex: 'color',
      },
      {
        title: '规格',
        dataIndex: 'spec',
      },
      {
        title: '批次',
        dataIndex: 'charg',
      },
      {
        title: '应发数量',
        dataIndex: 'bookAmount',
      },
      {
        title: '实发数量',
        dataIndex: 'realAmount',
      },
    ];
    const data = this.props.outStorage.scanAndCheck.list;
    return [
      <div id={'print'}>
        <Descriptions title="详细信息">
          <Descriptions.Item label="出库单号">{this.props.outStorage.scanAndCheck.data.number}</Descriptions.Item>
          <Descriptions.Item label="出库单类型">{this.props.outStorage.scanAndCheck.data.outTypeName}</Descriptions.Item>
          <Descriptions.Item label="状态">{this.statusInfo}</Descriptions.Item>
          <Descriptions.Item label="客户编号">{this.props.outStorage.scanAndCheck.data.clientNumber}</Descriptions.Item>
          <Descriptions.Item label="客户名称">{this.props.outStorage.scanAndCheck.data.clientName}</Descriptions.Item>
          <Descriptions.Item label="联系人">{this.props.outStorage.scanAndCheck.data.contact}</Descriptions.Item>
          <Descriptions.Item label="电话">{this.props.outStorage.scanAndCheck.data.phone}</Descriptions.Item>
          <Descriptions.Item label="地址">{this.props.outStorage.scanAndCheck.data.address}</Descriptions.Item>
          <Descriptions.Item label="制单人">{this.props.outStorage.scanAndCheck.data.creatorName}</Descriptions.Item>
          <Descriptions.Item label="制单日期">{this.createTimeInfo}</Descriptions.Item>
          <Descriptions.Item label="仓库">{this.props.outStorage.scanAndCheck.data.storageName}</Descriptions.Item>
          <Descriptions.Item label="备注">{this.props.outStorage.scanAndCheck.data.remark}</Descriptions.Item>
        </Descriptions>,
        <Table columns={columns} dataSource={data} size="middle" />
      </div>
    ];
  };

  renderFooter = () => {
    const { handleCheckModalVisible, values } = this.props;
    return [
      <Button key="cancel" onClick={() => handleCheckModalVisible(false, values)}>
        关闭
      </Button>,
      <Button key="submit" type="primary" onClick={() => this.handleCheckInfo(1)}>
        审核通过
      </Button>,
      <Button key="submit" type="primary" onClick={() => this.handleCheckInfo(2)}>
        审核不通过
      </Button>,
    ];
  };

  render() {
    const { checkModalVisible, handleCheckModalVisible, values } = this.props;
    const { formVals } = this.state;
    return (
      <Modal
        width={1000}
        bodyStyle={{ padding: '32px 40px 48px' }}
        destroyOnClose
        title="审核"
        visible={checkModalVisible}
        footer={this.renderFooter()}
        onCancel={() => handleCheckModalVisible(false, values)}
        afterClose={() => handleCheckModalVisible()}
      >
        {this.renderContent(formVals)}
      </Modal>
    );
  }
}

/* eslint react/no-multi-comp:0 */
@connect(({ outStorage, loading }) => ({
  outStorage,
  loading: loading.models.outStorage,
}))
@Form.create()
class TableList extends PureComponent {
  confirm  = Modal.confirm;
  state = {
    modalVisible: false,
    scanModalVisible: false,
    checkModalVisible: false,
    selectedRows: [],
    formValues: {},
    stepFormValues: {},
  };
  columns = [
    {
      title: '出库单号',
      width: 150,
      dataIndex: 'number',
      fixed: 'left',
    },
    {
      title: '仓库',
      width: 150,
      key:'1',
      dataIndex: 'storageName',
    },
    {
      title: '出库类型',
      width: 150,
      key:'2',
      dataIndex: 'outTypeName',
    },
    {
      title: '应发数量',
      dataIndex: 'bookAmount',
      key: '3',
      width: 150,
    },
    {
      title: '实发数量',
      dataIndex: 'realAmount',
      key: '4',
      width: 150,
    },
    {
      title: '客户',
      dataIndex: 'clientName',
      key: '5',
      width: 150,
    },
    {
      title: '承运商',
      dataIndex: 'carrierName',
      key: '6',
      width: 150,
    },
    {
      title: '制单人',
      dataIndex: 'creatorName',
      key: '6',
      width: 150,
    },
    {
      title: '制单时间',
      dataIndex: 'createTime',
      key: '7',
      width: 200,
      render: val => <span>{moment(val).format('YYYY-MM-DD HH:mm:ss')}</span>,
    },
    {
      title: '状态',
      dataIndex: 'status',
      key: '8',
      width: 150,
      render: val =>{
        if(val === 0){
          return '待审核'
        }
        else if(val === 1){
          return '审核通过'
        }
        else if(val === 2){
          return '审核失败'
        }
      }
    },
    {
      title: '审核人',
      dataIndex: 'auditorName',
      key: '9',
      width: 150,
    },
    {
      title: '审核时间',
      dataIndex: 'auditTime',
      key: '10',
      width: 200,
      render: val => <span>{moment(val).format('YYYY-MM-DD HH:mm:ss')}</span>,
    },

    {
      title: '操作',
      fixed: 'right',
      width: 200,
      render: (text, record) => {
        if(record.status === 1){
          return(
            <Fragment>
              <a onClick={() => this.handleScanModalVisible(true, record)}>查看</a>
              <Divider type="vertical"/>
              <a onClick={() => this.handleDelete(record)}>删除</a>
            </Fragment>
          )
        }
        else {
          return(
            <Fragment>
              <a onClick={() => this.handleScanModalVisible(true, record)}>查看</a>
              <Divider type="vertical"/>
              <a onClick={() => this.handleDelete(record)}>删除</a>
              <Divider type="vertical"/>
              <a onClick={() => this.handleCheckModalVisible(true, record)}>审核</a>
              <Divider type="vertical"/>
              <a onClick={() => window.location.href = "/operation/out/edit?id="+record.id+""}>编辑</a>
            </Fragment>
          )
        }
      }
    },
  ];

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'outStorage/fetch',
    });
    dispatch({
      type: 'outStorage/fetchType',
    });
  }

  handleStandardTableChange = (pagination, filtersArg, sorter) => {
    const { dispatch } = this.props;
    const { formValues } = this.state;
    const filters = Object.keys(filtersArg).reduce((obj, key) => {
      const newObj = { ...obj };
      newObj[key] = getValue(filtersArg[key]);
      return newObj;
    }, {});
    const params = {
      currentPage: pagination.current,
      pageSize: pagination.pageSize,
      ...formValues,
      ...filters,
    };
    if (sorter.field) {
      params.sorter = `${sorter.field}_${sorter.order}`;
    }

    dispatch({
      type: 'outStorage/fetch',
      payload: params,
    });
  };

  previewItem = id => {
    router.push(`/profile/basic/${id}`);
  };

  handleFormReset = () => {
    const { form, dispatch } = this.props;
    form.resetFields();
    this.setState({
      formValues: {},
    });
    dispatch({
      type: 'outStorage/fetch',
      payload: {},
    });
  };

  toggleForm = () => {
    const { expandForm } = this.state;
    this.setState({
      expandForm: !expandForm,
    });
  };

  handleMenuClick = e => {
    const { dispatch } = this.props;
    const { selectedRows } = this.state;
    if (selectedRows.length === 0) return;
    switch (e.key) {
      case 'batchRemove':
        this.confirm({
          title: '您确定要删除这些记录吗?',
          okText: '确定',
          okType: 'danger',
          cancelText: '取消',
          onOk:() => {
            Modal.destroyAll();
            console.log('确定');
            dispatch({
              type: 'outStorage/batchRemove',
              payload: {
                ids: selectedRows.map(row => row.id),
              },
              callback: (response) => {
                const { ret , msg } = response
                if(ret === 1){
                  if(msg === 'error') {
                    message.error('删除失败');
                  }
                  else {
                    message.error(msg);
                  }
                }else {
                  this.setState({
                    selectedRows: [],
                  });
                  this.handleFormReset();
                  if(msg === 'success') {
                    message.success('删除成功');
                  }
                  else {
                    message.success(msg);
                  }
                }
              },
            });
          },
          onCancel() {
            console.log('取消');
          },
        });
        break;
      default:
        break;
    }
  };

  handleSelectRows = rows => {
    this.setState({
      selectedRows: rows,
    });
  };

  handleSearch = e => {
    e.preventDefault();

    const { dispatch, form } = this.props;

    form.validateFields((err, fieldsValue) => {
      if (err) return;

      const values = {
        ...fieldsValue,
        updatedAt: fieldsValue.updatedAt && fieldsValue.updatedAt.valueOf(),
      };

      this.setState({
        formValues: values,
      });

      dispatch({
        type: 'outStorage/fetch',
        payload: values,
      });
    });
  };

  handleModalVisible = (flag) => {
    this.setState({
      modalVisible: !!flag,
    });
  };

  handleScanModalVisible = (flag, record) => {
    this.setState({
      scanModalVisible: !!flag,
      stepFormValues: record || {},
    });
  };

  handleCheckModalVisible = (flag, record) => {
    this.setState({
      checkModalVisible: !!flag,
      stepFormValues: record || {},
    });
  };

  handleAdd = fields => {
    const { dispatch } = this.props;
    dispatch({
      type: 'outStorage/add',
      payload: {
        matnr:fields.matnr,
        zsatnr:fields.zsatnr,
        color: fields.color,
        spec: fields.spec,
        charg: fields.charg,
        barcd: fields.barcd,
        barcdAdd: fields.barcdAdd,
        rfidEpc: fields.rfidEpc,
        rfidAddEpc: fields.rfidAddEpc,
        inboundIdentity: fields.inboundIdentity,
        pxQtySh: fields.pxQtySh,
        pxQtyFh: fields.pxQtyFh,
        lifnr: fields.lifnr,
        goodsPackag: fields.goodsPackag,
        deliveryPackag: fields.deliveryPackag,
        brgew: fields.brgew,
        productType: fields.productType,
      },
      callback: (response) => {
        const { ret , msg } = response
        if(ret === 1){
          if(msg === 'error') {
            message.error('新增失败');
          }
          else {
            message.error(msg);
          }
        }else {
          this.handleFormReset();
          if(msg === 'success') {
            message.success('新增成功');
          }
          else {
            message.success(msg);
          }
        }
      },
    });
    this.handleModalVisible();
  };

  handleScan = () => {
    window.document.body.innerHTML = window.document.getElementById('print').innerHTML;
    window.print();
    window.location.reload();
  };

  handleCheck = (fields,p) => {
    const { dispatch } = this.props;
    dispatch({
      type: 'outStorage/check',
      payload: {
        id:fields.id,
        status:p,
      },
      callback: (response) => {
        const { ret , msg } = response
        if(ret === 1){
          if(msg === 'error') {
            message.error('审核状态修改失败');
          }
          else {
            message.error(msg);
          }
        }else {
          this.handleFormReset();
          if(msg === 'success') {
            message.success('审核状态修改成功');
          }
          else {
            message.success(msg);
          }
        }
      },
    });
    this.handleCheckModalVisible();
  };


  handleDelete(record) {
    const { dispatch } = this.props;
    this.confirm({
      title: '您确定要删除这条记录吗?',
      okText: '确定',
      okType: 'danger',
      cancelText: '取消',
      onOk:() => {
        console.log('OK');
        dispatch({
          type: 'outStorage/remove',
          payload: {
            id: record.id,
          },
          callback: (response) => {
            const { ret , msg } = response
            if(ret === 1){
              if(msg === 'error') {
                message.error('删除失败');
              }
              else {
                message.error(msg);
              }
            }else {
              this.handleFormReset();
              if(msg === 'success') {
                message.success('删除成功');
              }
              else {
                message.success(msg);
              }
            }
          },
        });
      },
      onCancel() {
        console.log('Cancel');
      },
    });
  }

  renderSimpleForm() {
    const {
      form: { getFieldDecorator },
    } = this.props;
    return (
      <Form onSubmit={this.handleSearch} layout="inline">
        <Row gutter={{ md: 8, lg: 24, xl: 48 }}>
          <Col md={8} sm={24}>
            <FormItem label="单号">
              {getFieldDecorator('number')(<Input placeholder="请输入" />)}
            </FormItem>
          </Col>
          <Col md={8} sm={24}>
            <FormItem label="客户名称">
              {getFieldDecorator('clientName')(<Input placeholder="请输入" />)}
            </FormItem>
          </Col>
          <Col md={8} sm={24}>
            <span className={styles.submitButtons}>
              <Button type="primary" htmlType="submit">
                查询
              </Button>
              <Button style={{ marginLeft: 8 }} onClick={this.handleFormReset}>
                重置
              </Button>
              <a style={{ marginLeft: 8 }} onClick={this.toggleForm}>
                展开 <Icon type="down" />
              </a>
            </span>
          </Col>
        </Row>
      </Form>
    );
  }

  renderAdvancedForm() {
    const {
      form: { getFieldDecorator },
    } = this.props;
    return (
      <Form onSubmit={this.handleSearch} layout="inline">
        <Row gutter={{ md: 8, lg: 24, xl: 48 }}>
          <Col md={8} sm={24}>
            <FormItem label="单号">
              {getFieldDecorator('number')(<Input placeholder="请输入" />)}
            </FormItem>
          </Col>
          <Col md={8} sm={24}>
            <FormItem label="客户名称">
              {getFieldDecorator('clientName')(<Input placeholder="请输入" />)}
            </FormItem>
          </Col>
          <Col md={8} sm={24}>
            <FormItem label="单据类型">
              {getFieldDecorator('outType')(
                <Select placeholder="请选择" style={{ width: '100%' }}>
                  {
                    (this.props.outStorage.type.list || []).map((item,index)=>{
                      return <Option key={index} value={item.id}>{item.name}</Option>
                    })
                  }
                </Select>
              )}
            </FormItem>
          </Col>
          <Col md={8} sm={24}>
            <FormItem label="状态">
              {getFieldDecorator('status')(
                <Select placeholder="请选择" style={{ width: '100%' }}>
                  <Option value={0}>待审核</Option>
                  <Option value={1}>审核通过</Option>
                  <Option value={2}>审核失败</Option>
                </Select>
              )}
            </FormItem>
          </Col>
          <Col md={8} sm={24}>
            <span className={styles.submitButtons}>
              <Button type="primary" htmlType="submit">
                查询
              </Button>
              <Button style={{ marginLeft: 8 }} onClick={this.handleFormReset}>
                重置
              </Button>
              <a style={{ marginLeft: 8 }} onClick={this.toggleForm}>
                收起 <Icon type="up" />
              </a>
            </span>
          </Col>
        </Row>
      </Form>
    );
  }

  renderForm() {
    const { expandForm } = this.state;
    return expandForm ? this.renderAdvancedForm() : this.renderSimpleForm();
  }

  render() {
    const {
      outStorage: { data },
      loading,
    } = this.props;
    const { selectedRows, modalVisible, scanModalVisible, checkModalVisible, stepFormValues } = this.state;
    const menu = (
      <Menu onClick={this.handleMenuClick} selectedKeys={[]}>
        <Menu.Item key="batchRemove">批量删除</Menu.Item>
      </Menu>
    );
    const parentMethods = {
      handleAdd: this.handleAdd,
      handleModalVisible: this.handleModalVisible,
    };
    const scanMethods = {
      handleScanModalVisible: this.handleScanModalVisible,
      handleScan: this.handleScan,
    };
    const checkMethods = {
      handleCheckModalVisible: this.handleCheckModalVisible,
      handleCheck: this.handleCheck,
    };
    return (
      <PageHeaderWrapper title="出库管理">
        <Card bordered={false}>
          <div className={styles.tableList}>
            <div className={styles.tableListForm}>{this.renderForm()}</div>
            <div className={styles.tableListOperator}>
              <Button icon="plus" type="primary" onClick={() => window.location.href = "/operation/out/add"}>
                新建
              </Button>
              {selectedRows.length > 0 && (
                <span>
                  <Dropdown overlay={menu}>
                    <Button>
                      批量操作 <Icon type="down" />
                    </Button>
                  </Dropdown>
                </span>
              )}
            </div>
            <StandardTable
              selectedRows={selectedRows}
              rowKey={record => record.id}
              loading={loading}
              data={data}
              columns={this.columns}
              onSelectRow={this.handleSelectRows}
              onChange={this.handleStandardTableChange}
              scroll={{ x: 2100}}
              mountNode
            />
          </div>
        </Card>
        <CreateForm {...parentMethods} modalVisible={modalVisible} />
        {stepFormValues && Object.keys(stepFormValues).length ? (
          <ScanForm{...scanMethods} scanModalVisible={scanModalVisible} values={stepFormValues}/>
        ) : null}
        {stepFormValues && Object.keys(stepFormValues).length ? (
          <CheckForm{...checkMethods} checkModalVisible={checkModalVisible} values={stepFormValues}/>
        ) : null}
      </PageHeaderWrapper>
    );
  }
}

export default TableList;
