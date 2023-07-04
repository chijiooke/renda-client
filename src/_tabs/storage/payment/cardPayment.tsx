import { useState } from "react";
import { Button, Input, TermsAndCondition } from "@/components";
import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3";
import dayjs from "dayjs";
import { useEffect } from "react";
import axios from "axios";
import { DashBoardRoutes, baseURL, queryStringBuilder } from "@/utils";
import { useSelector } from "react-redux";
// import { StoreState } from "@/store/reducer";
import { SuccessModal } from "@/modals";
import { useRouter } from "next/router";
import { StoreState } from "@/store/types/store-state.types";

const CardPayment = () => {
  const router = useRouter();
  const { bookingDetails, user } = useSelector((state: StoreState) => state);
  const [show, setShow] = useState(false);
  const config = {
    public_key: "FLWPUBK_TEST-bf4efecf672fbdab00ada453243661e8-X",
    tx_ref: dayjs(Date.now()).format("YYYY/MM/DD"),
    amount: bookingDetails?.amount,
    currency: "NGN",
    payment_options: "card,mobilemoney,ussd",
    customer: {
      email: user?.customerBusinessEmailAddress || "",
      phone_number: user?.customerBusinessPhoneNumber || "",
      name: user?.customerBusinessName || "",
    },
    customizations: {
      title: "Pay for Renda360 Storage",
      description: "Payment for items in cart",
      logo: "https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg",
    },
  };

  const handleFlutterPayment = useFlutterwave(config);

  const verifyPayment = async (data: {}) => {
    const queryString = queryStringBuilder(data);
    try {
      const { data } = await axios.put(baseURL + `VerifyPayment${queryString}`);
    } catch (error) {}
  };

  useEffect(() => {
    handleFlutterPayment({
      callback: async (response) => {
        console.log(response);
        await verifyPayment({
          bookingId: bookingDetails.bookingId,
          transactionId: response.transaction_id,
          flw_ref: response.flw_ref,
        });
        closePaymentModal(); // this will close the modal programmatically
        setShow(true);
      },
      onClose: () => {},
    });
  });
  return (
    <>
      <SuccessModal
        show={show}
        close={() => {
          setShow(false);
          router.push(DashBoardRoutes.STORAGE_BOOKING);
        }}
        details="You have successfully booked this storage"
        title="Booking Successful"
      />
    </>
  );
};

export { CardPayment };
