import React, { Component } from 'react';
import TopBar from '../Bars/Topbar';
import SalasMenu from './SalasMenu';
class SalasMain extends Component {

  render() {

    return (
      <div >
        <TopBar />

        <SalasMenu />
      </div>
    );
  }
}

export default SalasMain;