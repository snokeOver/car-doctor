import { useState } from "react";
import BannerItem from "./BannerItem";

const Banner = () => {
  const [images, setImages] = useState([
    {
      id: 1,
      link: "../../../public/images/banner/1.jpg",
    },
    {
      id: 2,
      link: "../../../public/images/banner/2.jpg",
    },
    {
      id: 3,
      link: "../../../public/images/banner/3.jpg",
    },
    {
      id: 4,
      link: "../../../public/images/banner/4.jpg",
    },
    {
      id: 5,
      link: "../../../public/images/banner/5.jpg",
    },
    {
      id: 6,
      link: "../../../public/images/banner/6.jpg",
    },
  ]);
  return (
    <div className="carousel w-full">
      {images.map((image) => (
        <BannerItem key={image.id} image={image} images={images} />
      ))}
    </div>
  );
};

export default Banner;
