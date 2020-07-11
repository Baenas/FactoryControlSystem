import React, { Component } from 'react';
import TopBar from '../Bars/Topbar'
import ApiClient from '../../services/ApiClient'

class SalasAdd extends Component {
  state = {

    salas: [],
    Nombre: "",
    Descripcion: "",
    Operarios: "",
    Producto: "",
    Orden: "",
    Encargado: "",
    Incio: "",
    Fin: "",
    FinEstimado: "",
    Unidades: "",
    UnidadesActuales: "",
    Estado: "",
  }

  componentDidMount() {
    this.OPGenerator()
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })

  }

  OPGenerator = () => {

    this.setState({ Orden: "aaa" })

  }

  AddSala = (e) => {

    const { Nombre, Descripcion, Operarios, Producto, Orden, Encargado, Incio, Fin, FinEstimado, Unidades, UnidadesActuales, Estado } = this.state;
    e.preventDefault()
    ApiClient.SalaAdd({ Nombre: Nombre, Descripcion: Descripcion, Orden: Orden, Encargado: Encargado, Incio: Incio })
  }
  render() {

    return (
      <div className=" ui message  pad-small ">

        <h3 className="centered" >Añadir Sala</h3>

        <form onSubmit={this.AddSala} class="ui  form">
          <div class="three fields">
            <div class="four   wide field field">
              <h4>Orden de Produccion</h4>
              <input type="text" onChange={this.handleChange} disabled defaultValue={this.state.Orden} name="Orden" placeholder="Orden" />
            </div>
            <div class="ten   wide field field">
              <h4>Descripcion de la  sala</h4>
              <input type="text" onChange={this.handleChange} name="Descripcion" placeholder="Descripcion" />
            </div>

          </div>

          <div class=" three fields">
            <div class="  six    wide field  field">
              <h4>Nombre de la  sala</h4>
              <input type="text" onChange={this.handleChange} name="Nombre" placeholder="Nombre" />
            </div>
            <div class="  four    wide field  field">
              <h4>Encargado de la  sala</h4>
              <input type="text" onChange={this.handleChange} name="Encargado" placeholder="Encargado" />
            </div>

          </div>
          <button class="ui button" type="submit">Añadir</button>
        </form>


      </div>
    );
  }
}

export default SalasAdd; 