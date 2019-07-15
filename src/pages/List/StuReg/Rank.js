import React from 'react';
import 'antd/dist/antd.css';
// import '../index.css';
import { Select } from 'antd';

const { Option } = Select;
function Rank() {
  return (
    <Select
      showSearch
      style={{ width: 200 }}
      placeholder="选择培训班级别"
      optionFilterProp="children"
      filterOption={(input, option) =>
        option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
      }
    >
      <Option value="Province">省分</Option>
      <Option value="City">地市</Option>
    </Select>
  );
}

export default Rank;
