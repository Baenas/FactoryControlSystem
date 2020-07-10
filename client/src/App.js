import React, {
  Component
} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { PrivateRoute } from './components/PrivateRoute';
import Login from './components/auth/Login'
import Notes from './components/Notes/NotesMain'
import AddNotes from './components/Notes/NotesAdd'
import DayId from './components/Calendar/DayId'
import SalasMain from './components/Salas/SalasMain'
import HomePage from './components/HomePage/HomePage'
import 'semantic-ui-css/semantic.min.css'

class App extends Component {
  render() {
    return (
      <div className="jumbotron">
        <div className="container">
          <div className="col-sm-8 col-sm-offset-2">
            <Router>
              <div>
                <Route exact path="/" component={Login} />
                <PrivateRoute exact path="/main" component={HomePage} />
                {<PrivateRoute exact path="/salas" component={SalasMain} />
               /* <PrivateRoute exact path="/addnotes" component={AddNotes} />
                <PrivateRoute exact path="/day" component={DayId} /> */}


              </div>
            </Router>
          </div>
        </div>
      </div>
    )
  }
}

export default App;