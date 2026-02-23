import { useState } from "react";

export default function UseButton() {
  const [buttonState, setButtonState] = useState(false);

  const onButton = (value) => {
    setButtonState(value);
  };

  return {
    buttonState,
  };
}
