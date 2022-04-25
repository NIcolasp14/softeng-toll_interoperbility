
import './styles/Balance.css';

import { useState } from "react";

import * as React from 'react';

import operators from './Data'



function Balance(props) {
  const [content, setContent] = useState(operators);

  return <React.Fragment>
    <div className="buttonScreenContainer">
      <div className="titleContainer">Balance</div>
        {
          props.result>0
          ?
            <div className="pos" >
              {props.result}
              {"€"}
            </div>
          :
          props.result==0
          ?
            <div className="eq" >
              {props.result}
              {"€"}
            </div>
          :
            <div className="neg" >
              {props.result}
              {"€"}
            </div>
          
        }
      </div>
  </React.Fragment>
}

export default Balance;