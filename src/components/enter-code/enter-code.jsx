import RightArrorIcon from "@assets/images/right-arrow.svg";
import NumPadKeys from "@components/num-pad-keys";
import SpinnerLoading from "@components/spinner-loading/spinner-loading";
import ShenasehApiList from "@lib/api/auth";
import {
  AuthenticationContainer,
  LeftSideSection,
  NumPadKeysContainer,
  ReturnButton,
  RightSideSection,
  SubmitButton,
  TelewebionLogoImageStyleSmall,
} from "@pages/auth/style";
import { setCookie } from "@utils/cookie";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CodeInputBox, CodeInputContainer } from "./style";

export default function EnterCode({ goBack, phoneResultData }) {
  const navigate = useNavigate();
  const [input, setInput] = useState("");
  const { data, isLoading, mutate, error } = ShenasehApiList.verifyCode();

  const inputBox = () => {
    return (
      <CodeInputContainer>
        <CodeInputBox className={input.length === 0 ? "active-char" : ""}>
          {input[0]}
        </CodeInputBox>
        <CodeInputBox className={input.length === 1 ? "active-char" : ""}>
          {input[1]}
        </CodeInputBox>
        <CodeInputBox className={input.length === 2 ? "active-char" : ""}>
          {input[2]}
        </CodeInputBox>
        <CodeInputBox className={input.length >= 3 ? "active-char" : ""}>
          {input[3]}
        </CodeInputBox>
      </CodeInputContainer>
    );
  };

  const pressSubmitKey = () => {
    mutate({
      data: {
        verifyCode: +input,
        token: phoneResultData.token,
        market: process.env.MARKET,
        marketVersion: process.env.MARKET_VERSION,
      },
    });
  };

  useEffect(() => {
    if (data) {
      setCookie("token", data.access_token);
      navigate("/");
    }
  }, [data]);

  useEffect(() => {
    if (error) {
      alert(JSON.stringify(error.message));
    }
  }, [error]);

  return (
    <AuthenticationContainer>
      <RightSideSection>
        <div>
          <TelewebionLogoImageStyleSmall src="https://static1.telewebion.com/newtw/media/images/logo-top-new.png" />
          <h1>ورود و ثبت نام</h1>
          <p>
            برای ورود به تلوبیون باکس شماره خود را وارد کنید و سپس کدی که برای
            شما پیامک میشود را در کادر مشخص وارد کنید
          </p>
          <ReturnButton onClick={goBack}>
            <span>بازگشت</span>
          </ReturnButton>
        </div>
      </RightSideSection>
      <LeftSideSection>
        <NumPadKeysContainer>
          {inputBox()}
          <NumPadKeys
            input={input}
            setInput={setInput}
            maxLength={4}></NumPadKeys>
          <SubmitButton
            disabled={input.length === 0 || isLoading}
            onClick={() => pressSubmitKey()}>
            {isLoading ? (
              <SpinnerLoading />
            ) : (
              <>
                <RightArrorIcon />
                <span>تایید و ادامه</span>
              </>
            )}
          </SubmitButton>
        </NumPadKeysContainer>
      </LeftSideSection>
    </AuthenticationContainer>
  );
}

EnterCode.propTypes = {
  goBack: PropTypes.func.isRequired,
  phoneResultData: PropTypes.object.isRequired,
};
