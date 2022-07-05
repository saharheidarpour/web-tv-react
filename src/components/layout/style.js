import styled from "styled-components";

const Container = styled.div`
  background: ${({ theme }) => theme?.style?.background?.secondary}; 
  display:flex;
  max-height: 100vh;
  overflow: hidden;
`
export { Container };
