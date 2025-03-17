import conf from '../conf/appwriteConf';
import { Client, Databases } from 'appwrite';

import { SignUpFormValues } from '@constants/auth';

export class DataBaseService {
  client = new Client();
  databases;

  constructor() {
    this.client = new Client()
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);
    this.databases = new Databases(this.client);
  }

  async createUser(
    id: string,
    data: Pick<
      SignUpFormValues,
      'firstName' | 'lastName' | 'email' | 'department'
    >
  ) {
    try {
      return await this.databases.createDocument(
        conf.appwriteClinicDatabaseId,
        conf.appwriteClinicUserCollectionId,
        id,
        JSON.stringify(data)
      );
    } catch (error) {
      const errorSource = 'Database Service :: createUser()';
      if (error instanceof Error) {
        throw new Error(`${errorSource} ${error.message}`);
      } else {
        throw new Error(errorSource);
      }
    }
  }

  async getUser(id: string, query: string[] = []) {
    try {
      return await this.databases.getDocument(
        conf.appwriteClinicDatabaseId,
        conf.appwriteClinicUserCollectionId,
        id,
        query
      );
    } catch (error) {
      const errorSource = 'Database Service :: getUser()';
      if (error instanceof Error) {
        throw new Error(`${errorSource} ${error.message}`);
      } else {
        throw new Error(errorSource);
      }
    }
  }
}

const databaseService = new DataBaseService();

export default databaseService;
