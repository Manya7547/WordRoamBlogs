/* eslint-disable no-useless-catch */
/* eslint-disable no-empty */
import conf from "../conf/conf";
import { Client, Account, ID} from "appwrite";

// Encapsulating the auth logic in a single class limits the dependency on the Appwrite service to one place, 
// making it easier to switch to another vendor in the future. So this code is future proof
export class AuthService {
    client = new Client();
    account;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.account = new Account(this.client);
    }

    // create an account
    async createAccount({email, password, name}){
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            if(userAccount) {
                // call another method or login 
                return this.login({email, password})
            }
            else{
                return userAccount;
            }
        } catch (error) {
            throw error;
        }
    }

    // login 
    async login({email, password}) {
        try {
            await this.account.createEmailPasswordSession(email, password);
        } catch (error) {
            throw error;
        }
    }

    // check if you are logged in or not 
    async getCurrentUser() {
        try {
            await this.account.get();
        } catch (error) {
            // if service can't be reached then throw error or console log custom error
            console.log("Appwrite service :: getCurrentUser :: error", error);
        }
        // if there is some problem with the try catch block then return null
        return null;
    }
    
    
    // log out 
    async logout(){
        try {
            // two types - deletesession and deletesessions  
            await this.account.deleteSessions();
        } catch (error) {
            console.log("appwrite service :: logout :: error", error);
        }
    }

}

// create an object of this class and export the object
const authService = new AuthService()

export default authService