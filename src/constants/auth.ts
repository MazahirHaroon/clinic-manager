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
