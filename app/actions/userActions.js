export function addUser(email) {
  return {
    types: ["ADD_USER_REQUEST", "ADD_USER_SUCCESS", "ADD_USER_FAILURE"],
    promise: new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(`hello ${email}!`);
      }, 5);
    })
  };
}
