import socialIcon from "../assets/SocialIcon.png";

type Props = {
  name: string;
  position: string;
  image: string;
  description: string;
};

function TeamCard({
  name, position, image, description
}: Props) {
  return (
    <div className="w-96 flex sm:flex-row flex-col rounded-3xl gap-0 px-10 py-10 border border-black shadow-[0px_3px_0px_0px_rgba(0,0,0)]">
      <div className="flex flex-col">
        <div>
          <div className="flex flex-row border-b border-black pb-7 relative">
            <img src={image} alt="team" className="h-24 mr-5" />
            <div className="content-end">
              <div className="font-bold">{name}</div>
              <div>{position}</div>
            </div>
            <div className="absolute right-0 top-0">
              <img src={socialIcon} alt="social icon" />
            </div>
          </div>
        </div>
        <div className="pt-7">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

export default TeamCard;
