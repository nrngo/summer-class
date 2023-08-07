import { useState } from 'react';
import './App.css';
import Child1 from './components/Child1';
import Child2 from './components/Child2';
import TsagAgaar from './components/TsagAgaar';
import AntDemo from './components/AntDemo';
function App() {
  const [number, setNumber] = useState(0);
  // number = 1
  console.log("Parent", number)
  return <div>
    <AntDemo />
  </div>
}

export default App;
