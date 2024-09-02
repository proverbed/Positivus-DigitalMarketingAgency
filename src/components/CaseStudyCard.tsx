type Props = {
  description: string;
};

function CaseStudyCard({ description }: Props) {
  return (
    <div className="w-1/3 p-4 border-white border-r-2">
      <p className=" ">{description}</p>
    </div>
  );
}

export default CaseStudyCard;
