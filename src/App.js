import Navbar from './components/NavBar';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
      <Home />
      </div>
    </div>
  );
}

export default App;