import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";


const ProductDetailsCarousel = ({ arrayImgUrl, arrayAltImgUrl }: { arrayImgUrl: string[], arrayAltImgUrl: string[] }) => {
    
const renderThumbs = () => {
    return arrayImgUrl.map((img, index) => (
        <div key={index} className="m-0 p-0">
            <img src={img} alt={arrayAltImgUrl[index]} className="m-0 p-0"/>
        </div>
    ))
}


    return (
        <Carousel
        ariaLabel="Product Info Carousel"
        showStatus={false}
        showArrows={false}
        renderThumbs={renderThumbs}
        /* 
        showArrows={true}
        dynamicHeight={false} */
        className="w-80"
        >
            {arrayImgUrl.map((img, index) => (
                <img key={index} src={img} alt={arrayAltImgUrl[index]}
                className="w-auto h-auto"
                />
            ))}

        </Carousel>
    )
}
export default ProductDetailsCarousel

/* const renderThumbs = ( children: any ) => {
    return children.map((slide: any, index: number) => (
        <div key={index} className="thumb">
            <img src={`${slide.img}`} alt={" Producto X "} />
      </div>
    ))
} */