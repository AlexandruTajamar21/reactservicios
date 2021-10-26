import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App/App';
import reportWebVitals from './reportWebVitals';
import ServicioCustomers from './Components/ServicioCustomers/ServicioCustomers';
import BuscadorCustomer from './Components/BuscadorCustomer/BuscadorCustomer';
import BuscadorCoche from './Components/BuscadorCoche/BuscadorCoche';
import MaestroDetalleDepartamento from './Components/MaestroDetalleDepartamento/MaestroDetalleDepartamento';
import MaestroDetalleEmp from './Components/MaestroDetalleDepartamento/MaestroDetalleEmp';
import MaestroDetalleDept from './Components/MaestroDetalleDepartamento/MaestroDetalleDpt';
import Router from './Router';
import { BrowserRouter } from 'react-router-dom';
import EmpleadosRouter from './Components/RutasEmpleadosParametros/EmpleadosRouter';
import MenuDepartamentos from './Components/Departamentos/MenuDepartamentos';

ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
