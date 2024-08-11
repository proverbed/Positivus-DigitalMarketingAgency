import arrowWB from "../assets/arrow-wb.png";
import arrowBG from "../assets/arrow-bg.png";

export enum colorEnum {
  Primary = 0,
  Secondary = 1,
  Neutral = 2,
}

type Props = {
  title1: string;
  title2: string;
  color: colorEnum;
  image: string;
};

const Card = ({ title1, title2, color, image }: Props) => {
  return (
    <div
      className={` w-128 h-64 flex rounded-3xl gap-8 ${color === colorEnum.Neutral ? "bg-neutral" : color === colorEnum.Primary ? "bg-secondary" : "bg-primary"} px-10 py-10 border border-black shadow-[0px_3px_0px_0px_rgba(0,0,0)]`}
    >
      <div className="relative w-1/2">
        <h1
          className={`w-fit text-xl font-medium ${color === colorEnum.Neutral ? "bg-secondary" : "bg-white"}  rounded-md px-2 py-1`}
        >
          {title1}
        </h1>
        <h1
          className={`w-fit text-xl font-medium ${color === colorEnum.Neutral ? "bg-secondary" : "bg-white"}  rounded-md px-2 py-1`}
        >
          {title2}
        </h1>

        <div className="flex items-center absolute bottom-0 left-0">
          <img
            src={color === colorEnum.Secondary ? arrowWB : arrowBG}
            alt="arrow"
          />
          <div
            className={`${color === colorEnum.Secondary ? "text-white" : "text-black"} pl-2`}
          >
            Learn more
          </div>
        </div>
      </div>
      <img className="px-4 w-40 object-contain" src={image}></img>
    </div>
  );
};

export default Card;
