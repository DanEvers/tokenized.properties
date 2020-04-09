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
  img: "",
  price: "",
  pricesqft: "",
  distribution: "",
  ipt: "",
  user: {},
  isLoggedIn: false,
  loading: false
};

//AUTH
const SET_USER = "SET_USER";
const GET_SESSION = "GET_SESSION";
const IS_LOGGEDIN = "IS_LOGGEDIN";
const IS_LOGGEDOUT = "IS_LOGGEDOUT";

//OBJECT STEPS
export const STEP1 = "STEP1";
export const STEP2 = "STEP2";
export const STEP3 = "STEP3";

// export const UPDATE_ADDRESS = "UPDATE_ADDRESS";
// export const UPDATE_CITY = "UPDATE_CITY";
// export const UPDATE_STATE = "UPDATE_STATE";
// export const UPDATE_ZIP = "UPDATE_ZIP";
// export const UPDATE_DESCRIPTION = "UPDATE_DESCRIPTION";
// export const UPDATE_YEARBUILT = "UPDATE_YEARBUILT";
// export const UPDATE_BEDROOMS = "UPDATE_BEDROOMS";
// export const UPDATE_BATHROOMS = "UPDATE_BATHROOMS";
// export const UPDATE_PARKING = "UPDATE_PARKING";
// export const UPDATE_HEATING = "UPDATE_HEATING";
// export const UPDATE_COOLING = "UPDATE_COOLING";
// export const UPDATE_SIZE = "UPDATE_SIZE";

// function reducer(state = initialState, action) {
//   const { type, payload } = action;

export function setUser(user) {
  // console.log('redux user:', user.data);
  return {
    type: SET_USER,
    payload: user
  };
}

export function getSession(user) {
  console.log("redux user.data:", user.data);
  return {
    type: GET_SESSION,
    payload: user.data
  };
}

export function loggedIn() {
  return {
    type: IS_LOGGEDIN,
    payload: { isLoggedIn: true } // or just payload: {}
  };
}

export function loggedOut() {
  return {
    type: IS_LOGGEDOUT,
    payload: { isLoggedIn: false }
  };
}

export function step1() {
  return {
    type: STEP1,
    payload: {}
  };
}

export function step2() {
  return {
    type: STEP2,
    payload: {}
  };
}

export function step3() {
  return {
    type: STEP3,
    payload: {}
  };
}

export default function reducer(state = initialState, action) {
  const { type, payload } = action 
  switch (type) {
    case SET_USER:
      return { ...state, user: action.payload };
    case GET_SESSION + "_PENDING":
      return { ...state, loading: true };
    case GET_SESSION + "_FULFILLED":
      return { user: action.payload, isLoggedIn: true, loading: false };
    case GET_SESSION + "_REJECTED":
      alert("Please enter the correct username or password.");
      return { ...state, loading: true };
    case IS_LOGGEDIN:
      return { ...state, isLoggedIn: true };
    case IS_LOGGEDOUT:
      return { ...state, isLoggedIn: false };
    case STEP1:
      return {
        ...state,
        address: payload.address,
        city: payload.city,
        state: payload.state,
        zip: payload.zip,
        description: payload.description,
        yearbuilt: payload.yearbuilt,
        bedrooms: payload.bedrooms,
        bathrooms: payload.bathrooms,
        parking: payload.parking,
        heating: payload.heating,
        cooling: payload.cooling,
        size: payload.size
      };
    case STEP2:
      return {
        ...state,
        img: payload.img
      };
    case STEP3:
      return {
        ...state,
        price: payload.pricesqft,
        distribution: payload.distribution
      };
    // case UPDATE_ADDRESS:
    //   return {
    //     ...state,
    //     address: action.payload
    //   };
    // case UPDATE_CITY:
    //   return {
    //     ...state,
    //     city: action.payload
    //   };
    // case UPDATE_STATE:
    //   return {
    //     ...state,
    //     state: action.payload
    //   };
    // case UPDATE_ZIP:
    //   return {
    //     ...state,
    //     zip: action.payload
    //   };
    // case UPDATE_DESCRIPTION:
    //   return {
    //     ...state,
    //     description: action.payload
    //   };
    // case UPDATE_YEARBUILT:
    //   return {
    //     ...state,
    //     yearbuilt: action.payload
    //   };
    // case UPDATE_BEDROOMS:
    //   return {
    //     ...state,
    //     bedrooms: action.payload
    //   };
    // case UPDATE_BATHROOMS:
    //   return {
    //     ...state,
    //     bathrooms: action.payload
    //   };
    // case UPDATE_PARKING:
    //   return {
    //     ...state,
    //     parking: action.payload
    //   };
    // case UPDATE_HEATING:
    //   return {
    //     ...state,
    //     heating: action.payload
    //   };
    // case UPDATE_COOLING:
    //   return {
    //     ...state,
    //     cooling: action.payload
    //   };
    // case UPDATE_SIZE:
    //   return {
    //     ...state,
    //     size: action.payload
    //   };
    default:
      return state;
  }
}