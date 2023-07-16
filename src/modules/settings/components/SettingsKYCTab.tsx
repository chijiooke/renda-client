import React, { FC, useState } from "react";
import { SettingTabWrapper } from "./SettingTabWrapper";
import { ProfileDataResponseType } from "../types/profile-data-type";
import { SettingsDataItem } from "./SettingDataItem";
import CropOriginalRoundedIcon from "@mui/icons-material/CropOriginalRounded";
import { Button } from "@mui/material";
import { ImageCarousel } from "../modal/ImageCarousel";

export const SettingsKYCTab: FC<{ data: ProfileDataResponseType | null }> = ({
  data,
}) => {
  const [imageList, setimageList] = useState<string[]>([]);
  return (
    <SettingTabWrapper title="KYC - Document Upload">
      <div>
        <SettingsDataItem
          title="Company Registration Number"
          value={data?.cacNo || "N/A"}
        />
        <div className="mb-8">
          <p className=" text-gray-800 font-bold ">
            Company Registration Certificate
          </p>
          <SettingsImageCard
            images={
              data?.registrationCertificate
                ? [data.registrationCertificate]
                : []
            }
            viewImage={() =>
              setimageList(data ? [data?.registrationCertificate] : [])
            }
          />
        </div>
        <div className="mt-8">
          <p>Proof of Address</p>
          <SettingsImageCard
            images={
              data?.registrationCertificate
                ? [data.registrationCertificate]
                : []
            }
            viewImage={() =>
              setimageList(data ? [data?.registrationCertificate] : [])
            }
          />
        </div>
      </div>
      {!!imageList.length && (
        <ImageCarousel
          show={!!imageList.length}
          imageSource={imageList}
          onClose={() => setimageList([])}
        />
      )}
    </SettingTabWrapper>
  );
};

const SettingsImageCard: FC<{
  images?: string[];
  viewImage: (images?: string[]) => void;
}> = ({ images, viewImage }) => {
  return (
    <div className="flex w-[80%] p-2 shadow-slate-400 box-border justify-between items-center bg-white">
      <div className="flex items-center gap-1">
        <CropOriginalRoundedIcon
          fontSize="medium"
          className="p-1 bg-gray-200 rounded-full"
        />{" "}
        <p>file-name</p>
      </div>
      <Button
        onClick={() => {
          !!images ? viewImage(images) : null;
        }}
      >
        View Image
      </Button>
    </div>
  );
};
