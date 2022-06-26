import Keyboard from "@components/keyboard";
import { useCallback, useEffect } from "react";
import { Container } from "./style";
import { withFocusable } from "@noriginmedia/react-spatial-navigation";
import React from "react";
const Component = () => {
  return ;
};
const Search = (props) => {
  //   const handleUserKeyPress = useCallback((event) => {
  //     const [position, setPosition] = useState();
  //     const { key, keyCode } = event;
  //     console.log(keyCode);
  //     props.setFocus();
  //   }, []);
  //   useEffect(() => {
  //     window.addEventListener("keydown", handleUserKeyPress);
  //     return () => {
  //       window.removeEventListener("keydown", handleUserKeyPress);
  //     };
  //   }, []);

  return (
    <Container>

      <aside>
      <div className="title">جستجو و سرچ</div>
        <div className="keyboard">
          <Keyboard></Keyboard>
        </div>
        <section>
          جستجو در بخش:
          <div className="row">
            <button>فیلم و سریال</button>
            <button>آرشیو تلویزیون</button>
          </div>
        </section>
      </aside>
      <main>
        <div className="item"></div>
        <div className="item"></div>
        <div className="item"></div>
        <div className="item"></div>
        <div className="item"></div>
        <div className="item"></div>
        <div className="item"></div>
        <div className="item"></div>
        <div className="item"></div>
        <div className="item"></div>
        <div className="item"></div>
        <div className="item"></div>
        <div className="item"></div>
        <div className="item"></div>
        <div className="item"></div>
        <div className="item"></div>
        <div className="item"></div>
        <div className="item"></div>
        <div className="item"></div>
        <div className="item"></div>
      </main>
    </Container>
  );
};
export default Search;