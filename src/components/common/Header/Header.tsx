//Lib
//Icon
import {logo} from "@Assets/icons";
import ButtonSwitchLanguage from "@Common/ButtonSwitchLanguage/ButtonSwitchLanguage";
//Component
import React from "react";
import Link from 'next/link'
import Image from 'next/image'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

//Const
import { headerData } from "./const";
//styled
import styles from "./Header.module.less";
const Header = () => {
  const { t } = useTranslation('common')

  return (
    <div className={styles.Component}>
      {/* <Link  href="/"><a><Image src={logo} alt="Icon" /></a>
      </Link> */}
      <div className={styles.Navigator}>
        {headerData.map((item, index) => {
          return <Link key={index} href={item.path}  ><a>{t(item.keyLang)}</a></Link>
        })}
      </div>
      <div className={styles.ButtonLanguage}>
        <ButtonSwitchLanguage onChangeLanguage={(langType: string) => {
          // i18n.changeLanguage(langType);
          // localStorage.setItem('lang', langType)
        }} />
      </div>
    </div>
  );
};

export default Header;
