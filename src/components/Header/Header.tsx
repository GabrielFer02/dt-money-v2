import style from "./Header.module.css";
import logoImg from "../../assets/Logo.svg";

export function Header() {
  return (
    <header className={style.headerContainer}>
      <div className={style.headerContent}>
        <img src={logoImg} alt="" />
        <button>Nova Transação</button>
      </div>
    </header>
  );
}
