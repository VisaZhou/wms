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
  Divider,
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

@connect(({ supplier, loading }) => ({
  supplier,
  loading: loading.models.supplier,
}))
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

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'supplier/fetchType',
    });
  }

  renderContent = () => {
    const { form } = this.props;
    return [
      <FormItem key="name" labelCol={{ span: 5 }} wrapperCol={{ span: 15 }} label="供应商名称">
        {form.getFieldDecorator('name', {
          rules: [{ required: true, message: '请输入至少五个字符！', min: 5 }],
        })(<Input placeholder="请输入" />)}
      </FormItem>,
      <FormItem key="type" label="供应商类型" labelCol={{ span: 5 }} wrapperCol={{ span: 15 }}>
        {form.getFieldDecorator('type', {
          rules: [{ required: true, message: '请选择库位类型' }],
        })(
          <Select placeholder="请选择" style={{ width: '100%' }}>
            {
              (this.props.supplier.type.list || []).map((item,index)=>{
                return <Option key={index} value={item.id}>{item.name}</Option>
              })
            }
          </Select>
        )}
      </FormItem>,
      <FormItem key="phone" labelCol={{ span: 5 }} wrapperCol={{ span: 15 }} label="电话">
        {form.getFieldDecorator('phone', {
        })(<Input placeholder="请输入" />)}
      </FormItem>,
      <FormItem key="fax" labelCol={{ span: 5 }} wrapperCol={{ span: 15 }} label="传真">
        {form.getFieldDecorator('fax', {
        })(<Input placeholder="请输入" />)}
      </FormItem>,
      <FormItem key="email" labelCol={{ span: 5 }} wrapperCol={{ span: 15 }} label="邮箱">
        {form.getFieldDecorator('email', {
        })(<Input placeholder="请输入" />)}
      </FormItem>,
      <FormItem key="contact" labelCol={{ span: 5 }} wrapperCol={{ span: 15 }} label="联系人">
        {form.getFieldDecorator('contact', {
        })(<Input placeholder="请输入" />)}
      </FormItem>,
      <FormItem key="address" labelCol={{ span: 5 }} wrapperCol={{ span: 15 }} label="地址">
        {form.getFieldDecorator('address', {
        })(<Input placeholder="请输入" />)}
      </FormItem>,
      <FormItem key="description" labelCol={{ span: 5 }} wrapperCol={{ span: 15 }} label="描述">
        {form.getFieldDecorator('description', {
        })(<Input placeholder="请输入" />)}
      </FormItem>,
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
        title="新增供应商"
        visible={modalVisible}
        onOk={this.okHandle}
        onCancel={() => handleModalVisible()}
      >
        {this.renderContent()}
      </Modal>
    );
  }
}

