import React from 'react';
import { withStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
//import classes from '*.module.css';
import PropTypes from "prop-types";
import Button from '@material-ui/core/Button';
import Icon from './icon.png'
import { withRouter } from 'react-router-dom'
import { Redirect } from 'react-router'
 
 
const styles = ()=> ({
  signIn:{
        display: 'flex',
        flexDirection:'column',
        alignItems:'center',
        cursor:'pointer',
        position:'absolute',
        top:'80%',
        left:'32%',
  },
  password:{
    //float:'left'
  },
  icon:{
    top:'60%',
    left:'82%',
    width:'18px',
    height:'20px',
    position:'absolute',
    float:'left',
    cursor:'pointer'
  },
   button:{
     width:'150px',
     backgroundColor:'#FFDAB9',
     color:'#A0522D'
   },
   
  });
  
class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //inputValue1:'',
      //inputValue2:'',
      isPasswordShown:false
    };
  }
  
  passwordVisible=()=>{
    this.setState({isPasswordShown: !this.state.isPasswordShown});
  }
  handleChange = (event,second) => {
    
    if (second) {
      this.setState({ inputValue2: event.target.value });
    } else {
      this.setState({
        inputValue1: event.target.value
      });
    }
  };

  handleSubmit = event => {
      if(this.state.inputValue2.length < 8) {
          alert('Your password must have 8 or more characters!');
      }
      else{

          alert('A password was submitted that was ' + this.state.inputValue2.length + '  characters long.');
          event.preventDefault();
      }
    
}
 submit= ()=>{
          if(localStorage.getItem('logedIn')){
            return  <Redirect  to="/" />
          }
          else{

              localStorage.setItem("logedIn", this.state.inputValue1);
              this.props.history.replace('/');
         }
 }
  
  render() {
    const { classes } = this.props;

    return (
      <div>
      <form onSubmit={this.handleSubmit} noValidate autoComplete="off">
         
            <TextField
               id="outlined-basic"
               type='text'
               placeholder='Username'
               label="Username"
               variant="outlined"
               value={this.state.inputValue1}
               onChange={event => this.handleChange(event)}
               error={this.state.inputValue1 === ""}
               helperText={ this.state.inputValue1=== "" ? 'Please enter your name!' : ' '}
             
             
             />
            <br></br>
            <br></br>
        <div className={classes.password}>
            <TextField 
              id="outlined-basic"
              type={this.state.isPasswordShown?'text':'password'}
              placeholder='Password'
              label="Password"
              variant="outlined"
              value={this.state.inputValue2}
              onChange={event => this.handleChange(event,true)} 
              error={this.state.inputValue2===''}
              helperText={ this.state.inputValue2==='' ? 'Please enter your password!' : ' '}
            />
            <img className={classes.icon} onClick={this.passwordVisible} alt='' src={Icon}/>
        </div>
            <br></br>
            <br></br>
            <div className={classes.signIn}  >
                <Button 
                className={classes.button}
                type='submit'
                disabled={!(this.state.inputValue1&&this.state.inputValue2)} 
                variant="contained" 
                onClick={this.submit}>
                Sign in
                </Button>
           </div>
        </form>
        </div>
    )}
}

MyForm.propTypes = {
  classes: PropTypes.shape({
    paper:PropTypes.string,
    signIn: PropTypes.string,
    password:PropTypes.string,
    icon:PropTypes.string,
    button:PropTypes.string
  })
};


export default withRouter(withStyles(styles)(MyForm));
        
        
        