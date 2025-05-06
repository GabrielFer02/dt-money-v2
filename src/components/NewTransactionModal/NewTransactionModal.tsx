import * as Dialog from "@radix-ui/react-dialog";
import style from "./NewTransactionModal.module.css";
import { ArrowCircleDown, ArrowCircleUp, X } from "phosphor-react";

export function NewTransactionModal() {
  return (
    <Dialog.Portal>
      <Dialog.Overlay className={style.overlay} />

      <Dialog.Content className={style.content}>
        <Dialog.Title>Nova Transação</Dialog.Title>

        <Dialog.Close className={style.closeButton}>
          <X size={24} />
        </Dialog.Close>

        <form action="">
          <input type="text" placeholder="Descrição" required />
          <input type="number" placeholder="Preço" required />
          <input type="text" placeholder="Categoria" required />

          <div className={style.transactionType}>
            <button className={style.transactionTypeButton}>
              <ArrowCircleUp size={24} className={style.income} />
              Entrada
            </button>
            <button className={style.transactionTypeButton}>
              <ArrowCircleDown size={24} className={style.outcome} />
              Saída
            </button>
          </div>

          <button type="submit">Cadastrar</button>
        </form>
      </Dialog.Content>
    </Dialog.Portal>
  );
}
