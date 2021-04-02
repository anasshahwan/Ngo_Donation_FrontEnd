export interface AuthModelForLogin {
    email: string,
    password: string,
   
}

export interface AuthModelForAllData {
    _id:string,
    firstname:string,
    lastname:string,
    email: string,
    password: string,
    role:Object,
    token:string

}