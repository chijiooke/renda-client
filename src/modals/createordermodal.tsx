import React, {
    useState,
    ReactNode,
    ChangeEventHandler,
    useEffect,
  } from "react";
  import cn from "classnames";
  import { Input, Button, Select } from "@/components";
  import axios from "axios";
  import dayjs from "dayjs";
  import { baseURL, DashBoardRoutes,  } from "@/utils";
  import { useSelector } from "react-redux";
  import { StoreState } from "@/store/reducer";
  
  import customParseFormat from "dayjs/plugin/customParseFormat";
import { useRouter } from "next/router";
import { OrdermgtRoutes } from "@/utils/routes";

  
  type Props = {
    show: boolean;
    data?: any;
    close: () => void;
  };

 function CreateOrderModal({ show, data, close }: Props) {

    const router = useRouter();
    const [selectedButton, setSelectedButton] = useState('');
  
    const handleButtonClick = (buttonName: any) => {
      setSelectedButton(buttonName);
    };

    const handleSubmit = () => {
        // Perform any necessary actions before routing
        // Based on the selected button, route to a specific page
        if (selectedButton === 'Button 1') {
          router.push(DashBoardRoutes.INVENTORY_ALL);
        } else if (selectedButton === 'Button 2') {
          router.push(OrdermgtRoutes.CREATEORDER_CSV);
        } else if (selectedButton === 'Button 3') {
          router.push('/page3');
        }
      };
  
    return show? (
        <div className="modal">
            
        <div className="rounded bg-white p-10">
<div className="relative flex">
<div className="relative w-full h-full p-4"
style={{ width: "600px" }}>
  <p
              onClick={close}
              className="absolute right-0 top-0 scale-125 cursor-pointer"
            >
              X
            </p>

            <div>
            <p className="text-center text-primary font-extrabold text-[18px]">
                  Create Order
                </p>
            </div>
            <div className="grid justify-center">
            <div className="grid my-6 gap-6">
      <button
        className={selectedButton === 'Button 1' ? 'selected' : 'notSelected'}
        onClick={() => handleButtonClick('Button 1')}
      >
        <p>
        Direct from Inventory
        </p>
       
      </button>
      <button
        className={selectedButton === 'Button 2' ? 'selected' : 'notSelected'}
        onClick={() => handleButtonClick('Button 2')}
      >
       Via CSV
      </button>
      <button
        className={selectedButton === 'Button 3' ? 'selected' : 'notSelected'}
        onClick={() => handleButtonClick('Button 3')}
      >
        VIA API
      </button>
      {/* <button onClick={handleSubmit}>Submit</button> */}

      <style jsx>{`
        .selected {
            width: 317px;
            height: 48px;
            left: 648px;
            top: 363px;
            
            background: #FFFFFF;
            border: 2px solid #1B547F;
            border-radius: 4.93211px;
            .p {
                text-color: #1B547F;
            }
        }
        .notSelected {
            width: 317px;
            height: 48px;
            left: 648px;
            top: 439px;

            background: #FFFFFF;
            border: 1px solid rgba(0, 0, 0, 0.15);
            border-radius: 4.93211px;
        }
      `}</style>
    </div>

        </div>

        <div className=" w-full flex justify-center">
                <Button
                  title="Create order"
                  type="primary"
                  handleClick={handleSubmit}
                />
              </div>
  </div>
</div>
        </div>

        </div>
    ) : null;
  }

  const Layout = ({
    children,
    option,
    center = true,
  }: {
    children: ReactNode;
    option: string;
    center?: boolean;
  }) => {
    return (
      <div
        className={cn("grid grid-cols-3 w-full ", {
          "items-center": center,
        })}
      >
        <p className="text-[14px] font-semibold "> {option}</p>
        <div className=" w-full col-span-2">{children}</div>
      </div>
    );
  };

  export { CreateOrderModal };