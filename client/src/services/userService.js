
import authHeader from '../helpers/auth-header';



let login = (username, password) => {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password })
  };

  return fetch(`http://localhost:5000/api/users`, requestOptions)
    .then(handleResponse)
    .then(user => {
      // login successful if there's a user in the response
      if (user) {
        // store user details and basic auth credentials in local storage 
        // to keep user logged in between page refreshes
        user.authdata = window.btoa(username + ':' + password);
        localStorage.setItem('user', JSON.stringify(user));
      }

      return user;
    });
}
let logout = () => {
  // remove user from local storage to log user out
  localStorage.removeItem('user');
}
let getAll = () => {
  const requestOptions = {
    method: 'GET',
    headers: authHeader()
  };

  return fetch(`localhost:5000/api/users`, requestOptions).then(handleResponse);
}

let handleResponse = (response) => {
  return response.text().then(text => {
    const data = text && JSON.parse(text);
    if (!response.ok) {
      if (response.status === 401) {
        // auto logout if 401 response returned from api
        this.logout();

      }

      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }

    return data;
  });
}





export default {
  login,
  logout,
  getAll,

}
