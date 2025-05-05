import * as Dialog from "@radix-ui/react-dialog";
import style from "./NewTransactionModal.module.css";
import { X } from "phosphor-react";

export function NewTransactionModal() {
  return (
    <Dialog.Portal>
      <Dialog.Overlay className={style.overlay} />

      <Dialog.Content className={style.content}>
        <Dialog.Title>Nova Transação</Dialog.Title>

        <Dialog.Close className={style.closeButton}>
          <X />
        </Dialog.Close>

        <form action="">
          <input type="text" placeholder="Descrição" required />
          <input type="number" placeholder="Preço" required />
          <input type="text" placeholder="Categoria" required />

          <button type="submit">Cadastrar</button>
        </form>
      </Dialog.Content>
    </Dialog.Portal>
  );
}
