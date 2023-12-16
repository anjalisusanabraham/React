import React from "react";

class Test1 extends React.Component {
    constructor(props) {
        super(props);
    };
    render() {
        return (
           
            <div>
                
                    {this.props.emp.emp_id} -
                    {this.props.emp.emp_name}
                 
            </div>
           
        );
    };
};
export default Test1;


