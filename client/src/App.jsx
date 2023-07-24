import './App.css'
import {Routes,Route} from "react-router-dom";
import Index from './pages/Index';
import Login from './pages/login/Login';
import List from './pages/list/List';
import Hotel from './pages/hotel/Hotel';

function App() {
  return (
      <Routes>
        <Route index element={<Index/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/hotels" element={<List/>}/>
        <Route path="/hotels/:id" element={<Hotel/>}/>
      </Routes>
  )
}

export default App
