//Hocs
import layouts from "@Layouts/index";
import { Button, Typography } from "antd";
import React from 'react';
import styles from "./PageNotFound.module.less";
const { Paragraph } = Typography;
const PageNotFound = (props: any) => {

  return (
    <div className={styles?.Page}>
      <Paragraph>Trang này không hiển thị</Paragraph>
      <Paragraph>Có thể liên kết đã hỏng hoặc trang đã bị gỡ.
        Hãy kiểm tra xem liên kết mà bạn đang cố mở có chính xác không.</Paragraph>

      <Button 
      type="primary"
      shape="round" 
      onClick={()=>{
        // history.push("/")
      }} >Đi tới trang chủ</Button>

    </div>
  );
};
PageNotFound.layout=layouts.EmptyLayout;
export default PageNotFound;
