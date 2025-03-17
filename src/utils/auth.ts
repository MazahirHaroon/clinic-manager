import { authService, databaseService } from '@appwrite';
import { omitKeyValues } from '@utils/common';
import { LoginFormValues, SignUpFormValues } from '@constants/auth';

export const handleSignup = async (values: SignUpFormValues) => {
  try {
    const userAccount = await authService.createAccount(
      values.email,
      values.password,
      `${values.firstName} ${values.lastName}`
    );

    const userProps = omitKeyValues(
      ['acceptedTos', 'password', 'confirmPassword'],
      values
    );

    return await databaseService.createUser(userAccount.userId, userProps);
  } catch (error) {
    const errorSource = 'Utils ::  Auth :: handleSignup()';
    if (error instanceof Error) {
      throw new Error(`${errorSource} :: ${error.message}`);
    } else {
      throw new Error(errorSource);
    }
  }
};

export const handleLogin = async (values: LoginFormValues) => {
  try {
    const userAccount = await authService.login(values.email, values.password);

    return await databaseService.getUser(userAccount.userId);
  } catch (error) {
    const errorSource = 'Utils ::  Auth :: handleLogin()';
    if (error instanceof Error) {
      throw new Error(`${errorSource} :: ${error.message}`);
    } else {
      throw new Error(errorSource);
    }
  }
};
