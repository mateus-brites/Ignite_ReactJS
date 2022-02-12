import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

interface Transaction {
    id: number;
    title: string;
    amount: number;
    type: string;
    category: string;
    createdAt: string;
}

export function TransactionsTables() {
    const [transactions, setTransactions] = useState<Transaction[]>([]);

    useEffect(() => {
        api.get('transactions')
            .then(Response => setTransactions(Response.data.transactions))
    }, [])
    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>                      
                    </tr>
                </thead>

                <tbody>
                    {transactions.map(transaction => ( // Toda vez que usamos o map, o primeiro elemento precisa ter uma key informando qual o elemento único do objeto
                        <tr key={transaction.id}>
                            <td>{transaction.title}</td>
                            <td className={transaction.type}>R${transaction.amount}</td>
                            <td>{transaction.category}</td>
                            <td>{transaction.createdAt}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Container>
    )
}