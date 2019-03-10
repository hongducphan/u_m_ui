export default class AuthUtils {
  static addHeader = () => {
    const headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      //   Authorization: 'JWT ' + auth.getToken(),
    };
    return headers;
  };
}
