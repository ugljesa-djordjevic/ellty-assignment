import './assets/style.css';
import PageDropDown from './components/PageDropDown';

// Example of some dynamical data that will hold the single source of truth(you need to change the name of pages on only one place and it automatically changes everywhere)
const pages = ["Page 1", "Page 2", "Page 3", "Page 4"];

function App() {
  return (
    <div className="app-wrapper">
      <PageDropDown pages={ pages } />
    </div>
  );
}

export default App;
