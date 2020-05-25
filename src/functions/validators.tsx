export const validateEmail = (email:any) => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};

export const validateName = (name:any) => {
  const re = /[a-z]{1,10}/;
  return re.test(name);
};

export const validatePassword = (password:any) => {
  const re = /(?=.*[0-9])/;
  return re.test(password);
};

export const validateRePassword = (password:any, repassword:any) => {
  return password === repassword;
};
