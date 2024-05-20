/**
 * クレジットカード番号からブランドを判定する関数です。
 *
 * @param cardNumber クレジットカード番号
 * @returns ブランド名
 */

export const determineBrand = (cardNumber: string) => {
    let brand = "UNKNOWN";
    if (cardNumber.startsWith("4")) {
        brand = "VISA";
    } else if (
        (51 <= Number(cardNumber.slice(0, 2)) &&
            Number(cardNumber.slice(0, 2)) <= 55) ||
        (222100 <= Number(cardNumber.slice(0, 6)) &&
            Number(cardNumber.slice(0, 6)) <= 272099)
    ) {
        brand = "MASTER";
    } else if (
        3528 <= Number(cardNumber.slice(0, 4)) &&
        Number(cardNumber.slice(0, 4)) <= 3589
    ) {
        brand = "JCB";
    } else if (cardNumber.startsWith("34") || cardNumber.startsWith("37")) {
        brand = "AMEX";
    } else if (
        cardNumber.startsWith("36") ||
        cardNumber.startsWith("38") ||
        cardNumber.startsWith("39") ||
        (300000 <= Number(cardNumber.slice(0, 6)) &&
            Number(cardNumber.slice(0, 6)) <= 303574) ||
        cardNumber.startsWith("3095")
    ) {
        brand = "DINERS";
    }

    return brand;
};
