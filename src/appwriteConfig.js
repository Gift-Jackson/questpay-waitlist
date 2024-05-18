import { Client, Databases } from 'appwrite';

export const project_id = import.meta.env.PROJECT_ID
export const COLLECTION_ID = "6648995000241a2b64ec"
export const DATABASE_ID = "6648993c0015bec1322a"

const endpoint = import.meta.env.VITE_APPWRITE_ENDPOINT
console.log(endpoint)


const client = new Client();

client
.setEndpoint(import.meta.env.VITE_APPWRITE_ENDPOINT)
    .setProject(import.meta.env.VITE_PROJECT_ID);


export const databases = new Databases(client);
export default client