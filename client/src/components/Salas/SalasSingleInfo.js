import React, { Component } from 'react';
import ApiClient from '../../services/ApiClient'
import { Redirect } from 'react-router-dom'
class SalasSingleInfo extends Component {
  state = {
    idSala: "",
    sala: [],
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

  componentDidMount() {
    // console.log(this.props.props.id)
    ApiClient.SalaSingle(this.props.props.id).then((salas) => {
      this.setState({
        sala: salas.data
      })

      const { Nombre, Descripcion, Operarios, Producto, Orden, Encargado, Incio, Fin, FinEstimado, Unidades, UnidadesActuales, Estado } = salas.data

      this.setState({ Nombre, Descripcion, Operarios, Producto, Orden, Encargado, Incio, Fin, FinEstimado, Unidades, UnidadesActuales, Estado })

    })

  }
  doEdit = (e) => {

    e.preventDefault();

    const { Nombre, Descripcion, Operarios, Producto, Orden, Encargado, Incio, Fin, FinEstimado, Unidades, UnidadesActuales, Estado, id } = this.state;


    ApiClient.SalaUpdate(this.props.props.id, { Nombre: Nombre, Descripcion: Descripcion, Orden: Orden, Encargado: Encargado })
    this.setState({
      redirect: true
    })
  }

  handleEdit = (e) => {
    this.setState({
      [e.target.name]: e.target.value,

    })
  }
  render() {
    const { redirect } = this.state;

    if (redirect) {
      return <Redirect to='/salas' />;
    }
    const { sala } = this.state;
    return (
      <div>

        <div className="ui  message pad-small ">

          <div>
            <div className=" ui message  pad-small ">

              <h3 className="centered" >Modificar   Sala</h3>

              <form onSubmit={this.doEdit} className="ui  form">
                <div className="three fields">
                  <div className="  six    wide field  field">
                    <h4>Nombre de la  sala</h4>
                    <input type="text" defaultValue={sala.Nombre} disabled onChange={this.handleEdit} name="Nombre" placeholder="Nombre" />
                  </div>
                  <div className="ten   wide field field">
                    <h4>Orden de Produccion</h4>
                    <input type="text" defaultValue={sala.Orden} onChange={this.handleEdit} disabled name="Orden" placeholder="Orden" />
                  </div>
                  <div className="ten   wide field field">
                    <h4>Encargado</h4>
                    <input type="text" defaultValue={sala.Encargado} onChange={this.handleEdit} name="Encargado" placeholder="Encargado" />
                  </div>
                </div>

                <div className="field">
                  <div className="ten   wide field field">
                    <h4>Descripcion</h4>
                    <input type="text" defaultValue={sala.Descripcion} onChange={this.handleEdit} name="Descripcion" placeholder="Descripcion" />
                  </div>
                </div>
                <button className="ui button" type="submit">Actualizar</button>
              </form>


            </div> </div>



        </div>
      </div>
    )
  }
}

export default SalasSingleInfo;