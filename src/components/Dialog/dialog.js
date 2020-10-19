import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import MyForm from '../MyForm';
//import {Route, Link, BrowserRouter as Router} from 'react-router-dom'



const useStyles =makeStyles(theme=>( {
    dialog:{
        backgroundSize: '1800px',
        backgroundImage: 'url(https://images.unsplash.com/photo-1516565340510-21016b8fc86c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80)',
        display: 'flex',
        flexDirection:'column', 
    },
    title:{
        display: 'flex',
        flexDirection:'column',
        alignItems:'center',
        color:'#A0522D',
        backgroundColor:'#FFF0F5',
        width:'320px',
        height:'50px',
        border:'2px solid #FFDAB9',
        borderBottom:'none',
    },
    content:{
        display: 'flex',
        flexDirection:'column',
        alignItems:'center',
        backgroundColor:'#FFF0F5',
        width:'320px',
        height:'250px',
        border:'2px solid #FFDAB9',
        borderTop:'none'  
    }
}));
const FormDialog = (props) => {
    const classes=useStyles();
    const [open] = React.useState(true);
/*
  const handleClose = () => {
    setOpen(false);
  };
 
*/
  return (
        <Dialog  open={open} aria-labelledby="form-dialog-title" className={classes.dialog}>
          <DialogTitle className={classes.title}>
            Login
          </DialogTitle>
            <DialogContent className={classes.content}>
                <MyForm />
            </DialogContent>
        </Dialog>
  );
}

export default FormDialog;
