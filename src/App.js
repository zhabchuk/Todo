import './App.scss';
import { Header } from './components/Header';
import { HomePage } from './pages';
import Modals from './components/Modals';
import ProgressBarContainer from './conteiners/ProgressBarConteiner';
import SearchCategory from './components/SearchCategory';

function App() {
  return (
    <div className="App">
      <div className='App__header'>
      <Header/>
      </div>
      <div>
      <ProgressBarContainer/>
      </div>
      <SearchCategory/>
      <div>
      <HomePage/>
      <Modals/>
      </div>
    </div>
  );
}

export default App;
