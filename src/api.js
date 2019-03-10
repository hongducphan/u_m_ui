import axios from 'axios';
import AuthUtils from './utils/AuthUtils';

class Api {
  static login(username, password) {
    return axios.post(
      'http://localhost:8080/login',
      {
        username: username,
        password: password,
      },
      AuthUtils.addHeader()
    );
  }
}

export default Api;
