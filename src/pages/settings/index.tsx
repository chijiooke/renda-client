import { DashBoardLayout } from "@/layout";
import { PersonalInformation } from "@/modules/settings/components/PersonalInformation";
import { SettingsKYCTab } from "@/modules/settings/components/SettingsKYCTab";
import { ProfileDataResponseType as ProfileDataResponseType } from "@/modules/settings/types/profile-data-type";
import { StoreState } from "@/store/types/store-state.types";
import { baseURL } from "@/utils";
import { capitalizeText } from "@/utils/capitalizeText";
import axios from "axios";
import { useEffect, useState } from "react";
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
  const [profile, setProfile] = useState<ProfileDataResponseType | null>(null);
  const { user } = useSelector((state: StoreState) => state);

  const getProfileData = () => {
    setLoading(true);
    try {
      axios
        .get(`${baseURL}api/profile/${user?.customerId}`)
        .then((res) => setProfile(res?.data as ProfileDataResponseType))
        .catch((err) => console.error(err))
        .finally(() => setLoading(false));
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
      <div className="w-full flex [&>*:last-child]:border-r-0 [&>*:first-child]:pl-0 mt-4  p-0">
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
      {!!loading ? (
        <div className="min-w-full flex items-center">loading...</div>
      ) : (
        <div className="mt-6">
          <div className="">
            {activeTab === SettingsTabsEnum.PERSONAL_INFORMATION && (
              <PersonalInformation data={profile} />
            )}
            {activeTab === SettingsTabsEnum.KYC && (
              <SettingsKYCTab data={profile} />
            )}
          </div>
        </div>
      )}
    </DashBoardLayout>
  );
};

export default Settings;
