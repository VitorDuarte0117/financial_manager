import { Container } from "./styles";

export const TransactionsTable = () => {
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
                        <tr>
                            <td>Rent</td>
                            <td className="withdraw">- R$1,200</td>
                            <td>Home</td>
                            <td>17/10/2021</td>
                        </tr>
                        <tr>
                            <td>Development of a website</td>
                            <td className="deposit">R$12,000</td>
                            <td>Development</td>
                            <td>22/10/2021</td>
                        </tr>
                    </tbody>
                </table>
            </Container>
        </div>
    );
};
