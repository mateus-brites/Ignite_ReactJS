import styled from "styled-components";


export const Container = styled.div`
    border: 1px solid red;

    margin-top: 4rem;

    table {
        width: 100%; // Para tabela ocupar toda a largura
        border-spacing: 0 0.5rem; // Para fazer espaçamento
    }
    
    th {
        color: var(--text-body);
        font-weight: 600;
        padding: 1rem 2rem;
    }
    td {
        padding: 1rem 2rem;
        border: 1px solid red;
        background: var(--shape);
        color: var(--text-body);
        border-radius: 0.25rem; // arredonda as bordas

        &.first-child {
            color: var(--text-title);
        }

        &.deposit {
            color: var(--green);
        }

        &.withdraw {
            color: var(--red);
        }
    }
`