import React, { Component } from 'react';
import TopBar from '../Bars/Topbar'
import ApiClient from '../../services/ApiClient'
import { Link } from 'react-router-dom'
class SalasAll extends Component {
  state = {

    salas: []
  }

  componentDidMount() {
    ApiClient.SalasAll().then((salas) => {
      this.setState({ salas: salas.data })
    })
  }

  showNotes = () => {
    const { salas } = this.state
    const sala = salas.map((nota, index) => {

      return (
        <div key={index}>
          <Link to={{ pathname: "/salas/id/" + nota._id, state: { id: nota._id } }}>

            <div className="ui  message">
              <div className="header">
                {nota.Nombre} -  {nota.Orden}
              </div>
              <div className="header">
                {nota.Descripcion}
              </div>


              {nota.Encargado}


            </div>
          </Link>
        </div >
      )
    })
    return sala
  }
  render() {

    return (
      <div className=" ui pad-small ">


        {this.showNotes()}

      </div>
    );
  }
}

export default SalasAll; 