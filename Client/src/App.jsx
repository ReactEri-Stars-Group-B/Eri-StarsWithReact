import About from "./Components/About/About"
import Footer from "./Components/Footer/Footer"
import Header from "./Components/Header/Header"
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from "./Components/Home/Home"
import Search from "./Components/Search/Search"
function App() {
  

  return (
    <>
       <BrowserRouter>
       <Header/>
       <Routes>
        <Route path="/" element={ <Home/>}/>
        <Route path="/About" element={<About/> }/>
        <Route path="/Search" element={ <Search/>  }/>
       </Routes>        
      <Footer/>
       </BrowserRouter>
       </>
  )
}

export default App
