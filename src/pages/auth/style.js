import styled from "styled-components";

export const Container = styled.div`
  display: flex;
`;

export const Welcome = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  align-items: center;
  justify-content: center;
`;

export const TelewebionLogoImageStyleBig = styled.img`
  height: 187px;
  width: 718px;
`;

export const TelewebionLogoImageStyleSmall = styled.img`
  height: 111px;
  width: 426.19px;
`;

export const EnterPhoneButton = styled.button`
  display: block;
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  direction: rtl;
  background: #2c2c2e;
  border: 2px solid #e51400;
  width: 342px;
  height: 84px;
  transform: translateX(-50%);
  color: #f2f2f2;
  font-weight: 400;
  font-size: 20px;
  line-height: 37px;
  margin-top: 280px;
  cursror: pointer;

  span {
    margin-right: 20px;
  }
`;

export const AuthenticationContainer = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  padding: 197px 254px 198px 177px;
  width: 100vw;
  height: calc(100vh - 197px - 198px);
  direction: rtl;
`;

export const RightSideSection = styled.div`
  display: flex;
  flex: 0 0 calc(100% - 540px);
  max-width: calc(100% - 540px);

  h1 {
    font-style: normal;
    font-weight: 400;
    font-size: 48px;
    line-height: 74px;
    color: #ffffff;
  }

  p {
    font-style: normal;
    font-weight: 400;
    font-size: 30px;
    line-height: 46px;
    text-align: right;
    color: #ffffff;
    opacity: 0.6;
    width: 782px;
  }
`;

export const ReturnButton = styled.button`
  background: rgba(58, 58, 60, 0.6);
  border: 0;
  border-radius: 18px;
  width: 120px;
  height: 60px;

  span {
    font-style: normal;
    font-weight: 400;
    font-size: 25px;
    line-height: 39px;
    color: #ffffff;
    opacity: 0.6;
  }
`;

export const LeftSideSection = styled.div`
  display: flex;
  flex: 0 0 540px;
  max-width: 540px;
`;

export const NumPadKeysContainer = styled.div`
  background: #2c2c2e;
  border-radius: 18px;
  width: 539px;
  height: 539px;
  padding: 82px 88px;
`;

export const SubmitButton = styled.button`
  height: 72px;
  background: #1c1c1e;
  border-radius: 8px;
  border: 0;
  width: 100%;
  color: #aaafb5;
  font-size: 34px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 6px;
  cursor: pointer;

  &[disabled] {
    cursor: not-allowed;
    opacity: 0.5;
  }

  span {
    display: block;
    margin-right: 12px;
  }
`;
