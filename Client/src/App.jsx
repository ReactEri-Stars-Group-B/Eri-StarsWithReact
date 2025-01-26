import Footer from "./Components/Footer/Footer"
import Header from "./Components/Header/Header"
import { BrowserRouter} from 'react-router-dom'
function App() {
  

  return (
    <>
       <BrowserRouter>
       <Header/>
       <Footer/>
       </BrowserRouter>
       </>
  )
}

export default App
