import './App.css';
import Home from './components/home/Home.js';
import travelData from './data/db.json';

function App() {
  //send data to home to give it to tours throw props inside return

  return (
    <>

    <Home  data={travelData}/>

    </>
  );
}

export default App;
