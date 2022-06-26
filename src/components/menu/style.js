import styled from "styled-components";

const Container = styled.div`
  background: ${({ theme }) => theme?.style?.background?.alternative};
  box-sizing: border-box;
 
  .content{
  height: 100vh;
  width: 150px;
  min-width: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  place-content: space-between;
  padding: 60px 0;
  box-sizing: border-box;
  }
  .logo {
    width: 70px;
    height: 70px;
  }
  .sub-title {
    width: 60px;
    height: 41px;
    margin-top: 4px;
  }
  ul {
    width: 100%;
    text-align: center;
    padding: 0;
    margin: 0;
    li {
      list-style: none;
      margin-top: 27px;
     
    }
  }

  a {
    color: ${({ theme }) => theme?.style?.text?.grey600};
    text-decoration: none;
    font-family: Yekan-Bakh-FaN-Regular;
    list-style: none;
    font-style: normal;
    font-weight: 400;
    font-size: 21px;
    line-height: 33px;
    height: 70px;
    display:flex;
    align-items:center;
    justify-content:center;
    width:100%;
   
  }

  ul li a.active {
    border-right: 6px solid ${({ theme }) => theme?.style?.divider?.secondary};
    color: ${({ theme }) => theme?.style?.text?.primary};

    }
`;

export { Container };
