
import SearchBar from "./components/SearchBar";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Posters from "./components/Posters";
import Poster from "./components/Poster";

function App() {
  return (
    <Router>
      <div className="App">

        <div className="content">
          <Routes>
            <Route path="/" element={<><SearchBar /></>} />
            <Route path="/:movieQuery" element={<><SearchBar /></>} />
            <Route path="/posters/:movieid" element={<><SearchBar /><Posters /> </>} />
            <Route path="/poster/:poster_path" element={<><SearchBar /><Poster /></>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
