

//Lib
//Component
import { Select } from "antd";
//Styled Component
import "antd/dist/antd.css";
import React from 'react';
//Const
import { countryFlags } from "./const";
import Image from "next/image";
import Link from 'next/link';
import { useRouter } from 'next/router';

interface IProps {
  onChangeLanguage: Function;
}
const { Option } = Select;


const ButtonSwitchLanguage: React.FC<IProps> = (props) => {
  // const langType = localStorage?.getItem('lang');
  const { onChangeLanguage } = props;
  const { locale, locales, asPath } = useRouter();
  const router = useRouter()

  const handleChangeLanguage=(value:string)=>{

    console.log(value,asPath);
    
    router.push(asPath,undefined,{
      locale:value
    })
  }
 
  return (
    <Select
      style={{ width: "80px" }}
      // showSearch
      // defaultValue={langType ? langType : "en"}
      defaultValue={locale||"en-US"}
      onChange={(value) => {
        handleChangeLanguage(value)
      }}
    >
      {countryFlags.map(item => {
        return <Option
          key={item.id}
          value={item.locale}
        >

          {/* <Link href={asPath} locale={item.locale}> */}
            <img width="30px" src={item.flagIcon.src} alt={item.alt} />
          {/* </Link> */}
        </Option>
      })}
    </Select>
  );
};

export default ButtonSwitchLanguage;