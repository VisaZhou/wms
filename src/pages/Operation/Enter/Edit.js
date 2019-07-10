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
  DatePicker,
  Modal,
  message,
  Divider, Table,
} from 'antd';
import StandardTable from '@/components/StandardTable';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import styles from './Edit.less';

const FormItem = Form.Item;
const { Option } = Select;
const getValue = obj =>
  Object.keys(obj)
    .map(key => obj[key])
    .join(',');


@connect(({ inStorageEdit, loading }) => ({
  inStorageEdit,
  loading: loading.models.inStorageEdit,
}))
@Form.create()
class CreateForm extends PureComponent {
  state = {
    visible: false,
    confirmLoading: false,
  };

  static defaultProps = {
    handleAdd: () => {},
    handleModalVisible: () => {},
    values: {},
  };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleCancel = () => {
    console.log('Clicked cancel button');
    this.setState({
      visible: false,
    });
  };

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'inStorageEdit/fetchProduct',
    });
  }

  constructor(props) {
    super(props);
    this.formLayout = {
      labelCol: { span: 7 },
      wrapperCol: { span: 13 },
    };
  }

  renderContent = () => {
    const { form } = this.props;
    const { visible, confirmLoading } = this.state;
    return [
      <FormItem key="matnr2" labelCol={{ span: 5 }} wrapperCol={{ span: 15 }} label="SKU">
        {form.getFieldDecorator('matnr2', {
        })(<Input placeholder="点击以选择" readOnly style={{backgroundColor:'#f5f5f5'}} onClick={this.showModal}/>)}
      </FormItem>,
      <FormItem key="zsatnr2" labelCol={{ span: 5 }} wrapperCol={{ span: 15 }} label="品号">
        {form.getFieldDecorator('zsatnr2', {
        })(<Input disabled/>)}
      </FormItem>,
      <FormItem key="color2" labelCol={{ span: 5 }} wrapperCol={{ span: 15 }} label="色号">
        {form.getFieldDecorator('color2', {
        })(<Input disabled/>)}
      </FormItem>,
      <FormItem key="spec2" labelCol={{ span: 5 }} wrapperCol={{ span: 15 }} label="规格">
        {form.getFieldDecorator('spec2', {
        })(<Input disabled/>)}
      </FormItem>,
      <FormItem key="charg2" labelCol={{ span: 5 }} wrapperCol={{ span: 15 }} label="批次">
        {form.getFieldDecorator('charg2', {
        })(<Input disabled/>)}
      </FormItem>,
      <FormItem key="bookAmount2" labelCol={{ span: 5 }} wrapperCol={{ span: 15 }} label="数量">
        {form.getFieldDecorator('bookAmount2', {
        })(<Input placeholder="请输入数量" />)}
      </FormItem>,
      <FormItem key="productionId2" labelCol={{ span: 5 }} wrapperCol={{ span: 15 }}>
        {form.getFieldDecorator('productionId2', {
        })(<Input hidden/>)}
      </FormItem>,
      <Modal
        width={1000}
        bodyStyle={{ padding: '32px 40px 48px' }}
        destroyOnClose
        title="选择产品"
        visible={visible}
        confirmLoading={confirmLoading}
        onCancel={this.handleCancel}
        footer={this.renderProductFooter()}
      >
        {this.renderProductContent()}
      </Modal>
    ];
  };

  handleProductEntry = fields => {
    const {form:{setFieldsValue} } = this.props;
    setFieldsValue({
      "matnr2": fields.matnr
    });
    setFieldsValue({
      "zsatnr2": fields.zsatnr
    });
    setFieldsValue({
      "color2": fields.color
    });
    setFieldsValue({
      "spec2": fields.spec
    });
    setFieldsValue({
      "charg2": fields.charg
    });
    setFieldsValue({
      "productionId2": fields.id
    });
    this.handleCancel();
  };

  renderProductFooter = () => {
    return [
      <Button key="cancel" onClick={() => this.handleCancel()}>
        关闭
      </Button>,
    ];
  };

  renderProductContent = () => {
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
        title: '操作',
        render: (text, record) => (
          <Fragment>
            <a onClick={() => this.handleProductEntry(record)}>选择</a>
          </Fragment>
        ),
      },
    ];
    const data = this.props.inStorageEdit.product.list;
    const { form } = this.props;
    return (
      <div className={styles.tableListForm}>
        <Form onSubmit={this.handleProductSearch} layout="inline">
          <Row gutter={{ md: 8, lg: 24, xl: 48 }}>
            <Col span={7}>
              <FormItem key="matnr" labelCol={{ span: 5 }} wrapperCol={{ span: 15 }} label="SKU">
                {form.getFieldDecorator('matnr', {
                })(<Input placeholder="请输入" />)}
              </FormItem>
            </Col>
            <Col span={7}>
              <FormItem key="zsatnr" labelCol={{ span: 5 }} wrapperCol={{ span: 15 }} label="品号">
                {form.getFieldDecorator('zsatnr', {
                })(<Input placeholder="请输入" />)}
              </FormItem>
            </Col>
            <Col span={7}>
              <FormItem key="color" labelCol={{ span: 5 }} wrapperCol={{ span: 15 }} label="色号">
                {form.getFieldDecorator('color', {
                })(<Input placeholder="请输入" />)}
              </FormItem>
            </Col>
            <Col span={3}>
              <Button type="primary" htmlType="submit">
                查询
              </Button>
            </Col>
          </Row>
          <Table columns={columns}
                 dataSource={data}
                 size="middle" />
        </Form>
      </div>
    );
  };

  handleProductSearch = e => {
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
        type: 'inStorageEdit/fetchProduct',
        payload: values,
      });
    });
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
        title="新增产品"
        visible={modalVisible}
        onOk={this.okHandle}
        onCancel={() => handleModalVisible()}
      >
        {this.renderContent()}
      </Modal>
    );
  }
}


