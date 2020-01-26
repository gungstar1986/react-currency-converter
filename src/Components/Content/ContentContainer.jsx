import React, {Component} from "react";
import {connect} from "react-redux";
import {getServerData} from "../../Redux/exchange-reducer";
import Content from "./Content";
import {withFilter} from "../../Filter/withFilter";

class ContentContainer extends Component {
    componentDidMount() {
        // this.props.getServerData()
    }

    render() {
        return (
            <div>
                <Content {...this.props}/>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    data: state.data.data.organizations,
    region: state.data.currCity,
    city: state.data.currRegion
});
const mapDispatchToProps = {
    getServerData
};
export default connect(mapStateToProps, mapDispatchToProps)(withFilter(ContentContainer))
