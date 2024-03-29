import './App.css';
import Profile from './components/Profile';
import Navbar from './components/Nabva';
import Cursor from './components/Cursor';
import Skills from './components/Skills';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Profile/>
      <Cursor/>
     <Skills/>
    </div>
  );
}

export default App;
