import styled from "styled-components";



export const NumPadItemsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  direction: ltr;
  margin-left: -6px;
  margin-right: -6px;
`;

export const NumPadItemKey = styled.div`
  display: flex;
  flex: 0 0 calc(100% / 3);
  max-width: calc(100% / 3);
  padding: 6px;
  box-sizing: border-box;
`;

export const NumPadItemKeyButton = styled.button`
  display: flex;
  height: 72px;
  width: 100%;
  background: #3a3a3c;
  border: 2px solid #3a3a3c;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;

  &:hover {
    border: 2px solid #d02028;
  }

  span {
    font-style: normal;
    font-weight: 400;
    font-size: 48px;
    line-height: 74px;
    display: flex;
    align-items: center;
    text-align: center;
    color: #aaafb5;
  }
`;
