import LogoImg from "../../assets/Logo.svg";
import { Container, Content } from "./styles";

interface HeaderProps {
    onOpenNewTransactionModal: () => void;
}

export function Header({ onOpenNewTransactionModal }: HeaderProps) {
    return (
        <Container>
            <Content>
                <img src={LogoImg} alt="dt money" />
                <button onClick={onOpenNewTransactionModal} type="button">
                    New transition
                </button>
            </Content>
        </Container>
    );
}
