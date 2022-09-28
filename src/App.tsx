import Main from "./components/Main/Main";
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import "./styles/styles.css";

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route element={<Main/>} path="/"/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App
