const { I } = inject();

const loginPage = { // Criamos uma constante
  fields: {
    username: '#user-name',
    password: '#password',
    loginButton: '#login-button'
  },

  login(email: string, senha: string) {
    I.fillField(this.fields.username, email);
    I.fillField(this.fields.password, senha);
    I.click(this.fields.loginButton);
  }
};

export = loginPage; // Exportação compatível com o CodeceptJS