import { useState } from "react";
import LogoImg from "../../assets/Logo.svg";
import { Container, Content } from "./styles";

export function Header() {
    const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] =
        useState(false);

    function handleOpenNewTransactionModal() {}

    function handleCloseNewTransactionModal() {}
    return (
        <Container>
            <Content>
                <img src={LogoImg} alt="dt money" />
                <button type="button">New transition</button>
            </Content>
        </Container>
    );
}
