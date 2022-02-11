import Navbar from './Components/Navbar/Navbar';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Works from './pages/Works/Works';
import StudyCase from './pages/StudyCase/StudyCase';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/works' element={<Works/>}/>
        <Route path='/works/:workSlug' element={<StudyCase/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
