import * as Dialog from "@radix-ui/react-dialog";
import style from "./NewTransactionModal.module.css";
import { ArrowCircleDown, ArrowCircleUp, X } from "phosphor-react";
import * as RadioGroup from "@radix-ui/react-radio-group";

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

          <RadioGroup.Root className={style.transactionType}>
            <RadioGroup.Item
              value="income"
              className={`${style.transactionTypeButton} ${style.income}`}
            >
              <ArrowCircleUp size={24} className={style.income} />
              Entrada
            </RadioGroup.Item>
            <RadioGroup.Item
              value="outcome"
              className={`${style.transactionTypeButton} ${style.outcome}`}
            >
              <ArrowCircleDown size={24} className={style.outcome} />
              Saída
            </RadioGroup.Item>
          </RadioGroup.Root>

          <button type="submit">Cadastrar</button>
        </form>
      </Dialog.Content>
    </Dialog.Portal>
  );
}
