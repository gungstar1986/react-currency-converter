import React from "react";
import "./Content.css"

const Content = (props) => {

    const data = props.data.map((item, key) => {
        const currencies = [];
        for (const key in item.currencies) {
            currencies.push([key, item.currencies[key]])
        }
        const element = currencies.map((elem, key) => {
            return (
                <div key={key} className={"element-currency"}>
                    <div>{elem[0]}</div>
                    <div>{elem[1].ask}</div>
                    <div>{elem[1].bid}</div>
                </div>
            )
        });
        return (
            <div key={key}>
                <div className={"content-container-main"}>
                    <div className={"content-container-description"}>
                        <div className={"content-title"}>Отделение:</div>
                        <div className={"content-title"}>Телефон:</div>
                        <div className={"content-title"}>Адрес:</div>
                    </div>
                    <div className={"content-container-value"}>
                        <div className={"content-value"}>{item.title}</div>
                        <div className={"content-value"}>{item.phone}</div>
                        <div className={"content-value"}>{item.address}</div>
                    </div>
                </div>
                <div className={"content-currency"}>
                    {element}
                </div>
            </div>
        )
    });

    return (
        <div>{data}</div>
    )
};

export default Content;
