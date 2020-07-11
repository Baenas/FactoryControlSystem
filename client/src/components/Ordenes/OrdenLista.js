import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import ApiClient from '../../services/ApiClient'

class OrdenLista extends Component {
  state = {
    ordenes: [],
    redirect: false,
  }
  componentDidMount() {
    ApiClient.OrdenesAll().then((ordenes) => {
      this.setState({ ordenes: ordenes.data })
    })
  }
  renderTableData() {
    return this.state.ordenes.map((items, index) => {
      const { Orden, Nombre, Descripcion } = items //destructuring
      return (
        <tr key={index}>
          <td>{Orden}</td>
          <td>{Nombre}</td>
          <td>{Descripcion}</td>

        </tr>
      )
    })
  }
  render() {
    const { redirect, ordenes } = this.state;
    if (redirect) {
      return <Redirect to='/orden' />;
    }
    return (
      <div>
        <table class="ui celled table">
          <thead>
            <tr>
              <th>Orden</th>
              <th>Status</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            {this.renderTableData()}
          </tbody>

        </table>
      </div>
    )
  }
}
export default OrdenLista;