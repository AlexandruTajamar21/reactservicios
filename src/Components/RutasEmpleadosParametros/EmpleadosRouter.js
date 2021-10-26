import axios from 'axios';
import React, { Component } from 'react'
import Global from '../../Global';
import { NavLink } from 'react-router-dom';

export default class EmpleadosRouter extends Component {

    state = {
        empleados:[]
        ,status:false
    }

    cargaEmpleados = () =>{
        var request = "/api/empleados";
        var url = Global.urlempleados + request;
        axios.get(url).then(res => {
            this.setState({
                empleados:res.data
                ,status:true
            })
        })
    }

    componentDidMount = () => {
        this.cargaEmpleados();
    }

    render() {
        return (
            <div style={{backgroundColor:"blue"}}>
                <h1>Empleados Router Parametros</h1>
                <ul>
                    {this.state.status && (
                        this.state.empleados.map((emp,index) =>{
                            return( <li key={index}>{emp.apellido}
                            <a href={"/detallesempleado/" + emp.idEmpleado}>Detalles</a>
                            <NavLink to={"/detallesempleado/" + emp.idEmpleado}>Detalle</NavLink></li>)
                        })
                    )}
                </ul>
            </div>
        )
    }
}
