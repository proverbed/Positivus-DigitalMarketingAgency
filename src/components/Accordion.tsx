import open_icon from "../assets/open_icon.png";
import close_icon from "../assets/close_icon.png";
import { useState } from "react";

type Props = {
  sub_title: string;
  title: string;
  children: string;
};

const Accordion = ({ sub_title, title, children }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  if (isOpen) {
    return (
      <div
        className={`ease-in-out duration-150 flex flex-col rounded-3xl lg:px-10 lg:py-10 px-5 py-5 border border-black shadow-[0px_3px_0px_0px_rgba(0,0,0)] bg-secondary`}
      >
        <div className="w-full relative border-b border-black pb-8 mb-8">
          <div className="flex items-center" onClick={toggleAccordion}>
            <div className="lg:text-5xl md:text-3xl text-2xl ">{sub_title}</div>
            <div className="ml-5 lg:text-2xl md:text-xl text-md md:font-normal ">
              {title}
            </div>
            <img
              src={open_icon}
              alt="open"
              className="lg:w-14 md:w-12 w-8 absolute right-0"
            ></img>
          </div>
        </div>

        <p>{children}</p>
      </div>
    );
  }

  return (
    <div
      className={`ease-in-out duration-150 flex flex-col rounded-3xl lg:px-10 lg:py-10 px-5 py-5 border border-black shadow-[0px_3px_0px_0px_rgba(0,0,0)] bg-neutral w-full`}
    >
      <div className="w-full relative">
        <div className="flex items-center" onClick={toggleAccordion}>
          <div className="lg:text-5xl md:text-3xl text-2xl ">{sub_title}</div>
          <div className="ml-5 lg:text-2xl md:text-xl text-md md:font-normal ">
            {title}
          </div>
          <img
            src={close_icon}
            alt="close"
            className="lg:w-14 md:w-12 w-8 absolute right-0"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
