import Footer from "./Components/Footer/Footer"
import Header from "./Components/Header/Header"
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from "./Components/Home/Home"
function App() {
  

  return (
    <>
       <BrowserRouter>
       <Header/>
        <Home/>
      <Footer/>
       </BrowserRouter>
       </>
  )
}

export default App
