import { TypeEnum } from "../Type.ts";

type Props = {
  title: string;
  type?: TypeEnum;
};

function Button({ title, type = TypeEnum.Primary }: Props) {
  let bgColor;
  let textColor;
  switch (type) {
    case TypeEnum.Primary:
      bgColor = 'bg-primary';
      textColor = 'text-white';
      break;
    case TypeEnum.Secondary:
      bgColor = 'bg-secondary';
      textColor = 'text-black';
      break;
    default:
      bgColor = '';
      textColor = '';
      break;
  }
  return (
    <div
      className={`p-4 px-8 ${bgColor} ${textColor} rounded-xl text-center`}
    >
      <button type="button">{title}</button>
    </div>
  );
}

export default Button;
Button.defaultProps = {
  type: TypeEnum.Primary
};
