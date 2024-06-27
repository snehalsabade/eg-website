import React from "react";
import { HStack, VStack, Alert } from "native-base";
import {
  FrontEndTypo,
  IconByName,
  facilitatorRegistryService,
  t,
  PCusers_layout as Layout,
  BodyMedium,
  CardComponent,
} from "@shiksha/common-lib";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import ProfilePhoto from "../../../v2/components/Functional/ProfilePhoto/ProfilePhoto.js";
import { getIndexedDBItem } from "v2/utils/Helper/JSHelper.js";
import { getOnboardingData } from "v2/utils/OfflineHelper/OfflineHelper.js";

export default function FacilitatorBasicDetails({ userTokenInfo }) {
  const [facilitator, setFacilitator] = React.useState();
  const navigate = useNavigate();
  const [fields, setFields] = React.useState([]);

  //   React.useEffect(() => {
  //     facilitatorDetails();
  //     getEditRequestFields();
  //   }, []);

  return (
    <Layout
      _appBar={{
        name: t("BASIC_DETAILS"),
        onPressBackButton: (e) => navigate(`/profile`),
      }}
      analyticsPageTitle={"FACILITATOR_BASIC_DETAILS"}
      pageTitle={t("FACILITATOR")}
      stepTitle={t("BASIC_DETAILS")}
    >
      <VStack paddingBottom="64px" bg="bgGreyColor.200">
        <VStack p="4" space="24px">
          <ProfilePhoto
            profile_photo_1={facilitator?.profile_photo_1}
            profile_photo_2={facilitator?.profile_photo_2}
            profile_photo_3={facilitator?.profile_photo_3}
          />
          <VStack>
            <HStack justifyContent="space-between" alignItems="Center">
              <FrontEndTypo.H1 color="textGreyColor.200" fontWeight="700">
                {`${facilitator?.first_name ? facilitator?.first_name : ""} ${
                  facilitator?.middle_name ? facilitator?.middle_name : ""
                } ${facilitator?.last_name ? facilitator?.last_name : ""}`}
              </FrontEndTypo.H1>

              <IconByName
                name="PencilLineIcon"
                color="iconColor.200"
                _icon={{ size: "20" }}
                onPress={(e) => {
                  navigate(`/profile/edit/basic_details`);
                }}
              />
            </HStack>
            <HStack alignItems="Center">
              <IconByName name="Cake2LineIcon" color="iconColor.300" />
              <FrontEndTypo.H3 color="textGreyColor.450" fontWeight="500">
                {facilitator?.dob &&
                moment(facilitator?.dob, "YYYY-MM-DD", true).isValid()
                  ? moment(facilitator?.dob).format("DD/MM/YYYY")
                  : "-"}
              </FrontEndTypo.H3>
            </HStack>
          </VStack>
          <CardComponent
            _vstack={{ space: 0 }}
            _hstack={{ borderBottomWidth: 0 }}
            title={t("CONTACT_DETAILS")}
            label={["SELF", "ALTERNATIVE_NUMBER", "EMAIL"]}
            icon={[
              { name: "CellphoneLineIcon", color: "iconColor.100" },
              { name: "SmartphoneLineIcon", color: "iconColor.100" },
              { name: "MailLineIcon", color: "iconColor.100" },
            ]}
            item={facilitator}
            arr={["mobile", "alternative_mobile_number", "email_id"]}
            onEdit={(e) => navigate(`/profile/edit/contact_details`)}
          />
          <CardComponent
            isHideProgressBar={true}
            _vstack={{ space: 0 }}
            _hstack={{ borderBottomWidth: 0 }}
            title={t("ADDRESS_DETAILS")}
            label={["HOME"]}
            item={{
              home: [
                facilitator?.state,
                facilitator?.district,
                facilitator?.block,
                facilitator?.village,
                facilitator?.grampanchayat,
              ]
                .filter((e) => e)
                .join(", "),
            }}
            arr={["home"]}
          />
        </VStack>
      </VStack>
    </Layout>
  );
}