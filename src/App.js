import Inicio from './paginas/Inicio'
import Registro from './paginas/Registro'
import Login from './paginas/Login'
import Buscar from './paginas/Buscar'
import {Route,Routes} from 'react-router-dom'
import './App.css';

function App() {
  return (
    <div className="container">
      <Routes>
        <Route path="/allyprice/" element={<Inicio/>}/>
        <Route path="/allyprice/Registro" element={<Registro/>}/>
        <Route path="/allyprice/Login" element={<Login/>}/>
        <Route path="/allyprice/Buscar" element={<Buscar/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
