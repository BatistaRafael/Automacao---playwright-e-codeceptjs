const { I } = inject();

export = {
  elements: {
    title: '.title'
  },

  seeInventoryPage() {
    I.waitForElement(this.elements.title, 5);
    I.see('Products', this.elements.title);
  }
};