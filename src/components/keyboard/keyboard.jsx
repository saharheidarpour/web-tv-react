import { Container } from "./style";
import backspace from "@assets/images/backspace-icon.svg";
import space from "@assets/images/space-icon.svg";
import React, { useState } from "react";
import { FaKeys, EnKeys } from "./keyboard.const";
const persianKeys = FaKeys;
const englishKeys = EnKeys;
function Keyboard() {
  const [lang, setLang] = useState("FA");
  const [keys, setKeys] = useState(FaKeys);
  const [searchVal, setSearchVal] = useState("");

  const changeLang = () => {
    setLang(lang === "FA" ? "EN" : "FA");
    setKeys(keys === FaKeys ? EnKeys : FaKeys);
  };
 const  keyDown = (key) => {
    debugger;
    switch (key) {
      case "backspace":
        if (searchVal) {
          setSearchVal(searchVal.slice(0,-1));
        }
        break;
      case "space":
        setSearchVal(searchVal + " ");
        break;
      default:
        setSearchVal(searchVal + key);
        break;
    }
    console.log(searchVal);
  };
  return (
    <Container>
      <input type="text" defaultValue={searchVal}  />
      <div className="row actions">
        <button className="backspace" onClick={()=>keyDown("backspace")}>
          <img src={backspace} alt="backspace" />
        </button>
        <button className="space" onClick={()=>keyDown("space")}>
          <img src={space} alt="space" />
        </button>
        <button onClick={changeLang}>{lang === "FA" ? "EN" : "FA"}</button>
      </div>
      <div className="row">
        {keys.map((key) => {
          return <button key={key} onClick={()=>keyDown(key)}>{key}</button>;
        })}
      </div>
    </Container>
  );
}
export default Keyboard;
