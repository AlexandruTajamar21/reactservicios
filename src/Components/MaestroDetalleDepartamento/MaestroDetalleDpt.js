import React, { Component } from 'react'
import axios from 'axios'
import Global from '../../Global'
import MaestroDetalleEmp from './MaestroDetalleEmp';


export default class MaestroDetalleDept extends Component {

    selectDepartamentos = React.createRef();
    

    state = {
        departamentos: []
        ,status: true 
        ,iddepartamento:0
    }

    buscarEmpeleados = (e) => {
        if (e!= null) {
            e.preventDefault();
        }
        var dpto = this.selectDepartamentos.current.value;
        this.setState({
            iddepartamento:parseInt(dpto)
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
                {
                    this.state.iddepartamento != 0 &&
                    <MaestroDetalleEmp iddepartamento="10"
                    iddepartamento = {this.state.iddepartamento}/>
                }
            </div>
        )
    }
}
