import React,{ Suspense, lazy } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

const Home = lazy(() => import('./pages/Home'));
const Day = lazy(() => import('./pages/Day'));

const App = () => {
  return (
    <BrowserRouter>
      <div className="main-wrapper">
        <Suspense fallback={'Loading...'}>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/:id">
              <Day />
            </Route>
            <Redirect from="*" to="/"/>
          </Switch>
        </Suspense>
      </div>
    </BrowserRouter>
  )
}

export default App;