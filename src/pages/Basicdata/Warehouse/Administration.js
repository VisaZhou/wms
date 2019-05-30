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

@connect(({ warehouse, loading }) => ({
  warehouse,
  loading: loading.models.warehouse,
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
      type: 'warehouse/fetchType',
    });
    dispatch({
      type: 'warehouse/fetchDepartment',
    });
  }

  renderContent = () => {
    const { form } = this.props;
    return [
      <FormItem key="name" labelCol={{ span: 5 }} wrapperCol={{ span: 15 }} label="仓库名称">
        {form.getFieldDecorator('name', {
          rules: [{ required: true, message: '请输入至少五个字符！', min: 5 }],
        })(<Input placeholder="请输入" />)}
      </FormItem>,
      <FormItem key="type" label="仓库类型" labelCol={{ span: 5 }} wrapperCol={{ span: 15 }}>
        {form.getFieldDecorator('type', {
          rules: [{ required: true, message: '请选择仓库类型' }],
        })(
          <Select placeholder="请选择" style={{ width: '100%' }}>
            {
              (this.props.warehouse.type.list || []).map((item,index)=>{
                return <Option key={index} value={item.id}>{item.name}</Option>
              })
            }
          </Select>
        )}
      </FormItem>,
      <FormItem key="departmentId" label="所属部门" labelCol={{ span: 5 }} wrapperCol={{ span: 15 }}>
        {form.getFieldDecorator('departmentId', {
          rules: [{ required: true, message: '请选择所属部门' }],
        })(
          <Select placeholder="请选择" style={{ width: '100%' }}>
            {
              (this.props.warehouse.department.list || []).map((item,index)=>{
                return <Option key={index} value={item.id}>{item.name}</Option>
              })
            }
          </Select>
        )}
      </FormItem>,
      <FormItem key="leaseTime" label="租赁时间" labelCol={{ span: 5 }} wrapperCol={{ span: 15 }}>
        {form.getFieldDecorator('leaseTime', {
          rules: [{ required: true, message: '请选择租赁时间！' }],
        })(
          <DatePicker
            style={{ width: '100%' }}
            showTime
            format="YYYY-MM-DD HH:mm:ss"
            placeholder="选择租赁时间"
          />
        )}
      </FormItem>,
      <FormItem key="area" labelCol={{ span: 5 }} wrapperCol={{ span: 15 }} label="面积">
        {form.getFieldDecorator('area', {
        })(<Input placeholder="请输入" />)}
      </FormItem>,
      <FormItem key="isForbidden" label="是否禁用" labelCol={{ span: 5 }} wrapperCol={{ span: 15 }}>
        {form.getFieldDecorator('isForbidden')(
          <Select placeholder="请选择" style={{ width: '100%' }}>
            <Option value="0">否</Option>
            <Option value="1">是</Option>
          </Select>
        )}
      </FormItem>,
      <FormItem key="isDefault" label="是否默认" labelCol={{ span: 5 }} wrapperCol={{ span: 15 }}>
        {form.getFieldDecorator('isDefault')(
          <Select placeholder="请选择" style={{ width: '100%' }}>
            <Option value="0">否</Option>
            <Option value="1">是</Option>
          </Select>
        )}
      </FormItem>,
      <FormItem key="address" labelCol={{ span: 5 }} wrapperCol={{ span: 15 }} label="地址">
        {form.getFieldDecorator('address', {
        })(<Input placeholder="请输入" />)}
      </FormItem>,
      <FormItem key="contact" labelCol={{ span: 5 }} wrapperCol={{ span: 15 }} label="联系人">
        {form.getFieldDecorator('contact', {
        })(<Input placeholder="请输入" />)}
      </FormItem>,
      <FormItem key="phone" labelCol={{ span: 5 }} wrapperCol={{ span: 15 }} label="电话">
        {form.getFieldDecorator('phone', {
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
        title="新增仓库"
        visible={modalVisible}
        onOk={this.okHandle}
        onCancel={() => handleModalVisible()}
      >
        {this.renderContent()}
      </Modal>
    );
  }
}

@connect(({ warehouse, loading }) => ({
  warehouse,
  loading: loading.models.warehouse,
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
        departmentId: props.values.departmentId,
        leaseTime: props.values.leaseTime,
        area: props.values.area,
        isForbidden: props.values.isForbidden,
        isDefault: props.values.isDefault,
        address: props.values.address,
        contact: props.values.contact,
        phone: props.values.phone,
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
      type: 'warehouse/fetch',
    });
    dispatch({
      type: 'warehouse/fetchType',
    });
    dispatch({
      type: 'warehouse/fetchDepartment',
    });
  }

  renderContent = formVals => {
    const { form } = this.props;
    return [
      <FormItem key="name" labelCol={{ span: 5 }} wrapperCol={{ span: 15 }} label="仓库名称">
        {form.getFieldDecorator('name', {
          rules: [{ required: true, message: '请输入至少五个字符！', min: 5 }],
          initialValue: formVals.name,
        })(<Input placeholder="请输入" />)}
      </FormItem>,
      <FormItem key="type" label="仓库类型" labelCol={{ span: 5 }} wrapperCol={{ span: 15 }}>
        {form.getFieldDecorator('type', {
          rules: [{ required: true, message: '请选择仓库类型' }],
          initialValue: formVals.type,
        })(
          <Select placeholder="请选择" style={{ width: '100%' }}>
            {
              (this.props.warehouse.type.list || []).map((item,index)=>{
                return <Option key={index} value={item.id}>{item.name}</Option>
              })
            }
          </Select>
        )}
      </FormItem>,
      <FormItem key="departmentId" label="所属部门" labelCol={{ span: 5 }} wrapperCol={{ span: 15 }}>
        {form.getFieldDecorator('departmentId', {
          rules: [{ required: true, message: '请选择所属部门' }],
          initialValue: formVals.departmentId,
        })(
          <Select placeholder="请选择" style={{ width: '100%' }}>
            {
              (this.props.warehouse.department.list || []).map((item,index)=>{
                return <Option key={index} value={item.id}>{item.name}</Option>
              })
            }
          </Select>
        )}
      </FormItem>,
      <FormItem key="leaseTime" label="租赁时间" labelCol={{ span: 5 }} wrapperCol={{ span: 15 }}>
        {form.getFieldDecorator('leaseTime', {
          rules: [{ required: true, message: '请选择租赁时间！' }],
           initialValue:moment(formVals.leaseTime),
        })(
          <DatePicker
            style={{ width: '100%' }}
            showTime
            format="YYYY-MM-DD HH:mm:ss"
            placeholder="选择租赁时间"
          />
        )}
      </FormItem>,
      <FormItem key="area" labelCol={{ span: 5 }} wrapperCol={{ span: 15 }} label="面积">
        {form.getFieldDecorator('area', {
          initialValue: formVals.area,
        })(<Input placeholder="请输入" />)}
      </FormItem>,
      <FormItem key="isForbidden" label="是否禁用" labelCol={{ span: 5 }} wrapperCol={{ span: 15 }}>
        {form.getFieldDecorator('isForbidden',{
          initialValue: formVals.isForbidden,
        })(
          <Select placeholder="请选择" style={{ width: '100%' }}>
            <Option value={0}>否</Option>
            <Option value={1}>是</Option>
          </Select>
        )}
      </FormItem>,
      <FormItem key="isDefault" label="是否默认" labelCol={{ span: 5 }} wrapperCol={{ span: 15 }}>
        {form.getFieldDecorator('isDefault',{
          initialValue:formVals.isDefault,
        })(
          <Select placeholder="请选择" style={{ width: '100%' }}>
            <Option value={0}>否</Option>
            <Option value={1}>是</Option>
          </Select>
        )}
      </FormItem>,
      <FormItem key="address" labelCol={{ span: 5 }} wrapperCol={{ span: 15 }} label="地址">
        {form.getFieldDecorator('address', {
          initialValue: formVals.address,
        })(<Input placeholder="请输入" />)}
      </FormItem>,
      <FormItem key="contact" labelCol={{ span: 5 }} wrapperCol={{ span: 15 }} label="联系人">
        {form.getFieldDecorator('contact', {
          initialValue: formVals.contact,
        })(<Input placeholder="请输入" />)}
      </FormItem>,
      <FormItem key="phone" labelCol={{ span: 5 }} wrapperCol={{ span: 15 }} label="电话">
        {form.getFieldDecorator('phone', {
          initialValue: formVals.phone,
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
        title="编辑仓库"
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
@connect(({ warehouse, loading }) => ({
  warehouse,
  loading: loading.models.warehouse,
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
      title: '编号',
      dataIndex: 'number',
    },
    {
      title: '名称',
      dataIndex: 'name',
    },
    {
      title: '类型',
      dataIndex: 'typeName',
    },
    {
      title: '部门',
      dataIndex: 'departmentName',
    },
    {
      title: '租赁时间',
      dataIndex: 'leaseTime',
    },
    {
      title: '面积',
      dataIndex: 'area',
    },
    {
      title: '联系人',
      dataIndex: 'contact',
    },
    {
      title: '手机',
      dataIndex: 'phone',
    },
    {
      title: '地址',
      dataIndex: 'address',
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
      type: 'warehouse/fetch',
    });
    dispatch({
      type: 'warehouse/fetchType',
    });
    dispatch({
      type: 'warehouse/fetchDepartment',
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
      type: 'warehouse/fetch',
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
      type: 'warehouse/fetch',
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
              type: 'warehouse/batchRemove',
              payload: {
                ids: selectedRows.map(row => row.id),
              },
              callback: (response) => {
                const { ret , msg } = response
                if(ret === 1){
                  message.error('删除失败');
                }else {
                  this.setState({
                    selectedRows: [],
                  });
                  this.handleFormReset();
                  message.success('删除成功');
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
        type: 'warehouse/fetch',
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
      type: 'warehouse/add',
      payload: {
        name: fields.name,
        type: fields.type,
        departmentId: fields.departmentId,
        isForbidden: fields.isForbidden,
        isDefault:fields.isDefault,
        leaseTime: fields.leaseTime,
        area: fields.area,
        address: fields.address,
        contact: fields.contact,
        phone: fields.phone,
      },
      callback: (response) => {
        const { ret , msg } = response
        if(ret === 1){
          message.error('添加失败');
        }else {
          this.handleFormReset();
          message.success('添加成功');
        }
      },
    });
    this.handleModalVisible();
  };

  handleUpdate = fields => {
    const { dispatch } = this.props;
    dispatch({
      type: 'warehouse/update',
      payload: {
          id: fields.id,
          name: fields.name,
          type: fields.type,
          departmentId: fields.departmentId,
          isForbidden: fields.isForbidden,
          isDefault:fields.isDefault,
          leaseTime: fields.leaseTime,
          area: fields.area,
          address: fields.address,
          contact: fields.contact,
          phone: fields.phone,
      },
      callback: (response) => {
        const { ret , msg } = response
        if(ret === 1){
          message.error('编辑失败');
        }else {
          this.handleFormReset();
          message.success('编辑成功');
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
          type: 'warehouse/remove',
          payload: {
            id: record.id,
          },
          callback: (response) => {
            const { ret , msg } = response
            if(ret === 1){
              message.error('删除失败');
            }else {
               this.handleFormReset();
              message.success('删除成功');
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
            <FormItem label="部门">
              {getFieldDecorator('departmentId')(
                <Select placeholder="请选择" style={{ width: '100%' }}>
                  {
                    (this.props.warehouse.department.list || []).map((item,index)=>{
                      return <Option key={index} value={item.id}>{item.name}</Option>
                    })
                  }
                </Select>
              )}
            </FormItem>
          </Col>
          <Col md={8} sm={24}>
            <FormItem label="类型">
              {getFieldDecorator('type')(
                <Select placeholder="请选择" style={{ width: '100%' }}>
                  {
                    (this.props.warehouse.type.list || []).map((item,index)=>{
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
      warehouse: { data },
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
      <PageHeaderWrapper title="仓库管理">
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
