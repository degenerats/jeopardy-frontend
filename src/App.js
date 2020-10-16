import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
} from 'react-router-dom';

import Card from 'react-bootstrap/Card';
import SignInPage from './pages/sign-in/sign-in';

import 'bootstrap/dist/css/bootstrap.min.css';

let authorized = false;

const App = () => (
  <Router>
    <Link to="/">Home</Link>
    <Link to="/login">Login</Link>
    <Switch>
      <Route path="/login">
        <SignInPage auth={authorized} />
      </Route>
      <Route path="/">
        {authorized && (
          <Card>
            <Card.Body>
              Hello, Jeopardy!
            </Card.Body>
          </Card>
        )}
        {!authorized && (
          <Redirect to={{ pathname: '/login' }} />
        )}
      </Route>
    </Switch>
  </Router>
);

export default App;
