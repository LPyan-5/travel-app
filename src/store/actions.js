//import {Change_FirstName, Change_LastName, Change_Email, Change_Password, Change_UserName,Change_LogIn_Password} from './constants';
//import axios from 'axios';
//import ApolloClient from 'apollo-boost';
import { gql } from "apollo-boost";
import { useQuery } from '@apollo/react-hooks';
import { createActions } from 'redux-actions';



// export const changeFirstName = (newFirstName) => {
//     return{
//       type: Change_FirstName,
//       value: newFirstName
//     };
//   };
//   export const changeLastName = (newLastName) => {
//     return{
//       type: Change_LastName,
//       value: newLastName
//     };
//   };
//   export const changeEmail = (newEmail) => {
//     return{
//       type: Change_Email,
//       value: newEmail
//     };
//   };
//   export const changePassword = (newPassword) => {
//     return{
//       type: Change_Password,
//       value: newPassword
//     };
//   };
//   export const changeUserName = (newUserName) => {
//       return {
//           type: Change_UserName,
//           value: newUserName
//       };
//   };
//   export const changeLogInPassword = (newPassword) => {
//     return {
//         type: Change_LogIn_Password,
//         value: newPassword
//     };
// };

//sync actions
// const addTodoStarted = () => ({
//   type: ADD_TODO_STARTED
// });
// const addTodoSuccess = todo => ({
//   type: ADD_TODO_SUCCESS,
//   payload: {
//     ...todo
//   }
// });
// const addTodoFailure = error => ({
//   type: ADD_TODO_FAILURE,
//   payload: {
//     error
//   }
// });

//sync actions created  by createActions
export const actions = createActions({
  TODO: {
    ADD_TODO_STARTED: null,
    ADD_TODO_SUCCESS: null,
    ADD_TODO_FAILURE: null
  },
  SIGNUP: {
    CHANGE_FIRSTNAME: null,
    CHANGE_LASTNAME: null,
    CHANGE_EMAIL: null,
    CHANGE_PASSWORD: null
  },
  LOGIN: {
    CHANGE_USERNAME: null,
    CHANGE_LOGINPASSWORD: null
  }
 
});


const getCountriesQuery = gql`
{
  countries {
    name
    code
  }
}
`;
export const addToDo = ( getCountries ) => {
  return dispatch => {
    dispatch(actions.todo.addTodoStarted());
    getCountries()
      .then(res => dispatch(actions.todo.addTodoSuccess(res.data)))
        .catch(err => dispatch(actions.todo.addTodoFailure(err.message)));
    //console.log('action',data);
    // if(error) {
    //   dispatch(actions.todo.addTodoFailure(error.message));
    // }
    // if(data) {
    //   console.log(data);
    //   dispatch(actions.todo.addTodoSuccess(data));
    // }
    // client
    // .query({
    //   query: gql`
    //   {
    //     countries {
    //       name
    //       code
    //     }
    //   }
    //   `
    // })
    // .then(res => {
    //               dispatch(actions.todo.addTodoSuccess(res.data));
    // })
    // .catch(err => dispatch(actions.todo.addTodoFailure(err.message)));
//     /*
//     axios
//       .get('https://jsonplaceholder.typicode.com/todos')
//       .then(res => {
//         console.log('requestFinished');
//         dispatch(addTodoSuccess(res.data));
//       })
//       .catch(err => {
//         dispatch(addTodoFailure(err.message));
//       });
//       */

  };
};



