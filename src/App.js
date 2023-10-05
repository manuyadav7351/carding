import './App.css';
import ListItem from './component/ListItem';
import Item from "./item.json"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemDesc from './component/ItemDesc';
import Navbar from './component/Navbar';

function App() {

  return (
    <BrowserRouter>
      <div className="App">
      <Navbar />
        <Routes>
          <Route path='/' exact element={<ListItem item={Item}/>}/>
          <Route path='/Item/:id' exact element={<ItemDesc />}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
