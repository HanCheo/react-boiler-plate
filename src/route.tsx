import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Home, About, NotFound } from './page';

const PageRouter = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default PageRouter;
