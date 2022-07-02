import styled from "styled-components";

const Container = styled.div`
  padding: 64px 0 64px 22px;
  display: flex;
  /* direction: ltr; */
`;
const ResultItem = styled.div`
  width: 197px;
  height: 289px;
  background-color: beige;
  margin: 0 0 35px 15px;
  border-radius: 5px;
  &:nth-child(6n) {
    margin-left: 0;
  }
`;
const KeyboardContainer = styled.div`
  margin-top: 24px;
  height: 540px;
`;
const Main = styled.main`
  flex: 1 1 auto;
  display: flex;
  flex-wrap: wrap;
  margin-right: 45px;
  height: fit-content;
`;
const Section = styled.section`
  margin-top: 33px;
  font-style: normal;
  font-weight: 400;
  font-size: 25px;
  line-height: 39px;
`;
const Row = styled.div`
  display: flex;
  align-items: center;
  border-radius: 8px;
  margin-top: 12px;
`;
const Button = styled.button.attrs((props) => ({
  theme: props.theme,
  focused: props.focused,
}))`
  width: 206px;
  height: 52px;
  background: ${({ theme }) => theme?.style?.background?.alternative};
  color: ${({ theme }) => theme?.style?.text?.primary};
  border: none;
  outline: none;
  font-style: normal;
  font-weight: 400;
  font-size: 21px;
  line-height: 33px;
  border: 2px solid
    ${({ theme, focused }) =>
      focused ? theme?.style?.border?.primary : "transparent"};
  border-radius: 8px;
  &:first-child {
    border-radius: ${({ focused }) =>
      focused ? "8px" : "0 8px 8px 0"} !important;
  }
  &:last-child {
    border-radius: ${({ focused }) =>
      focused ? "8px" : " 8px 0 0 8px"} !important;
  }
  &:active,
  &:focus {
    border: 2px solid ${({ theme }) => theme?.style?.border?.primary};
    border-radius: 8px;
  }
`;
const Aside = styled.aside`
  width: 414px;
  margin-right: 12px;
`;
const Title = styled.div`
  margin-right: 12px;
  text-align: center;
  color: ${({ theme }) => theme?.style?.text?.primary};
  font-style: normal;
  font-weight: 400;
  font-size: 34px;
  line-height: 53px;
`;
export {
  Container,
  Button,
  Aside,
  Section,
  Title,
  Row,
  Main,
  KeyboardContainer,
  ResultItem,
};
