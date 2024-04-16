import { defineMiddleware } from "astro:middleware";
import { isAdmin } from "./auth";
import { getUser } from "../lib/utills";

const protectedRoutes = [
    "http://localhost:4321/admin/dashboard",
    "http://localhost:4321/admin/productos",
    "http://localhost:4321/admin/ventas"
]

export const onRequest = defineMiddleware(async(context, next) => {

    const currentUrl = context.url.href;

    if(protectedRoutes.includes(currentUrl)){
        
        const cookies = context.cookies.get("session")?.value;
        
        if(!cookies){
        
            return Response.redirect("http://localhost:4321");
        
        }

        const user = await isAdmin(cookies);
        
        if(user){
            return next(); 
        } else {
            return Response.redirect("http://localhost:4321")
        }
}

return next();

})