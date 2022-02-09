import styled from "styled-components"
import { darken, transparentize } from 'polished'

interface RadioBoxProps {
    isActive: boolean;
    activeColor: 'green' | 'red';
}


export const Container = styled.form`
    h2 {
        color: var(--text-color);
        font-size: 1.5rem;
        margin-bottom: 2rem;
    }

    input {
        width: 100%; // Para ocupar 100% da largura
        padding: 0 1.5rem;
        height: 4rem;
        border-radius: 0.25rem;

        border: 1px solid #d7d7d7;
        background: #e7e9ee;

        font-weight: 400;
        font-size: 1rem;

        margin-top: 1rem;

        &::placeholder { 
            color: var()(--text-body);
        }
    }

    button[type="submit"] { // estiliza apenas o button com type submit
        width: 100%;
        padding: 0 15.;
        height: 4rem;
        background: var(--green);
        color: #FFF;
        border-radius: 0.25rem;
        border: 0;
        font-size: 1rem;
        margin-top: 1.5rem;
        font-weight: 600;
        transition: filter 0.2s;

        &:hover {
            filter: brightness(0.9);
        }
    }
`

export const TransactionTypeContainer = styled.div`
    margin: 1rem 0;
    display: grid;
    grid-template-columns: 1fr 1fr; //Coloca 1 botão ao lado do outro
    gap: 0.5rem; // espaçamento entre cada botão
`

const colors = {
    green: '#33CC95',
    red: '#E52E4D',
}

export const RadioBox = styled.button<RadioBoxProps>` // precisa passar essa interface para que seja entendido a propriedade isActive
        height: 4rem;
        border: 1px solid #d7d7d7;
        border-radius: 0.25rem;

        background: ${
            (props) => props.isActive 
            ? transparentize(0.8, colors[props.activeColor]) 
            : 'transparent'}; // sempre que passamos uma interpolação temos acesso a todas as propriedades do componente

        display: flex;
        align-items: center; // alinha os itens no centro verticalmente
        justify-content: center; // alinha os itens no centro horizontalmente

        transition: border-color 0.1s;

        &:hover {
            border-color: ${darken(0.1, '#d7d7d7')}; // escurece em 10% a cor d7d7d7
        }

        img {
            width: 20px;
            height: 20px;
        }

        span {
            display: inline-block;
            margin-left: 1rem;
            font-size: 1rem;
            color: var(--text-title);
        }
`