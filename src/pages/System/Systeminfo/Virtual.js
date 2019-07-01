import React from 'react';
import {Descriptions} from 'antd';
import {connect} from "dva";
import styles from './Virtual.less';

@connect(({ virtual, loading }) => ({
  virtual,
  loading: loading.models.virtual,
}))
class virtual extends React.Component {

  onChange = e => {
    console.log('size checked', e.target.value);
    this.setState({
      size: e.target.value,
    });
  };

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'virtual/fetch',
    });
  }

  render() {
    return (
      <div>
        <Descriptions bordered title="虚拟机信息">
          <Descriptions.Item label="操作系统版本" span={3}>
            {this.props.virtual.data.version}
          </Descriptions.Item>
          <Descriptions.Item label="操作系统类型" span={3}>
            {this.props.virtual.data.type}
          </Descriptions.Item>
          <Descriptions.Item label="Java厂商" span={3}>
            {this.props.virtual.data.firm}
          </Descriptions.Item>
          <Descriptions.Item label="Java运行环境" span={3}>
            {this.props.virtual.data.environment}
          </Descriptions.Item>
          <Descriptions.Item label="Java虚拟机" span={3}>
            {this.props.virtual.data.virtual}
        </Descriptions.Item>
          <Descriptions.Item label="目录" span={3}>
            {this.props.virtual.data.directory}
          </Descriptions.Item>
          <Descriptions.Item label="临时目录" span={3}>
            {this.props.virtual.data.tempDirectory}
          </Descriptions.Item>
        </Descriptions>
      </div>
    );
  }
}

export default virtual;

