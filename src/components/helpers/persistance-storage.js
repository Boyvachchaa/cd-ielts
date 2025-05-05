export const setItem = (key, value) => {
    try {
      localStorage.setItem(key, value);
    } catch (e) {
      console.error('Error setting item in localStorage');
    }
  };
  
  export const getItem = (key) => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : null;
    } catch (error) {
      console.error('Error getting item from localStorage');
      return null;
    }
  };
  
  export const removeItem = (key) => {
    try {
      localStorage.removeItem(key);
    } catch (e) {
      console.error('Error removing item from localStorage');
    }
  };
  