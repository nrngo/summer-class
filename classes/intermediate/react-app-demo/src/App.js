import { useState } from 'react';
import './App.css';
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
