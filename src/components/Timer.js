import React, { useEffect, useState } from "react";
import "./Timer.css";

export default function Timer() {
  const [time, setTime] = useState(0);
  const [intervalMs, setIntervalMs] = useState(1000);
  const [isRunning, setIsRunning] = useState(true);

  useEffect(() => {
    if (!isRunning) return;

    const id = setInterval(() => {
      setTime((prev) => prev + 1);
    }, intervalMs);

    return () => clearInterval(id);
  }, [isRunning, intervalMs]);

  return (
    <section className="demo-card timer">
      <header className="demo-card__header">
        <h2 className="demo-card__title">Timer</h2>
        <p className="demo-card__subtitle">
          useEffect обновляет время по интервалу. Интервал можно менять.
        </p>
      </header>

      <div className="timer__value">{time} сек</div>

      <div className="timer__actions">
        <button
          className="timer__btn"
          onClick={() => setIsRunning((p) => !p)}
          type="button"
        >
          {isRunning ? "Пауза" : "Запустить"}
        </button>

        <button className="timer__btn" onClick={() => setTime(0)} type="button">
          Сброс
        </button>
      </div>

      <label className="timer__label">
        Интервал (мс)
        <input
          className="timer__input"
          type="number"
          min="50"
          step="50"
          value={intervalMs}
          onChange={(e) =>
            setIntervalMs(Math.max(50, Number(e.target.value) || 0))
          }
        />
      </label>
    </section>
  );
}
