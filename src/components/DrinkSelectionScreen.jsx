import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/components/DrinkSelectionScreen.scss";
import { drinksData } from "../data/drinks";
import { categories } from "../data/categories";

export const DrinkSelectionScreen = ({ onSelectDrink }) => {
    const [selectedCategory, setSelectedCategory] = useState("coffee");
    const [categoryTitle, setCategoryTitle] = useState(
        categories.find((category) => category.id === "coffee").name
    );
    const navigate = useNavigate();
    const drinks = drinksData[selectedCategory];

    const handleCategorySelect = (category) => {
        setSelectedCategory(category.id);
        setCategoryTitle(category.name);
    };

    const handleDrinkSelect = (drink) => {
        onSelectDrink?.(drink); // Вызываем, если передан onSelectDrink проп
        navigate(`/payment`, { state: { amountDue: drink.price } }); // Переход на страницу оплаты с передачей цены
    };

    return (
        <div className="container drink-selection">
            <h1>Выбор напитка</h1>

            <div className="categories">
                {categories.map((category) => (
                    <div
                        key={category.id}
                        className={`category ${
                            selectedCategory === category.id ? "active" : ""
                        }`}
                        onClick={() => handleCategorySelect(category)}>
                        <img src={category.image} alt={category.name} />
                        <p>{category.name}</p>
                    </div>
                ))}
            </div>

            <div className="category-title">
                <h2>{categoryTitle}</h2>
            </div>

            <div className="drink-list">
                {drinks.map((drink) => (
                    <div
                        key={drink.id}
                        className="drink-item"
                        onClick={() => handleDrinkSelect(drink)}>
                        <img src={drink.image} alt={drink.name} />
                        <div className="drink-info">
                            <h2>{drink.name}</h2>
                            <p>от {drink.price}₽</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
