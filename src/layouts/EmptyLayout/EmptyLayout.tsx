//Lib
import Footer from "@Common/Footer/Footer";
//Components
import Header from "@Common/Header/Header";
import React from "react";
//Styled
import styles from "./EmptyLayout.module.less";

interface IProps {

  children ?:any;
}

const EmptyLayout = (props: IProps) => {
  const {children} =props;
  return (
    <div className={styles.Layout}>
      <div className={styles.Outlet}>{children}</div>
    </div>
  );
};

export default EmptyLayout;
