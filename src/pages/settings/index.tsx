
import { Button, FileInput } from "@/components";
import { DashBoardLayout } from "@/layout";
import { ProfileDataType } from "@/modules/settings/types/profile-data-type";
import { StoreState } from "@/store/types/store-state.types";
import { baseURL } from "@/utils";
import { capitalizeText } from "@/utils/capitalizeText";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import { Avatar, IconButton } from "@mui/material";
import axios from "axios";
import { File } from "buffer";
import { Dispatch, FC, useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Settings = () => {
  enum SettingsTabsEnum {
    PERSONAL_INFORMATION = "PERSONAL_INFORMATION",
    KYC = "KYC",
    API_INTEGRATION = "API_INTEGRATION",
  }
  const [activeTab, setactiveTab] = useState(
    SettingsTabsEnum.PERSONAL_INFORMATION
  );

  const [loading, setLoading] = useState<boolean>(false);
  const [profile, setProfile] = useState<ProfileDataType | null>(null);
  const { user } = useSelector((state: StoreState) => state);

  const getProfileData = () => {
    setLoading(true);
    try {
      axios
        .get(`${baseURL}api/profile/${user?.customerId}`)
        .then((res) => setProfile(res?.data as ProfileDataType))
        .catch((err) => console.error(err))
        .finally(() => setLoading(false));
      console.log(profile);
    } catch (err) {
      console.error("failed to load data", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProfileData();
  }, []);

  return (
    <DashBoardLayout backAction backText="back">
      <h1 className="text-2xl font-extrabold">Settings</h1>

      <div className="w-full flex [&>*:last-child]:border-r-0 [&>*:first-child]:pl-0 mt-4 ">
        {Object.values(SettingsTabsEnum).map((tab) => (
          <button
            onClick={() => setactiveTab(tab)}
            className={`${
              tab === activeTab ? "text-yellow-500" : "text-gray-800"
            } border-r-2 pl-2 pr-2 text-center py-0 border-gray-800`}
          >
            {capitalizeText(tab.replace("_", " "))}
          </button>
        ))}
      </div>
      {loading ? (
        <div>loading...</div>
      ) : (
        <div className="mt-6">
          <div className="">
            {activeTab === SettingsTabsEnum.PERSONAL_INFORMATION && (
              <PersonalInformation data={profile} />
            )}
          </div>
        </div>
      )}
    </DashBoardLayout>
  );
};

export default Settings;

const PersonalInformation: FC<{
  data: ProfileDataType | null;
}> = ({ data }) => {
  const [isVisible, setisVisible] = useState<boolean>(false);
  const [image, setImage] = useState<File[]>([]);
  if (!data) {
    return <>failed to load..</>;
  } else {
    return (
      <div className="rounded border-1 border-gray-300  mt-3">
        <div className="border-b-2 border-b-gray-300  p-7">
          {" "}
          <h3 className="text-lg font-extrabold">Personal Information</h3>
        </div>
        <div className=" p-7 grid   grid-cols-3">
          {" "}
          <div>
            <DataItem title="Business Name" value={data?.businessName} />
            <DataItem
              title="Business Email Address"
              value={data?.businessEmail}
            />
            <DataItem title="Business Address" value={data?.businessaddress} />
            <DataItem
              title="Business Phone Number"
              value={data?.businessPhoneNo}
            />
            <DataItem title="Business Industry" value={data?.industry} />
            <DataItem
              title="Password"
              value={data?.password || ""}
              isPassword
              isVisible={isVisible}
              setisVisible={setisVisible}
            />
          </div>
          <div>
            {" "}
            <DataItem title="Contact person" value={data?.contactPerson} />
            <DataItem title="Email Address" value={data?.emailAddress} />
            <DataItem title="Phone Number" value={data?.phoneNumber} />
            <DataItem title="Country" value={data?.country} />
            <DataItem title="City" value={data?.city || ""} />
            <DataItem title="Zip Code" value={data?.zipCode || ""} />
          </div>
          <div>
            <div className="#F0F0F0 bg-[#F0F0F0] p-4">
              <p>Your Photo</p>
              <div className="flex gap-4 mt-4 items-center">
                <Avatar
                  src={data?.profilePic}
                  alt={data?.businessName}
                  sx={{ width: 80, height: 80 }}
                />{" "}
                <div>
                  <p className=" text-lg">Edit Your Photo</p>
                  <div className="flex gap-2">
                    <button className="text-sm">Delete</button>
                    <button className=" text-blue-500 text-sm">Update</button>
                  </div>
                </div>
              </div>
              <FileInput
                title=""
                value={image}
                handleChange={(e) => {
                  setImage([e?.target?.value]);
                }}
              />
            </div>
            <Button title="upload Photo" className="mt-4" />
          </div>
        </div>
      </div>
    );
  }
};

const DataItem: FC<{
  title: string;
  value: string;
  isPassword?: boolean;
  isVisible?: boolean;
  setisVisible?: Dispatch<boolean>;
}> = ({ title, value, isPassword, isVisible, setisVisible }) => {
  return (
    <div className="mb-12">
      {" "}
      <p className=" text-gray-800 font-bold">
        {title}
        {isPassword && (
          <IconButton
            onClick={() => !!setisVisible && setisVisible(!isVisible)}
          >
            {!isVisible ? (
              <RemoveRedEyeOutlinedIcon />
            ) : (
              <VisibilityOffOutlinedIcon />
            )}
          </IconButton>
        )}
      </p>
      <p className=" text-gray-500 mt-2">
        {isPassword
          ? isVisible
            ? value
            : [...value].map((char) => "*")
          : value}
      </p>
    </div>
  );
};
