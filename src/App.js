import React from 'react';
import './App.css';
import ContentContainer from "./Components/Content/ContentContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";
import Footer from "./Components/Footer/Footer";

const App = () => {
    return (
        <div className={"app-container"}>
            <div><HeaderContainer/></div>
            <div className="App">
                <ContentContainer/>
            </div>
            <div><Footer/></div>
        </div>

    );
};
export default App;
