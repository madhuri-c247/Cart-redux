import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import './App.css';
import HomeContainers from './container/HomeContainer'
import HeaderContainers from './container/HeaderContainers';

function App() {
  return (
      <BrowserRouter>
      <HeaderContainers/>
      <Routes>
        <Route path='/' element={<HomeContainers/>}/>
      </Routes>
      </BrowserRouter>
      
    
  );
}

export default App;
