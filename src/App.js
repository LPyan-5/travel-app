import React from 'react';
import './App.css';
import FormDialog from './components/Dialog';
import PropTypes from "prop-types";
import Home from'./components/HomePage';
import NotFound from './components/NotFound';
import toDo from './components/ToDo';
import Country from './components/Country';
import { Route, BrowserRouter as Router, Switch} from 'react-router-dom'


const App = (props) => {
  localStorage.clear();
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/login' component={FormDialog}/>
          <Route path='/todo' component={toDo}/>
          <Route path='/gql' component={Country}/>
          {/* <Route path='/signup' component={SignUp}/> */}
          <Route component={NotFound}/>
        </Switch>
      </div>
    </Router>
  );
} 

 
App.propTypes = {
  classes: PropTypes.shape({
    main: PropTypes.string
  })
};
export default App;

