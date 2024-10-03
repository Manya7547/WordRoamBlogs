/* eslint-disable no-empty */
// appwrite configuration 

import conf from '../conf/conf.js';
import { Client, Databases, Query, Storage, ID } from "appwrite";

export class Service{
    client = new Client();
    databases;
    bucket;

    constructor(){
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

    // 1) Create post
    async createPost({title, slug, content, featuredImage, status, userId}) {
        try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId
                }
            )
        } catch (error) {
            console.log("Appwrite service :: createPost :: error", error);
        }
    }

    // 2) Update post. Take the document id from slug 
    async updatePost(slug, {title, content, featuredImage, status}){
        try {
            return await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title, 
                    content, 
                    featuredImage,
                    status
                }
            )
        } catch (error) {
            console.log(" appwrite service :: updatePost :: error ", error)
        }
    }

    // 3) Delete document/post. slug is id

    async deletePost(slug) {
        try {
            await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            );
            return true;
        } catch (error) {
            console.log("appwrite service :: delete post :: error", error);
            return false;
        }
    }

    // 4) Get a single document provided slug
    async getPost(slug){
        try {
            return await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
        } catch (error) {
            console.log("Appwrite Service :: get post :: error", error);
        }
    }

    // 5) Get multiple documents which have active status - use queries 
    async getPosts(queries = [Query.equal("status","active")]){
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                queries,
                100
            )
        } catch (error) {
            console.log("Appwrite Service :: get posts :: error", error);
            return false;
        }
    }

    // 6) file upload service
    async uploadFile(file){
        try {
            // will return file id
            return await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file
            )
        } catch (error) {
            console.log("Appwrite Service :: upload file :: error", error);
            return false;
        }
    }

    // 7) delete file 
    async deleteFile(fileId){
        try {
            await this.bucket.deleteFile(
                conf.appwriteBucketId,
                fileId
            )
        } catch (error) {
            console.log("Appwrite Service :: upload file :: error", error);
            return false;
        }
    }

    // 8) file preview 
    getFilePreview(fileId){
        return this.bucket.getFilePreview(
            conf.appwriteBucketId,
            fileId
        )
    }

}

const service  = new Service()
export default service 