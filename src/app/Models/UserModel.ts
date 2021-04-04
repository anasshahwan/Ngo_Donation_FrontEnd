export interface UserModelForAllData {
    _id:string,
    firstname:string,
    lastname:string,
    email: string,
    password: string,
    role:any,
    token:string

}

export interface UserModelForUpdate { 
    firstname:string,
    lastname:string,
    email: string,
    role:any,

}