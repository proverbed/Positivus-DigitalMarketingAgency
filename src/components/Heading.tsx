type Props = {
  title: string;
  line1: string;
  line2: string;
};

const Heading = ({ title, line1, line2 }: Props) => {
  return (
    <div className="lg:my-16 my-8 mx-4">
      <div className="flex gap-8 items-center flex-col sm:flex-row">
        <h1 className="text-2xl font-medium bg-secondary rounded-md px-2 py-1">
          {title}
        </h1>
        <p className="text-xs sm:text-base">
          {line1}
          <br />
          {line2}
        </p>
      </div>
    </div>
  );
};

export default Heading;
