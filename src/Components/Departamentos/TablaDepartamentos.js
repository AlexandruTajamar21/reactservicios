import axios from 'axios'
import React, { Component } from 'react'
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
                            </tr>
                            
                        </thead>
                        <tbody>
                            {this.state.departamentos.map((dept,index)=>{
                                return(
                                    <tr key={index}>
                                    <th>{dept.numero}</th>
                                    <th>{dept.nombre}</th>
                                    <th>{dept.localidad}</th>
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
