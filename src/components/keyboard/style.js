import styled from "styled-components";

const Container = styled.div`
  width: 414px;
`;

const Input = styled.input.attrs((props) => ({ focused: props.focused }))`
  width: 100%;
  height: 54px;
  outline: none;
  color: ${({ theme }) => theme?.style?.text?.primary};
  background: ${({ theme }) => theme?.style?.background?.alternative};
  font-weight: 400;
  font-size: 25px;
  line-height: 39px;
  box-sizing: border-box;
  padding: 0 12px;
  font-family: "Yekan-Bakh";
  border: 2px solid
    ${({ theme, focused }) =>
      focused ? theme?.style?.border?.red300 : "transparent"};
`;
const Row = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;
const Button = styled.button.attrs((props) => ({
  theme: props.theme,
  marginTop: props.type ? "12px" : "5px",
  type: props.type,
  focused: props.focused,
}))`
  height: 54px;
  ${(type) => {
    if (type === "backspace") {
      return `
        width:"114px";
    `;
    } else if (type === "space") {
      return `
        width:"auto";
    `;
    } else {
      return `
      width:"54px";
    `;
    }
  }}
  min-width: 54px;
  flex: ${({ type }) => (type === "space" ? "1 1 auto" : "unset")};
  outline: none;
  border: none;
  color: ${({ theme }) => theme?.style?.text?.primary};
  background: ${({ theme }) => theme?.style?.background?.alternative};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 6px;
  cursor: pointer;
  margin-top: ${({ marginTop }) => marginTop};
  font-family: "Yekan-Bakh";
  border: 2px solid
    ${({ theme, focused }) =>
      focused ? theme?.style?.border?.red300 : "transparent"};
  &:first-child {
    margin-right: 0;
  }
  &:nth-child(7n + 1) {
    margin-right: 0;
  }
  &:active,
  &:focus {
    border: 1px solid ${({ theme }) => theme?.style?.border?.red300};
  }
`;
export { Container, Input, Row, Button };
