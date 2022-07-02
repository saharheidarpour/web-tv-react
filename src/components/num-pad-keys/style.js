import styled from "styled-components";

export const NumPadKeysContainer = styled.div`
  background: #2c2c2e;
  border-radius: 18px;
  width: 539px;
  height: 685px;
  padding: 82px 88px;
`;

export const NumPadItemsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  direction: ltr;
  margin-left: -12px;
  margin-right: -12px;
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
