import React , {useState} from 'react'
import "./commonDropDown.css"
import Select from 'react-select';

export default function CommonDropDown (props) {
  let options = [
  ...props.productList
  ];
 
    return (
          <Select 
          className="common-drop-down-container"
          onChange={(value)=>{props.getSelectedItem(value,props.index)}}
          options={options} />
    );
  }

