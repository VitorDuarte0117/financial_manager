import Modal from "react-modal";

interface NewTransactionModalProps {
    onRequestClose: () => void;
    isOpen: boolean;
}
export const NewTransactionModal = ({
    isOpen,
    onRequestClose,
}: NewTransactionModalProps) => {
    return (
        <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
            <h2>Register</h2>
        </Modal>
    );
};
