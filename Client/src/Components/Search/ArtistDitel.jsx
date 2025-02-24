import React, { useState } from 'react'
import {useParams} from 'react-router-dom'

const artistData = [
    { id: 1, name: 'Abeba Haile', status: 'women Singer', type: 'singer', image: '/images/abeba haile.jpeg',imag:'/images/Abeba.jpg', Blog: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.Voluptatem tenetur, cum provident recusandae cumque doloremque officia commodi non esse mollitia omnis porro harum ipsam similique exercitationem sint? Repellendus, officia velit' },

    { id: 2, name: 'Abreham Afewerki', status: 'king of music & most popular', type: 'singer', image: '/images/Abreham afewerki.jpg',imag:'/images/abraham-afwerki.jpg' ,Blog: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.Voluptatem tenetur, cum provident recusandae cumque doloremque officia commodi non esse mollitia omnis porro harum ipsam similique exercitationem sint? Repellendus, officia velit' },

    { id: 3, name: 'Yemane G/michael', status: 'king of music & most popular', type: 'singer', image: '/images/yemane.jpeg',imag:'/images/yemane-barya.jpg', Blog: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.Voluptatem tenetur, cum provident recusandae cumque doloremque officia commodi non esse mollitia omnis porro harum ipsam similique exercitationem sint? Repellendus, officia velit' },

    { id: 4, name: 'Yonas Maynas', status: 'comedian', type: 'comedian', image: '/images/yonas.jpg',imag:"/images/yonas-maynas.jpg", Blog: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.Voluptatem tenetur, cum provident recusandae cumque doloremque officia commodi non esse mollitia omnis porro harum ipsam similique exercitationem sint? Repellendus, officia velit' },

    { id: 5, name: 'Alamin Abdeletif', status: 'king of music', type: 'singer', image: '/images/alamin.jpg', Blog: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.Voluptatem tenetur, cum provident recusandae cumque doloremque officia commodi non esse mollitia omnis porro harum ipsam similique exercitationem sint? Repellendus, officia velit' },

    { id: 6, name: 'Elsa Kidane', status: 'women singer', type: 'singer', imag: '/images/Elsa.jpg',image:'/images/Elsa-kidane.jpg', Blog: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.Voluptatem tenetur, cum provident recusandae cumque doloremque officia commodi non esse mollitia omnis porro harum ipsam similique exercitationem sint? Repellendus, officia velit' },

    { id: 7, name: 'Abrar Osman', status: 'king of music', type: 'singer', image: '/images/abrar.jpg',imag:"/images/image.png", Blog: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.Voluptatem tenetur, cum provident recusandae cumque doloremque officia commodi non esse mollitia omnis porro harum ipsam similique exercitationem sint? Repellendus, officia velit' },

    { id: 8, name: 'Dehab Fatinga', status: 'women singer', type: 'singer', imag: '/images/Dehab Fatinga.jpg',image:'/images/fati.jpg', Blog: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.Voluptatem tenetur, cum provident recusandae cumque doloremque officia commodi non esse mollitia omnis porro harum ipsam similique exercitationem sint? Repellendus, officia velit' },

    { id: 9, name: 'Helen Meles', status: 'women singer', type: 'singer', image: '/images/Helen Meles.jpg',imag:'/images/Helen.jpg', Blog: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.Voluptatem tenetur, cum provident recusandae cumque doloremque officia commodi non esse mollitia omnis porro harum ipsam similique exercitationem sint? Repellendus, officia velit' },
];
function ArtistDitel() {
 
    const params = useParams();
    const artist = artistData.find(artist => artist.id === Number(params.id));

  return (
    <>
          <div style={{ textAlign: 'center', padding: '20px',marginTop:'4rem',}}>
              <h2>{artist.name}</h2>
              <img src={artist.image} alt={artist.name} style={{ width: '450px', height: 'auto', borderRadius: '10px',marginRight:'3rem' }} />
              <img src={artist.imag} alt={artist.name} style={{ width: '300px', height: 'auto', borderRadius: '10px'}} />
              <p style={{ textAlign: 'center' }}><strong>Status:</strong> {artist.status}</p>
              <p style={{textAlign:'center'}}><strong>Type:</strong> {artist.type}</p>
              <p style={{width:'500px', background:'darkgrey',position:'relative',left:'43rem' }}>{artist.Blog}</p>

          </div>
    </>
  )
}

export default ArtistDitel