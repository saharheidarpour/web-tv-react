import styled from "styled-components";

const Container = styled.div`
  width: 414px;
  input {
    width: 100%;
    height: 54px;
    outline: none;
    border: none;
    color: ${({ theme }) => theme?.style?.text?.primary};
    background: ${({ theme }) => theme?.style?.background?.alternative};
    font-weight: 400;
    font-size: 25px;
    line-height: 39px;
    box-sizing: border-box;
    padding: 0 12px;
  }
  .row {
    height: 54px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
   
    button {
      height: 100%;
      width: 54px;
      outline: none;
      border: none;
      color: ${({ theme }) => theme?.style?.text?.primary};
      background: ${({ theme }) => theme?.style?.background?.alternative};
      display: flex;
      justify-content: center;
      align-items: center;
      margin-right: 6px;
      cursor: pointer;
      margin-top: 5px;

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
    }
    &.actions {
      margin-top: 13px;
      button{
        margin-top: 0;
      }
    }
    .backspace {
      width: 114px;
      img {
        width: 25px;
        height: 18px;
      }
    }
    .space {
      flex: 1 1 auto;
    }
    .space {
    }
  }
`;
export { Container };
