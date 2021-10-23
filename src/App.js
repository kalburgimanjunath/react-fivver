import React from 'react';
import './style.css';
import { Header, Footer, Avatar } from './components/index';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
export default function App() {
  return (
    <div>
      <Router>
        <Header />
        <div class="container">
          <Switch>
            <Route path="/Dashboard">
              <Dashboard />
            </Route>
            <Route path="/*" exact>
              <Dashboard />
            </Route>
          </Switch>
        </div>
        <Footer />
      </Router>
    </div>
  );
}
