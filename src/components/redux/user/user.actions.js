export const setCurrentUser = (user) => ({
  type: "SET_CURRENT_USER", // Should be same as reducer string
  payload: user,
});
