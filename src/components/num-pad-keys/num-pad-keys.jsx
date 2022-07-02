import PropTypes from "prop-types";
import { useState } from "react";
import deleteKeyIcon from "../../assets/images/delete-key.svg";
import rightArrorIcon from "../../assets/images/right-arrow.svg";
import {
  NumPadItemKey,
  NumPadItemKeyButton,
  NumPadItemsContainer,
  NumPadKeysContainer,
} from "./style";

export default function NumPadKeys({ inputBox, goToStep3 }) {
  const [input, setInput] = useState("");
  const numsItems = [1, 2, 3, 4, 5, 6, 7, 8, 9, ".", 0, "del"];

  const renderNumsItems = () => {
    const pressDeleteKey = () => {
      setInput(input.slice(0, -1));
    };

    const pressNumKeys = (num) => {
      if (num === "del") {
        if (input.length > 0) {
          pressDeleteKey();
        }
      } else {
        setInput(input + num);
        // setInput((prevState) => [...prevState, num]);
      }
    };

    const renderDeleteIcon = () => {};

    return (
      <NumPadItemsContainer>
        {numsItems.map((item, index) => {
          return (
            <NumPadItemKey key={index}>
              <NumPadItemKeyButton onClick={() => pressNumKeys(item)}>
                {item === "del" ? (
                  <img src={deleteKeyIcon} />
                ) : (
                  <span>{item}</span>
                )}
              </NumPadItemKeyButton>
            </NumPadItemKey>
          );
        })}
      </NumPadItemsContainer>
    );
  };

  const pressSubmitKey = (value) => {
    console.log("fasdf");
    goToStep3();
  };

  return (
    <NumPadKeysContainer>
      {inputBox()}
      {input}
      {renderNumsItems()}
      <button onClick={() => submitKey()}>
        <img src={rightArrorIcon} />
        <span>تایید و ادامه</span>
      </button>
    </NumPadKeysContainer>
  );
}

NumPadKeys.propTypes = {
  inputBox: PropTypes.func.isRequired,
  goToStep3: PropTypes.func.isRequired,
};