@connect(({ supplier, loading }) => ({
  supplier,
  loading: loading.models.supplier,
}))
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
        name: props.values.name,
        type: props.values.type,
        phone: props.values.phone,
        fax: props.values.fax,
        email: props.values.email,
        contact: props.values.contact,
        address: props.values.address,
        description: props.values.description,
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

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'supplier/fetch',
    });
    dispatch({
      type: 'supplier/fetchType',
    });
  }

  renderContent = formVals => {
    const { form } = this.props;
    return [
      <FormItem key="name" labelCol={{ span: 5 }} wrapperCol={{ span: 15 }} label="库位名称">
        {form.getFieldDecorator('name', {
          rules: [{ required: true, message: '请输入至少五个字符！', min: 5 }],
          initialValue: formVals.name,
        })(<Input placeholder="请输入" />)}
      </FormItem>,
      <FormItem key="type" label="库位类型" labelCol={{ span: 5 }} wrapperCol={{ span: 15 }}>
        {form.getFieldDecorator('type', {
          rules: [{ required: true, message: '请选择库位类型' }],
          initialValue: formVals.type,
        })(
          <Select placeholder="请选择" style={{ width: '100%' }}>
            {
              (this.props.supplier.type.list || []).map((item,index)=>{
                return <Option key={index} value={item.id}>{item.name}</Option>
              })
            }
          </Select>
        )}
      </FormItem>,
      <FormItem key="phone" labelCol={{ span: 5 }} wrapperCol={{ span: 15 }} label="电话">
        {form.getFieldDecorator('phone', {
          initialValue: formVals.phone,
        })(<Input placeholder="请输入" />)}
      </FormItem>,
      <FormItem key="fax" labelCol={{ span: 5 }} wrapperCol={{ span: 15 }} label="传真">
        {form.getFieldDecorator('fax', {
          initialValue: formVals.fax,
        })(<Input placeholder="请输入" />)}
      </FormItem>,
      <FormItem key="email" labelCol={{ span: 5 }} wrapperCol={{ span: 15 }} label="邮箱">
        {form.getFieldDecorator('email', {
          initialValue: formVals.email,
        })(<Input placeholder="请输入" />)}
      </FormItem>,
      <FormItem key="contact" labelCol={{ span: 5 }} wrapperCol={{ span: 15 }} label="联系人">
        {form.getFieldDecorator('contact', {
          initialValue: formVals.contact,
        })(<Input placeholder="请输入" />)}
      </FormItem>,
      <FormItem key="address" labelCol={{ span: 5 }} wrapperCol={{ span: 15 }} label="地址">
        {form.getFieldDecorator('address', {
          initialValue: formVals.address,
        })(<Input placeholder="请输入" />)}
      </FormItem>,
      <FormItem key="description" labelCol={{ span: 5 }} wrapperCol={{ span: 15 }} label="描述">
        {form.getFieldDecorator('description', {
          initialValue: formVals.description,
        })(<Input placeholder="请输入" />)}
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
        title="编辑供应商"
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
@connect(({ supplier, loading }) => ({
  supplier,
  loading: loading.models.supplier,
}))
@Form.create()
class TableList extends PureComponent {
  confirm  = Modal.confirm;
  state = {
    modalVisible: false,
    updateModalVisible: false,
    expandForm: false,
    selectedRows: [],
    formValues: {},
    stepFormValues: {},
  };
  columns = [
    {
      title: '供应商编号',
      dataIndex: 'number',
    },
    {
      title: '供应商名称',
      dataIndex: 'name',
    },
    {
      title: '供应商类型',
      dataIndex: 'typeName',
    },
    {
      title: '创建时间',
      dataIndex: 'createTime',
      render: val => <span>{moment(val).format('YYYY-MM-DD HH:mm:ss')}</span>,
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
      title: '邮箱',
      dataIndex: 'email',
    },
    {
      title: '联系人',
      dataIndex: 'contact',
    },
    {
      title: '地址',
      dataIndex: 'address',
    },
    {
      title: '描述',
      dataIndex: 'description',
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
      type: 'supplier/fetch',
    });
    dispatch({
      type: 'supplier/fetchType',
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
      type: 'supplier/fetch',
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
      type: 'supplier/fetch',
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
              type: 'supplier/batchRemove',
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
        type: 'supplier/fetch',
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
      type: 'supplier/add',
      payload: {
        name: fields.name,
        type: fields.type,
        phone: fields.phone,
        fax: fields.fax,
        email: fields.email,
        contact: fields.contact,
        address: fields.address,
        description: fields.description,
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
      type: 'supplier/update',
      payload: {
        id: fields.id,
        name: fields.name,
        type: fields.type,
        phone: fields.phone,
        fax: fields.fax,
        email: fields.email,
        contact: fields.contact,
        address: fields.address,
        description: fields.description,
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
          type: 'supplier/remove',
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
            <FormItem label="名称">
              {getFieldDecorator('name')(<Input placeholder="请输入" />)}
            </FormItem>
          </Col>
          <Col md={8} sm={24}>
            <FormItem label="编号">
              {getFieldDecorator('number')(<Input placeholder="请输入" />)}
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
            <FormItem label="名称">
              {getFieldDecorator('name')(<Input placeholder="请输入" />)}
            </FormItem>
          </Col>
          <Col md={8} sm={24}>
            <FormItem label="编号">
              {getFieldDecorator('number')(<Input placeholder="请输入" />)}
            </FormItem>
          </Col>
          <Col md={8} sm={24}>
            <FormItem label="电话">
              {getFieldDecorator('phone')(<Input placeholder="请输入" />)}
            </FormItem>
          </Col>
          <Col md={8} sm={24}>
            <FormItem label="类型">
              {getFieldDecorator('type')(
                <Select placeholder="请选择" style={{ width: '100%' }}>
                  {
                    (this.props.supplier.type.list || []).map((item,index)=>{
                      return <Option key={index} value={item.id}>{item.name}</Option>
                    })
                  }
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
      supplier: { data },
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
      <PageHeaderWrapper title="供应商管理">
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
