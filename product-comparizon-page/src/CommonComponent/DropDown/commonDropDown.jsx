import React  from 'react'
import "./commonDropDown.css"

export default function commonDropDown (props) {

  let inputArray = [
    {
      value: "arsalan",
      displayValue: "Arsalan",
      key:"key1"
    },
    {
      value: "arsalan1",
      displayValue: "Arsalan1",
      key:"key2"
    },
    {
      value: "arsalan2",
      displayValue: "Arsalan2",
      key:"key3"
    },
    {
      value: "arsalan3",
      displayValue: "Arsalan3",
      key:"key4"
    },
  ];
 //importance of key
    return (
          <select value={"grapefruit"} className="common-drop-down-container" onChange={(e)=>{console.log(e.target.value)}}>
           {inputArray.map((option,index)=>{
             return  <option key={option.key} value={option.value}>{option.displayValue}</option>
           })}
          </select>
    );
  }

