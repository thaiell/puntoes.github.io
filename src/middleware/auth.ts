
import { db, eq, Users } from "astro:db"
import { getUser } from "../lib/utills";

export const isAdmin = async ( cookies: string ) => {

    const user = await getUser(cookies);
    
    if(!user){
        return false;    
    }
    
    const userInDb = await db.select().from(Users).where(eq(Users.id, user.uid))
    
    if(!userInDb[0]){
        return false;
    }
    if(userInDb[0].role === "admin"){
        return true;
    }

    return false;
}