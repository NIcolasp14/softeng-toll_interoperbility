import './styles/App.css';
import { useEffect, useState } from 'react'
import User from './User'
import Operator from './Operator'
import Balance from './Balance'

function App() {
  const [ route, setRoute] = useState("user");
  const [ company, setCompany] = useState("");
  const [ result, setresult] = useState(0);


return (
    <div className="appContainer">
       {
        route === "user"
        ?
          <User company={company} setCompany={setCompany} setRoute={setRoute} />
        :
        route === "balance"
        ?
          <Operator company={company} setRoute={setRoute} setresult={setresult} />
        :
          <Balance result={result} />
      }
    </div>
  );
}

export default App;
