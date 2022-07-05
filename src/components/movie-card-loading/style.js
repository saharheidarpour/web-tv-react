import styled from "styled-components";
const Container = styled.div`
  box-sizing: border-box;
  width: 198px;
  height: 290px;
  border-radius: 8px;
  background-color: no-repeat;
  margin: 0 15px 35px 0;
  border: 2px solid
    ${({ focused, theme }) =>
      focused ? theme?.style?.border?.red300 : "transparent"};
  display: inline-block;
  position: relative;
  overflow: hidden;
  background-color: ${({ theme }) => theme?.style?.background?.alternative};
  &::after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    transform: translateX(-100%);
    background-image: linear-gradient(
      90deg,
      rgba(83,83,83, 0) 0,
      rgba(83,83,83, 0.2) 20%,
      rgba(83,83,83, 0.5) 60%,
      rgba(83,83,83, 0)
    );
    animation: shimmer 2s infinite;
    content: "";
  }

`;
export { Container };
