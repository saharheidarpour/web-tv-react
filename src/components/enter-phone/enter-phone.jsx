import NumPadKeys from "@components/num-pad-keys";
import {
  AuthenticationContainer,
  LeftSideSection,
  ReturnButton,
  RightSideSection,
  TelewebionLogoImageStyleSmall,
} from "@pages/auth/style";
import PropTypes from "prop-types";

export default function EnterPhone({ goToStep3, goBack }) {
  const inputBox = () => {
    return <div>input phone box</div>;
  };

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
        <NumPadKeys inputBox={inputBox} goToStep3={goToStep3}></NumPadKeys>
      </LeftSideSection>
    </AuthenticationContainer>
  );
}

EnterPhone.propTypes = {
  goToStep3: PropTypes.func.isRequired,
  goBack: PropTypes.func.isRequired,
};
