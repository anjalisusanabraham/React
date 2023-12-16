import logo from './logo.svg';
import './App.css';
import Drop_Down from './Components/Drop_Down/Drop_Down';
import Item3 from './Components/Item3/Item3';
import EmployeeList from './Components/EmployeeList/EmployeeList';
import EmployeeList1 from './Components/EmployeeList1/EmployeeList1';

function App() {
  return (
    <div className="App">
   {/* <Drop_Down /> */}
   <EmployeeList />
   <hr />
   <EmployeeList1 />
   {/* <Item3 /> */}
    </div>
  );
}

export default App;
