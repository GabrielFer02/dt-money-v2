import * as Dialog from "@radix-ui/react-dialog";
import style from "./Header.module.css";
import logoImg from "../../assets/Logo.svg";
import { NewTransactionModal } from "../NewTransactionModal/NewTransactionModal";

export function Header() {
  return (
    <header className={style.headerContainer}>
      <div className={style.headerContent}>
        <img src={logoImg} alt="" />
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <button className={style.buttonNewTransition}>
              Nova Transação
            </button>
          </Dialog.Trigger>
          <NewTransactionModal />
        </Dialog.Root>
      </div>
    </header>
  );
}
