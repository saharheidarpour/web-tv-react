import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  background: ${({ theme }) => theme?.style?.background?.alternative};
  box-sizing: border-box;
`;
const MenuContent = styled.div`
  height: 100vh;
  width: 150px;
  min-width: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  place-content: space-between;
  padding: 60px 0;
  box-sizing: border-box;
  font-family: "Yekan-Bakh";
`;
const LogoWrapper = styled.div`
  width: 70px;
  height: 70px;
`;
const SubTitleWrapper = styled.div`
  width: 60px;
  height: 41px;
  margin-top: 4px;
`;
const MenuList = styled.ul`
  width: 100%;
  text-align: center;
  padding: 0;
  margin: 0;
`;
const MenuListItem = styled.li`
  list-style: none;
  margin-top: 27px;
  outline: none;
`;
const NavLinkWrapper = styled(NavLink).attrs((props) => ({
  focused: props.focused,
}))`
  &.active {
    border-right: 6px solid ${({ theme }) => theme?.style?.divider?.secondary};
    color: ${({ theme }) => theme?.style?.text?.primary};
    svg path {
      fill: ${({ theme }) => theme?.style?.background?.red200};
    }
  }
  color: ${({ theme }) => theme?.style?.text?.grey600};
  text-decoration: none;
  font-family: "Yekan-Bakh";
  list-style: none;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  box-sizing: border-box;
  outline: none;
  border: 2px solid
    ${({ theme, focused }) =>
      focused ? theme?.style?.border?.red300 : "transparent"};
  &:focus {
    outline: none;
  }
`;
const NavLinkTitle = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 21px;
  line-height: 33px;
`;
export {
  Container,
  MenuContent,
  LogoWrapper,
  SubTitleWrapper,
  MenuList,
  MenuListItem,
  NavLinkWrapper,
  NavLinkTitle,
};
