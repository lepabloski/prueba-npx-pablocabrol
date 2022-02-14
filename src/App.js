import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import CartContextProvider from './context/cartContext';
import Footer from './components/Footer/Footer';
import CartListContainer from './components/CartListContainer/CartListContainer';
function App() {
  return (
    <BrowserRouter>
      <CartContextProvider>
        <div className="App">
          <NavBar />
          <Routes>
            <Route exact path='/' element={<ItemListContainer />} />
            <Route exact path='/category/:idCategory' element={<ItemListContainer />} />
            <Route exact path='/cart' element={<CartListContainer />} />
            <Route exact path='/detail' element={<ItemDetailContainer />} />
            <Route exact path='/detail/:IdProduct' element={<ItemDetailContainer />} />
          </Routes>
        </div>
        <Footer />
      </CartContextProvider>

    </BrowserRouter>
  );
}

export default App;
