import { 
  createBrowserRouter,
  RouterProvider,
  Route,
  BrowserRouter as Router,
  Routes
} from 'react-router-dom';
import './App.css'

import Navbar from './components/Navbar'; 
import Home from "./pages/Home";
import About from "./pages/About";
import MoviesSearchPage from './pages/MoviesDataBase';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
          <Routes>
          <Route path="/" element={<Home />} />  
          <Route exact path="/about" element={<About />} /> 
          <Route exact path="/moviesdatabase" element={<MoviesSearchPage />}/>
          </Routes>
      </div>
      </Router>
  );
}
export default App
