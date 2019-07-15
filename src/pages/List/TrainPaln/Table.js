import React from 'react';
import 'antd/dist/antd.css';
import { Table } from 'antd';

const { Column } = Table;

const data = [
  {
    Number: '1',
    Type: '年度计划',
    City: '省分',
    PlanName: 'AA*******1',
    Project: '家客维护',
    StartDate: '2019/1/10',
    EndDate: '2019/1/11',
  },
  {
    Number: '2',
    Type: '年度计划',
    City: '西安',
    PlanName: 'BB*******1',
    Project: '极客维护',
    StartDate: '2019/4/10',
    EndDate: '2019/4/11',
  },
  {
    Number: '3',
    Type: '新增计划',
    City: '咸阳',
    PlanName: 'CC*******1',
    Project: '市场营销',
    StartDate: '2019/5/10',
    EndDate: '2019/5/12',
  },
];

class TarinTable extends React.Component {
  render() {
    return (
      <Table dataSource={data}>
        <Column title="序号" dataIndex="Number" key="Number" />
        <Column title="计划类型" dataIndex="Type" key="Type" />
        <Column title="地市" dataIndex="City" key="City" />
        <Column title="计划名称" dataIndex="PlanName" key="PlanName" />
        <Column title="专业" dataIndex="Project" key="Project" />
        <Column title="开始时间" dataIndex="StartDate" key="StartDate" />
        <Column title="结束时间" dataIndex="EndDate" key="EndDate" />
      </Table>
    );
  }
}
export default TarinTable;
