export const config: CodeceptJS.MainConfig = {
  tests: './tests/**/*_test.ts',
  output: './output',

  helpers: {
    Playwright: {
      browser: 'chromium',
      url: 'https://www.saucedemo.com',
      show: false
    }
  },

  include: {
    I: './steps_file',
    loginPage: './pages/loginpage.ts',
    inventoryPage: './pages/inventory.page.ts'
  },

  plugins: {
    htmlReporter: {
      enabled: true,
      output: './output',
      open: 'never',
      reportFileName: 'report.html'
    }
  },

  name: 'framework-automation'
};
