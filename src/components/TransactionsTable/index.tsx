import { useEffect, useState } from "react";
import { api } from "../services/api";
import { Container } from "./styles";

interface Transaction {
    id: number;
    title: String;
    amount: number;
    category: string;
    createdAt: string;
    type: string;
}

export const TransactionsTable = () => {
    const [transactions, setTransactions] = useState<Transaction[]>([]);
    useEffect(() => {
        api.get("/transactions").then((resp) =>
            setTransactions(resp.data.transactions)
        );
    }, []);
    return (
        <div>
            <Container>
                <table>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Value</th>
                            <th>Category</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {transactions.map((transaction) => (
                            <tr key={transaction.id}>
                                <td>{transaction.title} </td>
                                <td className={transaction.type}>
                                    {new Intl.NumberFormat("en", {
                                        style: "currency",
                                        currency: "USD",
                                    }).format(transaction.amount)}
                                </td>
                                <td>{transaction.category}</td>
                                <td>
                                    {" "}
                                    {new Intl.DateTimeFormat("en").format(
                                        new Date(transaction.createdAt)
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </Container>
        </div>
    );
};
