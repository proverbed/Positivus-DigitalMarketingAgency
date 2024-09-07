import amazon from "../assets/company-logo-amazon.png";
import dribble from "../assets/company-logo-dribble.png";
import hubspot from "../assets/company-logo-hubspot.png";
import netflix from "../assets/company-logo-netflix.png";
import notion from "../assets/company-logo-notion.png";
import zoom from "../assets/company-logo-zoom.png";

function CompanySection() {
  const companies = [
    {
      image: amazon
    },
    {
      image: dribble
    },
    {
      image: hubspot
    },
    {
      image: netflix
    },
    {
      image: notion
    },
    {
      image: zoom
    }
  ];

  return (
    <div className="my-16">
      <div className="flex flex-wrap items-center justify-center gap-8">
        {companies.map((element) => (
          <img className="px-4" src={element.image} />
        ))}
      </div>
    </div>
  );
}

export default CompanySection;
