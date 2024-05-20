// CreditCardBrandDeterminationPage.tsx
import { useState } from "react";
import { determineBrand } from "./determineBrand";

const CreditCardBrandDeterminationPage = () => {
    const [cardNumber, setCardNumber] = useState("");
    const [cardBrand, setCardBrand] = useState("UNKNOWN");

    // カード番号が変更されるたびにdetermineBrandを呼び出して、ブランドを判定する
    function detectCardBrand(cardNumber: string) {
        const brand = determineBrand(cardNumber);
        setCardBrand(brand);
    }

    return (
        <div>
            <h1>クレジットカードブランド判定</h1>
            <form onSubmit={(e) => e.preventDefault()}>
                <label>
                    カード番号:
                    <input
                        type="text"
                        value={cardNumber}
                        onChange={(e) => {
                            setCardNumber(e.target.value);
                            detectCardBrand(e.target.value); // カード番号が変更されるたびにブランド判定を行う
                        }}
                    />
                </label>
            </form>
            <p>ブランド: {cardBrand}</p>
        </div>
    );
};

export default CreditCardBrandDeterminationPage;
