interface AppwriteConfig {
  appwriteUrl: string;
  appwriteProjectId: string;
  appwriteClinicDatabaseId: string;
  appwriteClinicUserCollectionId: string;
  appwriteClinicDocumentBucketId: string;
}

const conf: AppwriteConfig = {
  appwriteUrl: import.meta.env.VITE_APPWRITE_URL as string,
  appwriteProjectId: import.meta.env.VITE_APPWRITE_CLINIC_PROJECT_ID as string,
  appwriteClinicDatabaseId: import.meta.env
    .VITE_APPWRITE_CLINIC_DATABASE_ID as string,
  appwriteClinicUserCollectionId: import.meta.env
    .VITE_APPWRITE_CLINIC_USER_COLLECTION_ID as string,
  appwriteClinicDocumentBucketId: import.meta.env
    .VITE_APPWRITE_CLINIC_DOCUMENT_BUCKET_ID as string,
};

export default conf;
