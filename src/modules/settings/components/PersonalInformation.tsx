import { FC, useState } from "react";
import { ProfileDataResponseType } from "../types/profile-data-type";
import { SettingsDataItem } from "./SettingDataItem";
import { Avatar } from "@mui/material";
import { Button, FileInput } from "@/components";
import { SettingTabWrapper } from "./SettingTabWrapper";

export const PersonalInformation: FC<{
  data: ProfileDataResponseType | null;
}> = ({ data }) => {
  const [isVisible, setisVisible] = useState<boolean>(false);
  const [image, setImage] = useState<File[]>([]);

  if (!data) {
    return <>failed to load..</>;
  } else {
    return (
      <SettingTabWrapper title="Personal Information">
        {" "}
        <div className="grid grid-cols-3">
          <div>
            <SettingsDataItem
              title="Business Name"
              value={data?.businessName}
            />
            <SettingsDataItem
              title="Business Email Address"
              value={data?.businessEmail}
            />
            <SettingsDataItem
              title="Business Address"
              value={data?.businessaddress}
            />
            <SettingsDataItem
              title="Business Phone Number"
              value={data?.businessPhoneNo}
            />
            <SettingsDataItem
              title="Business Industry"
              value={data?.industry}
            />
            <SettingsDataItem title="Zip Code" value={data?.zipCode || "N/A"} />
          </div>
          <div>
            {" "}
            <SettingsDataItem
              title="Contact person"
              value={data?.contactPerson}
            />
            <SettingsDataItem
              title="Email Address"
              value={data?.emailAddress}
            />
            <SettingsDataItem title="Phone Number" value={data?.phoneNumber} />
            <SettingsDataItem title="Country" value={data?.country} />
            <SettingsDataItem title="City" value={data?.city || "N/A"} />
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
                handleChange={(e: any) => {
                  setImage([e?.target?.value]);
                }}
              />
            </div>
            <Button title="upload Photo" className="mt-4" />
          </div>
        </div>
      </SettingTabWrapper>
    );
  }
};
