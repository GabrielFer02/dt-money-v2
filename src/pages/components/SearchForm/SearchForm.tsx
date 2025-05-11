import { MagnifyingGlass } from 'phosphor-react';
import style from './SearchForm.module.css';
import { useForm } from 'react-hook-form';
import zod from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { TransactionsContext } from '../../../contexts/TransactionsContext';
import { useContextSelector } from 'use-context-selector';

const searchFormSchema = zod.object({
  query: zod.string(),
});

type SearchFormInputs = zod.infer<typeof searchFormSchema>;

export function SearchForm() {
  const fetchTransactions = useContextSelector(
    TransactionsContext,
    context => context.fetchTransactions,
  );

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  });

  async function handleSearchSubmit(data: SearchFormInputs) {
    await fetchTransactions(data.query);
  }

  return (
    <form
      onSubmit={handleSubmit(handleSearchSubmit)}
      className={style.searchFormContainer}
    >
      <input
        type='text'
        placeholder='Busque por transações'
        {...register('query')}
      />
      <button type='submit' disabled={isSubmitting}>
        <MagnifyingGlass size={20} />
        Buscar
      </button>
    </form>
  );
}
