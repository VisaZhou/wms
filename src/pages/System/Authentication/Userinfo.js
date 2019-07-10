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
import styles from './Userinfo.less';
import Exception from "../../../components/Exception";

const FormItem = Form.Item;
const { Option } = Select;
const getValue = obj =>
  Object.keys(obj)
    .map(key => obj[key])
    .join(',');

@connect(({ userinfo, loading }) => ({
  userinfo,
  loading: loading.models.userinfo,
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
  };

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'userinfo/fetchRole',
    });
  };

  renderContent = () => {
    const { form } = this.props;
    return [
      <FormItem key="username" labelCol={{ span: 5 }} wrapperCol={{ span: 15 }} label="用户名">
        {form.getFieldDecorator('username', {
          rules: [{ required: true, message: '请输入至少五个字符！', min: 5 }],
        })(<Input placeholder="请输入" />)}
      </FormItem>,
      <FormItem key="password" labelCol={{ span: 5 }} wrapperCol={{ span: 15 }} label="密码">
        {form.getFieldDecorator('password', {
          rules: [{ required: true, message: '请输入至少五个字符！', min: 5 }],
        })(<Input placeholder="请输入" />)}
      </FormItem>,
      <FormItem key="name" labelCol={{ span: 5 }} wrapperCol={{ span: 15 }} label="姓名">
        {form.getFieldDecorator('name', {
          rules: [{ required: true, message: '请输入至少五个字符！', min: 5 }],
        })(<Input placeholder="请输入" />)}
      </FormItem>,
      <FormItem key="phone" labelCol={{ span: 5 }} wrapperCol={{ span: 15 }} label="手机">
        {form.getFieldDecorator('phone', {
        })(<Input placeholder="请输入" />)}
      </FormItem>,
      <FormItem key="email" labelCol={{ span: 5 }} wrapperCol={{ span: 15 }} label="邮箱">
        {form.getFieldDecorator('email', {
        })(<Input placeholder="请输入" />)}
      </FormItem>,
      <FormItem key="enable" label="状态" labelCol={{ span: 5 }} wrapperCol={{ span: 15 }}>
        {form.getFieldDecorator('enable')(
          <Select placeholder="请选择" style={{ width: '100%' }}>
            <Option value="true">正常</Option>
            <Option value="false">锁定</Option>
          </Select>
        )}
      </FormItem>,
      <FormItem label="所属角色" key="role" labelCol={{ span: 5 }} wrapperCol={{ span: 15 }}>
        {form.getFieldDecorator('role')(
          <Select placeholder="请选择" style={{ width: '100%' }}>
            {
              (this.props.userinfo.role.list || []).map((item,index)=>{
                return <Option key={index} value={item.id}>{item.name}</Option>
              })
            }
          </Select>
        )}
      </FormItem>
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
        title="新增用户"
        visible={modalVisible}
        onOk={this.okHandle}
        onCancel={() => handleModalVisible()}
      >
        {this.renderContent()}
      </Modal>
    );
  }
}

