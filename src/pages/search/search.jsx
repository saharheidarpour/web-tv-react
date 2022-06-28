import Keyboard from "@components/keyboard";
import {
  Container,
  Button,
  Aside,
  Title,
  Section,
  Row,
  Main,
  KeyboardContainer,
  ResultItem,
} from "./style";
import { withFocusable } from "@noriginmedia/react-spatial-navigation";
import React from "react";
import { useEffect, useState } from "react";

const KeyboardFocusable = withFocusable()(() => {
  return <Keyboard></Keyboard>;
});
const ButtonComponent = ({ focused, title }) => {
  return <Button focused={focused}>{title}</Button>;
};
const ButtonFocusable = withFocusable()(ButtonComponent);
const Search = ({ setFocus }) => {
  const [position, setPosition] = useState();

  const onBecameFocusedHandler = (e) => {
    setPosition(e);
  };

  const onArrowPressHandler = (e) => {};
  useEffect(() => {
    setFocus();
  }, []);
  return (
    <Container>
      <Aside>
        <Title>جستجو و سرچ</Title>
        <KeyboardContainer>
          <KeyboardFocusable
            onArrowPress={onArrowPressHandler}
            onBecameFocused={onBecameFocusedHandler}></KeyboardFocusable>
        </KeyboardContainer>
        <Section>
          جستجو در بخش:
          <Row>
            <ButtonFocusable
              key={"key1"}
              onArrowPress={onArrowPressHandler}
              onBecameFocused={onBecameFocusedHandler}
              title={"فیلم و سریال"}></ButtonFocusable>
            <ButtonFocusable
              key={"key2"}
              onArrowPress={onArrowPressHandler}
              onBecameFocused={onBecameFocusedHandler}
              title={"آرشیو تلویزیون"}></ButtonFocusable>
          </Row>
        </Section>
      </Aside>
      <Main>
        <ResultItem></ResultItem>
        <ResultItem></ResultItem>
        <ResultItem></ResultItem>
        <ResultItem></ResultItem>
        <ResultItem></ResultItem>
        <ResultItem></ResultItem>
        <ResultItem></ResultItem>
        <ResultItem></ResultItem>
        <ResultItem></ResultItem>
        <ResultItem></ResultItem>
        <ResultItem></ResultItem>
        <ResultItem></ResultItem>
        <ResultItem></ResultItem>
        <ResultItem></ResultItem>
        <ResultItem></ResultItem>
        <ResultItem></ResultItem>
        <ResultItem></ResultItem>
        <ResultItem></ResultItem>
        <ResultItem></ResultItem>
        <ResultItem></ResultItem>
      </Main>
    </Container>
  );
};
export default withFocusable()(Search);
