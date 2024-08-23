import JohnSmith from "../assets/JohnSmith.png";
import JaneDoe from "../assets/JaneDoe.png";
import MichaelBrown from "../assets/MichaelBrown.png";
import EmilyJohnson from "../assets/EmilyJohnson.png";
import BrianWilliams from "../assets/BrianWilliams.png";
import SarahKim from "../assets/SarahKim.png";
import TeamCard from "./TeamCard";
import Button from "./Button";

const TeamCardSection = () => {
  const teams = [
    {
      name: "John Smith",
      position: "CEO and Founder",
      description:
        "10+ years of experience in digital marketing, Expertise in SEO, PPC, and content strategy",
      image: JohnSmith,
    },
    {
      name: "Jane Doe",
      position: "Director of Operations",
      description:
        "7+ years of experience in project management and team leadership. Strong organizational and communication skills",
      image: JaneDoe,
    },
    {
      name: "Michael Brown",
      position: "Senior SEO Specialist",
      description:
        "5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization",
      image: MichaelBrown,
    },
    {
      name: "Emily Johnson",
      position: "PPC Manager",
      description:
        "3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis",
      image: EmilyJohnson,
    },
    {
      name: "Brian Williams",
      position: "Social Media Specialist",
      description:
        "4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement",
      image: BrianWilliams,
    },
    {
      name: "Sarah Kim",
      position: "Content Creator",
      description:
        "2+ years of experience in writing and editing Skilled in creating compelling, SEO-optimized content for various industries",
      image: SarahKim,
    },
  ];

  return (
    <div className="lg:my-16 my-8 mx-4">
      <div className="flex flex-row flex-wrap justify-center gap-10 sm:gap-8">
        {teams.map((element) => (
          <TeamCard
            name={element.name}
            position={element.position}
            description={element.description}
            image={element.image}
          />
        ))}
      </div>
      <div className="flex justify-end">
        <div className="lg:w-fit w-full mt-10 ">
          <Button title="See all team" />
        </div>
      </div>
    </div>
  );
};

export default TeamCardSection;
