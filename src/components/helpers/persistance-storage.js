export const setItem = (key, value) => {
    try {
      localStorage.setItem(key, value);
    } catch (e) {
      console.error('Error setting item in localStorage');
    }
  };
  
  export const removeItem = (key) => {
    try {
      localStorage.removeItem(key);
    } catch (e) {
      console.error('Error removing item from localStorage');
    }
  };
  