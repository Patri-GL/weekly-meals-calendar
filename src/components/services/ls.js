const ls = {
  set: (variName, content) => {
    localStorage.setItem(variName, JSON.stringify(content));
  },
  get: (variName, defaultValue) => {
    if (localStorage.getItem(variName)) {
      return JSON.parse(localStorage.getItem(variName));
    } else {
      return defaultValue;
    }
  },
};

export default ls;
