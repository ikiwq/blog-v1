import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Category, Header, Home, Post } from './components';

function App() {
  return(
    <div className="">
        <Router>
          <Header />
          <div className='max-w-7xl mx-auto'>
            <Routes>
              <Route path='/' element={<Home/>} />
              <Route path='/category/:slug' element={<Category/>} />
              <Route path='post/:slug' element={<Post/>} />
            </Routes>
          </div>
        </Router>
    </div>
)
}

export default App
