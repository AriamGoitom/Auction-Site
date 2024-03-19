import React from 'react'
import Auktioner from './components/Auctions'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Auktioner} />
        <Route path="/auktion/:id" component={AuktionDetaljer} />
      </Switch>
    </Router>
  );
}

export default App;
