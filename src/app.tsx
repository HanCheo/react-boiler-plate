import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './page/home';
import About from './page/about';
import PageNotFound from './page/notFound';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route component={PageNotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
