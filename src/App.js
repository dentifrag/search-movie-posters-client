
import SearchBar from "./components/SearchBar";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Posters from "./components/Posters";
import Poster from "./components/Poster";
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <div className="App">

        <div className="content">
          <Routes>
            <Route path="/" element={<><Header/></>} />
            <Route path="/search" element={<><Header/><SearchBar /></>} />
            <Route path="/posters/:movieid" element={<><Header/> /><Posters /> </>} />
            <Route path="/poster/:poster_path" element={<><Header/> /><Poster /></>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
