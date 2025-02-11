import React, { useEffect, useState } from 'react'
import Eri_logo from '../../assets/Logo.png'
import './header.css'
import { Link } from 'react-router-dom'
import { GiHamburgerMenu } from "react-icons/gi";
function Header() {

  const [showburger, setshowburger] = useState(false)
  const [winwidth, setwinwidth] = useState(window.innerWidth)
  //const [toggle, settoggle] = useState(true)
  useEffect(() => {
    window.addEventListener('resize', ()=>{setwinwidth(window.innerWidth); })
    
  }, [winwidth])
  
  return (
    <div className='header'>
    <div className='headercontainer'>
    <img src={Eri_logo} alt="" width='90px' />
    { (winwidth > 614 || showburger ) && 
    <>
    <nav> 
      <ul>
       <li> <Link to ='/' style={{color: 'rgb(18, 62, 100)', textDecoration:'none'} } >Home</Link></li>
       <li><Link to ='/Search'style={{color:'rgb(18, 62, 100)', textDecoration:'none'}} >Search</Link></li>
       <li><Link to ='/About' style={{color:'rgb(18, 62, 100)',textDecoration:'none'}}>About</Link></li>
       <li><Link to ='/Contact' style={{color:'rgb(18, 62, 100)',textDecoration:'none'}}>Contact</Link></li>
      </ul> 
      <button>Log in</button>
    </nav>
    
    </>
     }
   { (winwidth <= 614) ? <GiHamburgerMenu fontSize='30px' onClick={() => setshowburger(!showburger)}/>: null }
  
    </div>
   
    
    </div>
  )
}

export default Header
