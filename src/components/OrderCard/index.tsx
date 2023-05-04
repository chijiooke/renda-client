import { FC } from "react";
type Props = {
  value: string;
  title: string;
};

const OrderCard: FC<Props> = ({ value, title }) => {
  return (
    <div className="border-1 p-2 flex gap-10">
      <p className="pr-10">{value}</p>
      <p className="text-center"> {title}</p>
    </div>
  );
};

export { OrderCard };
