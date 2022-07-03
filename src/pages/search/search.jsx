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
} from "./style";
import { withFocusable } from "@noriginmedia/react-spatial-navigation";
import React from "react";
import { useEffect, useState } from "react";
import MovieCard from "@components/movie-card";
import ArchivedCard from "@components/archive-card";
import ThumbnailImage from "@assets/images/thumbnail.png";

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
          <Keyboard
            onArrowPress={onArrowPressHandler}
            onBecameFocused={onBecameFocusedHandler}></Keyboard>
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
        {[1, 2, 3, 4].map((item) => {
          return (
            <ArchivedCard
              key={item}
              onArrowPress={onArrowPressHandler}
              onBecameFocused={onBecameFocusedHandler}
              img={ThumbnailImage}></ArchivedCard>
          );
        })}

        {/* <MovieCardFocusable
          onArrowPress={onArrowPressHandler}
          onBecameFocused={onBecameFocusedHandler}
          img={movieImage}></MovieCardFocusable>
        <MovieCardFocusable
          onArrowPress={onArrowPressHandler}
          onBecameFocused={onBecameFocusedHandler}
          img={movieImage}></MovieCardFocusable>
        <MovieCardFocusable
          onArrowPress={onArrowPressHandler}
          onBecameFocused={onBecameFocusedHandler}
          img={movieImage}></MovieCardFocusable>
        <MovieCardFocusable
          onArrowPress={onArrowPressHandler}
          onBecameFocused={onBecameFocusedHandler}
          img={movieImage}></MovieCardFocusable>
        <MovieCardFocusable
          onArrowPress={onArrowPressHandler}
          onBecameFocused={onBecameFocusedHandler}
          img={movieImage}></MovieCardFocusable>
        <MovieCardFocusable
          onArrowPress={onArrowPressHandler}
          onBecameFocused={onBecameFocusedHandler}
          img={movieImage}></MovieCardFocusable>
        <MovieCardFocusable
          onArrowPress={onArrowPressHandler}
          onBecameFocused={onBecameFocusedHandler}
          img={movieImage}></MovieCardFocusable> */}
      </Main>
    </Container>
  );
};
export default withFocusable()(Search);
