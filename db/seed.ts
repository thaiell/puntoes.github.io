import { Products, db, Users, Schools } from "astro:db"

export default async function seed() {
	await db.insert(Users).values([
		{ id: "1", fullName: "Pepe", email: "pepe@gmail.com", schoolID: null, role: "user" },
  		{ id: "2", fullName: "Maria", email: "maria@gmail.com", schoolID: null, role: "admin" },
  		{ id: "3", fullName: "Juan", email: "juan@gmail.com", schoolID: null, role: "user" },
  		{ id: "4", fullName: "Ana", email: "ana@gmail.com", schoolID: null, role: "user" },
  		{ id: "5", fullName: "Luis", email: "luis@gmail.com", schoolID: null, role: "user" },
  		{ id: "6", fullName: "Sofia", email: "sofia@gmail.com", schoolID: null, role: "admin" },
  		{ id: "7", fullName: "Pedro", email: "pedro@gmail.com", schoolID: null, role: "user" },
  		{ id: "8", fullName: "Laura", email: "laura@gmail.com", schoolID: null, role: "user" },
  		{ id: "9", fullName: "Carlos", email: "carlos@gmail.com", schoolID: null, role: "user" },
  		{ id: "10", fullName: "Elena", email: "elena@gmail.com", schoolID: null, role: "admin" },
		{ id: "p2ThnkAaxtOCj7tYXWZFfRmuxnl2", fullName: "Thaiel", email: "thaielog@gmail.com", schoolID: null, role: "admin"},
		{ id: "0OLFOtxJJJP4Opdx2a8cZQxJkDi2", fullName: "Carlitos Piñeda", email: "carlitos@gmail.com", schoolID: null, role: "admin"}

	
	])
	await db.insert(Products).values(
		[
			{ id: "1", sku: "SKU001", name: "Camisa de manga corta", category: ["Ropa", "Camisas", "Manga corta"], price: 25.99, stock: 50, variants: [], 
			imgUrl: ["https://www.abrafersrl.com.ar/wp-content/uploads/RCA-000450.jpg", "https://www.abrafersrl.com.ar/wp-content/uploads/RCA-000450.jpg"], 
			imgAlt: ["Esta es la mejor remera", "Esta es la segunda mejor remera"] },
			  { id: "2", sku: "SKU002", name: "Pantalones vaqueros", category: ["Ropa", "Pantalones", "Vaqueros"], price: 39.99, stock: 30, variants: [], 
			  imgUrl: ["https://bustinsjeans.com/cdn/shop/products/jeans-talle-alto-mujer_600x.jpg?v=1647451330", "https://bustinsjeans.com/cdn/shop/products/jeans-talle-alto-mujer_600x.jpg?v=1647451330"], 
			  imgAlt: ["Esta es la mejor remera", "Y esta es la segunda mejor remera"] },
			  { id: "3", sku: "SKU003", name: "Zapatillas deportivas", category: ["Calzado", "Deportivas", "Zapatillas"], price: 49.99, stock: 20, variants: [],
			   imgUrl: ["https://s3.sa-east-1.amazonaws.com/www.vaypol.com.ar/variants/t13nlbjlufqfgh1ppxsntt23isyq/c77c2a06864ac9aca38dc5bd9371de015471edcdbf322dfb14411689bf968ae5", "https://s3.sa-east-1.amazonaws.com/www.vaypol.com.ar/variants/t13nlbjlufqfgh1ppxsntt23isyq/c77c2a06864ac9aca38dc5bd9371de015471edcdbf322dfb14411689bf968ae5"], 
			  imgAlt: ["Esta es la mejor remera", "Y esta es la segunda mejor remera"] },
			  { id: "4", sku: "SKU004", name: "Portátil HP", category: ["Tecnología", "Portátiles", "Ordenadores"], price: 799.99, stock: 10, variants: [], 
			  imgUrl: ["https://http2.mlstatic.com/D_NQ_NP_945897-MLA54932481894_042023-O.webp", "https://http2.mlstatic.com/D_NQ_NP_945897-MLA54932481894_042023-O.webp"], 
			  imgAlt: ["Esta es la mejor remera", "Y esta es la segunda mejor remera"] },
			  { id: "5", sku: "SKU005", name: "Smartphone Samsung Galaxy", category: ["Tecnología", "Smartphones", "Electrónica"], price: 699.99, stock: 15, variants: [], 
			  imgUrl: ["https://http2.mlstatic.com/D_NQ_NP_945897-MLA54932481894_042023-O.webp", "https://http2.mlstatic.com/D_NQ_NP_945897-MLA54932481894_042023-O.webp"], 
			  imgAlt: ["Esta es la mejor remera", "Y esta es la segunda mejor remera"] },
			  { id: "6", sku: "SKU006", name: "Cámara digital Canon", category: ["Fotografía", "Cámaras", "Digitales"], price: 549.99, stock: 8, variants: [], 
			  imgUrl: ["https://http2.mlstatic.com/D_NQ_NP_945897-MLA54932481894_042023-O.webp", "https://http2.mlstatic.com/D_NQ_NP_945897-MLA54932481894_042023-O.webp"], 
			  imgAlt: ["Esta es la mejor remera", "Y esta es la segunda mejor remera"] },
			  { id: "7", sku: "SKU007", name: "Libro El Principito", category: ["Libros", "Literatura", "Infantil"], price: 12.99, stock: 100, variants: [], 
			  imgUrl: ["https://http2.mlstatic.com/D_NQ_NP_945897-MLA54932481894_042023-O.webp", "https://http2.mlstatic.com/D_NQ_NP_945897-MLA54932481894_042023-O.webp"], 
			  imgAlt: ["Esta es la mejor remera", "Y esta es la segunda mejor remera"] },
			  { id: "8", sku: "SKU008", name: "Teclado mecánico RGB", category: ["Accesorios de ordenador", "Teclados", "RGB"], price: 79.99, stock: 25, variants: [], 
			  imgUrl: ["https://http2.mlstatic.com/D_NQ_NP_945897-MLA54932481894_042023-O.webp", "https://http2.mlstatic.com/D_NQ_NP_945897-MLA54932481894_042023-O.webp"], 
			  imgAlt: ["Esta es la mejor remera", "Y esta es la segunda mejor remera"] },
			  { id: "9", sku: "SKU009", name: "Monitor de 27 pulgadas", category: ["Tecnología", "Monitores", "27 pulgadas"], price: 299.99, stock: 12, variants: [], 
			  imgUrl: ["https://http2.mlstatic.com/D_NQ_NP_945897-MLA54932481894_042023-O.webp", "https://http2.mlstatic.com/D_NQ_NP_945897-MLA54932481894_042023-O.webp"], 
			  imgAlt: ["Esta es la mejor remera", "Y esta es la segunda mejor remera"] },
			  { id: "10", sku: "SKU010", name: "Reloj inteligente Fitbit", category: ["Accesorios deportivos", "Relojes", "Inteligentes"], price: 149.99, stock: 20, variants: [], 
			  imgUrl: ["https://http2.mlstatic.com/D_NQ_NP_945897-MLA54932481894_042023-O.webp", "https://http2.mlstatic.com/D_NQ_NP_945897-MLA54932481894_042023-O.webp"], 
			  imgAlt: ["Esta es la mejor remera", "Y esta es la segunda mejor remera"] }
			]
	)
	await db.insert(Schools).values([
		{id: 1, name: "Girasoles", addres: "Avenida Libertad 5345"},
		{id: 2, name: "Sacratisimo", addres: "Miramar 4242"},
		{id: 3, name: "Presencia", addres: "Devoto"}
	])
}
 