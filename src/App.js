import React, { useRef, useState } from "react";
import "./App.css";

import Input from "./components/Input";
import Button from "./components/Button";
import Counter from "./components/Counter";
import Timer from "./components/Timer";

function ClearInputDemo() {
  const inputRef = useRef(null);

  const handleClear = () => {
    if (!inputRef.current) return;
    inputRef.current.value = "";
    inputRef.current.focus();
  };

  return (
    <section className="demo-card">
      <header className="demo-card__header">
        <h2 className="demo-card__title">Ref + forwardRef</h2>
        <p className="demo-card__subtitle">Кнопка очищает поле через ref.</p>
      </header>

      <div className="demo-row">
        <Input ref={inputRef} placeholder="Введите текст..." />
        <Button onClick={handleClear} />
      </div>
    </section>
  );
}

/*
  Новая демонстрация. Фон меняется на каждый клик
*/
function BackgroundToggleDemo() {
  const [clickCount, setClickCount] = useState(0);

  const handleButtonClick = () => {
    setClickCount((prev) => prev + 1);
  };

  return (
    <section
      className="demo-card"
      style={{
        backgroundColor: clickCount % 2 === 0 ? "#1f2937" : "#334155",
        transition: "background-color 0.3s ease",
      }}
    >
      <header className="demo-card__header">
        <h2 className="demo-card__title">Изменение фона</h2>
        <p className="demo-card__subtitle">Фон меняется на каждый клик.</p>
      </header>

      <div className="demo-row">
        <Button onClick={handleButtonClick} />
      </div>
    </section>
  );
}

export default function App() {
  return (
    <div className="app">
      <header className="app__top">
        <h1 className="app__title">React State App</h1>
        <p className="app__subtitle">
          useState, useEffect, ref. Всё в одном проекте.
        </p>
      </header>

      <main className="grid">
        <ClearInputDemo />
        <BackgroundToggleDemo />
        <Counter />
        <Timer />
      </main>
    </div>
  );
}
