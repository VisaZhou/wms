
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
} from 'antd';
import StandardTable from '@/components/StandardTable';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import styles from './Product.less';

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
        id: props.values.id,
        matnr:props.values.matnr,
        zsatnr:props.values.zsatnr,
        color: props.values.color,
        spec: props.values.spec,
        charg: props.values.charg,
        barcd: props.values.barcd,
        barcdAdd: props.values.barcdAdd,
        rfidEpc: props.values.rfidEpc,
        rfidAddEpc: props.values.rfidAddEpc,
        inboundIdentity: props.values.inboundIdentity,
        pxQtySh: props.values.pxQtySh,
        pxQtyFh: props.values.pxQtyFh,
        lifnr: props.values.lifnr,
        goodsPackag: props.values.goodsPackag,
        deliveryPackag: props.values.deliveryPackag,
        brgew: props.values.brgew,
        productType: props.values.productType,
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
    form.layout = 'inline';
    return [
      <div className={styles.tableListForm}>
        <Row gutter={{ md: 8, lg: 24, xl: 48 }}>
          <Col span={12}>
            <FormItem key="matnr" labelCol={{ span: 5 }} wrapperCol={{ span: 15 }} label="sku">
              {form.getFieldDecorator('matnr', {
                initialValue: formVals.matnr,
              })(<Input placeholder="请输入" />)}
            </FormItem>
          </Col>
          <Col span={12}>
            <FormItem key="zsatnr" labelCol={{ span: 5 }} wrapperCol={{ span: 15 }} label="品号">
              {form.getFieldDecorator('zsatnr', {
                initialValue: formVals.zsatnr,
              })(<Input placeholder="请输入" />)}
            </FormItem>
          </Col>
          <Col span={12}>
            <FormItem key="color" labelCol={{ span: 5 }} wrapperCol={{ span: 15 }} label="色号">
              {form.getFieldDecorator('color', {
                initialValue: formVals.color,
              })(<Input placeholder="请输入" />)}
            </FormItem>
          </Col>
          <Col span={12}>
            <FormItem key="spec" labelCol={{ span: 5 }} wrapperCol={{ span: 15 }} label="规格">
              {form.getFieldDecorator('spec', {
                initialValue: formVals.spec,
              })(<Input placeholder="请输入" />)}
            </FormItem>
          </Col>
          <Col span={12}>
            <FormItem key="charg" labelCol={{ span: 5 }} wrapperCol={{ span: 15 }} label="批次">
              {form.getFieldDecorator('charg', {
                initialValue: formVals.charg,
              })(<Input placeholder="请输入" />)}
            </FormItem>
          </Col>
          <Col span={12}>
            <FormItem key="barcd" labelCol={{ span: 5 }} wrapperCol={{ span: 15 }} label="主条码">
              {form.getFieldDecorator('barcd', {
                initialValue: formVals.barcd,
              })(<Input placeholder="请输入" />)}
            </FormItem>
          </Col>
          <Col span={12}>
            <FormItem key="barcdAdd" labelCol={{ span: 5 }} wrapperCol={{ span: 15 }} label="辅条码">
              {form.getFieldDecorator('barcdAdd', {
                initialValue: formVals.barcdAdd,
              })(<Input placeholder="请输入" />)}
            </FormItem>
          </Col>
          <Col span={12}>
            <FormItem key="rfidEpc" labelCol={{ span: 5 }} wrapperCol={{ span: 15 }} label="主EPC">
              {form.getFieldDecorator('rfidEpc', {
                initialValue: formVals.rfidEpc,
              })(<Input placeholder="请输入" />)}
            </FormItem>
          </Col>
          <Col span={12}>
            <FormItem key="rfidAddEpc" labelCol={{ span: 5 }} wrapperCol={{ span: 15 }} label="辅EPC">
              {form.getFieldDecorator('rfidAddEpc', {
                initialValue: formVals.rfidAddEpc,
              })(<Input placeholder="请输入" />)}
            </FormItem>
          </Col>
          <Col span={12}>
            <FormItem key="inboundIdentity" labelCol={{ span: 5 }} wrapperCol={{ span: 15 }} label="入库标识">
              {form.getFieldDecorator('inboundIdentity', {
                initialValue: formVals.inboundIdentity,
              })(<Input placeholder="请输入" />)}
            </FormItem>
          </Col>
          <Col span={12}>
            <FormItem key="pxQtySh" labelCol={{ span: 5 }} wrapperCol={{ span: 15 }} label="收货箱规">
              {form.getFieldDecorator('pxQtySh', {
                initialValue: formVals.pxQtySh,
              })(<Input placeholder="请输入" />)}
            </FormItem>
          </Col>
          <Col span={12}>
            <FormItem key="pxQtyFh" labelCol={{ span: 5 }} wrapperCol={{ span: 15 }} label="发货箱规">
              {form.getFieldDecorator('pxQtyFh', {
                initialValue: formVals.pxQtyFh,
              })(<Input placeholder="请输入" />)}
            </FormItem>
          </Col>
          <Col span={12}>
            <FormItem key="lifnr" labelCol={{ span: 5 }} wrapperCol={{ span: 15 }} label="交换号">
              {form.getFieldDecorator('lifnr', {
                initialValue: formVals.lifnr,
              })(<Input placeholder="请输入" />)}
            </FormItem>
          </Col>
          <Col span={12}>
            <FormItem key="goodsPackag" labelCol={{ span: 5 }} wrapperCol={{ span: 15 }} label="收货包材">
              {form.getFieldDecorator('goodsPackag', {
                initialValue: formVals.goodsPackag,
              })(<Input placeholder="请输入" />)}
            </FormItem>
          </Col>
          <Col span={12}>
            <FormItem key="deliveryPackag" labelCol={{ span: 5 }} wrapperCol={{ span: 15 }} label="发货包材">
              {form.getFieldDecorator('deliveryPackag', {
                initialValue: formVals.deliveryPackag,
              })(<Input placeholder="请输入" />)}
            </FormItem>
          </Col>
          <Col span={12}>
            <FormItem key="brgew" labelCol={{ span: 5 }} wrapperCol={{ span: 15 }} label="重量">
              {form.getFieldDecorator('brgew', {
                initialValue: formVals.brgew,
              })(<Input placeholder="请输入" />)}
            </FormItem>
          </Col>
          <Col span={12}>
            <FormItem key="productType" labelCol={{ span: 5 }} wrapperCol={{ span: 15 }} label="产品类别">
              {form.getFieldDecorator('productType', {
                initialValue: formVals.productType,
              })(<Input placeholder="请输入" />)}
            </FormItem>
          </Col>
        </Row>
      </div>
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

/* eslint react/no-multi-comp:0 */
@connect(({ product, loading }) => ({
  product,
  loading: loading.models.product,
}))
@Form.create()
class TableList extends PureComponent {
  confirm  = Modal.confirm;
  state = {
    modalVisible: false,
    updateModalVisible: false,
    selectedRows: [],
    formValues: {},
    stepFormValues: {},
  };
   columns = [
    {
      title: 'SKU',
      width: 200,
      dataIndex: 'matnr',
      fixed: 'left',
    },
    {
      title: '品号',
      width: 150,
      dataIndex: 'zsatnr',
      fixed: 'left',
    },
     {
       title: '色号',
       width: 80,
       dataIndex: 'color',
       fixed: 'left',
     },
    {
      title: '规格',
      dataIndex: 'spec',
      key: '1',
      width: 150,
    },
    {
      title: '批次',
      dataIndex: 'charg',
      key: '2',
      width: 150,
    },
    {
      title: '主条码',
      dataIndex: 'barcd',
      key: '3',
      width: 220,
    },
    {
      title: '辅条码',
      dataIndex: 'barcdAdd',
      key: '4',
      width: 150,
    },
    {
      title: '主EPC',
      dataIndex: 'rfidEpc',
      key: '5',
      width: 200,
    },
    {
      title: '辅EPC',
      dataIndex: 'rfidAddEpc',
      key: '6',
      width: 150,
    },
    {
       title: '入库标识',
       dataIndex: 'inboundIdentity',
       key: '7',
       width: 150,
     },
     {
       title: '收货箱规',
       dataIndex: 'pxQtySh',
       key: '7',
       width: 150,
     },
     {
       title: '发货箱规',
       dataIndex: 'pxQtyFh',
       key: '7',
       width: 150,
     },
     {
       title: '交换号',
       dataIndex: 'lifnr',
       key: '7',
       width: 150,
     },
     {
       title: '收货包材',
       dataIndex: 'goodsPackag',
       key: '7',
       width: 150,
     },
     {
       title: '发货包材',
       dataIndex: 'deliveryPackag',
       key: '7',
       width: 150,
     },
     {
       title: '重量',
       dataIndex: 'brgew',
       key: '7',
       width: 200,
     },
     {
       title: '产品类别',
       dataIndex: 'productType',
       key: '7',
       width: 150,
     },
    {
      title: '操作',
      fixed: 'right',
      width: 150,
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
      type: 'product/fetch',
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
      type: 'product/fetch',
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
      type: 'product/fetch',
      payload: {},
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
              type: 'product/batchRemove',
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
        type: 'product/fetch',
        payload: values,
      });
    });
  };

  handleModalVisible = (flag) => {
    this.setState({
      modalVisible: !!flag,
    });
  };

  handleUpdateModalVisible = (flag, record) => {
    this.setState({
      updateModalVisible: !!flag,
      stepFormValues: record || {},
    });
  };

  handleAdd = fields => {
    const { dispatch } = this.props;
    dispatch({
      type: 'product/add',
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

  handleUpdate = fields => {
    const { dispatch } = this.props;
    dispatch({
      type: 'product/update',
      payload: {
        id: fields.id,
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
            message.error('编辑失败');
          }
          else {
            message.error(msg);
          }
        }else {
          this.handleFormReset();
          if(msg === 'success') {
            message.success('编辑成功');
          }
          else {
            message.success(msg);
          }
        }
      },
    });
    this.handleUpdateModalVisible();
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
          type: 'product/remove',
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
            <FormItem label="SKU">
              {getFieldDecorator('matnr')(<Input placeholder="请输入" />)}
            </FormItem>
          </Col>
          <Col md={8} sm={24}>
            <FormItem label="品号">
              {getFieldDecorator('zsatnr')(<Input placeholder="请输入" />)}
            </FormItem>
          </Col>
          <Col md={8} sm={24}>
            <FormItem label="色号">
              {getFieldDecorator('color')(<Input placeholder="请输入" />)}
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
      product: { data },
      loading,
    } = this.props;
    const { selectedRows, modalVisible, updateModalVisible, stepFormValues } = this.state;
    const menu = (
      <Menu onClick={this.handleMenuClick} selectedKeys={[]}>
        <Menu.Item key="batchRemove">批量删除</Menu.Item>
      </Menu>
    );
    const parentMethods = {
      handleAdd: this.handleAdd,
      handleModalVisible: this.handleModalVisible,
    };
    const updateMethods = {
      handleUpdateModalVisible: this.handleUpdateModalVisible,
      handleUpdate: this.handleUpdate,
    };
    return (
      <PageHeaderWrapper title="产品管理">
        <Card bordered={false}>
          <div className={styles.tableList}>
            <div className={styles.tableListForm}>{this.renderForm()}</div>
            <div className={styles.tableListOperator}>
              <Button icon="plus" type="primary" onClick={() => this.handleModalVisible(true)}>
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
              scroll={{ x: 2850, y: 300 }}
              mountNode
            />
          </div>
        </Card>
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
