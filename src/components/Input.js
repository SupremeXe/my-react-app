import React from "react";
import "./Input.css";

/*
 - Input (UI) с forwardRef
 - forwardRef нужен, чтобы App мог получить ref на <input/>
 - {...props} прокидывает placeholder и другие атрибуты
 */
const Input = React.forwardRef(function Input(props, ref) {
  return <input ref={ref} className="custom-input" {...props} />;
});

export default Input;
