import './App.css';
import {BrowserRouter , Routes , Route} from "react-router-dom";
import {Home , Upload , View , Tutorial , Profile ,Nopage , Create ,Verify, Login, Signup} from './components'
import Demo from './components/Demo';
import  { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className="min-h-screen">
      <Toaster />
      <BrowserRouter >
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/Upload" element={<Upload />} />
          <Route path="/View" element={<View />} />
          <Route path="/Verify" element={<Verify />} />
          <Route path="/Tutorial" element={<Tutorial />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path='/Create' element={<Create />} />
          <Route path="/Login" element={<Login />} />
          <Route path='/Signup' element={<Signup />} />
          <Route path="/test" element={<Demo />} />
          <Route path="*" element={<Nopage />} />
        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;
