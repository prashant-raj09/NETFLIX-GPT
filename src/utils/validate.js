export const checkValidData = (email, password) => {
    const isEmailValid = /^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/.test(email);
    const isPasswordValid =
      /^.*(?=.{8,})(?=.*[a-zA-Z])(?=.*\d)(?=.*[!#@$%&? "]).*$/.test(password);
  
      if(!isEmailValid) return "Email is not valid";
      if(!isPasswordValid) return "Password is not valid";
  
      return null;
  };