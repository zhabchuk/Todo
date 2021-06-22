import './App.css';
import { Header } from './components/Header';
import { HomePage } from './pages';


function App() {
  return (
    <div className="App">
      <div className='header'>
      <Header/>
      </div>
      <div className='homePage'>
      <HomePage/>
      </div>
    </div>
  );
}

export default App;
