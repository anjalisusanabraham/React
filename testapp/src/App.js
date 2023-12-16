import logo from './logo.svg';
import './App.css';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
function App() {
  const dispatch = useDispatch();
  const counter = useSelector((state) =>state.counter);
  console.log(counter);
  return (
    <div className="App">
      <h1>Hello {counter}</h1>
      <button onClick={() =>{ dispatch({type:"Increament"}) }}>Increament</button>
      <button onClick={() =>{{dispatch({type:"Decreament"})}}}>Decreament</button>
    </div>
  );
}

export default App;
