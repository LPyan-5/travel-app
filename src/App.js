import React from 'react';
//import {withStyles} from '@material-ui/core/styles';
import './App.css';
import FormDialog from './Dialog.js';
import PropTypes from "prop-types";
import Home from'./homePage.js'
import Notfound from './notFound.js'
import SignUp from './signUp.js'
import { Route, Link, BrowserRouter as Router, Switch} from 'react-router-dom'
const stylesApp = ()=>({
  main:{


    
  }
});

class App extends React.Component {
   constructor(props){
     super(props);
     this.state = {
      loadPage: false
    };
   }
  render(){
    localStorage.clear();
    //const { classes } = this.props;
      return (
        <Router>
          <div>
             <Switch>
              <Route exact path='/' component={Home}/>
              <Route path='/login' component={FormDialog}/>
              <Route path='/signup' component={SignUp}/>
              <Route component={Notfound}/>
            </Switch>
            
            
          </div>
        </Router>
      );

  }
}

App.propTypes = {
  classes: PropTypes.shape({
    main: PropTypes.string
  })
};
export default App;

