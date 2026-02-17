/// <reference types='codeceptjs' />
type steps_file = typeof import('./steps_file');
type loginPage = typeof import('./pages/login_page');
type inventoryPage = typeof import('./pages/inventory.page');

declare namespace CodeceptJS {
  interface SupportObject { I: I, current: any, loginPage: loginPage, inventoryPage: inventoryPage }
  interface Methods extends Playwright {}
  interface I extends ReturnType<steps_file> {}
  namespace Translation {
    interface Actions {}
  }
}
