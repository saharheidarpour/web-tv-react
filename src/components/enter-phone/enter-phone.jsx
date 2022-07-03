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
  TelewebionLogoImageStyleSmall
} from "@pages/auth/style";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import {
  PhoneBox,
  PhoneBoxContainer,
  PhoneBoxMessage
} from "./style";

export default function EnterPhone({ goToStep3, goBack, phoneResultData }) {
  const [input, setInput] = useState("");
  const { data, isLoading, mutate, error } = ShenasehApiList.forgetPasswrod();

  const inputBox = () => {
    return (
      <PhoneBoxContainer>
        <PhoneBox>{input}</PhoneBox>
        <PhoneBoxMessage>شماره تلفن خود را وارد کنید</PhoneBoxMessage>
      </PhoneBoxContainer>
    );
  };

  const phoneRegexHanlder = (numberStr) => {
    const mobileReg =
      /(0|\+98)?([ ]|-|[()]){0,2}9[1|2|3|4]([ ]|-|[()]){0,2}(?:[0-9]([ ]|-|[()]){0,2}){8}/gi;
    const junkReg = /[^\d]/gi;
    const fixNumbers = (str) => {
      const persianNumbers = [
        /۰/g,
        /۱/g,
        /۲/g,
        /۳/g,
        /۴/g,
        /۵/g,
        /۶/g,
        /۷/g,
        /۸/g,
        /۹/g,
      ];
      const arabicNumbers = [
        /٠/g,
        /١/g,
        /٢/g,
        /٣/g,
        /٤/g,
        /٥/g,
        /٦/g,
        /٧/g,
        /٨/g,
        /٩/g,
      ];

      if (typeof str === "string") {
        for (let i = 0; i < 10; i++) {
          str = str.replace(persianNumbers[i], i).replace(arabicNumbers[i], i);
        }
      }
      return str;
    };
    const mobiles = fixNumbers(numberStr + "").match(mobileReg) || [];
    mobiles.forEach((value, index, arr) => {
      arr[index] = value.replace(junkReg, "");
      arr[index][0] === "0" || (arr[index] = "0" + arr[index]);
    });
    return mobiles;
  };

  const pressSubmitKey = () => {
    const validatePhone = phoneRegexHanlder(input);
    if (validatePhone.length > 0) {
      validatePhone[0] = validatePhone[0].substring(1);
      mutate({
        data: {
          code: "98",
          phone: validatePhone[0],
          smsStatus: "default",
        },
      });
    } else {
      alert("شماره تلفن وارد شده صحیح نمی باشد");
    }
  };

  useEffect(() => {
    if (data) {
      phoneResultData(data);
      goToStep3();
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
          <NumPadKeys input={input} setInput={setInput}></NumPadKeys>
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

EnterPhone.propTypes = {
  goToStep3: PropTypes.func.isRequired,
  goBack: PropTypes.func.isRequired,
  phoneResultData: PropTypes.func.isRequired,
};
