import { Header } from "../../components/Header/Header";
import { Summary } from "../../components/Summary/Summary";
import style from "./Transactions.module.css";

export function Transactions() {
  return (
    <div>
      <Header />
      <Summary />

      <main className={style.transactionsContainer}>
        <table className={style.transactionsTable}>
          <tbody>
            <tr>
              <td width="50%">Desenvolvimento de site</td>
              <td><span className={style.income}>R$ 12.000,00</span></td>
              <td>Venda</td>
              <td>04/05/2025</td>
            </tr>
            <tr>
              <td width="50%">Hamburguer</td>
              <td><span className={style.outcome}>- R$ 59,00</span></td>
              <td>Alimentação</td>
              <td>04/05/2025</td>
            </tr>
          </tbody>
        </table>
      </main>
    </div>
  );
}
