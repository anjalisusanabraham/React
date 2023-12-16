
import './App.css';
import Header from './Components/Header/Header';
import Hello from './Components/Hello/Hello';
function App() {
  return (
    <div>
    <h1>This is my first component</h1>
    <p>this is my page</p>
    <Header fname="Hello" lname="Anjali"/>
    <Hello />
    </div>

  );
}

export default App;  //  for importing
