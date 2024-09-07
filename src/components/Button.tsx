import Type from "../Type.ts";

type Props = {
  title: string;
  type: Type;
};

function Button({ title, type = Type.Primary }: Props) {
  return (
    <div
      className={`p-4 px-8 ${type == Type.Primary ? "bg-primary" : type == Type.Secondary ? "bg-secondary" : ""} ${type == Type.Primary ? "text-white" : type == Type.Secondary ? "text-black" : ""}  rounded-xl text-center`}
    >
      <button type="button">{title}</button>
    </div>
  );
}

export default Button;
