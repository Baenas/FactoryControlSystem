import React, { Component } from 'react';
import TopBar from '../Bars/Topbar'
import SalasMenuSingle from './SalasMenuSingle'
class SalasSingle extends Component {


  state = {
    idSala: "",
  }

  componentDidMount() {
    //  console.log(this.props.location.state.id)
    this.setState({
      idSala: this.props.location.state.id
    })
  }
  render() {

    const { idSala } = this.state

    return (
      <div>
        <TopBar />

        <SalasMenuSingle props={{ id: this.props.location.state.id }} />

      </div>
    )
  }

}

export default SalasSingle;