import { useNavigate, useLocation } from "react-router-dom";
import "../styles/components/PaymentSelectionScreen.scss";
import paymentMethod from "../assets/paymentMethod.png";

export const PaymentSelectionScreen = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { amountDue } = location.state || { amountDue: 129 }; // Получаем переданную цену, иначе 129

    const handleCashPayment = () => {
        navigate("/cash-payment", { state: { amountDue } });
    };

    const handleCardPayment = () => {
        navigate("/card-payment", { state: { amountDue } });
    };

    return (
        <div className="container payment-selection">
            <img className="paymentImg" src={paymentMethod} alt="Спопосб оплаты" />
            <h1>Выберите способ оплаты</h1>
            <div className="payment-options">
                <div className="payment-option" onClick={handleCashPayment}>
                    <h2>Оплата наличными</h2>
                </div>
                <div className="payment-option" onClick={handleCardPayment}>
                    <h2>Оплата картой</h2>
                </div>
            </div>
        </div>
    );
};
