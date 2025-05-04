import style from "./Summary.module.css";
import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from "phosphor-react";

export function Summary() {
  return (
    <section className={style.summaryContainer}>
      <div className={style.summaryCard}>
        <header>
          <span>Entradas</span>
          <ArrowCircleUp size={32} color="#00b37e" />
        </header>

        <strong>R$ 17.400,00</strong>
      </div>
      <div className={style.summaryCard}>
        <header>
          <span>Saídas</span>
          <ArrowCircleDown size={32} color="#f75a68" />
        </header>

        <strong>R$ 1.200,00</strong>
      </div>
      <div className={`${style.summaryCard} ${style["green"]}`}>
        <header>
          <span>Total</span>
          <CurrencyDollar size={32} color="#fff" />
        </header>

        <strong>R$ 17.400,00</strong>
      </div>
    </section>
  );
}
