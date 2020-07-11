import React, {
  Component
} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css'

import { PrivateRoute } from './components/PrivateRoute';
import Login from './components/auth/Login'
import Notes from './components/Notes/NotesMain'
import AddNotes from './components/Notes/NotesAdd'
import DayId from './components/Calendar/DayId'
import SalasMain from './components/Salas/SalasMain'
import SalasSingle from './components/Salas/SalasSingle'
import OrdenSingle from './components/Ordenes/OrderMain'

import HomePage from './components/HomePage/HomePage'

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
                <PrivateRoute exact path="/salas" component={SalasMain} />
                <PrivateRoute exact path="/salas/id/:id" component={SalasSingle} />
                <PrivateRoute exact path="/orden" component={OrdenSingle} />

              </div>
            </Router>
          </div>
        </div>
      </div>
    )
  }
}

export default App;