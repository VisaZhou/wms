import React from 'react';
import {Descriptions} from 'antd';
import {connect} from "dva";
import styles from './Database.less';



@connect(({ database, loading }) => ({
  database,
  loading: loading.models.database,
}))
class database extends React.Component {

  onChange = e => {
    console.log('size checked', e.target.value);
    this.setState({
      size: e.target.value,
    });
  };

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'database/fetch',
    });
  }

  render() {
    return (
      <div>
        <Descriptions bordered title="数据库信息">
          <Descriptions.Item label="数据库" span={3}>
            {this.props.database.data.db_name}
          </Descriptions.Item>
        </Descriptions>
      </div>
    );
  }
}

export default database;
