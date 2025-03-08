export namespace bar {
  if (elli && elli.script) {
    // Initialize event handlers
    elli.script.subscribe('loan', 'open', loanOpened);
  }

  async function loanOpened() {
    // Retrieve the app object and bind loan object
    const loan = await elli.script.getObject('loan');
    const app = await loan.all();

    console.log('loan object from bar', app);

    const http = await elli.script.getObject('http');
    http.get('https://jsonplaceholder.typicode.com/todos/1').then((response) => {
      console.log('response from bar', response);
    });
  }
}
