import React, {Component} from "react";
import "./herat.css";

export default class Heart extends Component {

    state= {
    }

    render(){
        let classes = "fa fa-heart";
        if(!this.props.like) classes += "-o";


        return(
            <div>
                <i className={classes} area-hidden ="true"></i>
            </div>
        )
    }
}