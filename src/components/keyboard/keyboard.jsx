import { Container, Input, Row, Button, Aside } from "./style";
import Backspace from "@assets/images/backspace-icon.svg";
import Space from "@assets/images/space-icon.svg";
import React, { useState, useEffect } from "react";
import { FaKeys, EnKeys } from "./keyboard.const";
import { withFocusable } from "@noriginmedia/react-spatial-navigation";

const persianKeys = FaKeys;
const englishKeys = EnKeys;
const ButtonComponent = ({ focused, keyDown, keyTitle, children, type }) => {
  return (
    <Button focused={focused} type={type} onClick={keyDown}>
      {children ? children : keyTitle}
    </Button>
  );
};
const ButtonFocusable = withFocusable()(ButtonComponent);
const InputFocusableComponent = withFocusable()(({ focused, value }) => {
  console.log(value)
  return <Input focused={focused} type="text" defaultValue={value} />;
});
function Keyboard({ setFocus,searchValueStateChange }) {
  const [lang, setLang] = useState("FA");
  const [keys, setKeys] = useState(FaKeys);
  const [searchVal, setSearchVal] = useState("");
  const [position, setPosition] = useState();
  useEffect(() => {
    setFocus();
  }, []);

  const onBecameFocusedHandler = (e) => {
    setPosition(e);
  };

  const onArrowPressHandler = (e) => {
    // console.log(e);
  };
  const changeLang = () => {
    setLang(lang === "FA" ? "EN" : "FA");
    setKeys(keys === FaKeys ? EnKeys : FaKeys);
  };
  const keyDown = (key) => {
    switch (key) {
      case "backspace":
        if (searchVal) {
          setSearchVal(searchVal.slice(0, -1));
          searchValueStateChange(searchVal.slice(0, -1));
        }
        break;
      case "space":
        setSearchVal(searchVal + " ");
        searchValueStateChange(searchVal + " ");
        break;
      default:
        setSearchVal(searchVal + key);
        searchValueStateChange(searchVal + key);
        break;
    }
  };
  const search = () => {};
  return (
    <Container>
      <InputFocusableComponent
        onArrowPress={onArrowPressHandler}
        onBecameFocused={onBecameFocusedHandler}
        onEnterPress={() => search()}
        value={searchVal}
      />
      <Row>
        <ButtonFocusable
          onArrowPress={onArrowPressHandler}
          onBecameFocused={onBecameFocusedHandler}
          onEnterPress={() => keyDown("backspace")}
          type={"backspace"}
          keyDown={() => keyDown("backspace")}>
          <Backspace />
        </ButtonFocusable>
        <ButtonFocusable
          onArrowPress={onArrowPressHandler}
          onBecameFocused={onBecameFocusedHandler}
          onEnterPress={() => keyDown("space")}
          type={"space"}
          keyDown={() => keyDown("space")}>
          <Space />
        </ButtonFocusable>
        <ButtonFocusable
          onArrowPress={onArrowPressHandler}
          onBecameFocused={onBecameFocusedHandler}
          onEnterPress={changeLang}
          type={"lang"}
          keyTitle={lang === "FA" ? "EN" : "FA"}
          keyDown={() => changeLang()}></ButtonFocusable>
      </Row>
      <Row>
        {keys.map((key) => {
          return (
            <ButtonFocusable
              key={key}
              onArrowPress={onArrowPressHandler}
              onBecameFocused={onBecameFocusedHandler}
              onEnterPress={() => keyDown(key)}
              keyTitle={key}
              keyDown={() => keyDown(key)}></ButtonFocusable>
          );
        })}
      </Row>
    </Container>
  );
}
export default withFocusable()(Keyboard);
