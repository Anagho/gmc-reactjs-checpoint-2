import './App.css';
import PlayerList from './components/PlayerList';

function App() {
  return (
    <div className="App">
      <h1 style={{ textAlign: "center", margin: "20px"}} className='text-secondary fw-semibold text-uppercase'>FIFA Player Cards</h1>
      <PlayerList />
    </div>
  );
}

export default App;
