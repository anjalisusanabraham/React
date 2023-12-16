import './App.css';
import { Component } from 'react';
import { Connect, connect } from 'react-redux';


class App extends Component {


  // state = {
  //   age:21,
  // };
  // onAgeup = () =>{
  //   this.setState({
  //     ...this.state,
  //     age:++this.state.age,
  //   })
  // }
  // onAgedown = () =>{
  //   this.setState({
  //     ...this.state,
  //     age:--this.state.age,
  //   })
  // }

state = {
  age:21,
};
  render(){
  return (
    <div className="App">
      <h3>Age: {this.state.age}</h3>
      <button onClick={this.onAgeup}>Age Up</button>
      <button onClick={this.onAgedown}>Age Down</button>
    </div>
  );
}


};
const mapdispatchtoprops = (dispatch) => {
return{
  onAgeup: () =>dispatch({type:'Ageup'}),
  onAgedown: () =>dispatch({type:'Agedown'}),
}
};

const mapstatetoprops = (state) =>{
  return{
    age:state.age,
  }
}

export default connect(mapstatetoprops,mapdispatchtoprops) (App);
