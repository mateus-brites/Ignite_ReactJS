import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr); // 3 colunas de tamanhos iguais
    gap: 2rem; // espaçamento entre as colunas
    margin-top: -10rem; // joga as caixas mais para cima

    div {
        background: var(--shape);
        padding: 1.5rem 2rem;
        border-radius: 0.25rem;
        color: var(--text-title); // Troca a cor do texto
        header {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    strong {
        display: block;
        margin-top: 1rem;
        font-size: 2rem;
        font-weight: 500;
        line-height: 3rem;
    }

    &.highlight-background {
        background: var(--green);
        color: #fff;
        
    }
    }

    
`