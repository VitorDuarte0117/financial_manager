import { useTransactions } from "../../hooks/useTransactions";
import { Container } from "./styles";

export const TransactionsTable = () => {
    const { transactions } = useTransactions();
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
