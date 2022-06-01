import { Container } from "./styles";

import incomeImg from "../../assets/Entradas.svg";
import outcomeImg from "../../assets/Saídas.svg";
import totalImg from "../../assets/Total.svg";
import { useTransactions } from "../../hooks/useTransactions";

export function Summary() {
    const { transactions } = useTransactions();

    const summary = transactions.reduce(
        (acc, transaction) => {
            if (transaction.type === "deposit") {
                acc.deposits += transaction.amount;
                acc.total += transaction.amount;
            } else {
                acc.withdraws += transaction.amount;
                acc.total -= transaction.amount;
            }
            return acc;
        },
        {
            deposits: 0,
            withdraws: 0,
            total: 0,
        }
    );

    return (
        <Container>
            <div>
                <header>
                    <p>Income</p>
                    <img src={incomeImg} alt="Income" />
                </header>
                <strong>
                    {new Intl.NumberFormat("en", {
                        style: "currency",
                        currency: "USD",
                    }).format(summary.deposits)}
                </strong>
            </div>
            <div>
                <header>
                    <p>Outcome</p>
                    <img src={outcomeImg} alt="Outcome" />
                </header>
                <strong>
                    -
                    {new Intl.NumberFormat("en", {
                        style: "currency",
                        currency: "USD",
                    }).format(summary.withdraws)}
                </strong>
            </div>
            <div className="highlight-background">
                <header>
                    <p>Total</p>
                    <img src={totalImg} alt="Total" />
                </header>
                <strong>
                    {new Intl.NumberFormat("en", {
                        style: "currency",
                        currency: "USD",
                    }).format(summary.total)}
                </strong>
            </div>
        </Container>
    );
}
