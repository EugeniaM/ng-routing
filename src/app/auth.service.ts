export class AuthService {
  isAuthenticated = false;

  getAuthentication() {
    const promise = new Promise((res, rej) => {
      setTimeout(() => {
        res(this.isAuthenticated);
      }, 1000);
    });
    return promise;
  }

  login() {
    this.isAuthenticated = true;
  }

  logout() {
    this.isAuthenticated = false;
  }
}
