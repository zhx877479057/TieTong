import React from 'react';
import styles from './TrainPaln.css';
import PlanRank from './TrainPaln/PlanRank';
import { Row, Col, Input, Typography } from 'antd';
import TrainUpload from './TrainPaln/TrainUpload';
import TrainFrom from './TrainPaln/TrainFrom';
import TarinTable from './TrainPaln/Table';

const { Title, Paragraph, Text } = Typography;

class TrainPaln extends React.Component {
  render() {
    return (
      <div>
        <Row style={{ padding: 8 }}>
          <Col span={5}>
            <PlanRank name="选择计划类型" Option={['年度计划', '月度计划', '新增计划']} />
          </Col>

          <Col span={5}>
            <PlanRank name="选择区域级别" Option={['地市', '区县', '其他']} />
          </Col>

          <Col span={5}>
            <PlanRank name="选择培训专业" Option={['综合专业', '维护专业', '市场专业', '其他']} />
          </Col>

          <Col span={8}>
            计划名称:
            <Input style={{ width: 200 }} />
          </Col>

          {/*<Col>
            <Button type="primary" shape="circle" icon="search" />
          </Col> */}
        </Row>

        <Row style={{ padding: 8 }}>
          <Col span={5}>
            <TrainUpload name="导入年度计划" style={{ width: 170 }} />
          </Col>

          <Col span={5}>
            <TrainUpload name="导入新增计划" style={{ width: 170 }} />
          </Col>

          <Col span={5}>
            <TrainFrom style={{ width: 170 }} />
          </Col>
        </Row>

        <TarinTable style={{ padding: 8 }} />

        <Typography style={{ padding: 10 }}>
          <Title>新增计划审批流程</Title>
          <Paragraph>
            地市-
            <Text strong>
              每月由县区或本单位业务部门发起，提交各地市培训业务主管审核，并由本单位培训主管领导审批完成后方可加入培训计划。
            </Text>
          </Paragraph>
          <Paragraph>
            省分-
            <Text strong>
              每月由省分业务部门发起，提交省分公司生产支撑中心审核，并由培训主管领导审批完成后方可加入培训计划。
            </Text>
          </Paragraph>
        </Typography>
      </div>
    );
  }
}

export default TrainPaln;
