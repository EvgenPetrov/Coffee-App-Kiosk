import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { DrinkSelectionScreen } from "./components/DrinkSelectionScreen";
import { PaymentSelectionScreen } from "./components/PaymentSelectionScreen";
import { DrinkPreparationScreen } from "./components/DrinkPreparationScreen";
import { DrinkReadyScreen } from "./components/DrinkReadyScreen";
import { CashPaymentScreen } from "./components/CashPaymentScreen";
import { CardPaymentScreen } from "./components/CardPaymentScreen";
import { OutOfStockScreen } from "./components/OutOfStockScreen";

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<DrinkSelectionScreen />} />
                    <Route path="/payment" element={<PaymentSelectionScreen />} />
                    <Route path="/cash-payment" element={<CashPaymentScreen />} />
                    <Route path="/card-payment" element={<CardPaymentScreen />} />
                    <Route path="/preparation" element={<DrinkPreparationScreen />} />
                    <Route path="/drink-ready" element={<DrinkReadyScreen />} />
                    <Route path="/out-of-stock" element={<OutOfStockScreen />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
