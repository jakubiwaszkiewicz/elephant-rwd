import elephants from './elephants.jpg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <h1>Let's start <span>getting a little</span> more fancy.</h1>
        <img src={elephants} alt="elephants"/>
      </header>
      <section className="section--1 columns" >
          <div className="col col--1 col--bright">
              <h2>Dolor sit amet</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec interdum lorem tortor,
                  eu interdum eros accumsan et. Nulla ornare ex nibh. Quisque blandit, massa a fringilla facilisis,
                  elit lectus sodales tellus, ac condimentum nisl quam quis risus. Phasellus sed odio nunc.
                  Phasellus est arcu, ultrices eu dui quis, egestas sollicitudin ante. Nunc condimentum id eros at venenatis.
                  Suspendisse eget posuere dolor.</p>
          </div>
          <div className="col col--2 col--bright">
          <h2>Dolor sit amet Donec</h2>
          <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec interdum lorem tortor,
              eu interdum eros accumsan et. Nulla ornare ex nibh. Quisque blandit, massa a fringilla facilisis,
              elit lectus sodales tellus, ac condimentum nisl quam quis risus. Phasellus sed odio nunc.
              Phasellus est arcu, ultrices eu dui quis, egestas sollicitudin ante. Nunc condimentum id eros at venenatis.
              Suspendisse eget posuere dolor, ac condimentum nisl quam quis risus. Phasellus sed odio nunc.
              Phasellus est arcu, ultrices eu dui quis, egestas sollicitudin ante. Nunc condimentum id eros at venenatis.
              Suspendisse eget posuere dolor, ac condimentum nisl quam quis risus. Phasellus sed odio nunc.
              Phasellus est arcu, ultrices eu dui quis, egestas sollicitudin ante. Nunc condimentum id eros at venenatis.
              Suspendisse eget posuere dolor, Suspendisse eget posuere dolor.</p>
          </div>
          <div className="col col--1 col--dark">
          <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec interdum lorem tortor,
              eu interdum eros accumsan et. Nulla ornare ex nibh. Quisque blandit, massa a fringilla facilisis,
              elit lectus sodales tellus, ac condimentum nisl quam quis risus. Phasellus sed odio nunc.
              Phasellus est arcu, ultrices eu dui quis, egestas sollicitudin ante. Nunc condimentum id eros at venenatis.
              Suspendisse eget posuere dolor, Suspendisse eget posuere dolor, Suspendisse eget posuere dolor.</p>
          </div>
      </section>
      <section className="section--2 columns">
          <div className="col col--3 col--bright">
          <h2>Dolor sit amet consectetur adipiscing</h2>
          <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec interdum lorem tortor,
              eu interdum eros accumsan et. Nulla ornare ex nibh. Quisque blandit, massa a fringilla facilisis,
              elit lectus sodales tellus, ac condimentum nisl quam quis risus. Phasellus sed odio nunc.
              Phasellus est arcu, ultrices eu dui quis, egestas sollicitudin ante. Nunc condimentum id eros at venenatis.
              Suspendisse eget posuere dolor.</p>
          </div>
          <div className="col col--1 col--dark">
          <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec interdum lorem tortor,
              eu interdum eros accumsan et. Nulla ornare ex nibh. Quisque blandit, massa a fringilla facilisis,
              elit lectus sodales tellus, ac condimentum nisl quam quis risus.</p>
          </div>
      </section>
    </div>
  );
}

export default App;