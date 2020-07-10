import React, { Component } from 'react'
import TopBar from '../Bars/Topbar'
import ApiClient from '../../services/ApiClient'
import moment from 'moment'

class NotesAdd extends Component {

  state = {
    title: "",
    cat: "",
    text: "",
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })

  }
  handleSubmit = (e) => {
    const { title, cat, text } = this.state
    e.preventDefault()
    ApiClient.AddOneNote({ nombre: title, texto: text, categoria: cat, url: "none", dia: moment().format('LL') })
  }



  render() {


    return (
      <div>
        <TopBar />
        <br></br>
        <form onSubmit={this.handleSubmit} className="ui container form">
          <div className="field">
            <label>Title</label>
            <input onChange={this.handleChange} name="title" type="text" />
          </div>
          <div className="field">
            <label>Category</label>
            <select onChange={this.handleChange} className="ui dropdown" name="cat">
              <option value="">Select</option>
              <option value="Personal">Personal</option>
              <option value="Gaming">Gaming</option>
              <option value="Work">Work</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div className="inline field">
            <textarea onChange={this.handleChange} placeholder="Tell us more" name="text" rows="3"></textarea>
          </div>
          <button type="submit" className="ui submit button">Add Note </button>

          <div className="ui error message"></div>

        </form>
        <script type="text/javascript">


        </script>
      </div>

    )
  }
}
export default NotesAdd