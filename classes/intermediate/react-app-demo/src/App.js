import './App.css';
import MyComponent from './components/MyFirstComponent'
import { userListData, myListData } from './constants';
function App() {
  console.log("APP JS", userListData, myListData)


  return (
    <div>
      <MyComponent />
    </div>
  );
}

export default App;
