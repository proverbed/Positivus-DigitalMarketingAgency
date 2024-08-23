import arrowBG from "../assets/arrow-bg.png";

const CaseStudiesSection = () => {
  return (
    <>
      <div className="rounded-3xl md:m-9 m-16 md:py-9 py-16 bg-primary text-white hidden md:block">
        <div className="flex align-top divide-x-1">
          <div className="w-1/3 border-white border-r md:px-9 px-16">
            <p className=" ">
              For a local restaurant, we implemented a targeted PPC campaign
              that resulted in a 50% increase in website traffic and a 25%
              increase in sales.
            </p>
            <div className="text-secondary pt-5 flex items-center">
              Learn more
              <img src={arrowBG} alt="arrow" />
            </div>
          </div>
          <div className="w-1/3 border-white border-r md:px-9 px-16">
            <p className=" ">
              For a B2B software company, we developed an SEO strategy that
              resulted in a first page ranking for key keywords and a 200%
              increase in organic traffic.
            </p>
            <div className="text-secondary pt-5 flex items-center">
              Learn more
              <img src={arrowBG} alt="arrow" />
            </div>
          </div>
          <div className="w-1/3 md:px-9 px-16">
            <p className=" ">
              For a national retail chain, we created a social media marketing
              campaign that increased followers by 25% and generated a 20%
              increase in online sales.
            </p>
            <div className="text-secondary pt-5 flex items-center">
              Learn more
              <img src={arrowBG} alt="arrow" />
            </div>
          </div>
        </div>
      </div>

      <div className="m-16 relative max-[425px]:m-2 ">
        <div className="flex m-4 md:hidden flex-wrap gap-8">
          <div className="p-10 bg-primary text-white rounded-3xl">
            <p>
              For a local restaurant, we implemented a targeted PPC campaign
              that resulted in a 50% increase in website traffic and a 25%
              increase in sales.
            </p>
            <div className="text-secondary pt-5 flex items-center">
              Learn more
              <img src={arrowBG} alt="arrow" />
            </div>
          </div>
          <div className="p-10 bg-primary text-white rounded-3xl">
            <p>
              For a B2B software company, we developed an SEO strategy that
              resulted in a first page ranking for key keywords and a 200%
              increase in organic traffic.
            </p>
            <div className="text-secondary pt-5 flex items-center">
              Learn more
              <img src={arrowBG} alt="arrow" />
            </div>
          </div>
          <div className="p-10 bg-primary text-white rounded-3xl">
            <p>
              For a national retail chain, we created a social media marketing
              campaign that increased followers by 25% and generated a 20%
              increase in online sales.
            </p>
            <div className="text-secondary pt-5 flex items-center">
              Learn more
              <img src={arrowBG} alt="arrow" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CaseStudiesSection;