@connect(({ inStorageEdit, loading }) => ({
  inStorageEdit,
  loading: loading.models.inStorageEdit,
}))
@Form.create()
class PickForm extends PureComponent {
  static defaultProps = {
    handlePickEntry: () => {},
    handlePickModalVisible: () => {},
    values: {},
  };

  constructor(props) {
    super(props);
    this.formLayout = {
      labelCol: { span: 7 },
      wrapperCol: { span: 13 },
    };
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'inStorageEdit/fetchSupplier',
    });
  }

  renderContent = () => {
    const columns = [
      {
        title: '编号',
        dataIndex: 'number',
      },
      {
        title: '名称',
        dataIndex: 'name',
      },
      {
        title: '联系人',
        dataIndex: 'contact',
      },
      {
        title: '电话',
        dataIndex: 'phone',
      },
      {
        title: '传真',
        dataIndex: 'fax',
      },
      {
        title: 'Email',
        dataIndex: 'email',
      },
      {
        title: '地址',
        dataIndex: 'address',
      },
      {
        title: '操作',
        render: (text, record) => (
          <Fragment>
            <a onClick={() => this.handlePick(record)}>选择</a>
          </Fragment>
        ),
      },
    ];
    const data = this.props.inStorageEdit.supplier.list;
    const { form } = this.props;
    return (
      <div className={styles.tableListForm}>
        <Form onSubmit={this.handlePickSearch} layout="inline">
          <Row gutter={{ md: 8, lg: 24, xl: 48 }}>
            <Col span={10}>
              <FormItem key="number" labelCol={{ span: 5 }} wrapperCol={{ span: 15 }} label="供应商编号">
                {form.getFieldDecorator('number', {
                })(<Input placeholder="请输入" />)}
              </FormItem>
            </Col>
            <Col span={10}>
              <FormItem key="name" labelCol={{ span: 5 }} wrapperCol={{ span: 15 }} label="供应商名称">
                {form.getFieldDecorator('name', {
                })(<Input placeholder="请输入" />)}
              </FormItem>
            </Col>
            <Col span={4}>
              <Button type="primary" htmlType="submit">
                查询
              </Button>
            </Col>
          </Row>
          <Table columns={columns} dataSource={data} size="middle" />
        </Form>
      </div>
    );
  };

  handlePickSearch = e => {
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
        type: 'inStorageEdit/fetchSupplier',
        payload: values,
      });
    });
  };

  handlePick = record => {
    const { form, handlePickEntry } = this.props;
    form.resetFields();
    handlePickEntry(record);
  };

  renderPickFooter = () => {
    const { handlePickModalVisible, values } = this.props;
    return [
      <Button key="cancel" onClick={() => handlePickModalVisible(false, values)}>
        关闭
      </Button>,
    ];
  };

  render() {
    const { pickVisible, handlePickModalVisible } = this.props;
    return (
      <Modal
        width={1000}
        bodyStyle={{ padding: '32px 40px 48px' }}
        destroyOnClose
        title="供应商选择"
        visible={pickVisible}
        onCancel={() => handlePickModalVisible()}
        footer={this.renderPickFooter()}
        afterClose={() => handlePickModalVisible()}
      >
        {this.renderContent()}
      </Modal>
    );
  }
}

