export const setItem = (key: string, val: any) => {
  if (val === 'object') {
    val = JSON.stringify(val);
  }
  localStorage.setItem(key, val);
};

export const getItem = (key: string) => {
  const val = localStorage.getItem(key) ?? '';
  try {
    return JSON.parse(val);
  } catch (error) {
    return val;
  }
};

export const deleteItem = (key: string) => {
  localStorage.removeItem(key);
};

export const clearItem = () => {
  localStorage.clear();
};
