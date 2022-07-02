import React, { useEffect, useState, Icon } from "react";
import {
  Container,
  MenuContent,
  LogoWrapper,
  SubTitleWrapper,
  MenuList,
  MenuListItem,
  NavLinkWrapper,
  NavLinkTitle,
} from "./style";
import Logo from "@assets/images/logo.svg";
import Box from "@assets/images/box.svg";
import { withFocusable } from "@noriginmedia/react-spatial-navigation";
import LiveIcon from "@assets/images/live-icon.svg";
import SeriesIcon from "@assets/images/series-icon.svg";
import ArchiveIcon from "@assets/images/archive-icon.svg";
import SearchIcon from "@assets/images/search-icon.svg";
import FilterIcon from "@assets/images/filter-icon.svg";
import SettingIcon from "@assets/images/setting-icon.svg";
import KidIcon from "@assets/images/kid-icon.svg";
import { useNavigate } from "react-router-dom";

const NavLinkFocusable = withFocusable()(
  ({ focused, title, route, children }) => {
    return (
      <NavLinkWrapper focused={focused} to={route}>
        {children}
        <NavLinkTitle>{title}</NavLinkTitle>
      </NavLinkWrapper>
    );
  }
);
function Menu({ theme, setFocus }) {
  const [position, setPosition] = useState();
  const navigate = useNavigate();
  const onBecameFocusedHandler = (e) => {
    setPosition(e);
  };
  const navigateTo = (route) => {
    navigate(route);
  };
  const onArrowPressHandler = (e) => {};
  useEffect(() => {
    setFocus();
  }, []);
  return (
    <Container>
      <MenuContent>
        <LogoWrapper>
          <Logo />
          <SubTitleWrapper>
            <Box />
          </SubTitleWrapper>
        </LogoWrapper>
        <MenuList>
          <MenuListItem>
            {/* <NavLink to="/live" className="nav-links">
              پخش زنده
            </NavLink> */}
            <NavLinkFocusable
              onArrowPress={onArrowPressHandler}
              onBecameFocused={onBecameFocusedHandler}
              onEnterPress={() => navigateTo("/live")}
              title={"پخش زنده"}
              route={"/live"}>
              <LiveIcon />
            </NavLinkFocusable>
          </MenuListItem>
          <MenuListItem>
            <NavLinkFocusable
              onArrowPress={onArrowPressHandler}
              onBecameFocused={onBecameFocusedHandler}
              onEnterPress={() => navigateTo("/movies")}
              title={"فیلم و سریال"}
              route={"/movies"}>
              <SeriesIcon />
            </NavLinkFocusable>
          </MenuListItem>
          <MenuListItem>
            <NavLinkFocusable
              onArrowPress={onArrowPressHandler}
              onBecameFocused={onBecameFocusedHandler}
              onEnterPress={() => navigateTo("/archive")}
              title={"آرشیو محتوایی"}
              route={"/archive"}>
              <ArchiveIcon />
            </NavLinkFocusable>
          </MenuListItem>
          <MenuListItem>
            <NavLinkFocusable
              onArrowPress={onArrowPressHandler}
              onBecameFocused={onBecameFocusedHandler}
              onEnterPress={() => navigateTo("/search")}
              title={"جستجو"}
              route={"/search"}>
              <SearchIcon />
            </NavLinkFocusable>
          </MenuListItem>
          <MenuListItem>
            <NavLinkFocusable
              onArrowPress={onArrowPressHandler}
              onBecameFocused={onBecameFocusedHandler}
              onEnterPress={() => navigateTo("/filter")}
              title={"فیلتر"}
              route={"/filter"}>
              <FilterIcon />
            </NavLinkFocusable>
          </MenuListItem>
          <MenuListItem>
            <NavLinkFocusable
              onArrowPress={onArrowPressHandler}
              onBecameFocused={onBecameFocusedHandler}
              onEnterPress={() => navigateTo("/kids")}
              title={" محیط کودک"}
              route={"/kids"}>
              <KidIcon />
            </NavLinkFocusable>
          </MenuListItem>
        </MenuList>
        <NavLinkFocusable
          onArrowPress={onArrowPressHandler}
          onBecameFocused={onBecameFocusedHandler}
          onEnterPress={() => navigateTo("/")}
          title={" تنظیمات "}
          route={"/"}>
          <SettingIcon />
        </NavLinkFocusable>
      </MenuContent>
    </Container>
  );
}
export default withFocusable()(Menu);
