import espressoImage from "../assets/espresso.png";
import americanoImage from "../assets/americano.png";
import latteImage from "../assets/latte.png";
import cappuccinoImage from "../assets/cappuccino.png";

export const drinksData = {
    coffee: [
        { id: 1, name: "Эспрессо", price: 79, image: espressoImage },
        { id: 2, name: "Эспрессо 2x", price: 109, image: espressoImage },
        { id: 3, name: "Американо", price: 119, image: americanoImage },
        { id: 4, name: "Латте", price: 129, image: latteImage },
        { id: 5, name: "Капучино", price: 129, image: cappuccinoImage },
        { id: 6, name: "Макиато", price: 129, image: espressoImage },
    ],
    tea: [
        { id: 1, name: "Чай Черный", price: 50, image: espressoImage },
        { id: 2, name: "Чай Зеленый", price: 55, image: espressoImage },
    ],
    milkshake: [
        {
            id: 1,
            name: "Шоколадный коктейль",
            price: 120,
            image: latteImage,
        },
        {
            id: 2,
            name: "Ванильный коктейль",
            price: 115,
            image: espressoImage,
        },
    ],
    soda: [
        { id: 1, name: "Морс Клюква", price: 100, image: espressoImage },
        {
            id: 2,
            name: "Газированная вода",
            price: 50,
            image: espressoImage,
        },
    ],
};
