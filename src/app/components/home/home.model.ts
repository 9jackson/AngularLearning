

export interface User{
    firstName:string,
    lastName?:string,
    designation?:string,
    address?: Address
}

export interface Address{
    Address1: string,
    Pincode: string,
    Street: string,
    City: string,
    State: string
}

export interface Banner{
    bgImgURL:string,
    linkURL:string,
    headline:string,
    caption:string
}