import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Cart from './components/Cart/Cart';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Routes>
          <Route exact path='/' element={<ItemListContainer />} />
          <Route exact path='/categoria/:idCategoria' element={<ItemListContainer />} />
          <Route exact path='/carrito' element={<Cart />} />
          <Route exact path='/detalle' element={<ItemDetailContainer/>}/>
          <Route exact path='/detalle/:IdProducto' element={<ItemDetailContainer/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
