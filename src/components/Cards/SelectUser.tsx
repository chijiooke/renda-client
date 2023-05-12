import { FC } from "react";
import cn from "classnames";
type Props = {
  active: boolean;
  title: string;
  handleClick?: () => void;
};
const SelectUser: FC<Props> = ({ active, title, handleClick }) => {
  const check = active ? "check" : "uncheck";
  const user = active ? "user-check" : "user";
  return (
    <div
      onClick={handleClick}
      className={cn(
        "bg-white flex  justify-between cursor-pointer items-center rounded border-2 border-gray-200 p-10",
        {
          " border-primary": active,
          "border-gray-200": !active,
        }
      )}
    >
      <img src={`/assets/images/${user}.svg`} className="h-20px" />
      <span
        className={cn({
          "text-primary font-bold": active,
          "opacity-40 ": !active,
        })}
      >
        {title}
      </span>
      <img src={`/assets/images/${check}.svg`} className="h-20px" />
    </div>
  );
};

export { SelectUser };
