import React, { Component } from 'react';
import TopBar from '../Bars/Topbar'
import ApiClient from '../../services/ApiClient'


class SalasEdit extends Component {
  state = {
    hiddensala: 0,
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
  handleChangeName = (e) => {
    e.preventDefault();
    const { salas, salaTotal } = this.state;
    this.setState({
      [e.target.name]: e.target.value
    })
    let salasfiltradaNombre = salas.filter(function (salas) {
      return salas.Nombre.toLowerCase() == e.target.value.toLowerCase();
    }).map(function (sala) {
      return sala.Orden;
    })
    this.setState({ seleccionada: salasfiltradaNombre })
    let SalaFinal = salas.filter(function (salas) {
      return salas.Orden == salasfiltradaNombre;
    })
    this.setState({
      salaTotal: SalaFinal,
      id: salaTotal.map(function (sala) { return sala._id })
    })
  }

  handleChangeOrden = (e) => {
    e.preventDefault();
    const { salas, salaTotal } = this.state;
    this.setState({
      [e.target.name]: e.target.value
    })
    let salasfiltradaNombre = salas.filter(function (salas) {
      return salas.Orden == e.target.value.toUpperCase();
    }).map(function (sala) {
      return sala.Orden;
    })
    this.setState({ seleccionada: salasfiltradaNombre })
    let SalaFinal = salas.filter(function (salas) {
      return salas.Orden == salasfiltradaNombre;
    })
    this.setState({
      salaTotal: SalaFinal,
      id: salaTotal.map(function (sala) { return sala._id }),
      Descripcion: salaTotal.map(function (sala) { return sala.Descripcion }),
      Encargado: salaTotal.map(function (sala) { return sala.Encargado }),
    })


  }

  handleEdit = (e) => {

    this.setState({
      [e.target.name]: e.target.value
    })
  }
  doEdit = (e) => {

    e.preventDefault();

    const { Nombre, Descripcion, Operarios, Producto, Orden, Encargado, Incio, Fin, FinEstimado, Unidades, UnidadesActuales, Estado, id } = this.state;
    const { salaTotal } = this.state;

    const idToUpdate = salaTotal.map(function (sala) { return sala._id })

    ApiClient.SalaUpdate(idToUpdate, { Nombre: Nombre, Descripcion: Descripcion, Orden: Orden, Encargado: Encargado })

  }
  handleSubmit = (e) => {
    e.preventDefault();


  }
  render() {
    const { hiddensala, seleccionada, salaTotal, Nombre, Descripcion, Operarios, Producto, Orden, Encargado, Incio, Fin, FinEstimado, Unidades, UnidadesActuales, Estado } = this.state;

    return (
      <div>

        <div className=" ui message  pad-small ">

          <h3 className="centered" >Buscar  Sala</h3>

          <form onSubmit={this.handleSubmit} className="ui  form">
            <div className="three fields">
              <div className="  six    wide field  field">
                <h4>Nombre de la  sala</h4>
                <input type="text" onChange={this.handleChangeName} name="Nombre" placeholder="Nombre" />
              </div>
              <div className="ten   wide field field">
                <h4>Orden de Produccion</h4>
                <input type="text" onChange={this.handleChangeOrden} name="Orden" placeholder="Orden" />
              </div>

            </div>

            <div className="field">

            </div>
            <button onClick={this.handledoSearch} className="ui button" type="submit">Buscar</button>
          </form>


        </div>

        <div>
          <div className=" ui message  pad-small ">

            <h3 className="centered" >Modificar   Sala</h3>

            <form onSubmit={this.doEdit} className="ui  form">
              <div className="three fields">
                <div className="  six    wide field  field">
                  <h4>Nombre de la  sala</h4>
                  <input type="text" defaultValue={salaTotal.map(function (sala) { return sala.Nombre })} name="Nombre" placeholder="Nombre" />
                </div>
                <div className="ten   wide field field">
                  <h4>Orden de Produccion</h4>
                  <input type="text" defaultValue={salaTotal.map(function (sala) { return sala.Orden })} name="Orden" placeholder="Orden" />
                </div>
                <div className="ten   wide field field">
                  <h4>Encargado</h4>
                  <input type="text" defaultValue={salaTotal.map(function (sala) { return sala.Encargado })} name="Encargado" placeholder="Encargado" />
                </div>
              </div>

              <div className="field">
                <div className="ten   wide field field">
                  <h4>Descripcion</h4>
                  <input type="text" defaultValue={salaTotal.map(function (sala) { return sala.Descripcion })} name name="Descripcion" placeholder="Descripcion" />
                </div>
              </div>
              <button className="ui button" type="submit">Actualizar</button>
            </form>


          </div> </div>


      </div>
    );
  }
}

export default SalasEdit; 