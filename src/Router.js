import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import InsertarDepartamentos from './Components/Departamentos/InsertarDepartamentos'
import TablaDepartamentos from './Components/Departamentos/TablaDepartamentos'
import DetalleEmpleadoRouter from './Components/RutasEmpleadosParametros/DetalleEmpleadoRouter'
import EmpleadosRouter from './Components/RutasEmpleadosParametros/EmpleadosRouter'
import MenuDepartamentos from './Components/Departamentos/MenuDepartamentos'
import DetalleDepartamento from './Components/Departamentos/DetalleDepartamento'
import ModificaDepartamento from './Components/Departamentos/ModificarDepartamento'

export default class Router extends Component {
    render() {
        return (
            <BrowserRouter>
            <MenuDepartamentos/>
                <Switch>
                    <Route exact path="/departamentos" component={TablaDepartamentos}></Route>
                    <Route exact path="/createdepartamentos" component={InsertarDepartamentos}></Route>
                    <Route exact path="/modificadepartamento/:numero" render={props=>{
                        var numero = props.match.params.numero;
                        console.log("llega" + numero)
                        return(<ModificaDepartamento iddepartamento={numero}/>)
                    }}></Route>
                    <Route exact path="/detallesdepartamento/:numero" render={props=>{
                        var numero = props.match.params.numero;
                        return(<DetalleDepartamento iddepartamento={numero}/>)
                    }}></Route>
                </Switch>
                
            </BrowserRouter>
        )
    }
}
