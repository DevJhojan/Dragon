import {HeaderSimple} from "../src/jsx/Header"

import { Routes, Route} from "react-router-dom";

import LogI from './jsx/LogIn';
import SigU from './jsx/SingUp';

function App() {
  return (
    <div>
      <HeaderSimple title="Dragons" link1="/log" link2="/sig" nameOne="Entrada" nameTwo="Registrarce"/>
      <div>
        <Routes>
            <Route path='/log' element={<LogI link1="/loginin"/>}/>
            <Route path='/sig' element={<SigU />}/>
            <Route path='/loginin' element={<SigU />}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
