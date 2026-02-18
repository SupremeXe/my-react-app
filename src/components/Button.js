import React from "react";
import "./Button.css";

/*
 - Button (UI)
 - Переиспользуемая кнопка
 - Вызов действия приходит через props.onClick
 */
export default function Button({ onClick }) {
  return (
    <button className="custom-button" onClick={onClick} type="button">
      Очистить
    </button>
  );
}
