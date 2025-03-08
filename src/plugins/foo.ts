export namespace foo {
  if (elli && elli.script) {
    // Initialize event handlers
    elli.script.subscribe('loan', 'open', loanOpened);
  }

  async function loanOpened() {
    // Retrieve the app object and bind loan object
    const loan = await elli.script.getObject('loan');
    const app = await loan.all();
    console.log('loan object from foo', app);
  }
}
