import React from "react";

class Item extends React.Component{
    constructor(props){
        super(props);
        console.log(props.crs)
    };
    componentDidMount(){
        console.log("item component did mount "+this.props.crs.course)
    }
    componentWillUnmount(){
        console.log("item will unmount component " +this.props.crs.course)
    }
    render(){
        return(
            <div>
                <p>{this.props.crs.course} -
                {this.props.crs.description}</p>
            </div>
        );
    };
};
export default Item; 