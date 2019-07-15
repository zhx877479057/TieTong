import React from 'react';
import 'antd/dist/antd.css';
// import '../index.css';
import { Select } from 'antd';

// const { Option } = Select;
function PlanRank(props) {
  return (
    <Select
      showSearch
      style={{ width: 170 }}
      placeholder={props.name}
      optionFilterProp="children"
      filterOption={(input, option) =>
        option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
      }
    >
      <Option value="0">{props.Option[0]}</Option>
      <Option value="1">{props.Option[1]}</Option>
      <Option value="2">{props.Option[2]}</Option>
      <Option value="3">{props.Option[3]}</Option>
      {/* <Option value="City">{props.Option[4]}</Option> */}

      {/* {
        props.Option(
          item=>(
            <Option value={item.indexOf}>
              {item}
            </Option>
          )
        )
      } */}
    </Select>

    // {menuData.map(menu => (
    //            <Menu.Item key={`/${menu.route}`}>
    //              <Link to={menu.route}>{menu.name}</Link>
    //            </Menu.Item>
    //          ))}
  );
}

export default PlanRank;
