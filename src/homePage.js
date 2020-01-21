import React from 'react';
//import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
//import TextField from '@material-ui/core/TextField';
//import FormControlLabel from '@material-ui/core/FormControlLabel';
//import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
//import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
//import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import SignUp from  './signUp.js'

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(https://images.unsplash.com/photo-1508781378177-4a8e7e4ef6c1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'dark' ? theme.palette.grey[900] : theme.palette.grey[50],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  back:{
    
    backgroundImage: 'url(https://images.unsplash.com/photo-1515229779759-91c794693a43?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80)',
    backgroundSize:'750px'
  },
  paper: {
    
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  button: {
        backgroundColor:'#87CEFA',
        color: 'black',
        margin: theme.spacing(3, 0, 2),
        display: 'flex',
        flexDirection:'column',
        alignItems:'center',
        position:'absolute',
        top:'60%',
        right:'51%'
    

  },
  signIn:{
        display: 'flex',
        flexDirection:'column',
        alignItems:'center',
        color:'#87CEFA',
        position:'absolute',
        top:'56%',
        right:'43%',
      
  },
  quote:{
      height:'50px',
      width:'260px',
      position:'absolute',
      left:'7%',
      top:'10%',
      color:'#87CEFA',
      fontFamily:'Snell Roundhand, cursive'
  }
}));

export default function SignInSide(props) {
  const classes = useStyles();
 function wantToSign() {
   props.history.replace('/login');
}
  return (
    <Grid container component="main" className={classes.root}>
        
      <CssBaseline />
    
      <Grid item xs={false} sm={4} md={7} className={classes.image} > 
       <Typography className={classes.quote}> 
            "LIVE LIFE WITH NO EXCUSES, TRAVEL WITH NO REGRETS"
            <br/>
            
            Oscar Wilde
    </Typography></Grid>
    
      <Typography className={classes.signIn} component="h1" variant="h5">
            Already have an account ? Sign in
          </Typography>
          <Button 
                className={classes.button}
                type='submit'
                variant="contained" 
                onClick={wantToSign}
                >
                Click
                </Button>
      <Grid className={classes.back} item xs={12} sm={8} md={5} component={Paper} elevation={6} square><SignUp/>
        <div className={classes.paper}>
          



          
          
        </div>
      </Grid>
    </Grid>
  );
}