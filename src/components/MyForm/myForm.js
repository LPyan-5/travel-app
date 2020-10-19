import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Redirect } from 'react-router'
import {connect} from 'react-redux';
import {actions} from '../../store/actions'
import {bindActionCreators} from 'redux';
console.log(actions);
 
const styles = makeStyles (theme=>({
  signIn:{
        display: 'flex',
        flexDirection:'column',
        alignItems:'center',
        cursor:'pointer',
        position:'absolute',
        top:'80%',
        left:'30%',
  },
   button:{
     width: '150px',
     backgroundColor: '#FFDAB9',
     color: '#A0522D',
   },
}
));
  
const MyForm = (props) => {
  const classes = styles();
  const {userName, loginPassword, dispatch} = props;
  console.log(userName);
//   const handleSubmit = () => {
//     console.log(userName);
//     if(localStorage.getItem('logedIn')){
//       return  <Redirect  to="/" />
//     }
//     else{
//         localStorage.setItem("logedIn", userName);
//         this.props.history.replace('/');
//    }
// }
  
  return (
    <div>
    <form 
    //onSubmit={this.handleSubmit} 
    noValidate autoComplete="off">
          <TextField
             id="outlined-basic"
             type='text'
             placeholder='Username'
             label="Username"
             variant="outlined"
             value={userName}
             onChange={event => dispatch(actions.login.changeUsername(event.target.value))}
             //error={userName === ""}
             //helperText={ userName=== "" ? 'Please enter your username!' : ' '}
           />
          <br></br>
          <br></br>
      <div className={classes.password}>
          <TextField 
            id="outlined-basic"
            type='password'
            placeholder='Password'
            label="Password"
            variant="outlined"
            value={loginPassword}
            onChange={event => dispatch(actions.login.changeLoginpassword(event.target.value))} 
            //error={password===''}
            //helperText={ password==='' ? 'Please enter your password!' : ' '}
          />
          
      </div>
          <br></br>
          <br></br>
          <div className={classes.signIn}  >
              <Button 
              className = {classes.button}
              type = 'submit'
              //disabled = {userName === '' || loginPassword === ''}
              variant = "contained" 
              //onClick = {handleSubmit}
              >
              Login
              </Button>
         </div>
      </form>
      </div>
  );
} 


// const mapStateToPropsLogin = (state) => {
//   return {
//     userName: state.logInReducer.userName,
//     password: state.logInReducer.password
//   }
// };
// const mapDispatchToProps = (dispatch) => {
//   return {
//     changeUserName: bindActionCreators(actions.changeUserName,dispatch),
//     changeLogInPassword: bindActionCreators(actions.changeLogInPassword,dispatch),
//     //addToDo: bindActionCreators(addToDo,dispatch)

//   };
// };
const mapStateToPropsLogin = (state) => {

  return {
    userName: state.userName,
    password: state.loginPassword
  }
};
export default connect(mapStateToPropsLogin)(MyForm);





        
        
        