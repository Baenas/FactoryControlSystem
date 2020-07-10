import React, { Component } from 'react';
import TopBar from '../Bars/Topbar'
import ApiClient from '../../services/ApiClient'


class SalasEdit extends Component {
  state = {
    id: "",
    seleccionada: [],
    salaTotal: [],
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
    ApiClient.SalasAll().then((salas) => {
      this.setState({ salas: salas.data })
    })
  }
  handleChange = (e) => {
    e.preventDefault();
    const { salas, salaTotal } = this.state;
    this.setState({
      [e.target.name]: e.target.value
    })


    let salasfiltrada = salas.filter(function (salas) {
      return salas.Nombre.toLowerCase() == e.target.value.toLowerCase();
    }).map(function (sala) {
      return sala.Orden;
    })

    this.setState({ seleccionada: salasfiltrada })


    let SalaFinal = salas.filter(function (salas) {
      return salas.Orden == salasfiltrada;
    })


    this.setState({
      salaTotal: SalaFinal,
      id: salaTotal.map(function (sala) { return sala.Encargado })
    })


  }
  handleEdit = (e) => {

    this.setState({
      [e.target.name]: e.target.value
    })
  }
  doEdit = (e) => {
    e.preventDefault();
    const { Nombre, Descripcion, Operarios, Producto, Orden, Encargado, Incio, Fin, FinEstimado, Unidades, UnidadesActuales, Estado } = this.state;
    const { salaTotal } = this.state;
    ApiClient.SalaUpdate({ _id: 11 }, { Nombre: Nombre, Descripcion: Descripcion, Orden: Orden, Encargado: Encargado })

  }
  handleSubmit = (e) => {
    e.preventDefault();


  }
  render() {
    const { seleccionada, salaTotal, Nombre, Descripcion, Operarios, Producto, Orden, Encargado, Incio, Fin, FinEstimado, Unidades, UnidadesActuales, Estado } = this.state;

    return (
      <div>

        <div className=" ui message  pad-small ">

          <h3 className="centered" >Buscar  Sala</h3>

          <form onSubmit={this.handleSubmit} class="ui  form">
            <div class="three fields">
              <div class="  six    wide field  field">
                <h4>Nombre de la  sala</h4>
                <input type="text" onChange={this.handleChange} name="Nombre" placeholder="Nombre" />
              </div>
              <div class="ten   wide field field">
                <h4>Orden de Produccion</h4>
                <input type="text" value={seleccionada} name="Descripcion" placeholder="Descripcion" />
              </div>

            </div>

            <div class="field">

            </div>

          </form>


        </div>
        <div className=" ui message  pad-small ">

          <h3 className="centered" >Modificar   Sala</h3>

          <form onSubmit={this.doEdit} class="ui  form">
            <div class="three fields">
              <div class="  six    wide field  field">
                <h4>Nombre de la  sala</h4>
                <input type="text" defaultValue={salaTotal.map(function (sala) { return sala.Nombre })} name="Nombre" placeholder="Nombre" />
              </div>
              <div class="ten   wide field field">
                <h4>Orden de Produccion</h4>
                <input type="text" defaultValue={salaTotal.map(function (sala) { return sala.Orden })} name="Descripcion" placeholder="Descripcion" />
              </div>
              <div class="ten   wide field field">
                <h4>Encargado</h4>
                <input type="text" defaultValue={salaTotal.map(function (sala) { return sala.Encargado })} onChange={this.handleEdit} name="Encargado" placeholder="Encargado" />
              </div>
            </div>

            <div class="field">

            </div>
            <button class="ui button" type="submit">Actualizar</button>
          </form>


        </div>
      </div>
    );
  }
}

export default SalasEdit; 