import React, { Component } from 'react'
import axios from 'axios'
import Global from '../../Global'

export default class BuscadorCoche extends Component {

    cajaMarca = React.createRef();

    state = {
        coche: [],
        temp:[]
    }

    buscarCoche = (e) =>{
        if (e!=null) {
            e.preventDefault();
        }
        var coches = this.state.temp;
        var marca = this.cajaMarca.current.value.toLowerCase();
        //var filter = coches.filter(car => car.marca.toLowerCase().includes(marca));
        var alternativa = [];
        for (let i = 0; i < coches.length; i++) {
            if (coches[i].marca.toLowerCase().includes(marca)) {
                alternativa.push(coches[i]);
            }
        }
        this.setState({
            coche: alternativa
        })
    }
    cargaCoches = (e) =>{
        if(e != null)
        {
            e.preventDefault();
        }
        var request = "webresources/coches"
        var url = Global.urlcoches;
        axios.get(url + request).then(res=>{
            this.setState({
                coche:res.data,
                temp:res.data
            })
        })
    }
    componentDidMount = () =>{
        this.cargaCoches();
    }

    render() {
        return (
            <div>
                <h1>Buscador Coches</h1>
                <form>
                    <label> Introduzca el id:</label>
                    <input type="text" required ref={this.cajaMarca} onChange={this.buscarCoche}/>
                    <button onClick={this.buscarCoche}>
                        Buscar Coche
                    </button>
                    <button onClick={this.cargaCoches}>
                        Cargar Coches
                    </button>
                </form>
                <hr/>
                <div>
                    <table border="2px">
                        <thead>
                            <tr >
                                <th>IdCoche</th>
                                <th>Marca</th>
                                <th>Modelo</th>
                                <th>Conductor</th>
                                <th>Imagen</th>
                            </tr>
                        </thead>
                        
                        <tbody>
                                {this.state.coche.map((aux,index)=>{
                                    return(
                                    <tr key={index}>
                                        <td>{aux.idcoche}</td>
                                        <td>{aux.marca}</td>
                                        <td>{aux.modelo}</td>
                                        <td>{aux.conductor}</td>
                                        <td><img src={aux.imagen} style={{width:"50px",height:"50px"}}></img></td>
                                    </tr>)
                                })}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
