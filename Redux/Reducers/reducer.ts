
const initialState = [{}];

export default (state = initialState, action: any) => {

  switch(action.type){
    case 'SET_USERS':
      return {
        ...state,
        users: action.payload
      }
      
    case 'ADD_USERS':
      return {
        ...state,
        users: [...state.users, ...action.payload]
      }

    case 'SET_SINGLE_USER':
      return {
        ...state,
        user: action.payload
      }

    default:
      return state
  }
}