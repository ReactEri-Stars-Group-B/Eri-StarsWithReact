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
        <About/>
        <Home/>
         <Search/> 
      <Footer/>
       </BrowserRouter>
       </>
  )
}

export default App
