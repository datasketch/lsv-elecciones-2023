import CandidateList from './components/CandidateList';
import Filters from './components/Filters';

function App() {
  return (
    <div className="container mx-auto">
      <h1>Elecciones 2022</h1>
      <Filters />
      <CandidateList />
    </div>
  );
}

export default App;
