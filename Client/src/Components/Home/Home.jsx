
import React from 'react'
import camel from '../../assets/images/camels.jpg'
import './home.css'
import abraham from '../../assets/images/AbrahamAfewerqi.jpeg'
import Isaias from '../../assets/images/Isaias-Tsegai.png'
import Abrar from '../../assets/images/AbrarOsman.jpg'

function Home() {
    const Artists = [{src:abraham,name:'Abraham Afewerqi'},
                     {src:Isaias,name:'Isaias-Tsegai'},
                     {src:Abrar,name:'Abrar Osman'}]
    
  return (
    <div className='home'>
       <div className='camel'><img src={camel} alt="" /></div> 
       <div className='maincontainer'>
      <section>
        <h2>Why We Use Eri-Stars</h2>
        <p>
            How much do you know about Eritrean Artists ? In this Website we
            will invite you on a virtual “cultural trip” to discover
            Eritrean-Artists. The most exciting part is the top Eritrean Artists
            The following list of Eritrean artists are artists of various
            genres, who are notable and are either born in Eritrea, of Eritrean
            descent or who produce works that are primarily about Eritrea.
            Eritrean music has inspired fellow Eritreans and some parts of
            Eritrean neighboring regions. which feature original compositions
            songs in native languages mission for social justice, peace, and
            understanding political, or some addressing social justice, freedom,
            and human rights issues. The Eritrean Movie Authors meets the
            traditional expectations of good drama with strong plots, engaging
            characters, incisive language and inventive settings, yet with
            telltale characteristics of the Eritrean life experience.
        </p>
      </section>
      <section className='viewcard'>
        <article><label >5K</label><p>Registered <br />Artist</p></article>
        <article><label >100K</label><p>Registered <br />Users</p></article>
        <article><label >1M</label><p>Weekly <br />Searches</p></article>
      </section>
      <section >
        <h3>Most Popular Searches</h3>
        <div  className='card'>
        {Artists.map((artist,i) =>( <div className='img_card' key={i}>
           <img src={artist.src} alt="" />
           <p>{artist.name}</p>
           <button>View</button>
        </div>))}</div>
      </section>
      </div>
    </div>
  )
}

export default Home
