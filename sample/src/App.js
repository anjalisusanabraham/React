import './App.css';
import Header from './Components/Header/Header';
import Bootstrap from './Components/Bootstrap/Bootstrap';
import Pic from './Components/Pic/Pic';
import Count from './Components/Count/Count';
import Postaldata from './Components/Postaldata/Postaldata';
import Placedata from './Components/Placedata/Placedata';
function App() {
  return (
    <div>
   <Header fname = 'Anjali' lname = 'Abinandh'/>
   <Bootstrap />
   <Pic />
   <Count />
   <Postaldata />
   <Placedata />
   </div>
  );
}

export default App;
