import PhoneIcon from "@assets/images/phone-icon.svg";
import EnterCode from "@components/enter-code";
import EnterPhone from "@components/enter-phone";
import authPageStatus from "@enums/auth-page-status";
import { useState } from "react";
import {
  Container,
  EnterPhoneButton,
  TelewebionLogoImageStyleBig,
  Welcome
} from "./style";

export default function Authenticate() {
  const [pageState, setPageState] = useState(authPageStatus.STEP1);
  const [phoneResultData, setPhoneResultData] = useState({});

  const welcomePage = (
    <Welcome>
      <div>
        <TelewebionLogoImageStyleBig src="https://static1.telewebion.com/newtw/media/images/logo-top-new.png" />
        <EnterPhoneButton onClick={() => changePageState(authPageStatus.STEP2)}>
          <PhoneIcon />
          <span>ورود با شماره تلفن همراه</span>
        </EnterPhoneButton>
      </div>
    </Welcome>
  );

  const changePageState = (pageState) => {
    setPageState(pageState);
  };

  return (
    <Container>
      {pageState === authPageStatus.STEP2 ? (
        <EnterPhone
          phoneResultData={(data) => setPhoneResultData(data)}
          goBack={() => changePageState(authPageStatus.STEP1)}
          goToStep3={() => changePageState(authPageStatus.STEP3)}></EnterPhone>
      ) : pageState === authPageStatus.STEP3 ? (
        <EnterCode
          phoneResultData={phoneResultData}
          goBack={() => changePageState(authPageStatus.STEP2)}></EnterCode>
      ) : (
        welcomePage
      )}
    </Container>
  );
}
