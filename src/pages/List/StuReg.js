import React from 'react';
import 'antd/dist/antd.css';
import SearchClass from './StuReg/SearchClass';
import styles from './StuReg.less';

/**
 * @author 翟浩翔
 * @fileoverview 培训班管理_班级管理
 * @Time 2019-6
 * @copyright 中移铁通陕西分公司
 */

// const { RangePicker } = DatePicker;

class StuReg extends React.Component {
  render() {
    return (
      <div>
        <SearchClass style={{ padding: 5 }} />
      </div>
    );
  }
}

export default StuReg;
