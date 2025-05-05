import { MagnifyingGlass } from "phosphor-react";
import style from "./SearchForm.module.css"
export function SearchForm() {
  return (
    <form className={style.searchFormContainer}>
      <input type="text" placeholder="Busque por uma transação" />
      <button type="submit">
        <MagnifyingGlass size={20} />
        Buscar
      </button>
    </form>
  );
}
