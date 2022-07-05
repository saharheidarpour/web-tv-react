import styled from "styled-components";
const Container = styled.div`
  width: 230px;
  height: 252px;
  border: 2px solid
    ${({ focused, theme }) =>
      focused ? theme?.style?.border?.red300 : "transparent"};
  border-radius: 8px;
  padding:4px;
  box-sizing: border-box;
`;
const CardThumbnail = styled.div`
  width: 100%;
  height: 157px;
  background-image: url(${({ img }) => img});
  background-position: center;
  background-size: cover;
  border-radius: 8px;
`;
const CardTitle = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 25px;
  margin-top: 6px;
`;
const CardDescription = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 19px;
`;
const Row = styled.div`
  display: flex;
  align-items: center;
  margin-top: 3px;
`;
const DetailItem = styled.span`
  font-weight: 400;
  font-size: 12px;
  line-height: 19px;
  margin: 0 6px 0 18px;
  display: flex;
  align-items: center;
`;
export {
  Container,
  CardThumbnail,
  CardTitle,
  CardDescription,
  Row,
  DetailItem,
};
