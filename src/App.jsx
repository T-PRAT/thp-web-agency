import Navbar from './Components/Navbar/Navbar';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Work from './pages/Work/Work';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/work' element={<Work/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
