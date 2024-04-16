import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import carouselStaticProducts from "../../staticData/carouselStaticProducts.json"

type StaticProduct = {
  sku: string,
  name: string,
  category: string[],
  price: number,
  imgUrl: string,
  imgAlt: string
}

const CarouselEcommerce = () => {


  return (
    <Carousel
    ariaLabel="PuntoES Ecommerce Carrusel"
    autoPlay={false}
    interval={10000}
    infiniteLoop={true}
    showThumbs={false}
    showArrows={true}
    showStatus={false}
    dynamicHeight={false}
    swipeable={true}
    className="h-[300px]"
    >
    {/* CARROUSEL 1 */}

    <div className="flex justify-evenly items-center h-full">

{carouselStaticProducts.slice(0, 5).map((product: StaticProduct, index: number) => (
  
  <article key={index} className="w-30 relative">
  <img src={product.imgUrl} alt={product.imgAlt} />

<button className="self-center px-4 py-2 border border-lime-600 bg-lime-50 opacity-70 text-black font-semibold rounded-full w-3/4">Ver producto</button>
  </article>
))}
</div>
   
    {/* CARROUSEL 2 */}

    <div className="flex justify-evenly items-center h-full">

{carouselStaticProducts.slice(4, 9).map((product: StaticProduct, index: number) => (
  
  <article key={index} className="w-30 relative">
  <img src={product.imgUrl} alt={product.imgAlt} />

<button className="self-center px-4 py-2 border border-lime-600 bg-lime-50 opacity-70 text-black font-semibold rounded-full w-3/4">Ver producto</button>
  </article>
))}
</div>

    {/* CARROUSEL 3 */}
    <div className="flex justify-evenly items-center h-full">

{carouselStaticProducts.slice(5, 10).map((product: StaticProduct, index: number) => (
  
  <article key={index} className="w-30 relative">
  <img src={product.imgUrl} alt={product.imgAlt} />

<button className="self-center px-4 py-2 border border-lime-600 bg-lime-50 opacity-70 text-black font-semibold rounded-full w-3/4">Ver producto</button>
  </article>
))}
</div>
</Carousel>
    )
}
export default CarouselEcommerce