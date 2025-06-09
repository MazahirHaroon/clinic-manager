export interface SignUpFormValues {
  firstName: string;
  lastName: string;
  email: string;
  department: string;
  password: string;
  confirmPassword: string;
  acceptedTos: boolean;
}

export interface LoginFormValues {
  email: string;
  password: string;
}

export interface UserValues {
  firstName: string;
  lastName: string;
  email: string;
  department: string;
}

export interface AppwriteError extends Error {
  code: number;
  type: string;
  version: string;
}

export const APPWRITE_ERROR_TYPES = {
  INVALID_CREDENTIALS: 'user_invalid_credentials',
  USER_EXIST: 'user_already_exists',
};

export const ERROR_MESSAGE: { [type: string]: string } = {
  [APPWRITE_ERROR_TYPES.INVALID_CREDENTIALS]:
    'Sorry, your email or password is incorrect. Please double-check your credentials and try again.',
  [APPWRITE_ERROR_TYPES.USER_EXIST]:
    'Looks like you already have an account! Try logging in instead.',
};
