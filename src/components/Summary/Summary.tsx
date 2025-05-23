import style from './Summary.module.css';
import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from 'phosphor-react';
import { priceFormatter } from '../../utils/formatter';
import { useSummary } from '../../hooks/useSummary';

export function Summary() {
  const summary = useSummary();

  return (
    <section className={style.summaryContainer}>
      <div className={style.summaryCard}>
        <header>
          <span>Entradas</span>
          <ArrowCircleUp size={32} color='#00b37e' />
        </header>

        <strong>{priceFormatter.format(summary.income)}</strong>
      </div>
      <div className={style.summaryCard}>
        <header>
          <span>Saídas</span>
          <ArrowCircleDown size={32} color='#f75a68' />
        </header>

        <strong>{priceFormatter.format(summary.outcome)}</strong>
      </div>
      <div className={`${style.summaryCard} ${style['green']}`}>
        <header>
          <span>Total</span>
          <CurrencyDollar size={32} color='#fff' />
        </header>

        <strong>{priceFormatter.format(summary.total)}</strong>
      </div>
    </section>
  );
}
