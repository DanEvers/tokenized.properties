const initialState = {
    address: "",
    city: "",
    state: "",
    zip: "",
    description: "",
    yearbuilt: "",
    bedrooms: "",
    bathrooms: "",
    parking: "",
    heating: "",
    cooling: "",
    size: "",  
    user: {},
    isLoggedIn: false,
    loading: false
  };
  
  //AUTH
  const SET_USER = "SET_USER";
  const GET_SESSION = "GET_SESSION";
  const IS_LOGGEDIN = "IS_LOGGEDIN"
  const IS_LOGGEDOUT = "IS_LOGGEDOUT"
  
  //OBJECT
  export const UPDATE_ADDRESS = "UPDATE_ADDRESS";
  export const UPDATE_CITY = "UPDATE_CITY";
  export const UPDATE_STATE = "UPDATE_STATE";
  export const UPDATE_ZIP = "UPDATE_ZIP";
  export const UPDATE_DESCRIPTION = "UPDATE_DESCRIPTION";
  export const UPDATE_YEARBUILT = "UPDATE_YEARBUILT";
  export const UPDATE_BEDROOMS = "UPDATE_BEDROOMS";
  export const UPDATE_BATHROOMS = "UPDATE_BATHROOMS";
  export const UPDATE_PARKING = "UPDATE_PARKING";
  export const UPDATE_HEATING = "UPDATE_HEATING";
  export const UPDATE_COOLING = "UPDATE_COOLING";
  export const UPDATE_SIZE = "UPDATE_SIZE";
  
  // function reducer(state = initialState, action) {
  //   const { type, payload } = action;

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
    const {type, payload } = action;
    
    switch (type, payload) {
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
        return {...state, isLoggedIn: false};
      case UPDATE_ADDRESS:
      return {
        ...state,
        address: payload
      };
      case UPDATE_CITY:
      return {
        ...state,
        city: payload
      };
      case UPDATE_STATE:
      return {
        ...state,
        state: payload
      };
      case UPDATE_ZIP:
      return {
        ...state,
        zip: payload
      };
      case UPDATE_DESCRIPTION:
      return {
        ...state,
        description: payload
      };
      case UPDATE_YEARBUILT:
      return {
        ...state,
        yearbuilt: payload
      };
      case UPDATE_BEDROOMS:
      return {
        ...state,
        bedrooms: payload
      };
      case UPDATE_BATHROOMS:
      return {
        ...state,
        bathrooms: payload
      };
      case UPDATE_PARKING:
      return {
        ...state,
        parking: payload
      };
      case UPDATE_HEATING:
      return {
        ...state,
        heating: payload
      };
      case UPDATE_COOLING:
      return {
        ...state,
        cooling: payload
      };
      case UPDATE_SIZE:
      return {
        ...state,
        size: payload
      };
      default:
        return state;
    }
  }