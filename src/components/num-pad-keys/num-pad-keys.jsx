import DeleteKeyIcon from "@assets/images/delete-key.svg";

import PropTypes from "prop-types";
import {
  NumPadItemKey,
  NumPadItemKeyButton,
  NumPadItemsContainer,
} from "./style";

export default function NumPadKeys({ input, setInput, maxLength }) {
  const numsItems = [1, 2, 3, 4, 5, 6, 7, 8, 9, ".", 0, "del"];

  const pressDeleteKey = () => {
    setInput(input.slice(0, -1));
  };

  const pressNumKeys = (num) => {
    if (num === "del") {
      if (input.length > 0) {
        pressDeleteKey();
      }
    } else {
      if (maxLength) {
        if (input.length < maxLength) {
          setInput(input + num);
        }
      } else {
        setInput(input + num);
      }
    }
  };

  return (
    <NumPadItemsContainer>
      {numsItems.map((item, index) => {
        return (
          <NumPadItemKey key={index}>
            <NumPadItemKeyButton onClick={() => pressNumKeys(item)}>
              {item === "del" ? <DeleteKeyIcon /> : <span>{item}</span>}
            </NumPadItemKeyButton>
          </NumPadItemKey>
        );
      })}
    </NumPadItemsContainer>
  );
}

NumPadKeys.propTypes = {
  input: PropTypes.string.isRequired,
  setInput: PropTypes.func.isRequired,
  maxLength: PropTypes.number,
};
