import { auth } from "../firebase/server";

export const getUser = async(cookie: string) => {
    try {
        const decodedIdToken = await auth.verifySessionCookie(cookie, true);
        
        const user = await auth.getUser(decodedIdToken.uid);
        
        return user;
    
    } catch (error){
        
        return null;
    
    }
}