// CreditCardBrandDeterminationPage.test.tsx
import { fireEvent, render, screen } from "@testing-library/react";
import CreditCardBrandDeterminationPage from "../src/CreditCardBrandDeterminationPage";
import { determineBrand } from "./determineBrand";
import { it } from "vitest";
it("should determine the correct brand for a given card number", () => {
    render(<CreditCardBrandDeterminationPage />);

    const cardNumberInput = screen.getByLabelText("カード番号:");

    // Test VISA brand
    fireEvent.change(cardNumberInput, {
        target: { value: "4111111111111111" },
    });
    expect(screen.getByText("ブランド: VISA")).toBeInTheDocument();

    // Test MASTER brand
    fireEvent.change(cardNumberInput, {
        target: { value: "5555555555554444" },
    });
    expect(screen.getByText("ブランド: MASTER")).toBeInTheDocument();

    // Test JCB brand
    fireEvent.change(cardNumberInput, {
        target: { value: "3566111111111113" },
    });
    expect(screen.getByText("ブランド: JCB")).toBeInTheDocument();

    // Test AMEX brand
    fireEvent.change(cardNumberInput, { target: { value: "378282246310005" } });
    expect(screen.getByText("ブランド: AMEX")).toBeInTheDocument();

    // Test DINERS brand
    fireEvent.change(cardNumberInput, {
        target: { value: "3035740000000000" },
    });
    expect(screen.getByText("ブランド: DINERS")).toBeInTheDocument();
});
it("should determine the brand as VISA for a card number starting with '4'", () => {
    const cardNumber = "4111111111111111";
    const brand = determineBrand(cardNumber);
    expect(brand).toBe("VISA");
});

it("should determine the brand as MASTER for a card number starting with '51' to '55' or '222100' to '272099'", () => {
    const cardNumbers = [
        "5100000000000000",
        "5200000000000000",
        "5300000000000000",
        "5400000000000000",
        "5500000000000000",
        "2221000000000000",
        "2720990000000000",
    ];
    cardNumbers.forEach((cardNumber) => {
        const brand = determineBrand(cardNumber);
        expect(brand).toBe("MASTER");
    });
});

it("should determine the brand as JCB for a card number starting with '3528' to '3589'", () => {
    const cardNumbers = [
        "3528000000000000",
        "3529000000000000",
        "3588000000000000",
        "3589000000000000",
    ];
    cardNumbers.forEach((cardNumber) => {
        const brand = determineBrand(cardNumber);
        expect(brand).toBe("JCB");
    });
});

it("should determine the brand as AMEX for a card number starting with '34' or '37'", () => {
    const cardNumbers = ["340000000000000", "370000000000000"];
    cardNumbers.forEach((cardNumber) => {
        const brand = determineBrand(cardNumber);
        expect(brand).toBe("AMEX");
    });
});

it("should determine the brand as DINERS for a card number starting with '36', '38', '39', '3095' or in the range '300000' to '303574'", () => {
    const cardNumbers = [
        "3600000000000000",
        "3800000000000000",
        "3900000000000000",
        "3095000000000000",
        "3000000000000000",
        "3035740000000000",
    ];
    cardNumbers.forEach((cardNumber) => {
        const brand = determineBrand(cardNumber);
        expect(brand).toBe("DINERS");
    });
});

it("should determine the brand as UNKNOWN for an unknown card number", () => {
    const cardNumber = "1234567890123456";
    const brand = determineBrand(cardNumber);
    expect(brand).toBe("UNKNOWN");
});
