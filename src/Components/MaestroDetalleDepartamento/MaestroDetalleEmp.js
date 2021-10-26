import axios from 'axios';
import React, { Component } from 'react'
import Global from '../../Global'

export default class MaestroDetalleEmp extends Component {

    state = {
        empleados:[]
    }
    cargarEmpleados = () =>{
        var iddepartamento = this.props.iddepartamento;
        var request = "api/Empleados/EmpleadosDepartamento/" + iddepartamento;
        var url = Global.urlempleados + request;
        axios.get(url).then(res =>{
            this.setState({
                empleados:res.data
            });
        });
    }

    getAlert = () =>{
        this.cargarEmpleados();
    }

    componentDidMount = () =>{
        this.cargarEmpleados();
    }
    componentDidUpdate = (e) => {
        if (this.props.iddepartamento != e.iddepartamento) {
            this.cargarEmpleados();
        }
    }

    render() {
        return (
            <div>
                <h1>Empleados del departamento: {this.props.iddepartamento}</h1>
                {this.state.empleados.length > 0 &&
                (
                    this.state.empleados.map((emp,index)=>{
                        return(<h3 key={index} style={{color:"blue"}}>
                            {emp.apellido},{emp.oficio}
                        </h3>)
                    })
                )}
            </div>
        )
    }
}
