import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./pages/Home/home";
import MovieList from "./components/movieList/movieList";
import MovieDetail from "./pages/movieDetail/movieDetail";
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route index element={<Home />} />
          <Route path="movie/:id" element={<MovieDetail />} />
          <Route path="movies/:type" element={<MovieList />} />
          <Route path="movie/*" element={<h1>error page</h1>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
