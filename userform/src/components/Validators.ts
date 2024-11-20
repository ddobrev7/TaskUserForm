export const isUserNameValid = (email: string): boolean => {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
};

  export const isPasswordValid = (password: string): boolean => {
    const passwordPattern = /^(?=.*[a-z])(?=.*)(?=.*\d)[A-Za-z\d]{6,}$/;
    return passwordPattern.test(password);
  };
  