export const config: CodeceptJS.MainConfig = {
  tests: './tests/**/*_test.ts',
  output: './output',

  helpers: {
    Playwright: {
      browser: 'chromium',
      url: 'https://www.saucedemo.com',
      show: true
    }
  },

  include: {
    I: './steps_file',
    loginPage: './pages/login_page.ts',
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
