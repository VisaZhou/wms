import React from 'react';
import {Descriptions} from 'antd';
import {connect} from "dva";
import styles from './Server.less';


@connect(({ server, loading }) => ({
  server,
  loading: loading.models.server,
}))
class server extends React.Component {

  onChange = e => {
    console.log('size checked', e.target.value);
    this.setState({
      size: e.target.value,
    });
  };

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'server/fetch',
    });
  }

  render() {
    return (
      <div>
        <Descriptions bordered title="服务器信息">
          <Descriptions.Item label="服务器" span={3}>
            {this.props.server.data.server}
          </Descriptions.Item>
          <Descriptions.Item label="最大内存" span={3}>
            {this.props.server.data.maxRAM}
          </Descriptions.Item>
          <Descriptions.Item label="使用内存" span={3}>
            {this.props.server.data.usedRAM}
          </Descriptions.Item>
          <Descriptions.Item label="空闲内存" span={3}>
            {this.props.server.data.unusedRAM}
          </Descriptions.Item>
          <Descriptions.Item label="CPU信息" span={3}>
            {this.props.server.data.cpu}
          </Descriptions.Item>
          <Descriptions.Item label="Servlet上下文" span={3}>
            {this.props.server.data.servlet}
          </Descriptions.Item>
          <Descriptions.Item label="虚拟机名称" span={3}>
            {this.props.server.data.virtual}
          </Descriptions.Item>
        </Descriptions>
      </div>
    );
  }
}

export default server;
