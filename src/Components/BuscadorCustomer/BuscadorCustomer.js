import React, { Component } from 'react'
import axios from 'axios'
import Global from '../../Global'

export default class BuscadorCustomer extends Component {

    cajaIdRef = React.createRef();

    state = {
        customer: {}
        , status: false
    }

    buscarCustomer = (e) =>{
        e.preventDefault();
        var id = this.cajaIdRef.current.value;
        var request = "customers/" + id;
        var url = Global.urlnorthwind + request;
        axios.get(url).then(res =>{
            this.setState({
                customer:res.data.customer
                ,status: true
            })
        });
    }

    render() {
        return (
            <div>
                <h1>Buscador Customer</h1>
                <form onSubmit={this.buscarCustomer}>
                    <label> Introduzca el id:</label>
                    <input type="text" ref={this.cajaIdRef}/>
                    <button onClick={this.buscarCustomer}>
                        Buscar Customer
                    </button>
                </form>
                <hr/>
                {this.state.status &&
                <div>
                    <h1>
                        Empresa: {this.state.customer.companyName}
                    </h1>
                    <h1 style={{color:"red"}}>
                        Nombre: {this.state.customer.contactName}
                    </h1>
                    <h2> Cargo: {this.state.customer.contactTitle}</h2>
                    <h2> City: {this.state.customer.city}</h2>
                </div>
                }
            </div>
        )
    }
}
