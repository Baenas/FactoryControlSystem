import React, { Component } from 'react';
import TopBar from '../Bars/Topbar'
import ApiClient from '../../services/ApiClient'

class DayId extends Component {
  state = {
    day: [],
    notes: []

  }
  componentDidMount() {
    this.setState({ day: this.props.location.state.dia })

    ApiClient.allNote().then((notes) => {
      this.setState({ notes: notes.data })
    })
  }
  showNotes = () => {
    const { notes } = this.state
    const note = notes.filter(note => note.dia === this.state.day).map((nota, index) => {

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

    const { day } = this.state;
    return (

      <div>
        <TopBar />
        <h3 className="ui block centered header">
          {day}
        </h3>
        {this.showNotes()}
      </div>
    )

  }
}
export default DayId;