import '../src/style/index.css'
import './App.css';
import Header from './components/Header';
import Profile from './components/Profile';
import Navbar from './components/Nabva';
function App() {
  return (
    <div className="App">
      <Navbar />
           
      <Profile/>
    </div>
  );
}

export default App;
