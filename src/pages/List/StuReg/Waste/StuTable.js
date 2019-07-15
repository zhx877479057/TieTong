import React from 'react';
import 'antd/dist/antd.css';
import { Table } from 'antd';
import fetch from 'dva/fetch';

const { Column } = Table;

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

class StuTable extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      data11: [],
      rank: this.props.rank,
      StartData: this.props.StartData,
      EndData: this.props.EndData,
      ClassName: this.props.ClassName,
      TeacherName: this.props.TeacherName,
    };
    // console.log(props);
  }

  //fetch请求写法,使用body: "q=参数q"方式
  fetchWithPost(url, a1, a2) {
    //参数格式: "a=1&b=2&c=3"
    let postData = 's1=' + a1 + '&s2=' + a2;

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
        //  console.log(data);
        this.setState({
          data11: data,
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  componentDidMount() {
    const url1 = 'http://122.77.240.123:9201/asmx/trainManage.asmx/trainClassQuery'; //无参数
    const url2 = 'http://122.77.240.123:9201/asmx/trainManage.asmx/trainClassQueryWithParameter'; //带参数

    // const a1='李';
    // const a2='ss';
    const a1 = this.state.TeacherName;
    const a2 = this.state.ClassName;
    console.log(a1 + ',' + a2);

    this.fetchWithPost(url2, a1, a2);
  }

  render() {
    return (
      <Table dataSource={this.state.data11}>
        <Column title="序号" dataIndex="Number" key="Number" />
        <Column title="培训班级别" dataIndex="Rank" key="Rank" />
        <Column title="培训班名称" dataIndex="ClassName" key="ClassName" />
        <Column title="讲师姓名" dataIndex="Teacher" key="Teacher" />
        <Column title="培训开始日期" dataIndex="StartDate" key="StartDete" />
        <Column title="培训结束日期" dataIndex="EndDate" key="EndDate" />
        <Column title="课时数" dataIndex="Hours" key="Hours" />
      </Table>
    );
  }
}

export default StuTable;
