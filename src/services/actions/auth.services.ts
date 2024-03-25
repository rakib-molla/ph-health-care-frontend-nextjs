import { authKey } from "@/constans/authKey";
import { decodedToken } from "@/utils/jwt";
import { setToLocalStorage, getFromLocalStorage, removeFromLocalStorage } from "@/utils/local-storage";

export const storeUserInfo =({accessToken}: {accessToken: string})=>{
    return setToLocalStorage(authKey, accessToken);
}

export const getUserInfo = ()=>{
    const authToken = getFromLocalStorage(authKey);
    // console.log(authToken)
    if(authToken){
        const decodedData: any = decodedToken(authToken);
        // console.log(decodedData)
        return {
            ...decodedData,
            role: decodedData?.role.toLowerCase()
        };
    }
}

export const isLoggedIn =()=>{
    const authToken = getFromLocalStorage(authKey);
    if(authToken){
        return !!authToken;
    }
}

export const removeUser = ()=>{
   return removeFromLocalStorage(authKey);
}