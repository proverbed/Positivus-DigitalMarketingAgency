import Button from "./Button";
import heroIlllustation from "../assets/hero.png";

function Hero() {
  return (
    <div className="grid lg:grid-cols-2 lg:my-16 my-8 mx-4">
      <div>
        <h1 className="lg:text-7xl text-4xl md:text-5xl mb-8">
          Navigate the
          {' '}
          <br />
          digital landscape
          {' '}
          <br />
          for success
        </h1>
        <img className="lg:hidden" src={heroIlllustation} alt="" />
        <p className="mb-8">
          Our digital marketing agency helps businesses
          <br />
          grow and succeed online through a range of
          {' '}
          <br />
          services including SEO, PPC, social media marketing,
          {' '}
          <br />
          and content creation.
        </p>
        <div className="lg:w-fit w-full">
          <Button title="Book a consultation" />
        </div>
      </div>
      <div className="hidden lg:block mx-auto">
        <img className="" src={heroIlllustation} alt="" />
      </div>
    </div>
  );
}

export default Hero;
