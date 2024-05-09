import { useState } from "react";
import BannerItem from "./BannerItem";

const Banner = () => {
  const [images, setImages] = useState([
    {
      id: 1,
      link: "/images/banner/1.jpg",
    },
    {
      id: 2,
      link: "/images/banner/2.jpg",
    },
    {
      id: 3,
      link: "/images/banner/3.jpg",
    },
    {
      id: 4,
      link: "/images/banner/4.jpg",
    },
    {
      id: 5,
      link: "/images/banner/5.jpg",
    },
    {
      id: 6,
      link: "/images/banner/6.jpg",
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
