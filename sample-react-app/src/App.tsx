import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import CreditCardBrandDeterminationPage from "./CreditCardBrandDeterminationPage";

export const App = () => {
    return (
        <Router>
            <nav>
                <Link to="/credit-card-brand-determination">
                    カード判定ページへ
                </Link>
                {/* 他のリンク */}
            </nav>
            <Routes>
                <Route
                    path="/credit-card-brand-determination"
                    element={<CreditCardBrandDeterminationPage />}
                />
                {/* 他のルート */}
            </Routes>
        </Router>
    );
};
export default App;
