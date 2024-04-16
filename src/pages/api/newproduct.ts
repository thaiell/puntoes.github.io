import type { APIRoute } from "astro";
import { db, Products } from "astro:db";


export const POST: APIRoute = async ({ request }) => {

    const data = await request.formData();

    const name = String(data.get("name"));
    const sku = String(data.get("sku"));
    const categorias = String(data.get("categorias"));
    const precio = Number(data.get("precio"));
    const stock = Number(data.get("stock"));


    if (typeof name !== "string" || name === undefined || name === null || name === "") {
        console.log("fue el name")
        return new Response(
            JSON.stringify({
                message: "Complete todos los campos"
            }),
            { status: 400 }
        );
    } else if(typeof sku !== "string"  || sku === "" || typeof sku === undefined || typeof sku === null){
        console.log("fue el sku")
        return new Response(
            JSON.stringify({
                message: "Complete todos los campos"
            }),
            { status: 400 }
        )
    } else if(typeof categorias !== "string"  || categorias === "" || typeof categorias === undefined || typeof categorias === null){
        console.log("fue el category")
        return new Response(
            JSON.stringify({
                message: "Complete todos los campos"
            }),
            { status: 400 }
        )
    } else if(typeof precio !== "number"  || precio === 0 || typeof precio === undefined || typeof precio === null){
        console.log("fue el precio")
        return new Response(
            JSON.stringify({
                message: "Complete todos los campos"
            }),
            { status: 400 }
        )
    } else if(typeof stock !== "number"  || stock === 0 || typeof stock === undefined || typeof stock === null){
        console.log("fue el stock")
        return new Response(
            JSON.stringify({
                message: "Complete todos los campos"
            }),
            { status: 400 }
        )
    } 

    // Do something with the data, then return a success response
    try {
 await db.insert(Products).values({
        id: "Productonum9",
        name: name,
        sku: sku,
        category: categorias,
        price: precio,
        stock: stock
    })

    return new Response(
      JSON.stringify({
        message: "Producto añandido correctamente!"
      }),
      { status: 200 }
    );
    } catch (err){
        console.log(err)
        return new Response(
            JSON.stringify({
                message: "Error creando el producto"
            }),
            { status: 400 }
        )
    }
   
  };