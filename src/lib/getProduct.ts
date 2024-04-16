import { db, eq, Products } from "astro:db";

export const getProduct = async (productId : string | undefined) => {
    
    if (!productId) {
      return new Response(JSON.stringify("No se proporcionó un ID de producto."), {
        status: 404
      });
    }
  
    try {
      const product = await db.select().from(Products).where(eq(Products.id, productId));
  
      if (product.length === 0) {
        return new Response(JSON.stringify(`No se encontró ningún producto con el ID ${productId}.`), {
          status: 404
        });
      }
  
      return new Response(
        JSON.stringify(product), {
        status: 200
      });
    } catch (error) {
      return new Response(JSON.stringify("Ocurrió un error al buscar el producto"), {
        status: 404
      });
    }
  };