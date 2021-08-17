import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';
import Entry1Page from './components/pages/Entry1Page';
import Entry2Page from './components/pages/Entry2Page';
import Entry3Page from './components/pages/Entry3Page';

function App() {
  return (
    <>
<style>
@import url('https://fonts.googleapis.com/css2?family=PT+Serif&family=Source+Code+Pro:wght@900&display=swap');
</style>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' component={Services} />
          <Route path='/resume' component={Products} />
          <Route path='/experience' component={SignUp} />
          <Route path='/entry1' component={Entry1Page} />
          <Route path='/entry2' component={Entry2Page} />
          <Route path='/entry3' component={Entry3Page} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
