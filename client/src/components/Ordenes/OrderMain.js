import React, { Component } from 'react';
import TopBar from '../Bars/Topbar'
import ApiClient from '../../services/ApiClient'
import OrdenMenu from './OrdenMenu'
class OrderMain extends Component {

  render() {
    return (
      <div>
        <TopBar />
        <OrdenMenu />
      </div>
    )
  }
}

export default OrderMain