import Modal from 'react-modal'
import closeImg from '../../assets/close.svg'
import { Container } from './styles'

interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClore: () => void;
}

export function NewTransactionModal({
    isOpen: isNewTransactionModalOpen,
    onRequestClore: handleCloseNewTransactionModal
    }: NewTransactionModalProps) {
        
        return (
            
        <Modal
            isOpen={isNewTransactionModalOpen}
            onRequestClose={handleCloseNewTransactionModal}
            overlayClassName='react-modal-overlay' 
            className='react-modal-content'
        >
            <button type='button' onClick={handleCloseNewTransactionModal} className='react-modal-close'>
                <img src={closeImg} alt='fechar modal' />
            </button>
            <Container>
                <h2>Cadastrar transação</h2>
                <input placeholder='titulo'/>
                <input placeholder='valor' type='number'/>
                <input placeholder='categoria'/>

                <button type='submit'>Cadastrar</button>
            </Container>
        </Modal>
        )
}
