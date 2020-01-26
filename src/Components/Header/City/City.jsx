import React, {useState} from "react";
import "./City.css"

const City = ({cities, regions, ...props}) => {
    const [drop, setDrop] = useState(false);
    const setRegionData = (city, region) => {
        props.setCity(city);
        props.setRegion(region)
    };
    const dropDown = cities.map((item, ind) => drop
        && <div className={"city-element"} onClick={() => setRegionData(item[0], regions[ind][0])}
                key={ind}>{item[1]}
        </div>);

    return (
        <div className={"set-header-city"}
             onClick={() => setDrop(!drop)}> {dropDown[0] ? dropDown : "Выбрать город"}
        </div>
    )
};
export default City