@connect(({ userinfo, loading }) => ({
  userinfo,
  loading: loading.models.userinfo,
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
        username:props.values.username,
        name: props.values.name,
        phone: props.values.phone,
        email: props.values.email,
        enable: props.values.enable,
        role: props.values.role,
      },
    };
    this.formLayout = {
      labelCol: { span: 7 },
      wrapperCol: { span: 13 },
    };
  };

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'userinfo/fetchRole',
    });
  };

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
      <FormItem key="username" labelCol={{ span: 5 }} wrapperCol={{ span: 15 }} label="用户名">
        {form.getFieldDecorator('username', {
          rules: [{ required: true, message: '请输入至少五个字符！', min: 5 }],
          initialValue: formVals.username,
        })(<Input placeholder="请输入" />)}
      </FormItem>,
      <FormItem key="name" labelCol={{ span: 5 }} wrapperCol={{ span: 15 }} label="姓名">
        {form.getFieldDecorator('name', {
          rules: [{ required: true, message: '请输入至少五个字符！', min: 5 }],
          initialValue: formVals.name,
        })(<Input placeholder="请输入" />)}
      </FormItem>,
      <FormItem key="phone" labelCol={{ span: 5 }} wrapperCol={{ span: 15 }} label="手机">
        {form.getFieldDecorator('phone', {
          initialValue: formVals.phone,
        })(<Input placeholder="请输入" />)}
      </FormItem>,
      <FormItem key="email" labelCol={{ span: 5 }} wrapperCol={{ span: 15 }} label="邮箱">
        {form.getFieldDecorator('email', {
          initialValue: formVals.email,
        })(<Input placeholder="请输入" />)}
      </FormItem>,
      <FormItem key="enable" label="状态" labelCol={{ span: 5 }} wrapperCol={{ span: 15 }}>
        {form.getFieldDecorator('enable',{
          initialValue:formVals.enable,
        })(
          <Select placeholder="请选择" style={{ width: '100%' }}>
            <Option value={true}>正常</Option>
            <Option value={false}>锁定</Option>
          </Select>
        )}
      </FormItem>,
      <FormItem label="所属角色" key="role" labelCol={{ span: 5 }} wrapperCol={{ span: 15 }}>
        {form.getFieldDecorator('role',{
          initialValue:formVals.role,
        })(
          <Select placeholder="请选择" style={{ width: '100%' }}>
            {
              (this.props.userinfo.role.list || []).map((item,index)=>{
                return <Option key={index} value={item.id}>{item.name}</Option>
              })
            }
          </Select>
        )}
      </FormItem>
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
        title="编辑用户"
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
@connect(({ userinfo, loading }) => ({
  userinfo,
  loading: loading.models.userinfo,
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
      title: '用户名',
      dataIndex: 'username',
    },
    {
      title: '姓名',
      dataIndex: 'name',
    },
    {
      title: '手机',
      dataIndex: 'phone',
    },
    {
      title: '邮箱',
      dataIndex: 'email',
    },
    {
      title: '状态',
      dataIndex: 'enable',
      render: val =>{
        if(val === true){
          return '正常'
        }
        if(val === false){
          return '锁定'
        }
      }
    },
    {
      title: '所属角色',
      dataIndex: 'role',
      render: val =>{
        try {
          (this.props.userinfo.role.list || []).forEach((item, index) => {
            this.roleName = "";
            if (val === item.id) {
              this.roleName = item.name;
              throw new Exception('exist');
            }
            else {
              this.roleName = "";
            }
          });
        }catch (e) {
          if(e.message === 'exist') throw e
        }
        return this.roleName;
      }
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
      type: 'userinfo/fetch',
    });
    dispatch({
      type: 'userinfo/fetchRole',
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
      type: 'userinfo/fetch',
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
      type: 'userinfo/fetch',
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
              type: 'userinfo/batchRemove',
              payload: {
                ids: selectedRows.map(row => row.id),
              },
              callback: (response) => {
                const { ret , msg } = response;
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
        type: 'userinfo/fetch',
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
      type: 'userinfo/add',
      payload: {
        username:fields.username,
        password:fields.password,
        name: fields.name,
        phone: fields.phone,
        email: fields.email,
        enable: fields.enable,
        role: fields.role,
      },
      callback: (response) => {
        const { ret , msg } = response;
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
      type: 'userinfo/update',
      payload: {
        id: fields.id,
        username:fields.username,
        name: fields.name,
        phone: fields.phone,
        email: fields.email,
        enable: fields.enable,
        role: fields.role,
      },
      callback: (response) => {
        const { ret , msg } = response;
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
          type: 'userinfo/remove',
          payload: {
            id: record.id,
          },
          callback: (response) => {
            const { ret , msg } = response;
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
            <FormItem label="姓名">
              {getFieldDecorator('name')(<Input placeholder="请输入" />)}
            </FormItem>
          </Col>
          <Col md={8} sm={24}>
            <FormItem label="用户名">
              {getFieldDecorator('username')(<Input placeholder="请输入" />)}
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
      userinfo: { data },
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
      <PageHeaderWrapper title="用户管理">
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
