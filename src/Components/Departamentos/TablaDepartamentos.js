import axios from 'axios'
import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import Global from '../../Global'

export default class TablaDepartamentos extends Component {

    state={
        departamentos: []
        , status: false
    }

    cargarDepartamentos = () =>{
        var request = "/webresources/departamentos";
        var url = Global.urlcruddepartamentos + request;
        axios.get(url).then(res=>{
            this.setState({
                departamentos:res.data
                , status:true
            })
        })
    }
    componentDidMount = () =>{
        this.cargarDepartamentos();
    }

    borraDepartamento = (numero) =>{
        var request = "/webresources/departamentos/delete/" + parseInt(numero);
        var url = Global.urlcruddepartamentos + request;
        axios.delete(url).then(res=>{
            this.cargarDepartamentos();
        })
    }

    render() {
        if (this.state.status) {
            return (
                <div>
                    <table className="table table-bordered table-striped">
                        <thead className="table-dark">
                            <tr>
                                <th>Numero</th>
                                <th>Nombre</th>
                                <th>Localidad</th>
                                <th></th>
                                <th></th>
                                <th></th>
                            </tr>
                            
                        </thead>
                        <tbody>
                            {this.state.departamentos.map((dept,index)=>{
                                return(
                                    <tr key={index}>
                                    <th>{dept.numero}</th>
                                    <th>{dept.nombre}</th>
                                    <th>{dept.localidad}</th>
                                    <th style={{width:"5%"}}><NavLink to={"/detallesdepartamento/" + dept.numero} className="btn btn-info"> Detalles</NavLink></th>
                                    <th style={{width:"5%"}}><NavLink to={"/modificadepartamento/" + dept.numero} className="btn btn-info"> Modifica</NavLink></th>
                                    <th style={{width:"5%"}}><button onClick={()=> this.borraDepartamento(dept.numero)} className="btn" style={{backgroundColor:"red"}}>Borrar</button></th>
                                </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            )
        }
        else{
            return(<h1>Cargando Registros...</h1>)
        }
        
    }
}
