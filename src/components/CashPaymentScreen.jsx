import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { emulator } from "../emulator/emulator"; // импортируем только эмулятор
import "../styles/components/CashPaymentScreen.scss";

export const CashPaymentScreen = () => {
    const [insertedAmount, setInsertedAmount] = useState(0);
    const navigate = useNavigate();
    const location = useLocation();
    const { amountDue } = location.state || { amountDue: 129 };

    useEffect(() => {
        if (insertedAmount >= amountDue) {
            emulator.StopCashin();
            navigate("/preparation");
        }
    }, [insertedAmount, amountDue, navigate]);

    useEffect(() => {
        emulator.StartCashin((amount) => {
            setInsertedAmount((prev) => prev + amount); // Обновляем сумму внесённых денег
        });

        return () => emulator.StopCashin(); // Очищаем обработчик при размонтировании компонента
    }, []);

    const handleInsertMoney = (amount) => {
        if (emulator._handleMoneyInsert) {
            emulator._handleMoneyInsert(amount); // Вызов обработчика внесения денег
        }
    };

    const handleCancel = () => {
        emulator.StopCashin();
        navigate("/");
    };

    return (
        <div className="container cash-payment">
            <h1>Внесите {amountDue}₽</h1>
            <h2>Внесено: {insertedAmount}₽</h2>
            <div className="cash-instruction">
                <p>Выберите сумму для внесения:</p>
                <div className="cash-buttons">
                    <button onClick={() => handleInsertMoney(10)}>10₽</button>
                    <button onClick={() => handleInsertMoney(50)}>50₽</button>
                    <button onClick={() => handleInsertMoney(100)}>100₽</button>
                </div>
            </div>
            <button className="cancel-button" onClick={handleCancel}>
                Отмена операции
            </button>
        </div>
    );
};
