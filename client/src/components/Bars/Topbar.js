import React, { Component } from 'react'
import { Input, Menu, Segment } from 'semantic-ui-react'
import { Link, Redirect } from 'react-router-dom'
export default class TopBar extends Component {



  render() {

    return (
      <div>
        <Menu pointing>
          <Link to='/main' >
            <Menu.Item
              name='/main'
            /> </Link>
          <Link to='/orden'>
            <Menu.Item
              name='/orden'
            /></Link>
          <Link to='/salas'>
            <Menu.Item
              name='/salas'
            /></Link>




        </Menu>
        <Menu pointing>
          <Menu.Item >

            {localStorage.getItem('user')}
          </Menu.Item>
        </Menu>
      </div >
    )
  }
}
