import { Button, Input, Select } from "@/components";

import { baseURL, formatCurrency } from "@/utils";
import axios from "axios";
import cn from "classnames";
import dayjs from "dayjs";
import {
  ChangeEventHandler,
  ReactNode,
  useEffect,
  useState,
} from "react";
import { useSelector } from "react-redux";

import customParseFormat from "dayjs/plugin/customParseFormat";
import { SuccessModal } from "./success";
import { StoreState } from "@/store/types/store-state.types";

dayjs.extend(customParseFormat);

type Props = {
  show: boolean;
  data?: any;
  close: () => void;
};
const periods = ["Months", "Years"];
function BookStorageModal({ show, data, close }: Props) {
  const [details, setDetails] = useState({} as any);
  const [loading, setLoading] = useState(false);
  const { user } = useSelector((state: StoreState) => state);
  const [endDate, setEndDate] = useState("");
  const [duration, setDuration] = useState<number>(0);
  const [period, setPeriod] = useState(periods[0]);
  const [durationError, setDurationError] = useState(false);
  const [availableError, setAvailableError] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const handleChange: ChangeEventHandler<
    HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
  > = (e) => {
    const target = e.target as HTMLInputElement;
    const dt = {
      ...details,
      [target.name]: target.value,
      amount:
        +(target.name == "spaceRequired" && target.value) * +data?.rendaPrice!,
      storageFacilityId: data?.storageFacilityId,
      customerId: user?.customerId,
      endDate,
    };
    setDetails(dt);
  };
  const handleDuration: ChangeEventHandler<HTMLInputElement> = (e) => {
    setDuration(+(e.target as HTMLInputElement).value);
  };
  const handlePeriod: ChangeEventHandler<HTMLSelectElement> = (e) => {
    setPeriod((e.target as HTMLSelectElement).value);
  };
  useEffect(() => {
    const t = dayjs(details.startDate).add(
      duration,
      period == "Months" ? "month" : "year"
    );
    const v = dayjs(t).format("YYYY/MM/DD").replaceAll("/", "-");
    setEndDate(v);
  }, [details.startDate, duration, period]);
  const bookStorage = async () => {
    if (!validate()) return;
    setLoading(true);
    try {
      const response = await axios.post(baseURL + "api/bookings", details);
      close();
      setShowModal(true);
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  const validate = () => {
    let valid = true;
    if (period === "Months" && duration < 6) {
      setDurationError(true);
      valid = false;
    } else {
      setDurationError(false);
    }
    if (details.spaceRequired >= data.availableSpace) {
      setAvailableError(true);
      valid = false;
    } else {
      setAvailableError(false);
    }

    return valid;
  };

  useEffect(() => {
    if (durationError || availableError) {
      validate();
    }
  }, [period, duration, durationError, availableError, details.spaceRequired]);
  return (
    <>
      <SuccessModal
        show={showModal}
        close={() => setShowModal(false)}
        state="approved"
        details="You have successfully booked a storage facility for a customer. Email has been sent to customer"
      />
      {show ? (
        <div className="modal">
          <div className="rounded bg-white p-10">
            <div className="relative flex ">
              <div
                className="relative w-full h-full p-4"
                style={{ width: "600px" }}
              >
                <p
                  onClick={close}
                  className="absolute right-0 top-0 scale-125 cursor-pointer"
                >
                  X
                </p>
                <div className="inline-flex w-fit flex-col space-y-10 gap-5 items-center justify-start rounded mx-auto">
                  <div className="w-full flex flex-col gap-8 justify-between my-10">
                    <p className="text-center text-primary font-extrabold text-[18px]">
                      Book a Storage Facility
                    </p>
                    <Layout option="Duration of Usage" center={false}>
                      <div className="flex flex-col gap-4">
                        <div className="grid grid-cols-3 gap-2">
                          <Input
                            name=""
                            handleChange={handleDuration}
                            type="number"
                            error={durationError}
                          />
                          <div className="col-span-2">
                            <Select
                              options={periods}
                              handleChange={handlePeriod}
                              caption="6 months minimum"
                              error={durationError}
                            />
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                          <Input
                            type="date"
                            label="Start Date"
                            name="startDate"
                            handleChange={handleChange}
                          />
                          <Input
                            type="date"
                            label="End Date"
                            name="endDate"
                            value={endDate}
                            disabled
                          />
                        </div>
                      </div>
                    </Layout>

                    <Layout option="Size of Space Required">
                      <Input
                        placeholder="Minimum of 100sqm"
                        name="spaceRequired"
                        handleChange={handleChange}
                        error={availableError}
                        caption={`There's only ${data.availableSpace}sqm available`}
                        type="number"
                      />
                    </Layout>
                    <Layout option="Amount to be paid">
                      <Input
                        placeholder=""
                        name="amount"
                        handleChange={handleChange}
                        disabled={true}
                        className="font-bold"
                        value={
                          "₦ " +
                          formatCurrency(
                            +details?.spaceRequired * +data?.rendaPrice! || 0
                          )
                        }
                      />
                    </Layout>
                  </div>
                  <div className=" w-full">
                    <Button
                      title="Book Now"
                      className="w-full"
                      loading={loading}
                      handleClick={bookStorage}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
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

export { BookStorageModal };
