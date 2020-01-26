import {currencyAPI} from "../Api/currencyAPI";
const SET_STATE_DATA = "SET_STATE_DATA";
const SET_CURRENT_CITY = "SET_CURRENT_CITY";
const SET_CURRENT_REGION = "SET_CURRENT_REGION";

const initialState = {
    data: {
        "sourceId": "currency-cash",
        "date": "2020-01-25T19:01:36+02:00",
        "organizations": [
            {
                "id": "7oiylpmiow8iy1smaze",
                "oldId": 1233,
                "orgType": 1,
                "branch": false,
                "title": "А-Банк",
                "regionId": "ua,7oiylpmiow8iy1smaci",
                "cityId": "7oiylpmiow8iy1smadm",
                "phone": "0567220555",
                "address": "ул. Батумская, 11",
                "link": "http://organizations.finance.ua/ru/info/currency/-/7oiylpmiow8iy1smaze/cash",
                "currencies": {
                    "EUR": {
                        "ask": "27.2000",
                        "bid": "26.6000"
                    },
                    "RUB": {
                        "ask": "0.4000",
                        "bid": "0.3820"
                    },
                    "USD": {
                        "ask": "24.6500",
                        "bid": "24.2500"
                    }
                }
            },
            {
                "id": "7oiylpmiow8iy1sma7h",
                "oldId": 115,
                "orgType": 1,
                "branch": false,
                "title": "Альфа-Банк",
                "regionId": "ua,0,7oiylpmiow8iy1smadi",
                "cityId": "7oiylpmiow8iy1smadi",
                "phone": "0444940101",
                "address": "ул. Б. Васильковская, 100",
                "link": "http://organizations.finance.ua/ru/info/currency/-/7oiylpmiow8iy1sma7h/cash",
                "currencies": {
                    "EUR": {
                        "ask": "27.0000",
                        "bid": "26.7000"
                    },
                    "RUB": {
                        "ask": "0.3940",
                        "bid": "0.3800"
                    },
                    "USD": {
                        "ask": "24.5000",
                        "bid": "24.2000"
                    }
                }
            },
            {
                "id": "7oiylpmiow8iy1smau3",
                "oldId": 1034,
                "orgType": 2,
                "branch": false,
                "title": "Артада",
                "regionId": "ua,0,7oiylpmiow8iy1smadi",
                "cityId": "7oiylpmiow8iy1smadi",
                "phone": "0443536995",
                "address": "район Дворец Украина",
                "link": "http://organizations.finance.ua/ru/info/currency/-/7oiylpmiow8iy1smau3/cash",
                "currencies": {
                    "AED": {
                        "ask": "6.5400",
                        "bid": "6.3052"
                    },
                    "AMD": {
                        "ask": "0.0490",
                        "bid": "0.0402"
                    },
                    "AUD": {
                        "ask": "16.4810",
                        "bid": "15.7004"
                    },
                    "AZN": {
                        "ask": "13.7480",
                        "bid": "13.0021"
                    },
                    "BGN": {
                        "ask": "14.7540",
                        "bid": "13.1207"
                    },
                    "BRL": {
                        "ask": "7.1854",
                        "bid": "5.8861"
                    },
                    "BYN": {
                        "ask": "11.2974",
                        "bid": "10.7002"
                    },
                    "CAD": {
                        "ask": "18.2500",
                        "bid": "17.8503"
                    },
                    "CHF": {
                        "ask": "24.8400",
                        "bid": "24.5003"
                    },
                    "CLP": {
                        "ask": "0.0487",
                        "bid": "0.0252"
                    },
                    "CNY": {
                        "ask": "3.5280",
                        "bid": "3.3204"
                    },
                    "CZK": {
                        "ask": "1.0408",
                        "bid": "1.0015"
                    },
                    "DKK": {
                        "ask": "3.5470",
                        "bid": "3.4215"
                    },
                    "EGP": {
                        "ask": "1.4860",
                        "bid": "1.2527"
                    },
                    "EUR": {
                        "ask": "26.8970",
                        "bid": "26.8000"
                    },
                    "GBP": {
                        "ask": "31.5000",
                        "bid": "31.2003"
                    },
                    "GEL": {
                        "ask": "8.9400",
                        "bid": "8.0022"
                    },
                    "HKD": {
                        "ask": "3.1210",
                        "bid": "2.5531"
                    },
                    "HRK": {
                        "ask": "3.8730",
                        "bid": "3.4036"
                    },
                    "HUF": {
                        "ask": "0.0789",
                        "bid": "0.0742"
                    },
                    "ILS": {
                        "ask": "6.6564",
                        "bid": "6.5016"
                    },
                    "INR": {
                        "ask": "0.2902",
                        "bid": "0.2223"
                    },
                    "JPY": {
                        "ask": "0.2120",
                        "bid": "0.2104"
                    },
                    "KRW": {
                        "ask": "0.0199",
                        "bid": "0.0187"
                    },
                    "KWD": {
                        "ask": "87.9985",
                        "bid": "50.0012"
                    },
                    "KZT": {
                        "ask": "0.0570",
                        "bid": "0.0562"
                    },
                    "LBP": {
                        "ask": "0.0177",
                        "bid": "0.0092"
                    },
                    "MDL": {
                        "ask": "1.3790",
                        "bid": "1.2320"
                    },
                    "MXN": {
                        "ask": "1.3977",
                        "bid": "1.1027"
                    },
                    "NOK": {
                        "ask": "2.6680",
                        "bid": "2.5008"
                    },
                    "NZD": {
                        "ask": "17.9000",
                        "bid": "16.0024"
                    },
                    "PLN": {
                        "ask": "6.2890",
                        "bid": "6.2860"
                    },
                    "RON": {
                        "ask": "5.5950",
                        "bid": "5.2039"
                    },
                    "RUB": {
                        "ask": "0.3880",
                        "bid": "0.3800"
                    },
                    "SAR": {
                        "ask": "6.8850",
                        "bid": "5.5029"
                    },
                    "SEK": {
                        "ask": "2.5117",
                        "bid": "2.4205"
                    },
                    "SGD": {
                        "ask": "17.9680",
                        "bid": "17.0110"
                    },
                    "THB": {
                        "ask": "0.7932",
                        "bid": "0.6650"
                    },
                    "TRY": {
                        "ask": "4.0804",
                        "bid": "3.6050"
                    },
                    "TWD": {
                        "ask": "0.8770",
                        "bid": "0.6492"
                    },
                    "USD": {
                        "ask": "24.3900",
                        "bid": "24.2500"
                    },
                    "VND": {
                        "ask": "0.0011",
                        "bid": "0.0010"
                    }
                }
            },
            {
                "id": "7oiylpmiow8iy1sma85",
                "oldId": 140,
                "orgType": 1,
                "branch": false,
                "title": "БТА Банк",
                "regionId": "ua,0,7oiylpmiow8iy1smadi",
                "cityId": "7oiylpmiow8iy1smadi",
                "phone": "0444956555",
                "address": "ул. Д. Щербаковского, 35",
                "link": "http://organizations.finance.ua/ru/info/currency/-/7oiylpmiow8iy1sma85/cash",
                "currencies": {
                    "EUR": {
                        "ask": "27.2500",
                        "bid": "26.7000"
                    },
                    "RUB": {
                        "ask": "0.3950",
                        "bid": "0.3550"
                    },
                    "USD": {
                        "ask": "24.6000",
                        "bid": "24.3000"
                    }
                }
            },
            {
                "id": "7oiylpmiow8iy1smabc",
                "oldId": 282,
                "orgType": 1,
                "branch": false,
                "title": "Идея Банк",
                "regionId": "ua,7oiylpmiow8iy1smac0",
                "cityId": "7oiylpmiow8iy1smadr",
                "phone": "0800502030",
                "address": "ул. Валова, 11",
                "link": "http://organizations.finance.ua/ru/info/currency/-/7oiylpmiow8iy1smabc/cash",
                "currencies": {
                    "EUR": {
                        "ask": "27.1000",
                        "bid": "26.5000"
                    },
                    "RUB": {
                        "ask": "0.3900",
                        "bid": "0.3400"
                    },
                    "USD": {
                        "ask": "24.5500",
                        "bid": "24.1500"
                    }
                }
            },
            {
                "id": "7oiylpmiow8iy1smabv",
                "oldId": 301,
                "orgType": 1,
                "branch": false,
                "title": "Индустриалбанк",
                "regionId": "ua,0,7oiylpmiow8iy1smadi",
                "cityId": "7oiylpmiow8iy1smadi",
                "phone": "0988378410",
                "address": "ул. Генерала Алмазова, 18/7",
                "link": "http://organizations.finance.ua/ru/info/currency/-/7oiylpmiow8iy1smabv/cash",
                "currencies": {
                    "EUR": {
                        "ask": "27.1500",
                        "bid": "26.8000"
                    },
                    "RUB": {
                        "ask": "0.3980",
                        "bid": "0.3500"
                    },
                    "USD": {
                        "ask": "24.5700",
                        "bid": "24.3200"
                    }
                }
            },
            {
                "id": "7oiylpmiow8iy1sma7d",
                "oldId": 111,
                "orgType": 1,
                "branch": false,
                "title": "Креди Агриколь Банк",
                "regionId": "ua,0,7oiylpmiow8iy1smadi",
                "cityId": "7oiylpmiow8iy1smadi",
                "phone": "0442308352",
                "address": "ул. Пушкинская, 42/4",
                "link": "http://organizations.finance.ua/ru/info/currency/-/7oiylpmiow8iy1sma7d/cash",
                "currencies": {
                    "EUR": {
                        "ask": "27.1500",
                        "bid": "26.6000"
                    },
                    "RUB": {
                        "ask": "0.3970",
                        "bid": "0.3600"
                    },
                    "USD": {
                        "ask": "24.6000",
                        "bid": "24.2000"
                    }
                }
            },
            {
                "id": "7oiylpmiow8iy1smb0d",
                "oldId": 1268,
                "orgType": 1,
                "branch": false,
                "title": "Кредитвест Банк",
                "regionId": "ua,0,7oiylpmiow8iy1smadi",
                "cityId": "7oiylpmiow8iy1smadi",
                "phone": "0443650005",
                "address": "ул. Леонтовича, 4",
                "link": "http://organizations.finance.ua/ru/info/currency/-/7oiylpmiow8iy1smb0d/cash",
                "currencies": {
                    "EUR": {
                        "ask": "27.0000",
                        "bid": "26.6000"
                    },
                    "USD": {
                        "ask": "24.4000",
                        "bid": "24.1000"
                    }
                }
            },
            {
                "id": "7oiylpmiow8iy1sma6l",
                "oldId": 71,
                "orgType": 1,
                "branch": false,
                "title": "Кредобанк",
                "regionId": "ua,7oiylpmiow8iy1smac0",
                "cityId": "7oiylpmiow8iy1smadr",
                "phone": "0322659907",
                "address": "ул. Сахарова, 78",
                "link": "http://organizations.finance.ua/ru/info/currency/-/7oiylpmiow8iy1sma6l/cash",
                "currencies": {
                    "EUR": {
                        "ask": "27.2000",
                        "bid": "26.6000"
                    },
                    "USD": {
                        "ask": "24.5500",
                        "bid": "24.2000"
                    }
                }
            },
            {
                "id": "7oiylpmiow8iy1smaar",
                "oldId": 261,
                "orgType": 1,
                "branch": false,
                "title": "МТБ Банк (Марфин Банк)",
                "regionId": "ua,7oiylpmiow8iy1smacc",
                "cityId": "7oiylpmiow8iy1smadk",
                "phone": "0486824845",
                "address": "Польский спуск, 11",
                "link": "http://organizations.finance.ua/ru/info/currency/-/7oiylpmiow8iy1smaar/cash",
                "currencies": {
                    "EUR": {
                        "ask": "27.1500",
                        "bid": "26.6500"
                    },
                    "RUB": {
                        "ask": "0.4000",
                        "bid": "0.3400"
                    },
                    "USD": {
                        "ask": "24.5000",
                        "bid": "24.2000"
                    }
                }
            },
            {
                "id": "7oiylpmiow8iy1smaww",
                "oldId": 1143,
                "orgType": 2,
                "branch": false,
                "title": "Маржа",
                "regionId": "ua,0,7oiylpmiow8iy1smadi",
                "cityId": "7oiylpmiow8iy1smadi",
                "phone": "0444666699",
                "address": "ул. Б.Хмельницького 3-Б",
                "link": "http://organizations.finance.ua/ru/info/currency/-/7oiylpmiow8iy1smaww/cash",
                "currencies": {
                    "AUD": {
                        "ask": "16.7000",
                        "bid": "15.6000"
                    },
                    "BYN": {
                        "ask": "11.6000",
                        "bid": "10.7000"
                    },
                    "CAD": {
                        "ask": "18.6000",
                        "bid": "17.8000"
                    },
                    "CHF": {
                        "ask": "25.2000",
                        "bid": "24.3000"
                    },
                    "CNY": {
                        "ask": "3.7000",
                        "bid": "3.1000"
                    },
                    "CZK": {
                        "ask": "1.0800",
                        "bid": "0.9600"
                    },
                    "DKK": {
                        "ask": "3.6000",
                        "bid": "3.3500"
                    },
                    "EGP": {
                        "ask": "1.5500",
                        "bid": "1.2500"
                    },
                    "EUR": {
                        "ask": "26.9000",
                        "bid": "26.7500"
                    },
                    "GBP": {
                        "ask": "32.0000",
                        "bid": "31.2000"
                    },
                    "HUF": {
                        "ask": "0.0810",
                        "bid": "0.0730"
                    },
                    "ILS": {
                        "ask": "7.1000",
                        "bid": "6.2000"
                    },
                    "JPY": {
                        "ask": "0.2240",
                        "bid": "0.2050"
                    },
                    "KZT": {
                        "ask": "0.0650",
                        "bid": "0.0560"
                    },
                    "MDL": {
                        "ask": "1.3900",
                        "bid": "1.2000"
                    },
                    "NOK": {
                        "ask": "2.7000",
                        "bid": "2.5000"
                    },
                    "PLN": {
                        "ask": "6.3500",
                        "bid": "6.0500"
                    },
                    "RON": {
                        "ask": "5.7000",
                        "bid": "5.1000"
                    },
                    "RUB": {
                        "ask": "0.3880",
                        "bid": "0.3750"
                    },
                    "SEK": {
                        "ask": "2.5500",
                        "bid": "2.3000"
                    },
                    "TRY": {
                        "ask": "4.2000",
                        "bid": "3.5000"
                    },
                    "USD": {
                        "ask": "24.3400",
                        "bid": "24.2000"
                    }
                }
            },
            {
                "id": "7oiylpmiow8iy1smnuj",
                "oldId": 19723,
                "orgType": 2,
                "branch": false,
                "title": "ПОВ №19",
                "regionId": "ua,0,7oiylpmiow8iy1smadi",
                "cityId": "7oiylpmiow8iy1smadi",
                "phone": "0671045333",
                "address": "",
                "link": "http://organizations.finance.ua/ru/info/currency/-/7oiylpmiow8iy1smnuj/cash",
                "currencies": {
                    "AED": {
                        "ask": "6.5900",
                        "bid": "6.3050"
                    },
                    "AMD": {
                        "ask": "0.0439",
                        "bid": "0.0400"
                    },
                    "AUD": {
                        "ask": "16.4899",
                        "bid": "15.7002"
                    },
                    "AZN": {
                        "ask": "13.7599",
                        "bid": "13.0000"
                    },
                    "BGN": {
                        "ask": "15.0000",
                        "bid": "13.1205"
                    },
                    "BRL": {
                        "ask": "7.2000",
                        "bid": "5.8861"
                    },
                    "BYN": {
                        "ask": "12.0000",
                        "bid": "10.7002"
                    },
                    "CAD": {
                        "ask": "18.5000",
                        "bid": "17.8502"
                    },
                    "CHF": {
                        "ask": "25.1000",
                        "bid": "24.4000"
                    },
                    "CNY": {
                        "ask": "3.6000",
                        "bid": "3.3202"
                    },
                    "CZK": {
                        "ask": "1.0690",
                        "bid": "1.0012"
                    },
                    "DKK": {
                        "ask": "3.6690",
                        "bid": "3.4211"
                    },
                    "DZD": {
                        "ask": "0.1301",
                        "bid": "0.1300"
                    },
                    "EUR": {
                        "ask": "26.9800",
                        "bid": "26.7800"
                    },
                    "GBP": {
                        "ask": "31.7000",
                        "bid": "31.2100"
                    },
                    "GEL": {
                        "ask": "8.9800",
                        "bid": "8.0020"
                    },
                    "HKD": {
                        "ask": "3.1293",
                        "bid": "2.5531"
                    },
                    "HRK": {
                        "ask": "3.8772",
                        "bid": "3.4036"
                    },
                    "HUF": {
                        "ask": "0.0825",
                        "bid": "0.0741"
                    },
                    "ILS": {
                        "ask": "6.6696",
                        "bid": "6.5016"
                    },
                    "INR": {
                        "ask": "0.2921",
                        "bid": "0.2220"
                    },
                    "JPY": {
                        "ask": "0.2123",
                        "bid": "0.2103"
                    },
                    "KRW": {
                        "ask": "0.0218",
                        "bid": "0.0187"
                    },
                    "KWD": {
                        "ask": "87.9999",
                        "bid": "50.0012"
                    },
                    "KZT": {
                        "ask": "0.0586",
                        "bid": "0.0530"
                    },
                    "MDL": {
                        "ask": "1.5000",
                        "bid": "1.2317"
                    },
                    "MXN": {
                        "ask": "1.4000",
                        "bid": "1.1000"
                    },
                    "NOK": {
                        "ask": "2.6800",
                        "bid": "2.4580"
                    },
                    "NZD": {
                        "ask": "18.0000",
                        "bid": "16.0000"
                    },
                    "PLN": {
                        "ask": "6.2950",
                        "bid": "6.2850"
                    },
                    "RON": {
                        "ask": "7.0000",
                        "bid": "5.2038"
                    },
                    "RUB": {
                        "ask": "0.3880",
                        "bid": "0.3830"
                    },
                    "SEK": {
                        "ask": "2.5200",
                        "bid": "2.4200"
                    },
                    "SGD": {
                        "ask": "17.9800",
                        "bid": "17.0092"
                    },
                    "THB": {
                        "ask": "0.8000",
                        "bid": "0.6640"
                    },
                    "TRY": {
                        "ask": "4.1000",
                        "bid": "3.6045"
                    },
                    "TWD": {
                        "ask": "0.8800",
                        "bid": "0.6465"
                    },
                    "USD": {
                        "ask": "24.3500",
                        "bid": "24.2400"
                    }
                }
            },
            {
                "id": "7oiylpmiow8iy1smbwq",
                "oldId": 1579,
                "orgType": 2,
                "branch": false,
                "title": "ПОВ №24",
                "regionId": "ua,0,7oiylpmiow8iy1smadi",
                "cityId": "7oiylpmiow8iy1smadi",
                "phone": "0997348255",
                "address": "ул. Антоновича, 131-А",
                "link": "http://organizations.finance.ua/ru/info/currency/-/7oiylpmiow8iy1smbwq/cash",
                "currencies": {
                    "AED": {
                        "ask": "6.5400",
                        "bid": "6.3050"
                    },
                    "AMD": {
                        "ask": "0.0440",
                        "bid": "0.0400"
                    },
                    "AUD": {
                        "ask": "16.4820",
                        "bid": "15.7000"
                    },
                    "AZN": {
                        "ask": "13.7490",
                        "bid": "13.0000"
                    },
                    "BGN": {
                        "ask": "14.7540",
                        "bid": "13.1205"
                    },
                    "BRL": {
                        "ask": "7.1854",
                        "bid": "5.8861"
                    },
                    "BYN": {
                        "ask": "11.2975",
                        "bid": "10.7002"
                    },
                    "CAD": {
                        "ask": "18.2501",
                        "bid": "17.8500"
                    },
                    "CHF": {
                        "ask": "24.8500",
                        "bid": "24.5000"
                    },
                    "CNY": {
                        "ask": "3.5290",
                        "bid": "3.3200"
                    },
                    "CZK": {
                        "ask": "1.0409",
                        "bid": "1.0000"
                    },
                    "DKK": {
                        "ask": "3.5480",
                        "bid": "3.4210"
                    },
                    "EGP": {
                        "ask": "1.4860",
                        "bid": "1.2527"
                    },
                    "EUR": {
                        "ask": "26.8980",
                        "bid": "26.8000"
                    },
                    "GBP": {
                        "ask": "31.5000",
                        "bid": "31.4000"
                    },
                    "GEL": {
                        "ask": "8.9500",
                        "bid": "8.0020"
                    },
                    "HKD": {
                        "ask": "3.1210",
                        "bid": "2.5531"
                    },
                    "HRK": {
                        "ask": "3.8730",
                        "bid": "3.4036"
                    },
                    "HUF": {
                        "ask": "0.0790",
                        "bid": "0.0740"
                    },
                    "ILS": {
                        "ask": "6.6564",
                        "bid": "6.5016"
                    },
                    "INR": {
                        "ask": "0.2902",
                        "bid": "0.2205"
                    },
                    "JPY": {
                        "ask": "0.2121",
                        "bid": "0.2102"
                    },
                    "KRW": {
                        "ask": "0.0200",
                        "bid": "0.0187"
                    },
                    "KZT": {
                        "ask": "0.0570",
                        "bid": "0.0562"
                    },
                    "MDL": {
                        "ask": "1.3790",
                        "bid": "1.2300"
                    },
                    "MXN": {
                        "ask": "1.3977",
                        "bid": "1.1026"
                    },
                    "NOK": {
                        "ask": "2.6690",
                        "bid": "2.5005"
                    },
                    "NZD": {
                        "ask": "17.9000",
                        "bid": "16.0024"
                    },
                    "PLN": {
                        "ask": "6.2890",
                        "bid": "6.2860"
                    },
                    "RON": {
                        "ask": "5.5950",
                        "bid": "5.2038"
                    },
                    "RUB": {
                        "ask": "0.3880",
                        "bid": "0.3840"
                    },
                    "SAR": {
                        "ask": "6.8850",
                        "bid": "5.5028"
                    },
                    "SEK": {
                        "ask": "2.5119",
                        "bid": "2.4105"
                    },
                    "SGD": {
                        "ask": "17.9680",
                        "bid": "17.0110"
                    },
                    "THB": {
                        "ask": "0.7932",
                        "bid": "0.6600"
                    },
                    "TRY": {
                        "ask": "4.0805",
                        "bid": "3.6000"
                    },
                    "TWD": {
                        "ask": "0.8770",
                        "bid": "0.6490"
                    },
                    "USD": {
                        "ask": "24.3400",
                        "bid": "24.2500"
                    },
                    "VND": {
                        "ask": "0.0011",
                        "bid": "0.0010"
                    }
                }
            },
            {
                "id": "7oiylpmiow8iy1smb4r",
                "oldId": 1427,
                "orgType": 2,
                "branch": false,
                "title": "ПОВ №45",
                "regionId": "ua,0,7oiylpmiow8iy1smadi",
                "cityId": "7oiylpmiow8iy1smadi",
                "phone": "0443616431",
                "address": "ул. Медовая, 19-а",
                "link": "http://organizations.finance.ua/ru/info/currency/-/7oiylpmiow8iy1smb4r/cash",
                "currencies": {
                    "AED": {
                        "ask": "6.7000",
                        "bid": "6.3000"
                    },
                    "AMD": {
                        "ask": "0.0550",
                        "bid": "0.0400"
                    },
                    "AUD": {
                        "ask": "16.5000",
                        "bid": "15.5000"
                    },
                    "AZN": {
                        "ask": "13.8000",
                        "bid": "12.8000"
                    },
                    "BGN": {
                        "ask": "15.0000",
                        "bid": "13.1100"
                    },
                    "BRL": {
                        "ask": "7.2000",
                        "bid": "5.8800"
                    },
                    "BYN": {
                        "ask": "12.0000",
                        "bid": "10.6000"
                    },
                    "CAD": {
                        "ask": "18.4000",
                        "bid": "17.5000"
                    },
                    "CHF": {
                        "ask": "25.6000",
                        "bid": "24.3000"
                    },
                    "CLP": {
                        "ask": "0.0490",
                        "bid": "0.0250"
                    },
                    "CNY": {
                        "ask": "3.5500",
                        "bid": "3.3000"
                    },
                    "CZK": {
                        "ask": "1.0700",
                        "bid": "0.9700"
                    },
                    "DKK": {
                        "ask": "3.6500",
                        "bid": "3.4200"
                    },
                    "EGP": {
                        "ask": "1.5000",
                        "bid": "1.2500"
                    },
                    "GBP": {
                        "ask": "31.6000",
                        "bid": "30.5000"
                    },
                    "GEL": {
                        "ask": "9.0000",
                        "bid": "8.0000"
                    },
                    "HKD": {
                        "ask": "3.2000",
                        "bid": "2.5500"
                    },
                    "HRK": {
                        "ask": "3.9000",
                        "bid": "3.4000"
                    },
                    "HUF": {
                        "ask": "0.1000",
                        "bid": "0.0710"
                    },
                    "ILS": {
                        "ask": "7.1000",
                        "bid": "6.5000"
                    },
                    "INR": {
                        "ask": "0.3000",
                        "bid": "0.2200"
                    },
                    "IQD": {
                        "ask": "0.0250",
                        "bid": "0.0110"
                    },
                    "JPY": {
                        "ask": "0.2400",
                        "bid": "0.2100"
                    },
                    "KGS": {
                        "ask": "0.3000",
                        "bid": "0.1900"
                    },
                    "KRW": {
                        "ask": "0.0200",
                        "bid": "0.0170"
                    },
                    "KWD": {
                        "ask": "88.0000",
                        "bid": "50.0000"
                    },
                    "KZT": {
                        "ask": "0.0650",
                        "bid": "0.0530"
                    },
                    "LBP": {
                        "ask": "0.0180",
                        "bid": "0.0090"
                    },
                    "MDL": {
                        "ask": "1.4000",
                        "bid": "1.2000"
                    },
                    "MXN": {
                        "ask": "1.4000",
                        "bid": "1.1000"
                    },
                    "NOK": {
                        "ask": "2.7000",
                        "bid": "2.4500"
                    },
                    "NZD": {
                        "ask": "18.0000",
                        "bid": "16.0000"
                    },
                    "PKR": {
                        "ask": "0.2200",
                        "bid": "0.1200"
                    },
                    "PLN": {
                        "ask": "6.3000",
                        "bid": "6.0000"
                    },
                    "RON": {
                        "ask": "7.0000",
                        "bid": "5.2000"
                    },
                    "RUB": {
                        "ask": "0.3900",
                        "bid": "0.3800"
                    },
                    "SAR": {
                        "ask": "6.9000",
                        "bid": "5.5000"
                    },
                    "SEK": {
                        "ask": "2.5500",
                        "bid": "2.4100"
                    },
                    "SGD": {
                        "ask": "18.0000",
                        "bid": "17.0000"
                    },
                    "THB": {
                        "ask": "0.8000",
                        "bid": "0.6500"
                    },
                    "TJS": {
                        "ask": "3.6000",
                        "bid": "1.5000"
                    },
                    "TMT": {
                        "ask": "1.5000",
                        "bid": "0.7000"
                    },
                    "TRY": {
                        "ask": "4.2000",
                        "bid": "3.5000"
                    },
                    "TWD": {
                        "ask": "0.9000",
                        "bid": "0.6400"
                    },
                    "VND": {
                        "ask": "0.0011",
                        "bid": "0.0009"
                    }
                }
            },
            {
                "id": "7oiylpmiow8iy1smb0l",
                "oldId": 1276,
                "orgType": 2,
                "branch": false,
                "title": "ПОВ №8",
                "regionId": "ua,0,7oiylpmiow8iy1smadi",
                "cityId": "7oiylpmiow8iy1smadi",
                "phone": "0671334734",
                "address": "ул. В. Гетьмана, 10/37",
                "link": "http://organizations.finance.ua/ru/info/currency/-/7oiylpmiow8iy1smb0l/cash",
                "currencies": {
                    "EUR": {
                        "ask": "26.9500",
                        "bid": "26.7800"
                    },
                    "GBP": {
                        "ask": "31.6000",
                        "bid": "31.0000"
                    },
                    "PLN": {
                        "ask": "6.4000",
                        "bid": "6.2000"
                    },
                    "RUB": {
                        "ask": "0.3880",
                        "bid": "0.3830"
                    },
                    "USD": {
                        "ask": "24.4000",
                        "bid": "24.2400"
                    }
                }
            },
            {
                "id": "7oiylpmiow8iy1smb2w",
                "oldId": 1360,
                "orgType": 2,
                "branch": false,
                "title": "ПОВ №9",
                "regionId": "ua,0,7oiylpmiow8iy1smadi",
                "cityId": "7oiylpmiow8iy1smadi",
                "phone": "0444666915",
                "address": "м.\"Олимпийская\"",
                "link": "http://organizations.finance.ua/ru/info/currency/-/7oiylpmiow8iy1smb2w/cash",
                "currencies": {
                    "CHF": {
                        "ask": "25.1500",
                        "bid": "24.5000"
                    },
                    "EUR": {
                        "ask": "26.9700",
                        "bid": "26.8000"
                    },
                    "GBP": {
                        "ask": "31.8000",
                        "bid": "31.4000"
                    },
                    "RUB": {
                        "ask": "0.3910",
                        "bid": "0.3840"
                    },
                    "USD": {
                        "ask": "24.4000",
                        "bid": "24.2500"
                    }
                }
            },
            {
                "id": "7oiylpmiow8iy1smd3z",
                "oldId": 2074,
                "orgType": 2,
                "branch": false,
                "title": "ПОВ №99",
                "regionId": "ua,0,7oiylpmiow8iy1smadi",
                "cityId": "7oiylpmiow8iy1smadi",
                "phone": "0685058731",
                "address": "ул. Пшеничная, 18",
                "link": "http://organizations.finance.ua/ru/info/currency/-/7oiylpmiow8iy1smd3z/cash",
                "currencies": {
                    "CAD": {
                        "ask": "18.5000",
                        "bid": "17.5000"
                    },
                    "EUR": {
                        "ask": "26.9500",
                        "bid": "26.7500"
                    },
                    "GBP": {
                        "ask": "32.0000",
                        "bid": "31.0000"
                    },
                    "PLN": {
                        "ask": "6.3500",
                        "bid": "6.0500"
                    },
                    "RUB": {
                        "ask": "0.3900",
                        "bid": "0.3800"
                    },
                    "USD": {
                        "ask": "24.3500",
                        "bid": "24.2000"
                    }
                }
            },
            {
                "id": "7oiylpmiow8iy1smaat",
                "oldId": 263,
                "orgType": 1,
                "branch": false,
                "title": "Пивденный",
                "regionId": "ua,7oiylpmiow8iy1smacc",
                "cityId": "7oiylpmiow8iy1smadk",
                "phone": "0482307030",
                "address": "ул. Краснова, 6/1",
                "link": "http://organizations.finance.ua/ru/info/currency/-/7oiylpmiow8iy1smaat/cash",
                "currencies": {
                    "EUR": {
                        "ask": "27.2000",
                        "bid": "26.5000"
                    },
                    "RUB": {
                        "ask": "0.4100",
                        "bid": "0.3700"
                    },
                    "USD": {
                        "ask": "24.6500",
                        "bid": "24.1500"
                    }
                }
            },
            {
                "id": "7oiylpmiow8iy1sma7s",
                "oldId": 127,
                "orgType": 1,
                "branch": false,
                "title": "Полтава-Банк",
                "regionId": "ua,7oiylpmiow8iy1smacf",
                "cityId": "7oiylpmiow8iy1smadx",
                "phone": "0532227863",
                "address": "ул. Филиппа Орлика, 40A",
                "link": "http://organizations.finance.ua/ru/info/currency/-/7oiylpmiow8iy1sma7s/cash",
                "currencies": {
                    "EUR": {
                        "ask": "27.0400",
                        "bid": "26.6700"
                    },
                    "RUB": {
                        "ask": "0.3890",
                        "bid": "0.3780"
                    },
                    "USD": {
                        "ask": "24.5400",
                        "bid": "24.3000"
                    }
                }
            },
            {
                "id": "7oiylpmiow8iy1sma7v",
                "oldId": 130,
                "orgType": 1,
                "branch": false,
                "title": "Правэкс Банк",
                "regionId": "ua,0,7oiylpmiow8iy1smadi",
                "cityId": "7oiylpmiow8iy1smadi",
                "phone": "0445210266",
                "address": "Кловский спуск, 9/2",
                "link": "http://organizations.finance.ua/ru/info/currency/-/7oiylpmiow8iy1sma7v/cash",
                "currencies": {
                    "EUR": {
                        "ask": "27.1500",
                        "bid": "26.7500"
                    },
                    "RUB": {
                        "ask": "0.4000",
                        "bid": "0.3500"
                    },
                    "USD": {
                        "ask": "24.4500",
                        "bid": "24.1500"
                    }
                }
            },
            {
                "id": "7oiylpmiow8iy1sma7w",
                "oldId": 131,
                "orgType": 1,
                "branch": false,
                "title": "ПриватБанк",
                "regionId": "ua,0,7oiylpmiow8iy1smadi",
                "cityId": "7oiylpmiow8iy1smadi",
                "phone": "0562390000",
                "address": "ул. Грушевского, 1Д",
                "link": "http://organizations.finance.ua/ru/info/currency/-/7oiylpmiow8iy1sma7w/cash",
                "currencies": {
                    "EUR": {
                        "ask": "27.0500",
                        "bid": "26.5500"
                    },
                    "RUB": {
                        "ask": "0.3960",
                        "bid": "0.3560"
                    },
                    "USD": {
                        "ask": "24.5000",
                        "bid": "24.1000"
                    }
                }
            },
            {
                "id": "7oiylpmiow8iy1sma77",
                "oldId": 103,
                "orgType": 1,
                "branch": false,
                "title": "Райффайзен Банк Аваль",
                "regionId": "ua,0,7oiylpmiow8iy1smadi",
                "cityId": "7oiylpmiow8iy1smadi",
                "phone": "0800500500",
                "address": "ул. Лeскова, 9",
                "link": "http://organizations.finance.ua/ru/info/currency/-/7oiylpmiow8iy1sma77/cash",
                "currencies": {
                    "EUR": {
                        "ask": "27.1500",
                        "bid": "26.6000"
                    },
                    "RUB": {
                        "ask": "0.3970",
                        "bid": "0.3870"
                    },
                    "USD": {
                        "ask": "24.6000",
                        "bid": "24.2000"
                    }
                }
            },
            {
                "id": "7oiylpmiow8iy1sma8p",
                "oldId": 166,
                "orgType": 1,
                "branch": false,
                "title": "Укргазбанк",
                "regionId": "ua,0,7oiylpmiow8iy1smadi",
                "cityId": "7oiylpmiow8iy1smadi",
                "phone": "0442392842",
                "address": "ул. Богдана Хмельницкого, 16-22",
                "link": "http://organizations.finance.ua/ru/info/currency/-/7oiylpmiow8iy1sma8p/cash",
                "currencies": {
                    "EUR": {
                        "ask": "27.0500",
                        "bid": "26.7000"
                    },
                    "USD": {
                        "ask": "24.5000",
                        "bid": "24.2000"
                    }
                }
            },
            {
                "id": "7oiylpmiow8iy1smabg",
                "oldId": 286,
                "orgType": 1,
                "branch": false,
                "title": "Укрсиббанк",
                "regionId": "ua,0,7oiylpmiow8iy1smadi",
                "cityId": "7oiylpmiow8iy1smadi",
                "phone": "0800505800",
                "address": "ул. Андреевская, 2/12",
                "link": "http://organizations.finance.ua/ru/info/currency/-/7oiylpmiow8iy1smabg/cash",
                "currencies": {
                    "EUR": {
                        "ask": "27.2000",
                        "bid": "26.5000"
                    },
                    "RUB": {
                        "ask": "0.4000",
                        "bid": "0.3800"
                    },
                    "USD": {
                        "ask": "24.5500",
                        "bid": "24.1500"
                    }
                }
            },
            {
                "id": "7oiylpmiow8iy1smnwi",
                "oldId": 19794,
                "orgType": 2,
                "branch": false,
                "title": "ФК «Премиум Финанс»",
                "regionId": "ua,0,7oiylpmiow8iy1smadi",
                "cityId": "7oiylpmiow8iy1smadi",
                "phone": "0981552274",
                "address": "бул. Леси Украинки, 24 , магазин \"АЛЛО\"\"",
                "link": "http://organizations.finance.ua/ru/info/currency/-/7oiylpmiow8iy1smnwi/cash",
                "currencies": {
                    "AED": {
                        "ask": "6.6000",
                        "bid": "6.3052"
                    },
                    "AMD": {
                        "ask": "0.0439",
                        "bid": "0.0402"
                    },
                    "AUD": {
                        "ask": "16.4810",
                        "bid": "15.7004"
                    },
                    "AZN": {
                        "ask": "13.7480",
                        "bid": "13.0021"
                    },
                    "BGN": {
                        "ask": "14.7540",
                        "bid": "13.1207"
                    },
                    "BRL": {
                        "ask": "7.2000",
                        "bid": "5.8861"
                    },
                    "BYN": {
                        "ask": "11.5000",
                        "bid": "10.7002"
                    },
                    "CAD": {
                        "ask": "18.5000",
                        "bid": "17.8503"
                    },
                    "CHF": {
                        "ask": "24.8400",
                        "bid": "24.5003"
                    },
                    "CLP": {
                        "ask": "0.0490",
                        "bid": "0.0252"
                    },
                    "CNY": {
                        "ask": "3.5280",
                        "bid": "3.3204"
                    },
                    "CZK": {
                        "ask": "1.0600",
                        "bid": "1.0015"
                    },
                    "DKK": {
                        "ask": "3.5470",
                        "bid": "3.4215"
                    },
                    "EGP": {
                        "ask": "1.5000",
                        "bid": "1.2527"
                    },
                    "EUR": {
                        "ask": "26.8970",
                        "bid": "26.8000"
                    },
                    "GBP": {
                        "ask": "31.8000",
                        "bid": "31.4000"
                    },
                    "GEL": {
                        "ask": "8.9400",
                        "bid": "8.0022"
                    },
                    "HKD": {
                        "ask": "3.1210",
                        "bid": "2.5531"
                    },
                    "HRK": {
                        "ask": "3.8730",
                        "bid": "3.4036"
                    },
                    "HUF": {
                        "ask": "0.0789",
                        "bid": "0.0742"
                    },
                    "ILS": {
                        "ask": "6.6564",
                        "bid": "6.5016"
                    },
                    "INR": {
                        "ask": "0.3300",
                        "bid": "0.2223"
                    },
                    "JPY": {
                        "ask": "0.2120",
                        "bid": "0.2104"
                    },
                    "KRW": {
                        "ask": "0.0205",
                        "bid": "0.0187"
                    },
                    "KWD": {
                        "ask": "88.0000",
                        "bid": "50.0012"
                    },
                    "KZT": {
                        "ask": "0.0570",
                        "bid": "0.0562"
                    },
                    "LBP": {
                        "ask": "0.0177",
                        "bid": "0.0092"
                    },
                    "MDL": {
                        "ask": "1.4000",
                        "bid": "1.2320"
                    },
                    "MXN": {
                        "ask": "1.3977",
                        "bid": "1.1027"
                    },
                    "NOK": {
                        "ask": "2.6680",
                        "bid": "2.5008"
                    },
                    "NZD": {
                        "ask": "18.0000",
                        "bid": "16.0024"
                    },
                    "PLN": {
                        "ask": "6.2890",
                        "bid": "6.2860"
                    },
                    "RON": {
                        "ask": "5.6000",
                        "bid": "5.2039"
                    },
                    "RUB": {
                        "ask": "0.3880",
                        "bid": "0.3840"
                    },
                    "SAR": {
                        "ask": "6.8900",
                        "bid": "5.5029"
                    },
                    "SEK": {
                        "ask": "2.5117",
                        "bid": "2.4205"
                    },
                    "SGD": {
                        "ask": "17.9800",
                        "bid": "17.0110"
                    },
                    "THB": {
                        "ask": "0.8000",
                        "bid": "0.6650"
                    },
                    "TRY": {
                        "ask": "4.0804",
                        "bid": "3.6050"
                    },
                    "TWD": {
                        "ask": "0.8800",
                        "bid": "0.6492"
                    },
                    "USD": {
                        "ask": "24.3500",
                        "bid": "24.2500"
                    },
                    "VND": {
                        "ask": "0.0011",
                        "bid": "0.0010"
                    }
                }
            },
            {
                "id": "7oiylpmiow8iy1smax8",
                "oldId": 1155,
                "orgType": 1,
                "branch": false,
                "title": "Форвард",
                "regionId": "ua,0,7oiylpmiow8iy1smadi",
                "cityId": "7oiylpmiow8iy1smadi",
                "phone": "0968411646",
                "address": "ул. Саксаганского, 105",
                "link": "http://organizations.finance.ua/ru/info/currency/-/7oiylpmiow8iy1smax8/cash",
                "currencies": {
                    "EUR": {
                        "ask": "27.2000",
                        "bid": "26.7000"
                    },
                    "RUB": {
                        "ask": "0.5000",
                        "bid": "0.3000"
                    },
                    "USD": {
                        "ask": "24.5000",
                        "bid": "24.2000"
                    }
                }
            }
        ],
        "orgTypes": {
            "1": "Банки",
            "2": "Обменники"
        },
        "currencies": {
            "AED": "дирхамы ОАЭ",
            "AMD": "армянские драмы",
            "AUD": "австралийские доллары",
            "AZN": "азербайджанские манаты",
            "BGN": "болгарские левы",
            "BRL": "бразильские реалы",
            "BYN": "беларуские рубли",
            "CAD": "канадские доллары",
            "CHF": "швейцарские франки",
            "CLP": "чилийские песо",
            "CNY": "юани Женьминьби (Китай)",
            "CZK": "чешские кроны",
            "DKK": "датские кроны",
            "DZD": "алжирские динары",
            "EGP": "египетские фунты",
            "EUR": "ЕВРО",
            "GBP": "английские фунты стерлингов",
            "GEL": "грузинские лари",
            "HKD": "гонконгские доллары",
            "HRK": "хорватские куны",
            "HUF": "венгерские форинты",
            "ILS": "израильские шекели",
            "INR": "индийские рупии",
            "IQD": "иракские динары",
            "JPY": "японские иены",
            "KGS": "сомы Кыргызстана",
            "KRW": "воны Республики Корея",
            "KWD": "кувейтские динары",
            "KZT": "казахские теньге",
            "LBP": "ливанские фунты",
            "MDL": "молдавские леи",
            "MXN": "мексиканские новые песо",
            "NOK": "норвежские кроны",
            "NZD": "новозеландские доллары",
            "PKR": "пакистанские рупии",
            "PLN": "польские злотые",
            "RON": "новые румынские леи",
            "RUB": "российские рубли",
            "SAR": "риалы Саудовской Аравии",
            "SEK": "шведские кроны",
            "SGD": "сингапурские доллары",
            "THB": "таиландские баты",
            "TJS": "таджикские сомоны",
            "TMT": "новые туркменские манаты",
            "TRY": "новые турецкие лиры",
            "TWD": "новые тайванские доллары",
            "USD": "доллары США",
            "VND": "вьетнамские донги"
        },
        "regions": {
            "ua,7oiylpmiow8iy1smaci": "Днепропетровская область",
            "ua,0,7oiylpmiow8iy1smadi": "Киев",
            "ua,7oiylpmiow8iy1smac0": "Львовская область",
            "ua,7oiylpmiow8iy1smacc": "Одесская область",
            "ua,7oiylpmiow8iy1smacf": "Полтавская область"
        },
        "cities": {
            "7oiylpmiow8iy1smadm": "Днепр",
            "7oiylpmiow8iy1smadi": "Киев",
            "7oiylpmiow8iy1smadr": "Львов",
            "7oiylpmiow8iy1smadk": "Одесса",
            "7oiylpmiow8iy1smadx": "Полтава"
        }
    },
    currCity: "",
    currRegion: ""
};
const converterReducer = (state = initialState, action) => {
    if (action.type === SET_STATE_DATA) {
        return {
            ...state,
            data: action.data
        }
    }
    if (action.type === SET_CURRENT_CITY) {
        return {
            ...state,
            currCity: action.city
        }
    }
    if (action.type === SET_CURRENT_REGION) {
        return {
            ...state,
            currRegion: action.region
        }
    }
    return state
};
const setStateData = (data) => ({type: "SET_STATE_DATA", data});
export const setCurrentCity = (city) => ({type: "SET_CURRENT_CITY", city});
export const setCurrentRegion = (region) => ({type: "SET_CURRENT_REGION", region});
export const getServerData = () => (dispatch) => currencyAPI.getData().then(resp => dispatch(setStateData(resp.data)));
export default converterReducer;
