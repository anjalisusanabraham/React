import React from "react";

class CompOne extends React.Component{
    componentWillUnmount(){
        console.log("component will unmount")
    }
    render(){
      
        return(
            <h1>Component Unmount</h1>
        )
    };
};
class Item2 extends React.Component{
    state = {
        display:true
    }
    unmount = () =>{
        this.setState({display:false})
    }
    render(){
        let comp
       console.log(this.state.display)
        if(this.state.display){
            comp = <CompOne />
        }
        return(
    <div className="item">
        {comp}
        <button onClick={this.unmount} >Enter</button>
    </div>
    )
    }
};
export default Item2;

// import React from 'react';
// class ComponentOne extends React.Component {

// // Defining the componentWillUnmount method
// componentWillUnmount() {
// 	alert('The component is going to be unmounted');
// }

// render() {
// 	return <h1>Hello Geeks!</h1>;
// }
// }

// class App extends React.Component {
// state = { display: true };
// delete = () => {
// 	this.setState({ display: false });
// };

// render() {
// 	let comp;
// 	if (this.state.display) {
// 	comp = <ComponentOne />;
// 	}
// 	return (
// 	<div>
// 		{comp}
// 		<button onClick={this.delete}>
// 		Delete the component
// 		</button>
// 	</div>
// 	);
// }
// }

// export default App;
