import { useState } from "react";
import openIcon from "../assets/open_icon.png";
import closeIcon from "../assets/close_icon.png";

type Props = {
  subTitle: string;
  title: string;
  children: string;
};

function Accordion({ subTitle, title, children }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  if (isOpen) {
    return (
      <div className="ease-in-out duration-150 flex flex-col rounded-3xl lg:px-10 lg:py-10 px-5 py-5 border border-black shadow-[0px_3px_0px_0px_rgba(0,0,0)] bg-secondary">
        <div className="w-full relative border-b border-black pb-8 mb-8">
          <div className="flex items-center" onClick={toggleAccordion}>
            <div className="lg:text-5xl md:text-3xl text-2xl ">{subTitle}</div>
            <div className="ml-5 lg:text-2xl md:text-xl text-md md:font-normal ">
              {title}
            </div>
            <img
              src={openIcon}
              alt="open"
              className="lg:w-14 md:w-12 w-8 absolute right-0"
            />
          </div>
        </div>

        <p>{children}</p>
      </div>
    );
  }

  return (
    <div className="ease-in-out duration-150 flex flex-col rounded-3xl lg:px-10 lg:py-10 px-5 py-5 border border-black shadow-[0px_3px_0px_0px_rgba(0,0,0)] bg-neutral w-full">
      <div className="w-full relative">
        <div className="flex items-center" onClick={toggleAccordion}>
          <div className="lg:text-5xl md:text-3xl text-2xl ">{subTitle}</div>
          <div className="ml-5 lg:text-2xl md:text-xl text-md md:font-normal ">
            {title}
          </div>
          <img
            src={closeIcon}
            alt="close"
            className="lg:w-14 md:w-12 w-8 absolute right-0"
          />
        </div>
      </div>
    </div>
  );
}

export default Accordion;
