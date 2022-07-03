import styled from "styled-components";

export const CodeInputContainer = styled.div`
  display: flex;
  margin-left: -6px;
  margin-right: -6px;
  direction: ltr;
`;

export const CodeInputBox = styled.div`
  display: flex;
  background: #1c1c1c;
  width: calc(100% / 4);
  margin: 0 6px 30px;
  height: 78px;
  border-radius: 4px;
  justify-content: center;
  align-items: center;
  font-size: 34px;
  position: relative;

  &.active-char {
    &:before {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      height: 5px;
      right: 0;
      background: #d02028;
      border-radius: 0px 0px 4px 4px;
    }
  }
`;
