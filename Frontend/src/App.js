
import './App.css';
import { Login } from './Component/Login';
import { ResourceRequisition } from './Component/ResourceRequisition';
import {  BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom'  
import { AfterLogin } from './Component/AfterLogin';
import { TempRRList } from './Component/TempRRList';

function App() {
  return (
    <div className="App">
      <Router>
       <Routes>
                 <Route exact path='/' element={<Login/>}></Route>
                 <Route exact path='/resource' element={<ResourceRequisition/>}></Route>
                 <Route exact path='/afterlogin' element={<AfterLogin/>}></Route>
                 <Route exact path='/temprrform' element={<TempRRList/>}></Route>
                
          </Routes>
          </Router>

      {/* <ResourceRequisition/> */}
      
    </div>
  );
}

export default App;
