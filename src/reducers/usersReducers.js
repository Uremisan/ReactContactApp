const initialState = {
  users: []
};

export default function (state = initialState, action) {
  switch (action.type) {
    case 'ADD_ALL_USERS':
      let users = action.payload;
      return { users: users };

    default:
      return state;
  }
}