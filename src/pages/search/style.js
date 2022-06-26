import styled from "styled-components";
const Container = styled.div`
  padding: 64px 0 64px 22px;
  display: flex;
  aside {
    width: 414px;
    margin-right: 12px;
    .title {
      margin-right: 12px;
      text-align: center;
      color: ${({ theme }) => theme?.style?.text?.primary};
      font-style: normal;
      font-weight: 400;
      font-size: 34px;
      line-height: 53px;
    }
    section {
      font-style: normal;
      font-weight: 400;
      font-size: 25px;
      line-height: 39px;
      margin-top: 33px;
      color: ${({ theme }) => theme?.style?.text?.primary};
      .row {
        display: flex;
        align-items: center;
        border-radius: 8px;
        margin-top: 12px;
        button {
          width: 206px;
          height: 52px;
          background: ${({ theme }) => theme?.style?.background?.alternative};
          color: ${({ theme }) => theme?.style?.text?.primary};
          border: none;
          outline: none;
          border-radius: 8px;
          &:first-child {
            border-radius: 0 8px 8px 0;
          }
          &:last-child {
            border-radius: 8px 0 0 8px;
          }
          &:active {
            border: 2px solid ${({ theme }) => theme?.style?.border?.primary};
            border-radius: 8px;
          }
          &:focus {
            border: 2px solid ${({ theme }) => theme?.style?.border?.primary};
            border-radius: 8px;
          }
        }
      }
    }

    .keyboard {
      margin-top: 24px;
      height: 540px;
    }
  }
  main {
    flex: 1 1 auto;
    display: flex;
    flex-wrap: wrap;
    margin-right: 45px;
    .item {
      width: 197px;
      height: 289px;
      background-color: beige;
      margin: 0 0 35px 15px;
      border-radius: 5px;
      &:nth-child(6n){
        margin-left: 0;
      }
    }
  }
`;
export { Container };
