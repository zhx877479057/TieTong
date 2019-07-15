import React from 'react';

import styles from './TrainUpload.css';

import { Upload, message, Button, Icon } from 'antd';

const props = {
  name: 'file',
  // action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
  // headers: {
  //   authorization: 'authorization-text',
  // },
  onChange(info) {
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === 'done') {
      message.success(`${info.file.name} 文件上传成功!`);
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} 文件上传失败!`);
    }
  },
};
function TrainUpload(props) {
  return (
    <Upload {...props}>
      <Button>
        <Icon type="upload" /> {props.name}
      </Button>
    </Upload>
  );
}
export default TrainUpload;
