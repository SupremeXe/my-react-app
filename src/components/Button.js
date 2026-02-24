import React, { useState } from "react";
import "./Button.css";

/*
 - Button
 - Меняет цвет по клику
 - Передаёт событие наружу
*/

export default function Button({ onClick }) {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked((prev) => !prev);
    if (onClick) onClick();
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`custom-button ${isClicked ? "clicked" : ""}`}
    >
      Изменить цвет
    </button>
  );
}
