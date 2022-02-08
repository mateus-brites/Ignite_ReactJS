import Modal from 'react-modal'
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
