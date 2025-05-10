import * as Dialog from '@radix-ui/react-dialog';
import style from './NewTransactionModal.module.css';
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react';
import * as RadioGroup from '@radix-ui/react-radio-group';
import zod from 'zod';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useContext } from 'react';
import { TransactionsContext } from '../../contexts/TransactionsContext';

const newTransactionFormSchema = zod.object({
  description: zod.string(),
  price: zod.number(),
  category: zod.string(),
  type: zod.enum(['income', 'outcome']),
});

type NewTransactionFormInputs = zod.infer<typeof newTransactionFormSchema>;

export function NewTransactionModal() {
  const { createTransaction } = useContext(TransactionsContext);

  const {
    control,
    register,
    handleSubmit,
    formState: { isSubmitting },
    reset,
  } = useForm<NewTransactionFormInputs>({
    resolver: zodResolver(newTransactionFormSchema),
    defaultValues: { type: 'income' },
  });

  async function handleCreateNewTransaction(data: NewTransactionFormInputs) {
    const { category, description, price, type } = data;

    createTransaction({ category, description, price, type });

    reset();
  }

  return (
    <Dialog.Portal>
      <Dialog.Overlay className={style.overlay} />

      <Dialog.Content className={style.content}>
        <Dialog.Title>Nova Transação</Dialog.Title>

        <Dialog.Close className={style.closeButton}>
          <X size={24} />
        </Dialog.Close>

        <form onSubmit={handleSubmit(handleCreateNewTransaction)}>
          <input
            type='text'
            placeholder='Descrição'
            required
            {...register('description')}
          />
          <input
            type='number'
            placeholder='Preço'
            required
            {...register('price', { valueAsNumber: true })}
          />
          <input
            type='text'
            placeholder='Categoria'
            required
            {...register('category')}
          />

          <Controller
            control={control}
            name='type'
            render={({ field }) => {
              return (
                <RadioGroup.Root
                  onValueChange={field.onChange}
                  value={field.value}
                  className={style.transactionType}
                >
                  <RadioGroup.Item
                    value='income'
                    className={`${style.transactionTypeButton} ${style.income}`}
                  >
                    <ArrowCircleUp size={24} className={style.income} />
                    Entrada
                  </RadioGroup.Item>
                  <RadioGroup.Item
                    value='outcome'
                    className={`${style.transactionTypeButton} ${style.outcome}`}
                  >
                    <ArrowCircleDown size={24} className={style.outcome} />
                    Saída
                  </RadioGroup.Item>
                </RadioGroup.Root>
              );
            }}
          />

          <button type='submit' disabled={isSubmitting}>
            Cadastrar
          </button>
        </form>
      </Dialog.Content>
    </Dialog.Portal>
  );
}
