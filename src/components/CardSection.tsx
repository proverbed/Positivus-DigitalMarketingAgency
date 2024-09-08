import seo from "../assets/seo.png";
import ppc from "../assets/ppc.png";
import smm from "../assets/smm.png";
import email from "../assets/email.png";
import content from "../assets/content.png";
import analytics from "../assets/analytics.png";
import Card from "./Card.tsx";
import { ColorEnum } from "../Type.ts";

function CardSection() {
  const companies = [
    {
      title1: "Search Engine",
      title2: "optimization",
      color: ColorEnum.Neutral,
      image: seo
    },
    {
      title1: "Pay-per-click",
      title2: "advertising",
      color: ColorEnum.Primary,
      image: ppc
    },
    {
      title1: "Social Media",
      title2: "Marketing",
      color: ColorEnum.Secondary,
      image: smm
    },
    {
      title1: "Email",
      title2: "Marketing",
      color: ColorEnum.Neutral,
      image: email
    },
    {
      title1: "Content",
      title2: "Creation",
      color: ColorEnum.Primary,
      image: content
    },
    {
      title1: "Analytics and",
      title2: "Tracking",
      color: ColorEnum.Secondary,
      image: analytics
    }
  ];

  return (
    <div className="my-16">
      <div className="flex flex-wrap items-center justify-center sm:gap-8 gap-10">
        {companies.map((element) => (
          <Card
            key={element.title1 + element.title2}
            title1={element.title1}
            title2={element.title2}
            color={element.color}
            image={element.image}
          />
        ))}
      </div>
    </div>
  );
}

export default CardSection;
