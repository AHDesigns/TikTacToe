const userDetails = (state = 'Dave', action) => {
  switch (action.type) {
    case 'CHANGE_NAME':
      return 'Cheryl';
    default:
      return state;
  }
};

export const getUserDetails = (state) => state.userDetails;
export default userDetails;
