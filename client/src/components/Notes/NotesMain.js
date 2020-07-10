import React, { Component } from 'react'
import TopBar from '../Bars/Topbar'
import ApiClient from '../../services/ApiClient'
class NotesMain extends Component {

  state = {
    notes: []
  }

  componentDidMount() {
    ApiClient.allNote().then((notes) => {
      this.setState({ notes: notes.data })
    })
  }

  showNotes = () => {
    const { notes } = this.state
    const note = notes.map((nota, index) => {

      return (
        <div key={index}>
          <div className="ui  message">
            <div className="header">
              {nota.nombre}
            </div>
            <ul className="list">
              {nota.texto}
            </ul>
            <br></br>

            <a className="ui teal right aligned   tag label">{nota.categoria}</a>    <a className="ui blue right aligned   tag label">{nota.dia}</a>  {}
          </div>

        </div>
      )
    })
    return note
  }
  render() {


    return (
      <div>
        <TopBar />
        <br></br>
        <a href="/addnotes"> <button className="ui centered teal container button">New Note</button></a>
        <h3 className="ui block header">
          Latest Notes on the System
</h3>
        {this.showNotes()}
      </div>
    )
  }
}
export default NotesMain