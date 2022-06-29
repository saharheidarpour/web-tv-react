import styled from "styled-components";
const Container = styled.div`
  box-sizing: border-box;
  width: 198px;
  height: 290px;
  border-radius: 8px;
  background-image: url(${({ img }) => img});
  margin: 0 15px 35px 0;
  border: 2px solid
    ${({ focused, theme }) =>
      focused ? theme?.style?.border?.red300 : "transparent"};
`;
export { Container };
