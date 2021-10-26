import React, { Component } from 'react'
import axios from 'axios'
import Global from '../../Global'


export default class MaestroDetalleDepartamento extends Component {

    selectDepartamentos = React.createRef();
    

    state = {
        departamentos: []
        ,empleados: []
        ,status: false
    }

    buscarEmpeleados = (e) => {
        if (e!= null) {
            e.preventDefault();
        }
        var buscado = this.selectDepartamentos.current.value;
        var request = "api/Empleados/EmpleadosDepartamento/" + buscado;
        var url = Global.urlempleados;
        axios.get(url+request).then(res=>{
            this.setState({
                empleados:res.data
            })
        })
        
    }

    cargarDepartamentos = () =>{

        var request = "api/departamentos"
        var url = Global.urldepartamentos;
        axios.get(url+ request).then(res=>{
            this.setState({
                departamentos:res.data
                ,status: true
            })
        })
    }
    componentDidMount = () =>{
        this.cargarDepartamentos();
    }

    render() {
        return (
            <div>
                <h1>Maestro Detalle</h1>
                <form>
                    <select ref={this.selectDepartamentos}>
                        {this.state.status && (
                            this.state.departamentos.map((dept,index)=>{
                                return(<option key={index} value={dept.Numero}>{dept.Nombre}</option>)
                            })
                        )}
                    </select>
                    <button onClick={this.buscarEmpeleados}>Mostrar Empleados</button>
                </form>
                <hr/>
                <ul>
                    {this.state.empleados.map((empl,index) => {
                        return(<li key={index} >Apellido: {empl.apellido} || Oficio: {empl.oficio} || Salario: {empl.salario}</li>)
                    })}
                </ul>
            </div>
        )
    }
}
