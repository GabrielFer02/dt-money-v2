import { useEffect, useState } from 'react';
import { Header } from '../../components/Header/Header';
import { Summary } from '../../components/Summary/Summary';
import { SearchForm } from '../components/SearchForm/SearchForm';
import style from './Transactions.module.css';

interface Transaction {
  id: number;
  description: string;
  type: 'income' | 'outcome';
  category: string;
  price: number;
  createdAt: string;
}

export function Transactions() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    async function loadTransactions() {
      const response = await (
        await fetch('http://localhost:3000/transactions')
      ).json();

      setTransactions(response);
    }

    loadTransactions();
  }, []);

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
                      {transaction.price}
                    </span>
                  </td>
                  <td>{transaction.category}</td>
                  <td>{transaction.createdAt}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </main>
    </div>
  );
}
