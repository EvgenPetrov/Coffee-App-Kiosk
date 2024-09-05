import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/components/OutOfStockScreen.scss";
import warningIcon from "../assets/warning.png"; // Предупреждающая иконка

export const OutOfStockScreen = () => {
    const navigate = useNavigate();

    const handleBackToHome = () => {
        navigate("/"); // Переход на главную страницу
    };

    return (
        <div className="container out-of-stock-screen">
            <div className="message">
                <img src={warningIcon} alt="Warning" />
                <h1>Данного напитка нет в наличии</h1>
                <button className="back-button" onClick={handleBackToHome}>
                    Вернуться на главную
                </button>
            </div>
        </div>
    );
};
