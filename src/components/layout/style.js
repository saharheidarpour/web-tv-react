import styled from "styled-components";

const Container = styled.div`
  background: ${({ theme }) => theme?.style?.background?.secondary}; 
  display:flex;
  min-height:100vh`;

export { Container };
