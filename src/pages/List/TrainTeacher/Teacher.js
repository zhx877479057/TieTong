import React from 'react';
import styles from './Teacher.css';
import PlanRank from '../TrainPaln/PlanRank';
import { Row, Col, Input } from 'antd';
import TrainUpload from '../TrainPaln/TrainUpload';
import TeacherFrom from '../TrainTeacher/TeacherFrom';
import TeacherTable from '../TrainTeacher/Table';

class Teacher extends React.Component {
  render() {
    return (
      <div>
        <Row style={{ padding: 8 }}>
          <Col span={5}>
            <PlanRank name="选择专业类别" Option={['管理', '技术', '业务', '综合']} />
          </Col>

          <Col span={5}>
            <PlanRank name="选择讲师学历" Option={['大专', '本科', '研究生', '其他']} />
          </Col>

          <Col span={6}>
            姓名: <Input style={{ width: 150 }} />
          </Col>

          <Col span={6}>
            手机: <Input style={{ width: 150 }} />
          </Col>
        </Row>

        <Row style={{ padding: 8 }}>
          <Col span={5}>
            <TrainUpload name="批量添加新增记录" style={{ width: 170 }} />
          </Col>

          <Col span={5}>
            <TeacherFrom style={{ width: 220 }} />
          </Col>
        </Row>

        <TeacherTable style={{ padding: 10 }} />
      </div>
    );
  }
}

export default Teacher;
