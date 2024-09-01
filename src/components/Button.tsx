type Props = {
  title: string;
  type: Type;
};

export enum Type {
  Primary,
  Secondary,
}

const Button = ({ title, type = Type.Primary }: Props) => {
  return (
    <div
      className={`p-4 px-8 ${type == Type.Primary ? "bg-primary" : type == Type.Secondary ? "bg-secondary" : ""} ${type == Type.Primary ? "text-white" : type == Type.Secondary ? "text-black" : ""}  rounded-xl text-center`}
    >
      <button>{title}</button>
    </div>
  );
};

export default Button;
