import React from 'react';
import CreateClass from './createClass';
import { Input, DatePicker, Layout, Row, Col, Button, Select, Table } from 'antd';
import moment from "moment";

/**
 * @author 翟浩翔
 * @fileoverview 培训班管理_班级管理_搜索选项域
 * @Time 2019-7-11
 * @copyright 中移铁通陕西分公司
 */

const { Column } = Table;
const { Option } = Select;

function Request(url, options) {
  fetch(url, options)
    .then(response => {
      const resData = response.json();
      return resData;
    })
    .catch(e => {
      console.log(e);
    });
}

class SearchClass extends React.Component {
  constructor(props) {
    super(props);
    this.query = this.query.bind(this);
    this.state = {
      datasearch: [],
      rank: '',
      StartData: '',
      EndData: '',
      ClassName: '',
      TeacherName: '',
      flag: true,
      selectedRowKeys: [], // Check here to configure the default column
      loading: false,
      CD_Id:'',
    };
  }

  //fetch请求写法,使用body: "q=参数q"方式
  // fetchWithPost(url,TeacherName,ClassName,rank,StartData,EndData){
  fetchWithPost(url, s1, s2, s3, s4, s5) {
    //参数格式: "a=1&b=2&c=3"
    let postData = 's1=' + s1 + '&s2=' + s2 + '&s3=' + s3 + '&s4=' + s4 + '&s5=' + s5;

    let options = {
      method: 'POST',
      body: postData,
      headers: {
        // 请求头
        //'Accept': 'application/json',//非必须
        'Content-Type': 'application/x-www-form-urlencoded', //必须,不能是application/json
      },
    };

    fetch(url, options)
      .then(response => {
        return response.json();
      })
      .then(data => {
        console.log(data);
        this.setState({
          datasearch: data,
          CD_Id:data.CD_Id
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  query() {
    const url2 = 'http://122.77.240.123:9201/asmx/trainManage.asmx/trainClassQueryWithParam'; //带参数

    const s1 = this.state.rank;
    const s2 = this.state.StartData;
    const s3 = this.state.EndData;
    const s4 = this.state.ClassName;
    const s5 = this.state.TeacherName;

    console.log(s1 + ',' + s2 + ',' + s3 + ',' + s4 + ',' + s5);

    this.fetchWithPost(url2, s1, s2, s3, s4, s5);

    this.state.flag = false;
  }

  onSelectChange = selectedRowKeys => {
    console.log('selectedRowKeys changed: ', selectedRowKeys);
    this.setState({ selectedRowKeys });
  };

  start = () => {
    alert("确定删除吗?")
    this.setState({ loading: true });
    // ajax request after empty completing
    setTimeout(() => {
      this.setState({
        selectedRowKeys: [],
        loading: false,
      });
    }, 1000);
    console.log(this.state.selectedRowKeys);
    
  };

  render() {
    let Thetable;
    if (this.state.flag) {
      Thetable = null;
    } else {
      Thetable = this.state.datasearch;
      console.log(Thetable);
    }

    const { loading, selectedRowKeys } = this.state;
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange,
    };
    const hasSelected = selectedRowKeys.length > 0;

    return (
      <div class="Select">
        <Row style={{ padding: 8 }}>
          <Col span={8}>
            培训班级别:
            <Select
              showSearch
              style={{ width: 200 }}
              placeholder="选择培训班级别"
              optionFilterProp="children"
              onChange={(value) => {
                console.log('你所选择的级别:' + value);
                this.setState({
                  rank: value,
                });
                console.log(this.state.rank);
              }}
              filterOption={(input, option) =>
                option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              }
            >
              <Option value="Province">省分</Option>
              <Option value="City">地市</Option>
            </Select>
          </Col>

          <Col span={8}>
            起始日期:
            <DatePicker
              onChange={(value) => {
                let valueF = moment(value).format('YYYY-MM-DD');
                console.log('开始日期:' + valueF);
                this.setState({
                  StartData: valueF,
                });
              }}
            />
          </Col>

          <Col span={8}>
            结束日期:
            <DatePicker
              onChange={(value) => {
                let valueF = moment(value).format('YYYY-MM-DD');
                console.log('结束日期:' + valueF);
                this.setState({
                  EndData: valueF,
                });
              }}
            />
          </Col>
        </Row>

        <Row style={{ padding: 8 }}>
          <Col span={8}>
            培训班名称:
            <Input
              style={{ width: 200 }}
              onChange={e => {
                this.setState({
                  ClassName: e.target.value,
                });
                console.log('培训班名称:' + this.state.ClassName);
              }}
            />
          </Col>

          <Col span={8}>
            讲师姓名:
            <Input
              style={{ width: 186 }}
              onChange={e => {
                this.setState({
                  TeacherName: e.target.value, //取对象值
                });
                console.log('讲师姓名:' + this.state.TeacherName);
                // alert(this.state.TeacherName)
              }}
            />
          </Col>
          <Col span={3}>
            <Button type="primary" icon="search" onClick={this.query}>
              查询
            </Button>
          </Col>
          <Col span={3}>
            <CreateClass style={{ width: 200 }} />
          </Col>
        </Row>

        <Button type="primary" onClick={this.start} disabled={!hasSelected} loading={loading}>
          删除
          </Button>
        <span style={{ marginLeft: 8 }}>
          {hasSelected ? `选中了 ${selectedRowKeys.length}个数据` : ''}
        </span>

        <Table rowSelection={rowSelection} dataSource={Thetable}>
          {/* <Column title="序号" dataIndex="CD_Id" key="Number" /> */}
          <Column title="培训班名称" dataIndex="CD_ClassName" key="ClassName" />
          <Column title="年度计划" dataIndex="CD_YearPlan" key="YearPlan" />
          <Column title="负责人姓名" dataIndex="CD_Name" key="Teacher" />
          <Column title="负责人手机" dataIndex="CD_Phone" key="Phone" />
          <Column title="培训等级" dataIndex="CD_Rank" key="Rank" />
          <Column title="开始日期" dataIndex="CD_StartDate" key="StartDete" />
          <Column title="结束日期" dataIndex="CD_EndDateDate" key="EndDate" />
          <Column title="报名截止日期" dataIndex="CD_StopDate" key="StopDate" />
          <Column title="课时数" dataIndex="CD_Hour" key="Hours" />
          <Column title="状态" dataIndex="CD_State" key="CD_State" />
          {/* <Column title="删除记录" dataIndex="CD_Delete" key="Hours" >
          <Button type="primary">删除</Button>
          </Column> */}
        </Table>
      </div>
    );
  }
}

export default SearchClass;
