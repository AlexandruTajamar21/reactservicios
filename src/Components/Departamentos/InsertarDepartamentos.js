import axios from 'axios';
import React, { Component } from 'react'
import { Redirect } from 'react-router';
import Global from '../../Global';

export default class InsertarDepartamentos extends Component {

    cajaNumero = React.createRef();
    cajaNombre = React.createRef();
    cajaLocalidad = React.createRef();

    state = {
        mensaje: ""
        ,status:false
    }

    crearTabla = (e) =>{
        e.preventDefault();
        var request = "/webresources/departamentos/post"
        var url = Global.urlcruddepartamentos + request;

        var num = parseInt(this.cajaNumero.current.value);
        var nom = this.cajaNombre.current.value;
        var loc = this.cajaLocalidad.current.value;

        var departamento = {
            numero: num
            ,nombre: nom
            ,localidad:loc
        }

        axios.post(url,departamento).then(res =>{
            this.setState({
                mensaje:"Departamento Insertado"
                ,status: true
            })
        })
    }

    render() {
        if (this.state.status) {
            return(<Redirect to="/departamentos"></Redirect>);
        }
        return (
            <div>
                <h1>Insertar Departamento</h1>
                <form onSubmit={this.crearTabla}>
                    <div className="form-group row">
                        <label>Numero</label>
                        <input type="number" className="form-control" ref={this.cajaNumero}></input>
                    </div>
                    <div className="form-group row">
                        <label>Nombre</label>
                        <input type="text" className="form-control" ref={this.cajaNombre}></input>
                    </div>
                    <div className="form-group row">
                        <label>Localidad</label>
                        <input type="text" className="form-control" ref={this.cajaLocalidad}></input>
                    </div>
                    <button className="btn btn-info" onClick={this.crearTabla}> Insertar Departamento</button>
                </form>
                <h2 style={{color:"red"}}>{this.state.mensaje}</h2>
            </div>
        )
    }
}
