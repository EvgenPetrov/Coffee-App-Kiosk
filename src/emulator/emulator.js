export const emulator = {
    StartCashin(cb) {
        // Функция для обработки внесения денег
        const insertMoney = (amount) => {
            cb(amount); // Вызываем колбэк, передавая сумму
        };

        // Эмуляция кнопок для внесения денег
        this._handleMoneyInsert = insertMoney;
    },

    StopCashin() {
        this._handleMoneyInsert = null;
    },

    BankCardPurchase(amount, cb, display_cb) {
        display_cb("Приложите карту");
        setTimeout(() => display_cb("Обработка карты..."), 1000);
        setTimeout(() => display_cb("Связь с банком..."), 2000);
    },

    BankCardCancel() {
        console.log("Операция оплаты отменена");
    },

    Vend(product_idx, cb) {
        console.log(`Выдача напитка с индексом ${product_idx}`);
        setTimeout(() => {
            const success = Math.random() > 0.1; // 90% успешная выдача
            cb(success);
        }, 1000);
    },
};
