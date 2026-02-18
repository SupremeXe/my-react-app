import React, { useRef } from "react";
import Input from "./components/Input";
import Button from "./components/Button";
import "./App.css";

/*
 Демонстрация:
  - useRef хранит ссылку на DOM-элемент input
  - forwardRef в Input позволяет передать ref внутрь <input />
  - handleClear очищает поле по клику
 */

export default function App() {
  const inputRef = useRef(null);

  const handleClear = () => {
    // inputRef.current появится только после рендера
    if (!inputRef.current) return;

    inputRef.current.value = "";
    inputRef.current.focus();
  };

  return (
    <div className="app">
      <div className="card">
        <div className="card__header">
          <h1 className="card__title">Ref + forwardRef demo</h1>
          <p className="card__subtitle">
            Введите текст и нажмите “Очистить” — поле станет пустым.
          </p>
        </div>

        <div className="row">
          <Input ref={inputRef} placeholder="Введите текст..." />
          <Button onClick={handleClear} />
        </div>
      </div>
    </div>
  );
}
