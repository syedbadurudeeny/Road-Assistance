import { getAdminDetails, getDriverDetails, getUserDetails, removeAdmin, removeDriver, removeUser } from "./Storage"


//user 

export const isUserAuthenticated = () =>{
    return getUserDetails() !== null ? true : false
} 


export const logoutStudent = () =>{
    removeUser();
}

//Admin 

export const isAdminAuthenticated = () =>{
    return getAdminDetails() !== null ? true : false;
}

export const logoutAdmin = () =>{
    removeAdmin();
}

//driver

export const isDriverAuthenticated = () =>{
    return getDriverDetails() !== null ? true : false;
}

export const logoutFaculty = () =>{
    removeDriver();
}

