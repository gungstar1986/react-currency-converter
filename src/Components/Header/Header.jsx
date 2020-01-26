import React from "react";
import "./Header.css"
import City from "./City/City";

const Header = ({cities, currCity, regions, ...props}) => {

    const city = cities.find(item => item[0] === currCity && item);
    return (
        <div className={"header-container"}>
            <div className={"header-logo"}>React Currency Converter</div>
            <div className={"header-current-city-location"}>
                <div>Ваш регион:</div>
                <div className={"set-header-city"}>{city ? `${city[1]} и область` : "Не выбран"}</div>
            </div>
            <div className={"header-chose-city"}>
                <City cities={cities}
                      regions={regions}
                      setCity={props.setCity}
                      setRegion={props.setRegion}/>
            </div>
        </div>
    )
};
export default Header;
