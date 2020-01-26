import axios from "axios";

const instance = axios.create({
    baseURL: "http://resources.finance.ua/ru/public/"
});
export const currencyAPI = {
    getData: () => instance.get("currency-cash.json"),
};


