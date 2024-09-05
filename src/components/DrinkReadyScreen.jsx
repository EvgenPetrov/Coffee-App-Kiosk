import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/components/DrinkReadyScreen.scss";
import drinkReady from "../assets/drinkReady.png";

export const DrinkReadyScreen = () => {
    const navigate = useNavigate();

    const handleCompletion = () => {
        navigate("/"); // Переход на главную страницу
    };

    return (
        <div className="container ready-screen">
            <div className="ready-message">
                <img src={drinkReady} alt="Напиток готов" />
                <h1>Напиток готов! Вы можете забрать его.</h1>
                <button className="complete-button" onClick={handleCompletion}>
                    Забрать
                </button>
            </div>
        </div>
    );
};
