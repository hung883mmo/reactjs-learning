import './App.css';
import Welcome from './Welcome';
import Counter from './Counter';
import Stopwatch from './Stopwatch';

function App() {
  return (
    <div className="App">
      <header className="App-header">        
        <Welcome />
        <Counter />
      </header>
      <div className="App-content">
        <Stopwatch />
      </div>      
    </div>
  );
}

export default App;
