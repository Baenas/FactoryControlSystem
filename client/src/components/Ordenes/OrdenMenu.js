import React, { Component } from 'react';
import TopBar from '../Bars/Topbar'
import OrdenAdd from './OrdenAdd';
import OrdenLista from './OrdenLista';

class OrdenMenu extends Component {
  state = {
    open: "add"
  }

  render() {


    return (
      <div className=" ui pad-small ">

        <div className=" ui pad-small ">
          <button onClick={() => this.setState({ open: "add" })} className="ui blue button">Crear Orden</button>
          <button onClick={() => this.setState({ open: "list" })} className="ui blue button">Lista  Ordenes</button>


        </div>
        {this.state.open === "add" ? <OrdenAdd /> : null}
        {this.state.open === "list" ? <OrdenLista /> : null}


      </div>



    );
  }
}

export default OrdenMenu;