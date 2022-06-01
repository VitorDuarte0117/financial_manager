import {
    createContext,
    useEffect,
    useState,
    ReactNode,
    useContext,
} from "react";
import { api } from "../components/services/api";

interface Transaction {
    id: number;
    title: String;
    amount: number;
    category: string;
    createdAt: string;
    type: string;
}

interface TransactionContextProps {
    children: ReactNode;
}

interface TransactionsContextData {
    transactions: Transaction[];
    createTransaction: (transaction: TransactionInput) => Promise<void>;
}

type TransactionInput = Omit<Transaction, "id" | "createdAt">;

const TransactionContext = createContext<TransactionsContextData>(
    {} as TransactionsContextData
);

export function TransactionProvider({ children }: TransactionContextProps) {
    const [transactions, setTransactions] = useState<Transaction[]>([]);
    useEffect(() => {
        api.get("/transactions").then((resp) =>
            setTransactions(resp.data.transactions)
        );
    }, []);

    async function createTransaction(transactionInput: TransactionInput) {
        const response = await api.post("/transactions", {
            ...transactionInput,
            createdAt: new Date(),
        });
        const { transaction } = response.data;

        setTransactions([...transactions, transaction]);
    }

    return (
        <TransactionContext.Provider
            value={{ transactions, createTransaction }}
        >
            {children}
        </TransactionContext.Provider>
    );
}

export function useTransactions() {
    const context = useContext(TransactionContext);

    return context;
}
