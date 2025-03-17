import authService from '@appwrite/auth';

import { SignUpFormValues } from '@constants/auth';

export const handleSignup = async (values: SignUpFormValues) => {
  await authService.createAccount(
    values.email,
    values.password,
    `${values.firstName} ${values.lastName}`
  );
};
