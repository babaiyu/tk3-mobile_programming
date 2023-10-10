import { useState } from "react";

export default function useController() {
  const [val, setVal] = useState("");

  const onSetValue = (num) => () => {
    setVal((v) => v + num);
  };

  const onSave = () => {
    setVal("");
  };

  return { val, onSetValue, onSave };
}
