import ArchivedCard from "@components/archive-card";
import MovieCard from "@components/movie-card";
import Keyboard from "@components/keyboard";
import { withFocusable } from "@noriginmedia/react-spatial-navigation";
import { useEffect, useState, useCallback, useRef } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import {
  Aside,
  Button,
  Container,
  KeyboardContainer,
  Main,
  Row,
  Section,
  Title,
} from "./style";
import SearchApiList from "@lib/api/search";
import MovieCardLoading from "@components/movie-card-loading";

const ButtonComponent = ({ focused, title, onClick }) => {
  return (
    <Button onClick={onClick} focused={focused}>
      {title}
    </Button>
  );
};
const ButtonFocusable = withFocusable()(ButtonComponent);

const Search = ({ setFocus }) => {
  const [position, setPosition] = useState();
  const [searchResult, setSearchResult] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [loadedItemsCount, setloadedItemsCount] = useState(0);
  const SearchResultBoxRef = useRef();
  const {
    data: searchState,
    isLoading: loading,
    mutate: searchExecute,
    error: SearchError,
  } = SearchApiList.search();
  const onBecameFocusedHandler = (e) => {
    setPosition(e);
  };
  const onCardBecameFocusedHandler = (e) => {
    SearchResultBoxRef.current.scrollTop = e.top - 100;
    console.log(SearchResultBoxRef);
    // console.log(e);
  };
  const searchAction = (e) => {
    searchExecute({
      data: {
        text: searchValue,
        genre: [],
        country: [],
        from: loadedItemsCount,
        size: 20,
      },
    });
    setloadedItemsCount(loadedItemsCount + 20);
  };
  const onArrowPressHandler = (e) => {};
  useEffect(() => {
    setFocus();
  }, []);
  useEffect(() => {
    if (!searchState) return;
    if (searchState && searchState.movies && searchState.movies.hits) {
      setSearchResult([...searchResult, ...searchState?.movies?.hits?.hits]);
    }
  }, [searchState]);
  return (
    <Container>
      <Aside>
        <Title>جستجو و سرچ</Title>
        <KeyboardContainer>
          <Keyboard
            searchValueStateChange={setSearchValue}
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
              onClick={searchAction}
              onEnterPress={searchAction}
              title={"فیلم و سریال"}></ButtonFocusable>
            <ButtonFocusable
              key={"key2"}
              onArrowPress={onArrowPressHandler}
              onBecameFocused={onBecameFocusedHandler}
              onClick={searchAction}
              onEnterPress={searchAction}
              title={"آرشیو تلویزیون"}></ButtonFocusable>
          </Row>
        </Section>
      </Aside>
      <Main id="scrollableDiv" ref={SearchResultBoxRef}>
        <InfiniteScroll
          dataLength={searchResult.length} //This is important field to render the next data
          next={(e) => searchAction(e)}
          hasMore={true}
          scrollableTarget="scrollableDiv"
          loader={
            loading
              ? [...Array(20)].map((item) => {
                  return <MovieCardLoading />;
                })
              : null
          }
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>Yay! You have seen it all</b>
            </p>
          }>
          {searchResult.map((item) => {
            return (
              // <ArchivedCard
              //   key={item.id}
              //   data={item._source}
              //   onArrowPress={onArrowPressHandler}
              //   onBecameFocused={onBecameFocusedHandler}></ArchivedCard>

              <MovieCard
                onArrowPress={onArrowPressHandler}
                onBecameFocused={onCardBecameFocusedHandler}
                data={item._source}></MovieCard>
            );
          })}
        </InfiniteScroll>
      </Main>
    </Container>
  );
};
export default withFocusable()(Search);
