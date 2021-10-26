import React, { Component } from 'react'
import logo from './logo.svg'
import "bootstrap/dist/css/bootstrap.min.css"
import $ from "jquery"
import Popper from 'popper.js'
import "bootstrap/dist/js/bootstrap.bundle"
import MenuDepartamentos from '../Departamentos/MenuDepartamentos'
import TablaDepartamentos from '../Departamentos/TablaDepartamentos'
import Router from '../../Router'



export default class App extends Component {
  render() {
    return (
      <div>
        <Router></Router>
      </div>
    )
  }
}

