// import {
//     Change_FirstName, 
//     Change_LastName, 
//     Change_Email, 
//     Change_Password, 
//     Change_UserName, 
//     Change_LogIn_Password,
//     ADD_TODO_FAILURE,
//     ADD_TODO_SUCCESS,
//     ADD_TODO_STARTED
// } from './constants';
//import {combineReducers} from 'redux';
import {actions} from './actions';
import {handleActions} from 'redux-actions';





// const reducerMap = {
//   [actions.changEmail]: (state, {value}) => {
//     return {
//       ...state,
//       email: value
//     };
//   },
//   [actions.changeFirstName]: (state, {value}) => {
//     return {
//       ...state,
//       firstName: value
//     };
//   },
//   [actions.changeLastName]: (state, {value}) => {
//     return {
//       ...state,
//       lastName: value
//     };
//   },
//   [actions.changePassword]: (state, {value}) => {
//     return {
//       ...state,
//       password: value
//     };
//   },
//   [actions.changeUsername]: (state, {value}) => {
//     return {
//       ...state,
//       userName: value
//     };
//   },
//   [actions.changeLoginPassword]: (state, {value}) => {
//     return {
//       ...state,
//       loginPassword: value
//     };
//   },
// };
//initial state
// const initialState = {
//   firstName: '',
//   lastName: '',
//   email: '',
//   password: '',
//   userName: '',
//   loginPassword: ''
// };
// const rootReducer =  handleActions(reducerMap,initialState);
// export default rootReducer;

//signUp reducer
// const signUpInitialState = {
//     firstName: '',
//     lastName: '',
//     email: '',
//     password: '',
  
// };
// const signUpReducer = (state = signUpInitialState, action) => {
//     switch (action.type) {
//       case Change_FirstName:
//         return {...state, firstName: action.value};
//       case Change_LastName:
//         return {...state, lastName: action.value};
//       case Change_Email:
//         return {...state, email: action.value};
//       case Change_Password:
//         return {...state, password: action.value};
//       default: return state;
//     }
// };

//logIn reducer
// export const logInInitialState = {
//     userName: '',
//     password: ''
// };

// const logInReducer = (state = logInInitialState, action) => {
//     switch (action.type){
//         case Change_UserName:
//             return {...state, userName: action.value};
//         case Change_LogIn_Password:
//             return {...state, password: action.value};
//         default: return state;
//     } 
// }


// const requestReducer = (state = requestDataInitialState, action) => {
//   switch (action.type) {
//     case ADD_TODO_STARTED:
//       return state;
//     case ADD_TODO_SUCCESS:
//       return {todo: action.payload};
//     case ADD_TODO_FAILURE:
//       return {todo: action.payload};
//     default: return state;
//   };

// }
//initial stata
const dataInitialState = {
  todo: {},
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  userName: '',
  loginPassword: '',


 };
// console.log(actions);
// //requestReducer by handleActions
const reducerMap = {
  [actions.todo.addTodoStarted]: state  => {
    return state;
  },
  [actions.todo.addTodoFailure]: (state, { payload }) => {
    return {
      ...state,
      todo: payload
    };
  },
  [actions.todo.addTodoSuccess]: (state, { payload }) => {
    return {
      ...state,
      todo: payload 
    };
  },
  [actions.signup.changeFirstname]: (state, {payload}) => {
    return {
      ...state,
      firstName: payload
    }
  },
  [actions.signup.changeLastname]: (state, {payload}) => {
    return {
      ...state,
      lastName: payload
    }
  },
  [actions.signup.changeEmail]: (state, {payload}) => {
    return {
      ...state,
      email: payload
    }
  },
  [actions.signup.changePassword]: (state, {payload}) => {
    return {
      ...state,
      password: payload
    }
  },
  [actions.login.changeUsername]: (state, {payload}) => {
    return {
      ...state,
      userName: payload
    }
  },
  [actions.login.changeLoginpassword]: (state, {payload}) => {
    return {
      ...state,
      password: payload
    }
  }
};
export default handleActions(reducerMap,dataInitialState);

//  export default combineReducers({
//     signUpReducer,
//     logInReducer,
//     requestReducer
//  })

