type Props = {
  title: string;
};

const Button = ({ title }: Props) => {
  return (
    <div className="p-4 px-8 bg-primary text-white rounded-xl text-center">
      {title}
    </div>
  );
};

export default Button;
