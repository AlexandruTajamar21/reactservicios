import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import InsertarDepartamentos from './Components/Departamentos/InsertarDepartamentos'
import TablaDepartamentos from './Components/Departamentos/TablaDepartamentos'
import DetalleEmpleadoRouter from './Components/RutasEmpleadosParametros/DetalleEmpleadoRouter'
import EmpleadosRouter from './Components/RutasEmpleadosParametros/EmpleadosRouter'
import MenuDepartamentos from './Components/Departamentos/MenuDepartamentos'

export default class Router extends Component {
    render() {
        return (
            <BrowserRouter>
            <MenuDepartamentos/>
                <Switch>
                    <Route exact path="/departamentos" component={TablaDepartamentos}></Route>
                    <Route exact path="/createdepartamentos" component={InsertarDepartamentos}></Route>
                </Switch>
                
            </BrowserRouter>
        )
    }
}
