import styled from 'styled-components';


export const Container = styled.header`
    background: var(--blue);
`

export const Content = styled.div`
    max-width: 1120px;
    margin: 0 auto;

    padding: 2rem 1rem 10rem;
    display: flex;
    align-items: center;
    justify-content: space-between; // para que haja um espaço entre a logo e o botão

    button {
        font-size: 1rem;
        color: #FFF;
        background: var(--blue-light);
        border: 0;
        padding: 0 2rem;;
        border-radius: 0.25rem;
        height: 3rem;

        transition: 0.2s; // Toda alteração no filter irá demorar 0.2 segundos para acontecer

        &:hover { // escurece levemente o botão quando passar com o mause em cima
            filter: brightness(0.9);
        }
    }
` 