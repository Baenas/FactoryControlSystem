import React, { Component } from 'react';
import ApiClient from '../../services/ApiClient'
import { Redirect } from 'react-router-dom'

import moment from 'moment'

class OrdenAdd extends Component {

  state = {
    Ordenes: [],
    LastOrden: "",
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
    redirect: false,
  }
  generate = () => {
    const { Ordenes, SoloOrden, Orden, LastOrden } = this.state
    let letra = "P"
    var year1 = moment().format('YY');
    let numero = 0
    ApiClient.OrdenesAll().then((salas) => {
      this.setState({ Ordenes: salas.data })
      return salas;
    }).then((salas) => {
      let recortadas = salas.data.map(function (o) { return o.Orden.substr(3) })
      let ultimas = Math.max(...recortadas)
      this.setState({
        LastOrden: ultimas
      })



      const found = salas.data.find(element => element.Orden === year1 + letra + ultimas)
      console.log(found)
      if (found) {
        numero = ultimas += 1;
        this.setState({ Orden: year1 + letra + numero })
      } else {
        this.setState({ Orden: year1 + letra + numero })
      }
    })








  }

  componentDidMount() {
    this.generate();
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })

  }
  addOrden = (e) => {
    e.preventDefault();
    const { Nombre, Descripcion, Operarios, Producto, Orden, Encargado, Incio, Fin, FinEstimado, Unidades, UnidadesActuales, Estado } = this.state;

    ApiClient.AddOrden({ Nombre: Nombre, Descripcion: Descripcion, Orden: Orden, Encargado: Encargado })
    this.setState({
      redirect: true
    })
  }

  render() {
    const { redirect } = this.state;
    if (redirect) {
      return <Redirect to='/orden' />;
    }
    const { Nombre, Descripcion, Operarios, Producto, Orden, Encargado, Incio, Fin, FinEstimado, Unidades, UnidadesActuales, Estado } = this.state;


    return (
      <div>



        <div>

          <div className=" ui message  pad-small ">
            <form onSubmit={this.addOrden} className="ui  form">
              <div className="four  fields">
                <div className="  four     wide field  field">
                  <h4>Orden de Produccion</h4>
                  <input type="text" disabled value={Orden} name="Orden" placeholder="Orden" />

                </div>
                <div className="  six    wide field  field">
                  <h4>Nombre de la  sala</h4>
                  <input type="text" onChange={this.handleChange} name="Nombre" placeholder="Nombre" />
                </div>
                <div className="ten   wide field field">
                  <h4>Encargado</h4>
                  <input type="text" onChange={this.handleChange} name="Encargado" placeholder="Encargado" />
                </div>
                <div className="ten   wide field field">
                  <h4>Descripcion</h4>
                  <input type="text" onChange={this.handleChange} name name="Descripcion" placeholder="Descripcion" />
                </div>
              </div>
              <div className="field">
              </div>

              <div className="ui  form">
                <div className="one  field">
                  <button className="ui button" type="submit">Actualizar</button>

                </div>

              </div>
            </form>
          </div> </div>
      </div>
    )
  }

}

export default OrdenAdd