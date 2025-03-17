import conf from '@conf/appwriteConf';
import { Client, Account, ID } from 'appwrite';

export class AuthService {
  client = new Client();
  account;

  constructor() {
    this.client.setProject(conf.appwriteProjectId);
    this.account = new Account(this.client);
  }

  async createAccount(email: string, password: string, name: string) {
    try {
      await this.account.create(ID.unique(), email, password, name);
      return await this.login(email, password);
    } catch (error) {
      const errorSource = 'Appwrite Service :: createAccount()';
      if (error instanceof Error) {
        throw new Error(`${errorSource} ${error.message}`);
      } else {
        throw new Error(errorSource);
      }
    }
  }

  async login(email: string, password: string) {
    try {
      return await this.account.createEmailPasswordSession(email, password);
    } catch (error) {
      const errorSource = 'Appwrite Service :: login()';
      if (error instanceof Error) {
        throw new Error(`${errorSource} ${error.message}`);
      } else {
        throw new Error(errorSource);
      }
    }
  }

  async getCurrentUser() {
    try {
      return await this.account.get();
    } catch (error) {
      const errorSource = 'Appwrite Service :: getCurrentUser()';
      if (error instanceof Error) {
        throw new Error(`${errorSource} ${error.message}`);
      } else {
        throw new Error(errorSource);
      }
    }
  }

  async logOut() {
    try {
      return await this.account.deleteSessions();
    } catch (error) {
      const errorSource = 'Appwrite Service :: logOut()';
      if (error instanceof Error) {
        throw new Error(`${errorSource} ${error.message}`);
      } else {
        throw new Error(errorSource);
      }
    }
  }
}

const authService = new AuthService();

export default authService;
