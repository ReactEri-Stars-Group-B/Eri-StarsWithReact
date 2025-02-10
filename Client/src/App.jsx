import About from "./Components/About/About"
import Footer from "./Components/Footer/Footer"
import Header from "./Components/Header/Header"
import { BrowserRouter} from 'react-router-dom'
function App() {
  

  return (
    <>
       <BrowserRouter>
       <Header/>
        <About/>
       <Footer/>
       </BrowserRouter>
       </>
  )
}

export default App