@Form.create()
class UpdateForm extends PureComponent {
  static defaultProps = {
    handleUpdate: () => {},
    handleUpdateModalVisible: () => {},
    values: {},
  };

  constructor(props) {
    super(props);
    this.state = {
      formVals: {
        productionId: props.values.productionId,
        matnr: props.values.matnr,
        zsatnr: props.values.zsatnr,
        color: props.values.color,
        spec: props.values.spec,
        charg: props.values.charg,
        bookAmount: props.values.bookAmount,
      },
    };
    this.formLayout = {
      labelCol: { span: 7 },
      wrapperCol: { span: 13 },
    };
  }

  handleEdit = () => {
    const { form, handleUpdate } = this.props;
    const { formVals: oldValue } = this.state;
    form.validateFields((err, fieldsValue) => {
      if (err) return;
      const formVals = { ...oldValue, ...fieldsValue };
      this.setState(
        {
          formVals,
        },
        () => {
          handleUpdate(formVals);
        }
      );
    });
  };

  renderContent = formVals => {
    const { form } = this.props;
    return [
      <FormItem key="matnr" labelCol={{ span: 5 }} wrapperCol={{ span: 15 }} label="SKU">
        {form.getFieldDecorator('matnr', {
          initialValue: formVals.matnr,
        })(<Input placeholder="点击以选择" readOnly style={{backgroundColor:'#f5f5f5'}} onClick={this.showModal}/>)}
      </FormItem>,
      <FormItem key="zsatnr" labelCol={{ span: 5 }} wrapperCol={{ span: 15 }} label="品号">
        {form.getFieldDecorator('zsatnr', {
          initialValue: formVals.zsatnr,
        })(<Input disabled/>)}
      </FormItem>,
      <FormItem key="color" labelCol={{ span: 5 }} wrapperCol={{ span: 15 }} label="色号">
        {form.getFieldDecorator('color', {
          initialValue: formVals.color,
        })(<Input disabled/>)}
      </FormItem>,
      <FormItem key="spec" labelCol={{ span: 5 }} wrapperCol={{ span: 15 }} label="规格">
        {form.getFieldDecorator('spec', {
          initialValue: formVals.spec,
        })(<Input disabled/>)}
      </FormItem>,
      <FormItem key="charg" labelCol={{ span: 5 }} wrapperCol={{ span: 15 }} label="批次">
        {form.getFieldDecorator('charg', {
          initialValue: formVals.charg,
        })(<Input disabled/>)}
      </FormItem>,
      <FormItem key="bookAmount" labelCol={{ span: 5 }} wrapperCol={{ span: 15 }} label="数量">
        {form.getFieldDecorator('bookAmount', {
          initialValue: formVals.bookAmount,
        })(<Input placeholder="请输入数量" />)}
      </FormItem>,
      <FormItem key="productionId" labelCol={{ span: 5 }} wrapperCol={{ span: 15 }}>
        {form.getFieldDecorator('productionId', {
          initialValue: formVals.productionId,
        })(<Input hidden/>)}
      </FormItem>,
    ];
  };

  renderFooter = () => {
    const { handleUpdateModalVisible, values } = this.props;
    return [
      <Button key="cancel" onClick={() => handleUpdateModalVisible(false, values)}>
        取消
      </Button>,
      <Button key="submit" type="primary" onClick={() => this.handleEdit()}>
        确定
      </Button>,
    ];
  };

