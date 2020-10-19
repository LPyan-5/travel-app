import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {connect} from 'react-redux'
import {actions} from 'C:/My folder/JS/Allapps/travel-app/src/store/actions.js';

console.log(actions);

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  signup:{
    display: 'flex',
    flexDirection:'column',
    alignItems:'center',
    position:'absolute',
    color: '#8B4513'
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor:'#8B4513',
    color:'#FFDAB9'
  },
  notchedOutline: {
    borderWidth: "1px",
    borderColor: "#8B4513 !important",
  },
  floatingLabelFocusStyle: {
    color: "#8B4513"
},
  
}
));


const SignUp = (props) => {
  const classes = useStyles();
  const {firstName, lastName, email, password, dispatch} = props;
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
      <Typography className={classes.signup}component="h1" variant="h5">
            New user? Sign up to create your account
        </Typography>
        <br/>
        <br/>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                InputProps = {{
                    classes: {
                        notchedOutline: classes.notchedOutline
                }
              }}
              InputLabelProps={{
                className: classes.floatingLabelFocusStyle,
              }}
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                value={firstName}
                onChange={(e) => dispatch(actions.signup.changeFirstname(e.target.value))}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
               InputProps={{
                classes: {
                    notchedOutline: classes.notchedOutline
                        }
                    }}
                InputLabelProps={{
                      className: classes.floatingLabelFocusStyle,
                }}
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                value={lastName}
                onChange={(e) => dispatch(actions.signup.changeLastname(e.target.value))}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
               InputProps={{
                classes: {
                    notchedOutline: classes.notchedOutline
                    }
                     }}
                InputLabelProps={{
                    className: classes.floatingLabelFocusStyle,
                }}
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                value={email}
                onChange={(e) => dispatch(actions.signup.changeEmail(e.target.value))}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
               InputProps={{
                classes: {
                    notchedOutline: classes.notchedOutline
                        }
                         }}
                InputLabelProps={{
                    className: classes.floatingLabelFocusStyle,
                }}
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                value={password}
                onChange={(e) => dispatch(actions.signup.changePassword(e.target.value))}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
        </form>
      </div>
    </Container>
  );
}

// const mapStateToProps = (state) => {
//   return {
//     firstName: state.signUpReducer.firstName,
//     lastName: state.signUpReducer.lastName,
//     email: state.signUpReducer.email,
//     password: state.signUpReducer.password
//   }
// }
const mapStateToProps = (state) => {
  console.log(state);
  return {
    firstName: state.firstName,
    lastName: state.lastName,
    email: state.email,
    password: state.password
  }
}
export default connect(mapStateToProps)(SignUp);