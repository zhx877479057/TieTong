import React from 'react';
import 'antd/dist/antd.css';
// import '../index.css';
import { Select } from 'antd';
import jsonp from 'fetch-jsonp';
import querystring from 'querystring';

/**
 * @author 翟浩翔
 * @fileoverview 培训班管理_班级管理_讲师姓名
 * @Time 2019-6
 * @copyright 中移铁通陕西分公司
 */

const { Option } = Select;

let timeout;
let currentValue;

function fetch(value, callback) {
  if (timeout) {
    clearTimeout(timeout);
    timeout = null;
  }
  currentValue = value;

  function fake() {
    const str = querystring.encode({
      code: 'utf-8',
      q: value,
    });
    jsonp(`http://122.77.240.123:9201/asmx/trainManage.asmx/trainClassQuery?${str}`)
      .then(response => response.json())
      .then(d => {
        if (currentValue === value) {
          const result = d.result;
          const data = [];
          result.forEach(r => {
            data.push({
              value: r[0],
              text: r[0],
            });
          });
          callback(data);
        }
      });
  }

  timeout = setTimeout(fake, 300);
}

class Teacher extends React.Component {
  state = {
    data: [],
    value: undefined,
  };

  handleSearch = value => {
    fetch(value, data => this.setState({ data }));
  };

  handleChange = value => {
    this.setState({ value });
  };

  render() {
    const options = this.state.data.map(d => <Option key={d.value}>{d.text}</Option>);
    return (
      <Select
        showSearch
        value={this.state.value}
        placeholder={this.props.placeholder}
        style={this.props.style}
        defaultActiveFirstOption={false}
        showArrow={false}
        filterOption={false}
        onSearch={this.handleSearch}
        onChange={this.handleChange}
        notFoundContent={null}
      >
        {options}
      </Select>
    );
  }
}

export default Teacher;
