import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/components/DrinkPreparationScreen.scss";
import { emulator } from "../emulator/emulator";

export const DrinkPreparationScreen = () => {
    const [secondsLeft, setSecondsLeft] = useState(5);
    const navigate = useNavigate();
    const [isPreparing, setIsPreparing] = useState(true);

    useEffect(() => {
        if (secondsLeft > 0) {
            const timer = setTimeout(() => setSecondsLeft(secondsLeft - 1), 1000);
            return () => clearTimeout(timer);
        } else {
            setIsPreparing(false);
        }
    }, [secondsLeft]);

    // Логика успешной или неуспешной выдачи после приготовления
    const handleVendingResult = (success) => {
        emulator.Vend(0, (result) => {
            if (success && result) {
                navigate("/drink-ready"); // Переход на страницу "Напиток готов"
            } else {
                navigate("/out-of-stock"); // Переход на страницу "Нет в наличии"
            }
        });
    };

    return (
        <div className="container preparation-screen">
            {isPreparing ? (
                <div className="timer-circle">
                    <h1>{`00:${secondsLeft < 10 ? `0${secondsLeft}` : secondsLeft}`}</h1>
                    <p>Приготовление напитка</p>
                </div>
            ) : (
                <div className="vending-controls">
                    <button
                        className="success-button"
                        onClick={() => handleVendingResult(true)}>
                        Успешная выдача
                    </button>
                    <button
                        className="failure-button"
                        onClick={() => handleVendingResult(false)}>
                        Ошибка выдачи
                    </button>
                </div>
            )}
        </div>
    );
};
