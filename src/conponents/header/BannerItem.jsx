import PrimaryButton from "../shared/PrimaryButton";
import SecondaryButton from "../shared/SecondaryButton";

const BannerItem = ({ image, images }) => {
  return (
    <div
      id={`slide${image.id}`}
      className="carousel-item relative w-full  flex"
    >
      <img src={image.link} className="w-full max-h-[720px] rounded-xl" />
      <div className="absolute flex h-full w-full items-center bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] rounded-xl">
        <div className="space-y-7 text-gray-100 md:w-1/2 pl-10">
          <h2 className="text-3xl md:text-6xl font-semibold w-full md:w-[60%] text-center md:text-left">
            Affordable Price For Car Servicing
          </h2>
          <p className="text-center md:text-left">
            There are many variations of passages of available, but the majority
            have suffered alteration in some form
          </p>
          <div className="flex gap-5">
            <PrimaryButton textField="Discover More" />
            <SecondaryButton textField="Latest Project" />
          </div>
        </div>
      </div>
      <div className="absolute flex justify-end  left-5 right-5 bottom-5">
        <a
          href={`#slide${image.id === 1 ? images.length : image.id - 1}`}
          className="btn rounded-full py-2 px-3 bg-gray-400  border-none text-gray-100 hover:bg-gray-700 mr-5 backdrop-blur-md bg-opacity-20"
        >
          ❮
        </a>
        <a
          href={`#slide${image.id === images.length ? 1 : image.id + 1}`}
          className="btn rounded-full py-2 px-3 bg-prime border-none text-gray-100 hover:bg-orange-800"
        >
          ❯
        </a>
      </div>
    </div>
  );
};

export default BannerItem;
