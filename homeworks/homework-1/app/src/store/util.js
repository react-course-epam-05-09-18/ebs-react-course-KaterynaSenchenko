import { createBrowserHistory } from 'history';

export const getUserFromStorage = () => {
  return JSON.parse(localStorage.getItem('user'));
};

export const isAuthenticated = () => {
  return getUserFromStorage() !== null;
};

export default createBrowserHistory({forceRefresh:true});