import { FormEvent, useState } from 'react'
import Modal from 'react-modal'
import closeImg from '../../assets/close.svg'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import {  useTransaction } from '../../hooks/useTransactionsContexts'
import { Container, TransactionTypeContainer, RadioBox } from './styles'

interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClore: () => void;
}





export function NewTransactionModal({
    isOpen: isNewTransactionModalOpen,
    onRequestClore: handleCloseNewTransactionModal
    }: NewTransactionModalProps) {

        const { createTransaction } = useTransaction();

        const [title, setTitle] = useState('');
        const [amount, setAmount] = useState(0);
        const [category, setCategory] = useState('');
        const [type, setType] = useState('deposit');

        async function handleCreateNewTransaction(event: FormEvent) {
            event.preventDefault() // Previne que a página seja recarregada ao enviar um formulário.

            await createTransaction({
                title,
                amount,
                category,
                type,
            })

            handleCloseNewTransactionAndResetForm()
        }
        

        function handleCloseNewTransactionAndResetForm() {
            handleCloseNewTransactionModal()
            setTitle('')
            setCategory('')
            setAmount(0)
        }
        
        return (
            
        <Modal
            isOpen={isNewTransactionModalOpen}
            onRequestClose={handleCloseNewTransactionModal}
            overlayClassName='react-modal-overlay' 
            className='react-modal-content'
        >
            <button
            type='button' onClick={handleCloseNewTransactionModal} className='react-modal-close'>
                <img src={closeImg} alt='fechar modal' />
            </button>
            <Container onSubmit={handleCreateNewTransaction}>
                <h2>Cadastrar transação</h2>
                <input
                    placeholder='titulo'
                    value={title}
                    onChange={event => setTitle(event.target.value)}
                />
                <input
                    placeholder='valor'
                    type='number'
                    value={amount}
                    onChange={event => setAmount(Number(event.target.value))}
                />

                <TransactionTypeContainer>
                    <RadioBox
                    type='button'
                    onClick={() => {setType('deposit')}}
                    isActive={type === 'deposit'} // propriedade criada por mim
                    activeColor="green"
                    >
                        <img src={incomeImg} alt='Entrada' />
                        <span>Entrada</span>
                    </RadioBox>
                    <RadioBox
                    type='button'
                    onClick={() => {setType('withdraw')}}
                    isActive={type === 'withdraw'}
                    activeColor="red"
                    >
                        <img src={outcomeImg} alt='Saida' />
                        <span>Saida</span>
                    </RadioBox>

                </TransactionTypeContainer>
                <input
                    placeholder='categoria'
                    value={category}
                    onChange={event => setCategory(event.target.value)}    
                />

                <button type='submit'>Cadastrar</button>
            </Container>
        </Modal>
        )
}
