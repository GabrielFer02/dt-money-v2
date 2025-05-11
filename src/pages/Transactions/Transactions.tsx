import { Header } from '../../components/Header/Header';
import { Summary } from '../../components/Summary/Summary';
import { SearchForm } from '../components/SearchForm/SearchForm';
import style from './Transactions.module.css';
import { TransactionsContext } from '../../contexts/TransactionsContext';
import { dateFormatter, priceFormatter } from '../../utils/formatter';
import { useContextSelector } from 'use-context-selector';

export function Transactions() {
  const transactions = useContextSelector(
    TransactionsContext,
    context => context.transactions,
  );

  return (
    <div>
      <Header />
      <Summary />

      <main className={style.transactionsContainer}>
        <SearchForm />

        <table className={style.transactionsTable}>
          <tbody>
            {transactions.map(transaction => {
              return (
                <tr key={transaction.id}>
                  <td width='50%'>{transaction.description}</td>
                  <td>
                    <span className={style[transaction.type]}>
                      {transaction.type === 'outcome' && '- '}
                      {priceFormatter.format(transaction.price)}
                    </span>
                  </td>
                  <td>{transaction.category}</td>
                  <td>
                    {dateFormatter.format(new Date(transaction.createdAt))}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </main>
    </div>
  );
}
