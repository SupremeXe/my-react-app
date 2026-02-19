import React, { useEffect, useState } from "react";
import "./Counter.css";

export default function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === "ArrowUp") setCount((prev) => prev + 1);
      if (event.key === "ArrowDown") setCount((prev) => prev - 1);
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <section className="demo-card counter">
      <header className="demo-card__header">
        <h2 className="demo-card__title">Counter</h2>
        <p className="demo-card__subtitle">
          Кнопки меняют значение. ArrowUp увеличивает, ArrowDown уменьшает.
        </p>
      </header>

      <div className="counter__value">{count}</div>

      <div className="counter__actions">
        <button
          className="counter__btn"
          onClick={() => setCount((p) => p - 1)}
          type="button"
        >
          Уменьшить
        </button>
        <button
          className="counter__btn"
          onClick={() => setCount((p) => p + 1)}
          type="button"
        >
          Увеличить
        </button>
      </div>
    </section>
  );
}
