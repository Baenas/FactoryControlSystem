import React, { Component } from 'react';
import TopBar from '../Bars/Topbar'
import SalasAll from './SalasAll';
import SalasAdd from './SalasAdd';
import SalasEdit from './SalasEdit';


class SalasMenu extends Component {
  state = {
    open: "all"
  }

  render() {


    return (
      <div className=" ui pad-small ">

        <div className=" ui pad-small ">
          <button onClick={() => this.setState({ open: "all" })} className="ui blue button">HOME</button>
          <button onClick={() => this.setState({ open: "add" })} className="ui green button">Añadir  Sala</button>
          <button onClick={() => this.setState({ open: "edit" })} className="ui yellow button">Editar  Sala</button>

        </div>
        {this.state.open === "all" ? <SalasAll /> : null}
        {this.state.open === "add" ? <SalasAdd /> : null}
        {this.state.open === "edit" ? <SalasEdit /> : null}

      </div>



    );
  }
}

export default SalasMenu;