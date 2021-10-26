import axios from 'axios';
import React, { Component } from 'react'
import Global from '../../Global';

export default class DetalleEmpleadoRouter extends Component {

    constructor(props){
        super(props);
        console.log("ID Empleado: " + this.props.idempleado);
    }
    
    state = {
        empleado: {}
        ,status: false
    }

    buscarEmpleados = () =>{
        var request = "/api/empleados/" +this.props.idempleado;
        var url = Global.urlempleados + request;
        axios.get(url).then(res=>{
            this.setState({
                empleado:res.data
                ,status: true
            });
        });
    }
    componentDidMount = () => {
        this.buscarEmpleados();
    }

    componentDidUpdate = (oldprops) =>{
        if (this.props.idempleado != oldprops.idempleado) {
            this.buscarEmpleados();
        }
    }
    render() {
        return (
            <div>
                <h1>Detalles Empleado</h1>
                {this.state.status && (
                    <div>
                        <h2 style={{color:"red"}}>
                            {this.state.empleado.apellido}
                        </h2>
                        <h2 style={{color:"blue"}}>
                            {this.state.empleado.oficio}
                        </h2>
                        <h2 style={{color:"orange"}}>
                            {this.state.empleado.salario}
                        </h2>
                    </div>
                )}
            </div>
        )
    }
}
