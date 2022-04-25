import './styles/Operator.css';

import { useState } from "react";

import * as React from 'react';

import operators from './Data';

import moment from 'moment';


function Operator(props) {

  const callapi = (op2) => {
    const today = new Date;//.now(); 
    const tday = Number(moment(today).format('YYYYMMDD'));
    const oneyearago = Number(tday-10000);
    //fetch(`http://localhost:9103/interoperability/api/DebtSettlement/${props.company}/${op2}/${oneyearago}/${tday}`) 
    fetch(`http://localhost:9103/interoperability/api/DebtSettlement/${props.company}/${op2}/20201001/20201101`)   
      .then(response => response.json())
      .then(data => {
        if (data.DebtSettlement) 
          props.setresult(data.DebtSettlement.money_owed_by1_or_to1)
          props.setRoute("result")
      });
  }              

  return <React.Fragment>
    <div className="buttonScreenContainer">
      <div className="titleContainer">Select Operator</div>
        {
          operators.map((company, index) => {
            if (company.id != props.company) {
            return (
            <div id={index} 
            key={index}
            onClick={e => 
            { 
              callapi(company.id)
            }
          } 
              className="button">
              {company.name}
            </div> 
            ); 
          }
          }
          )
        }
      </div>
  </React.Fragment>
}


export default Operator;

