const initialState = {
  loading: true,
  message: '',
  isAuthenticated: false,
  error: ''
}

export const authentication = (state =  initialState, action) => {
  switch(action.type) {
    case 'LOGIN_REQUEST':
      return {
        ...state,
        loading: true
      }
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        message: action.message,
        isAuthenticated:true,
        loading: false
      }
    case 'LOGIN_FAILURE':
      return {
        ...state,
        isAuthenticated: false,
        loading: false,
        error: action.payload
      }
    case 'LOGOUT':
      return {
        ...state,
        loading: true
      }
    case 'LOGOUT_SUCCESS':
      return {
        ...state,
        isAuthenticated: false,
        error: '',
        loading: false
      }
    default:
      return state;
  }
}