  render() {
    const { updateModalVisible, handleUpdateModalVisible, values } = this.props;
    const { formVals } = this.state;
    return (
      <Modal
        width={640}
        bodyStyle={{ padding: '32px 40px 48px' }}
        destroyOnClose
        title="编辑产品"
        visible={updateModalVisible}
        footer={this.renderFooter()}
        onCancel={() => handleUpdateModalVisible(false, values)}
        afterClose={() => handleUpdateModalVisible()}
      >
        {this.renderContent(formVals)}
      </Modal>
    );
  }
}

@connect(({ inStorageEdit, loading }) => ({
  inStorageEdit,
  loading: loading.models.inStorageEdit,
}))
@Form.create()
class TableList extends PureComponent {
  confirm  = Modal.confirm;
  state = {
    modalVisible: false,
    pickVisible: false,
    updateModalVisible: false,
    expandForm: false,
    selectedRows: [],
    formValues: {},
    stepFormValues: {},
  };
  dataSource = [];
  columns = [
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
      title: '入库数',
      dataIndex: 'bookAmount',
    },
    {
      title: '操作',
      render: (text, record) => (
        <Fragment>
          <a onClick={() => this.handleUpdateModalVisible(true, record)}>编辑</a>
          <Divider type="vertical" />
          <a onClick={() => this.handleDelete(record)}>删除</a>
        </Fragment>
      ),
    },
  ];

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'inStorageEdit/fetchType',
    });
    dispatch({
      type: 'inStorageEdit/fetchWarehouse',
    });
    dispatch({
      type: 'inStorageEdit/fetchSupplier',
    });
    dispatch({
      type:'inStorageEdit/fetchScanAndCheck',
      payload:{
        id: this.props.location.query.id
      }
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
      type: 'inStorageEdit/fetchScanAndCheck',
      payload:{
        id: this.props.location.query.id
      }
    });
  };

  previewItem = id => {
    router.push(`/profile/basic/${id}`);
  };

  handleFormReset = () => {
    const { form} = this.props;
    form.resetFields();
    this.setState({
      formValues: {},
    });
  };

  toggleForm = () => {
    const { expandForm } = this.state;
    this.setState({
      expandForm: !expandForm,
    });
  };

  handleMenuClick = e => {
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
            selectedRows.map((item2) =>{
              (this.dataSource || []).map((item,index)=> {
                  if(item.productionId === item2.productionId ){
                    this.dataSource.splice(index,1);
                  }
                }
              )
            });
            this.setState({formValues: {},})
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

  handleModalVisible = (flag) => {
    this.setState({
      modalVisible: !!flag,
    });
  };

  handlePickModalVisible = (flag) => {
    this.setState({
      pickVisible: !!flag,
    });
  };

  handleUpdateModalVisible = (flag, record) => {
    this.setState({
      updateModalVisible: !!flag,
      stepFormValues: record || {},
    });
  };

  handleAdd = fields => {
    const map = {
      "matnr": fields.matnr2,
      "zsatnr": fields.zsatnr2,
      "color": fields.color2,
      "spec": fields.spec2,
      "charg": fields.charg2,
      "bookAmount": fields.bookAmount2,
      "productionId": fields.productionId2,
    };
    this.dataSource.push(map);
    this.handleModalVisible();
  };


  handlePickEntry = fields => {
    const {form:{setFieldsValue} } = this.props;
    setFieldsValue({
      "supplierNumber": fields.number
    });
    setFieldsValue({
      "supplierName": fields.name
    });
    setFieldsValue({
      "supplierContact": fields.contact
    });
    setFieldsValue({
      "supplierPhone": fields.phone
    });
    setFieldsValue({
      "supplierId": fields.id
    });
    this.handlePickModalVisible();
  };

  handleUpdate = fields => {
    const id = fields.productionId;
    const map = {
      "matnr": fields.matnr,
      "zsatnr": fields.zsatnr,
      "color": fields.color,
      "spec": fields.spec,
      "charg": fields.charg,
      "bookAmount": fields.bookAmount,
      "productionId": fields.productionId,
    };
    (this.dataSource || []).map((item,index)=> {
      if(item.productionId === id ){
        this.dataSource.splice(index,1,map);
      }
    });

    this.handleUpdateModalVisible();
  };

  handleDelete(record) {
    const id = record.productionId;
    this.confirm({
      title: '您确定要删除这条记录吗?',
      okText: '确定',
      okType: 'danger',
      cancelText: '取消',
      onOk:() => {
        (this.dataSource || []).map((item,index)=> {
          if(item.productionId === id ){
            this.dataSource.splice(index,1);
            this.setState({formValues: {},})
          }
        });
      },
      onCancel() {
        console.log('Cancel');
      },
    });
  }

  handleSave() {
    const {dispatch,form } = this.props;
    dispatch({
      type: 'inStorageEdit/update',
      payload: {
        id:form.getFieldValue("id"),
        number:form.getFieldValue("number"),
        inType: form.getFieldValue('inType'),
        correlativeOrder: form.getFieldValue('correlativeOrder'),
        creator: form.getFieldValue('creator'),
        supplierId: form.getFieldValue('supplierId'),
        createTime: form.getFieldValue('createTime'),
        storageId: form.getFieldValue('storageId'),
        remark: form.getFieldValue('remark'),
        dataSource: this.dataSource,
      },
      callback: (response) => {
        const {ret, msg} = response;
        if (ret === 1) {
          if (msg === 'error') {
            message.error('添加失败');
          } else {
            message.error(msg);
          }
        } else {
          this.handleFormReset();
          if (msg === 'success') {
            message.success('添加成功');
          } else {
            message.success(msg);
          }
        }
      },
    });
    router.push({
      pathname: '/operation/enter/administration',
    });
  }

  renderSimpleForm() {
    const {
      form: { getFieldDecorator },
    } = this.props;
    const appoint = {};
    (this.props.inStorageEdit.supplier.list || []).map((item,index)=>{
      if(item.id === this.props.inStorageEdit.scanAndCheck.data.supplierId){
        appoint.supplierNumber = item.number;
        appoint.supplierName = item.name;
        appoint.supplierContact = item.contact;
        appoint.supplierPhone = item.phone;
      }
    });
    return (
      <Form layout="inline">
        <Row gutter={{ md: 8, lg: 24, xl: 48 }}>
          <Col md={8} sm={24}>
            <FormItem label="入库单编号">
              {getFieldDecorator('number',{
                 initialValue: this.props.inStorageEdit.scanAndCheck.data.number,
              })(<Input disabled/>)}
            </FormItem>
          </Col>
          <Col md={8} sm={24}>
            <FormItem label="单据类型">
              {getFieldDecorator('inType',{
                 initialValue: this.props.inStorageEdit.scanAndCheck.data.inType,
              })(
                <Select placeholder="请选择" style={{ width: '100%' }}>
                  {
                    (this.props.inStorageEdit.type.list || []).map((item,index)=>{
                      return <Option key={index} value={item.id}>{item.name}</Option>
                    })
                  }
                </Select>
              )}
            </FormItem>
          </Col>
          <Col md={8} sm={24}>
            <FormItem label="关联订单号">
              {getFieldDecorator('correlativeOrder',{
                 initialValue: this.props.inStorageEdit.scanAndCheck.data.correlativeOrder,
              })(<Input placeholder="请输入" />)}
            </FormItem>
          </Col>
          <Col md={8} sm={24}>
            <FormItem label="制单人">
              {getFieldDecorator('creator',{
                 initialValue: this.props.inStorageEdit.scanAndCheck.data.creatorName,
              })(<Input disabled />)}
            </FormItem>
          </Col>
          <Col md={8} sm={24}>
            <FormItem label="供应商编号">
              {getFieldDecorator('supplierNumber',{
                initialValue: appoint.supplierNumber,
              })(<Input placeholder="点击以选择" onClick={() => this.handlePickModalVisible(true)} readOnly
                                                          style={{backgroundColor:'#f5f5f5'}}/>)}
            </FormItem>
          </Col>
          <Col md={8} sm={24}>
            <FormItem label="供应商名称">
              {getFieldDecorator('supplierName',{
                initialValue: appoint.supplierName,
              })(<Input disabled />)}
            </FormItem>
          </Col>
          <Col md={8} sm={24}>
            <FormItem label="供应商联系人">
              {getFieldDecorator('supplierContact',{
                initialValue: appoint.supplierContact,
              })(<Input disabled/>)}
            </FormItem>
          </Col>
          <Col md={8} sm={24}>
            <FormItem label="联系人电话">
              {getFieldDecorator('supplierPhone',{
                initialValue: appoint.supplierPhone,
              })(<Input disabled />)}
            </FormItem>
          </Col>
          <FormItem>
            {getFieldDecorator('supplierId',{
               initialValue: this.props.inStorageEdit.scanAndCheck.data.supplierId,
              })(<Input hidden/>)}
          </FormItem>
          <FormItem>
            {getFieldDecorator('id',{
              initialValue: this.props.location.query.id,
            })(<Input hidden/>)}
          </FormItem>
          <Col md={8} sm={24}>
            <FormItem label="制单时间">
              {getFieldDecorator('createTime')
              (<DatePicker placeholder={moment(this.props.inStorageEdit.scanAndCheck.data.createTime).format("YYYY-MM-DD")}  />)}
            </FormItem>
          </Col>
          <Col md={8} sm={24}>
            <FormItem label="入库仓库">
              {getFieldDecorator('storageId',{
                 initialValue: this.props.inStorageEdit.scanAndCheck.data.storageId,
              })(
                <Select placeholder="请选择" style={{ width: '100%' }}>
                  {
                    (this.props.inStorageEdit.warehouse.list || []).map((item,index)=>{
                      return <Option key={index} value={item.id}>{item.name}</Option>
                    })
                  }
                </Select>
              )}
            </FormItem>
          </Col>
          <Col md={8} sm={24}>
            <FormItem label="备注">
              {getFieldDecorator('remark',{
                 initialValue: this.props.inStorageEdit.scanAndCheck.data.remark,
              })(<Input placeholder="请输入" />)}
            </FormItem>
          </Col>
          <Col md={8} sm={24}>
            <span className={styles.submitButtons}>
              <Button key="submit" type="primary" onClick={() => this.handleSave()}>
                保存
              </Button>
              <Button style={{ marginLeft: 8 }} onClick={() => window.location.href = "/operation/enter/administration"}>
                取消
              </Button>
            </span>
          </Col>
        </Row>
      </Form>
    );
  }

  renderForm() {
    return this.renderSimpleForm();
  }

  render() {
    const {
       inStorageEdit: { scanAndCheck },
      loading,
    } = this.props;
    this.dataSource = scanAndCheck.list;
    const { selectedRows, modalVisible, pickVisible, updateModalVisible, stepFormValues } = this.state;
    const menu = (
      <Menu onClick={this.handleMenuClick} selectedKeys={[]}>
        <Menu.Item key="batchRemove">批量删除</Menu.Item>
      </Menu>
    );
    const parentMethods = {
      handleAdd: this.handleAdd,
      handleModalVisible: this.handleModalVisible,
    };
    const pickMethods = {
      handlePickEntry: this.handlePickEntry,
      handlePickModalVisible: this.handlePickModalVisible,
    };
    const updateMethods = {
      handleUpdateModalVisible: this.handleUpdateModalVisible,
      handleUpdate: this.handleUpdate,
    };
    return (
      <PageHeaderWrapper title="编辑入库单">
        <Card bordered={false}>
          <div className={styles.tableList}>
            <div className={styles.tableListForm}>{this.renderForm()}</div>
            <div className={styles.tableListOperator}>
              <Button icon="plus" type="primary" onClick={() => this.handleModalVisible(true)}>
                添加产品
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
              rowKey={record => record.productionId}
              loading={loading}
              dataSource={this.dataSource}
              columns={this.columns}
              onSelectRow={this.handleSelectRows}
              onChange={this.handleStandardTableChange}
            />
          </div>
        </Card>
        <PickForm {...pickMethods} pickVisible={pickVisible} />
        <CreateForm {...parentMethods} modalVisible={modalVisible} />
        {stepFormValues && Object.keys(stepFormValues).length ? (
          <UpdateForm
            {...updateMethods}
            updateModalVisible={updateModalVisible}
            values={stepFormValues}
          />
        ) : null}
      </PageHeaderWrapper>
    );
  }
}

export default TableList;
