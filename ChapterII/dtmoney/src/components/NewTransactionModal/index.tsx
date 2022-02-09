import { useState } from 'react'
import Modal from 'react-modal'
import closeImg from '../../assets/close.svg'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import { Container, TransactionTypeContainer, RadioBox } from './styles'

interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClore: () => void;
}

export function NewTransactionModal({
    isOpen: isNewTransactionModalOpen,
    onRequestClore: handleCloseNewTransactionModal
    }: NewTransactionModalProps) {

        const [type, setType] = useState('deposit');
        
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
            <Container>
                <h2>Cadastrar transação</h2>
                <input placeholder='titulo'/>
                <input placeholder='valor' type='number'/>

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
                <input placeholder='categoria'/>

                <button type='submit'>Cadastrar</button>
            </Container>
        </Modal>
        )
}
