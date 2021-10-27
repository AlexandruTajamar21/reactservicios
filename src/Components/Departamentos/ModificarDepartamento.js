import axios from 'axios';
import React, { Component } from 'react'
import { NavLink, Redirect } from 'react-router-dom';
import Global from '../../Global';

export default class ModificarDepartamento extends Component {

    cajaNumero = React.createRef();
    cajaNombre = React.createRef();
    cajaLocalidad = React.createRef();

    state = {
        departamento:{}
        ,status:false
    }

    cargaDepartamento =()=>{
        var request = "webresources/departamentos/" + this.props.iddepartamento;
        var url = Global.urlcruddepartamentos + request;
        axios.get(url).then(res=>{
            this.setState({
                departamento:res.data
            })
        })
    }
    componentDidMount = ()=>{
        this.cargaDepartamento();
    }
    modificarDepartamento = (e) =>{
        e.preventDefault();
        var numeroad = parseInt(this.cajaNumero.current.value);
        var nombread = this.cajaNombre.current.value;
        var localidadad = this.cajaLocalidad.current.value;
        var departamentonew = {
            numero: numeroad
            ,nombre: nombread
            ,localidad: localidadad
        };
        var request = "webresources/departamentos/put";
        var url = Global.urlcruddepartamentos + request;
        axios.put(url,departamentonew).then(res=>{
            this.setState({
                status:true
            })
        })
    }

    render() {
        if (this.state.status == true) {
            return (<Redirect to={"/departamentos"}/>);
        }
        if (this.state.departamento!= null) {
            return (
                <div>
                    <h1>Datos</h1>
                        <form>
                            <div className="form-group row">
                                <label>Numero</label>
                                <input type="number" className="form-control" ref={this.cajaNumero} defaultValue={this.state.departamento.numero}></input>
                            </div>
                            <div className="form-group row">
                                <label>Nombre</label>
                                <input type="text" className="form-control" ref={this.cajaNombre} defaultValue={this.state.departamento.nombre}></input>
                            </div>
                            <div className="form-group row">
                                <label>Localidad</label>
                                <input type="text" className="form-control" ref={this.cajaLocalidad} defaultValue={this.state.departamento.localidad}></input>
                            </div>
                            <button className="btn btn-info" onClick={this.modificarDepartamento} style={{margin:"5px"}}> Modificar Departamento </button>
                            <NavLink to="/departamentos" className="btn btn-info" style={{margin:"5px"}}>Volver</NavLink>
                        </form>
                    
                </div>
            )
        }else if(this.state.status == false){
            return (<h1>Cargando datos</h1>);
        }
    }
}
