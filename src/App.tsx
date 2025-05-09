import { TransactionProvider } from './contexts/TransactionsContext';
import { Transactions } from './pages/Transactions/Transactions';
import './styles/global.css';

export function App() {
  return (
    <TransactionProvider>
      <Transactions />
    </TransactionProvider>
  );
}
