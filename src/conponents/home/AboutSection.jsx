import PrimaryButton from "../shared/PrimaryButton";

const AboutSection = () => {
  return (
    <div className="hero my-10 bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <div className="flex-1 relative">
          <img
            src="/images/about_us/person.jpg"
            className="w-3/4 rounded-lg shadow-2xl"
          />
          <img
            src="/images/about_us/parts.jpg"
            className="absolute w-1/2 rounded-lg shadow-2xl -bottom-8 right-8 border-8 border-gray-50"
          />
        </div>
        <div className="flex-1 flex flex-col gap-3">
          <h5 className="text-prime font-semibold">About Us</h5>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold lg:w-[70%]">
            We are qualified & of experience in this field
          </h1>
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
          <p>
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
          <div>
            <PrimaryButton textField="Get More Info" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
