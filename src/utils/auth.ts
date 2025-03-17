import { authService, databaseService } from '@appwrite';
import { omitKeyValues } from '@utils/common';
import { SignUpFormValues } from '@constants/auth';

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

    return await databaseService.createUser(userAccount.$id, userProps);
  } catch (error) {
    const errorSource = 'Utils ::  Auth :: handleSignup()';
    if (error instanceof Error) {
      throw new Error(`${errorSource} :: ${error.message}`);
    } else {
      throw new Error(errorSource);
    }
  }
};
