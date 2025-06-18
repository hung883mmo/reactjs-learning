import './App.css';
import Welcome from './Welcome';
import Counter from './Counter';
import Product from './Product';
import BookCard from './BookCard';

function App() {
  return (
    <div className="App">
      <header className="App-header">        
        <Welcome />
        <Counter />
      </header>
      <div className="App-content">        
        <Product name="Áo thun React" price="350000" />
        <BookCard title="Dế Mèn Phiêu Lưu Ký" author="Tô Hoài" year="1941" />
      </div>      
    </div>
  );
}

export default App;
