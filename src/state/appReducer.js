function appReducer(state, action) {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: {
          data: action.payload,
        },
      };
    default:
      return state;
  }
}

export { appReducer };
