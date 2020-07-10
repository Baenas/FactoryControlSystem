import React, {
  Component
} from "react";

import apiClient from '../../services/LoginService';
class Login extends Component {
  constructor(props) {
    super(props);



    this.state = {
      username: '',
      password: '',
      submitted: false,
      loading: false,
      error: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { history } = this.props;
    this.setState({ submitted: true });
    const { username, password, returnUrl } = this.state;

    // stop here if form is invalid
    if (!(username && password)) {
      return;
    }

    this.setState({ loading: true });

    apiClient.login({ username, password }).then((data) => {
      localStorage.setItem('user', username);
      history.push("/main");
    }).catch((error) => {
      history.push("/");
    })
  }

  render() {
    const { username, password, submitted, loading, error } = this.state;

    return (
      /*   <div className="col-md-6 col-md-offset-3">
          <div className="alert alert-info">
  
          </div>
          <h2>Login</h2>
          <form name="form" onSubmit={this.handleSubmit}>
            <div className={'form-group' + (submitted && !username ? ' has-error' : '')}>
              <label htmlFor="username">Username</label>
              <input type="text" className="form-control" name="username" value={username} onChange={this.handleChange} />
              {submitted && !username &&
                <div className="help-block">Username is required</div>
              }
            </div>
            <div className={'form-group' + (submitted && !password ? ' has-error' : '')}>
              <label htmlFor="password">Password</label>
              <input type="password" className="form-control" name="password" value={password} onChange={this.handleChange} />
              {submitted && !password &&
                <div className="help-block">Password is required</div>
              }
            </div>
            <div className="form-group">
              <button className="btn btn-primary" disabled={loading}>Login</button>
              {loading &&
                <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
              }
            </div>
            {error &&
              <div className={'alert alert-danger'}>{error}</div>
            }
          </form>
        </div> */
      <div>
        <div className="   ui one column stackable center aligned page grid ">
          <div className=" centered   container">
            <div className="nine wide column margin-top ">

              <div className="ui fluid card">
                <div className="content ">
                  <form name="form" onSubmit={this.handleSubmit} className="ui form" method="POST">
                    <div className="field">
                      <label>User</label>
                      <input type="text" name="username" value={username} onChange={this.handleChange} placeholder="User" />
                    </div>
                    <div className="field">
                      <label>Password</label>
                      <input type="password" name="password" value={password} onChange={this.handleChange} placeholder="Password" />
                    </div>
                    <button className="ui primary labeled icon button" type="submit">
                      <i className="unlock alternate icon"></i>
            Login
          </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;