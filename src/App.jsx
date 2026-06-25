import {BrowserRouter, Route, Routes} from "react-router-dom";
import './App.css'
import Footer from './components/common/Footer'
import Navbar from './components/common/Navbar'
import Home from './components/view/Home'

function App() {
 

  return (
    <>
        <BrowserRouter>
          <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />

            </Routes>
          <Footer />
        </BrowserRouter>
    </>
  )
}

export default App
