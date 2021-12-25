const localStorageName = 'pickMeUpUser';
export const saveUser = (user) => {
  localStorage.setItem(localStorageName, JSON.stringify(user));
};

export const getUser = () => {
  return JSON.parse(localStorage.getItem(localStorageName));
};

export const removeUser = () => {
  localStorage.removeItem(localStorageName);
};