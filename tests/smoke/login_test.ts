import { loginData } from '../../data/loginData';


Feature('Login');

Before(({ I }) => {
  I.amOnPage('/');
});


 
Scenario('Login com sucesso @regression', ({ loginPage, inventoryPage }) => {

  loginPage.login(
    loginData.usuarioValido.email,
    loginData.usuarioValido.senha
  );

  inventoryPage.seeInventoryPage();

});



Scenario('Login inválido @negative', ({ I, loginPage }) => {

  loginPage.login('standard_user', 'senha_errada');

  I.see('Epic sadface');
  I.dontSeeInCurrentUrl('/inventory');
});
