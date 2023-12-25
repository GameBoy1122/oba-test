interface LoginFormValues {
  username: string;
  password: string;
}

export const validateUsername = (
  username: string
): Partial<LoginFormValues> => {
  const errors: Partial<LoginFormValues> = {};
  const usernamePattern = /^[sS]\d{5}$/;

  if (!username) {
    errors.username = "Username is required";
  } else if (!usernamePattern.test(username.trim())) {
    errors.username =
      "Username must start with 's' or 'S' and be followed by 5 digits";
  }

  return errors;
};

export const validatePassword = (
  password: string
): Partial<LoginFormValues> => {
  const errors: Partial<LoginFormValues> = {};
  const passwordPattern =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  if (!password) {
    errors.password = "Password is required";
  } else if (!passwordPattern.test(password)) {
    errors.password =
      "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one digit, and one special character (@$!%*?&)";
  }

  return errors;
};
