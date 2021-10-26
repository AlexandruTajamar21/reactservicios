import React, { Component } from 'react'
import axios from 'axios'
import Global from '../../Global';

export default class ServicioCustomers extends Component {

    urlcustomers = Global.urlnorthwind;

    state = {
        customers:[]
    }

    cargarCustomers = () =>{
        var request = "customers?format=json"
        axios.get(this.urlcustomers + request).then(res => {
            console.log(res.data);
            this.setState({
                customers: res.data.results
            })
        });
    }

    componentWillMount = () =>{
        this.cargarCustomers();
    }

    render() {
        return (
            <div>
                <h1>Servicios Customer</h1>
                {this.state.customers.map((customer,index)=>{
                    return(<p style={{color:"blue"}} key={customer.id}>{customer.contactName}</p>)
                })}
            </div>
        )
    }
}
