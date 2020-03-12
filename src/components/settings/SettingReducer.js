export const initialState = {
    firstName: `${sessionStorage.getItem("firstName")}`,
    lastName:"Mitchell",
    phoneNumber:`${sessionStorage.getItem("phoneNumber")}`,
    id: `${sessionStorage.getItem("userID")}`,
    editing: false
  };
  
  export const settingReducer = (state, action) => {
    switch (action.type) {
      case 'TOGGLE_EDITING':
        return {
          ...state,
          editing: !state.editing
        };
      case 'UPDATE_TITLE':
        return {
          ...state,
          firstName:action.payload,
          lastName: action.payload,
          editing: !state.editing
        };
      default:
        return state;
    }
  };

//   `${sessionStorage.getItem("lastName")}`