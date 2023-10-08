const initState = {
  users: [
    { id: 1, name: "Tony" },
    { id: 2, name: "Nguyen" },
  ],
  jobs: [],
};

const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case "Delete_User":
      console.log("run into delete: ", action);
      let users = state.users;
      users = users.filter((item) => item.id !== action.payload.id);
      return {
        ...state,
        users,
      };
    case "Creat_User":
      let id = Math.floor(Math.random() * 11);
      let user = { id: id, name: `random - ${id}` };
      return {
        ...state,
        users: [...state.users, user],
      };
    default:
      return state;
  }
};
export default rootReducer;
