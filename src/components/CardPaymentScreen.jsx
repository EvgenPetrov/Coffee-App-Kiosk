import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { emulator } from "../emulator/emulator";
import "../styles/components/CardPaymentScreen.scss";
import cardImage from "../assets/card.png";

export const CardPaymentScreen = () => {
    const [paymentStatus, setPaymentStatus] = useState("");
    const [isProcessing, setIsProcessing] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    const { amountDue } = location.state || { amountDue: 129 };

    const startCardPayment = () => {
        setIsProcessing(true);
        emulator.BankCardPurchase(
            amountDue,
            (result) => {
                if (result) {
                    setPaymentStatus("Оплата успешна");
                    setTimeout(() => navigate("/preparation"), 1000);
                } else {
                    setPaymentStatus("Ошибка оплаты. Попробуйте снова.");
                    setIsProcessing(false);
                }
            },
            displayMessage
        );
    };

    const handleSuccessfulPayment = () => {
        setPaymentStatus("Оплата успешна");
        setTimeout(() => navigate("/preparation"), 1000);
    };

    const handleFailedPayment = () => {
        setPaymentStatus("Ошибка оплаты");
        setTimeout(() => navigate("/"), 1000);
    };

    const displayMessage = (message) => {
        setPaymentStatus(message);
    };

    return (
        <div className="container card-payment">
            <h1>Оплата картой на сумму {amountDue}₽</h1>
            <img src={cardImage} alt="" />

            {!isProcessing && (
                <div>
                    <button onClick={() => startCardPayment()}>Приложите карту</button>
                </div>
            )}

            {isProcessing && (
                <div className="payment-controls">
                    <button onClick={handleSuccessfulPayment}>Успешная оплата</button>
                    <button onClick={handleFailedPayment}>Ошибка оплаты</button>
                </div>
            )}
            <p>{paymentStatus}</p>
        </div>
    );
};
