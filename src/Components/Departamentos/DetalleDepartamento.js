import axios from 'axios';
import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import Global from '../../Global';

export default class DetalleDepartamento extends Component {

    state = {
        departamento: {}
        ,status: false
    }
    
    cargaDepartamento =()=>{
        var request = "/webresources/departamentos/" + this.props.iddepartamento;
        var url = Global.urlcruddepartamentos + request;
        axios.get(url).then(res=>{
            this.setState({
                departamento:res.data
                ,status:true
            })
        })
    }

    componentDidMount = () =>{
        this.cargaDepartamento();
    }
    
    render() {
        return (
            <div>
                <table className="table table-bordered table-striped">
                    <thead className="table ">
                        <tr>
                            <th>Numero</th>
                            <th>Nombre</th>
                            <th>Localidad</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                {this.state.departamento.numero}
                            </td>
                            <td>
                                {this.state.departamento.nombre}
                            </td>
                            <td>
                                {this.state.departamento.localidad}
                            </td>
                            <td style={{width:"10%"}}>
                                <NavLink to="/departamentos" className="btn btn-dark"> Volver</NavLink>
                            </td>
                            <td style={{width:"10%"}}>
                                <NavLink to={"/modificadepartamento/" + this.state.departamento.numero} className="btn btn-dark"> Modificar</NavLink>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}
