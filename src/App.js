import { Routes, Route } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Blog from './Pages/Blog/Blog';
import Home from './Pages/Home/Home';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}> </Route>
        <Route path='/about' element={<About></About>}> </Route>
        <Route path='/blog' element={<Blog></Blog>}> </Route>
        {/* <Route path='/about' element={<About></About>}> </Route> */}

      </Routes>
      <Footer>
      </Footer>
    </div>
  );
}

export default App;
