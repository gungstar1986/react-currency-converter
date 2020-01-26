import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {setCurrentCity, setCurrentRegion} from "../../Redux/exchange-reducer";


const HeaderContainer = props => {

    const currCity = [], region = [];
    for (const key in props.regions) {
        region.push([key, props.regions[key]]);
    }
    for (const key in props.cities) {
        currCity.push([key, props.cities[key]]);
    }

    return (
        <div>
            <Header cities={currCity}
                    currCity={props.currCity}
                    regions={region}
                    setCity={props.setCurrentCity}
                    setRegion={props.setCurrentRegion}/>
        </div>
    )
};

const mapStateToProps = state => ({
    cities: state.data.data.cities,
    regions: state.data.data.regions,
    currCity: state.data.currCity,
    currRegion: state.data.currRegion
});
const mapDispatchToProps = {
    setCurrentCity,
    setCurrentRegion
};
export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);

