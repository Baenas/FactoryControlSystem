import React, { Component } from 'react';
import TopBar from '../Bars/Topbar'
import ApiClient from '../../services/ApiClient'

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
          <div className="ui  message">
            <div className="header">
              {nota.Nombre} -  {nota.Orden}
            </div>
            <div className="header">
              {nota.Descripcion}
            </div>


            {nota.Encargado}


          </div>

        </div>
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