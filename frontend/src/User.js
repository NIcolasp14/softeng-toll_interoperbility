import "./styles/User.css";

import { useState } from "react";

import * as React from 'react';

import operators from './Data'


function User(props) {
  const [content, setContent] = useState(operators);

  return <React.Fragment>
    <div className="buttonScreenContainer">
      <div className="titleContainer">Select User</div>
        {
          operators.map((company, index) => {
            return (
            <div id={index} 
            key={index}
            onClick={e => 
              { props.setRoute("balance") 
                props.setCompany(company.id)
              }} 
            className="company">
              {company.name}
            </div>
            );  
          }  
          )
        }
      </div>
  </React.Fragment>
}

export default User;
