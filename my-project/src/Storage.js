
//user

export const setUserDetails = (token)=>{
    localStorage.setItem("idTokenUser", token)
}

export const getUserDetails = () =>{
    return localStorage.getItem("idTokenUser");
}


export const removeUser = ()=>{
    localStorage.removeItem('idTokenUser')
}

//Admin

export const setAdminDetails = (token)=>{
    localStorage.setItem('idTokenAdmin', token);
}

export const getAdminDetails = ()=>{
    return localStorage.getItem("idTokenAdmin");
}

export const removeAdmin =()=>{
    localStorage.removeItem("idTokenAdmin");
}

//Driver 


export const setDriverDetails = (token)=>{
    localStorage.setItem('idTokenDriver', token);
}

export const getDriverDetails = ()=>{
    return localStorage.getItem("idTokenDriver");
}

export const removeDriver =()=>{
    localStorage.removeItem("idTokenDriver");
}
