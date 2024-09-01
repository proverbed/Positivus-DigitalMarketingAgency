import netflix from "./../assets/company-logo-netflix.png";
import amazon from "./../assets/company-logo-amazon.png";
import zoom from "./../assets/company-logo-zoom.png";

const TestimonialSection = () => {
  return (
    <>
      <div className="lg:my-16 my-8 mx-4">
        <div className="flex flex-col lg:flex-row lg:gap-10 md:gap-8 gap-4">
          <div className="bg-neutral lg:w-1/2 w-full rounded-3xl lg:p-10 md:p-8 p-4">
            <div className="text-2xl ">
              "The team went above and beyond to ensure my issue was resolved
              quickly and efficiently. Truly outstanding!"
            </div>
            <div className="flex pt-20">
              <div className="w-1/2">
                <div className="text-xl font-bold">Jessica Devis</div>
                <div className="font-thin">Full Stack Developer @Netflix</div>
              </div>
              <div className="w-1/2 flex justify-end">
                <img src={netflix} className="w-32"></img>
              </div>
            </div>
          </div>
          <div className="bg-neutral lg:w-1/2 w-full rounded-3xl lg:p-10 md:p-8 p-4">
            <div className="text-2xl">
              "It have broadened my horizons and helped me advance my career.
              The community is incredibly supportive."
            </div>
            <div className="flex pt-20">
              <div className="w-1/2">
                <div className="text-xl font-bold">Marcell Glock</div>
                <div className="font-thin">Graphic Designer, @Amazon</div>
              </div>
              <div className="w-1/2 flex justify-end">
                <img src={amazon} className="w-32"></img>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-neutral w-full lg:mt-10 md:mt-8 mt-4 rounded-3xl">
          <div className="text-2xl lg:p-10 md:p-8 p-4 text-center">
            "Its intuitive design and powerful features make it indispensable.
            <br />I can't imagine going back to life before it!"
            <div className="flex flex-wrap items-center">
              <div className="w-full flex justify-center pt-10 pb-5">
                <img src={zoom} className="w-32"></img>
              </div>
              <div className="w-full">
                <div className="text-xl font-bold">Emma Roberts</div>
                <div className="font-thin">Chief Executive @Zoom</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TestimonialSection;
