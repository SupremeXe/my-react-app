import React from "react";
import "./App.css";

import Counter from "./components/Counter";
import Timer from "./components/Timer";

import Input from "./components/Input";
import Button from "./components/Button";
import { useRef } from "react";

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

export default function App() {
  return (
    <div className="app">
      <header className="app__top">
        <h1 className="app__title">React State App</h1>
        <p className="app__subtitle">
          useState, useEffect, ref. Все в одном проекте.
        </p>
      </header>

      <main className="grid">
        <ClearInputDemo />
        <Counter />
        <Timer />
      </main>
    </div>
  );
}
