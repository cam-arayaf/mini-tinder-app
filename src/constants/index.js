import data from './../db/data.json';
const idLoggedUser = Math.floor(Math.random() * data.length) + 1;
export const loggedUser = data.find(user => user.id === idLoggedUser);
export const users = data.filter(user => user.id !== idLoggedUser);