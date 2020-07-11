import React, { Component } from 'react';
import TopBar from '../Bars/Topbar'
import SalasAll from './SalasAll';
import SalasAdd from './SalasAdd';
import SalasEdit from './SalasEdit';
import SalasSingleInfo from './SalasSingleInfo';

class SalasMenuSingle extends Component {
  state = {
    open: "info",
    idSala: "",

  }

  componentDidMount() {
    //  console.log(this.props.props.id)
    this.setState({
      idSala: ""
    })
  }
  render() {
    const { idSala } = this.state;

    return (
      <div className=" ui pad-small ">

        <div className=" ui pad-small ">
          <button onClick={() => this.setState({ open: "info" })} className="ui blue button">Info Sala</button>



        </div>
        {this.state.open === "info" ? <SalasSingleInfo props={{ id: this.props.props.id }} /> : null}


      </div>



    );
  }
}

export default SalasMenuSingle;