import Hello from './Components/Hello/Hello';
import './App.css';
import Header from './Components/Header/Header';
import Count from './Components/Count/Count';
import 'bootstrap/dist/css/bootstrap.min.css';
import Pic from'./Components/Pic/Pic';
import Postal_Data from './Components/Postal_Data/Postal_Data';
import Place_Data from './Components/Place_Data/Place_Data';
import Class from './Components/Class/Class';

function App() {
  const data1 = "Anjali Abraham"
  return (
    <h1>
      {/* <Hello name = "Anjali Abraham"/> */}
      {/* <Hello name={data1} />
      <Header /> */}
      {/* <Count />
      <Pic /> */}
      {/* <Pic /> */}
      <Postal_Data />
   <Place_Data />
   <Class name = "Anjali" />
    </h1>
  );
}


export default App;
