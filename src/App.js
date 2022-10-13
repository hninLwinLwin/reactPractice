import Main from './Components/Main/Main'
import Home from './Components/Home/Home'
import Calculator from './Components/Calculator/Calculator'
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
      <Routes>
        <Route exact path='/' element = {<Home/>}/>
        <Route path='/main' element={<Main/>}/>
        <Route path='/calculator' element={<Calculator />} />
      </Routes>
      </div>
    </Router>
  );
}

export default App;
