const initialState = {
    user: {},
    isLoggedIn: false,
    loading: false
  };
  
  const SET_USER = "SET_USER";
  const GET_SESSION = "GET_SESSION";
  const IS_LOGGEDIN = "IS_LOGGEDIN"
  const IS_LOGGEDOUT = "IS_LOGGEDOUT"
  
  export function setUser(user) {
    return {
      type: SET_USER,
      payload: user
    };
  }
  
  export function getSession(user) {
    // console.log('redux user.data', user.data);
    return {
      type: GET_SESSION,
      payload: user.data
    };
  }
  
  export function loggedIn() {
    return {
      type: IS_LOGGEDIN,
      payload: {isLoggedIn: true} // or just payload: {}
    };
  }
  
  export function loggedOut() {
    return {
      type: IS_LOGGEDOUT,
      payload: {isLoggedIn: false}
    };
  }
  
  export default function userReducer(state = initialState, action) {
    switch (action.type) {
      case SET_USER:
        return { ...state, user: action.payload };
      case GET_SESSION + "_PENDING":
        return { ...state, loading: true };
      case GET_SESSION + "_FULFILLED":
        return { user: action.payload, isLoggedIn: true, loading: false };
      case GET_SESSION + "_REJECTED":
        alert("Please enter the correct username or password.")
        return { ...state, loading: true };
      case IS_LOGGEDIN:
        return {...state, isLoggedIn: true};
      case IS_LOGGEDOUT:
        return {...state, isLoggedIn: false}
      default:
        return state;
    }
  }