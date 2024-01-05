export const saveTransactionsToLocalStorage = (name, value) => {
  localStorage.setItem(name, JSON.stringify(value));
};
