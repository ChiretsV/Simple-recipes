import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import MainPage from './pages/MainPage/MainPage';
import OneRecipePage from './pages/OneRecipePage/OneRecipePage';
import SearchPage from './pages/SearchPage/SearchPage';

function App() {
  return (
    <>
      <div className="App">
        <Header></Header>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<MainPage></MainPage>}></Route>
            <Route path='/search' element={<SearchPage></SearchPage>}></Route>
            <Route path='/recipes/:idMeal' element={<OneRecipePage></OneRecipePage>}></Route>
          </Routes>
        </BrowserRouter>
        <Footer></Footer>
      </div>
    </>
    
  );
}

export default App;
