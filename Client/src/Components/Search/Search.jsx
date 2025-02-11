
import React, { useState, useEffect } from 'react';
import stayles from "./search.module.css"
function Search() {

    const [enterName, setEnterName] = useState('');
    const [status, setStatus] = useState('none');
    const [type, setType] = useState('none');
    // const [artistData, setartistData] = useState([]);

    const artistData = [
        { id: 1, name: 'Abeba Haile', status: 'women Singer', type: 'singer', image: '/images/abeba haile.jpeg' },
        { id: 2, name: 'Abreham Afewerki', status: 'king of music & most popular', type: 'singer', image: '/images/Abreham afewerki.jpg' },
        { id: 3, name: 'Yemane G/michael', status: 'king of music & most popular', type: 'singer', image: '/images/yemane.jpeg' },
        { id: 4, name: 'Yonas Maynas', status: '', type: 'comedian', image: '/images/yonas.jpg' },
        { id: 5, name: 'Alamin Abdeletif', status: 'king of music', type: 'actress', image: '/images/alamin.jpg' },

        { id: 6, name: 'Elsa Kidane', status: 'women singer', type: 'singer', image: '/images/Elsa.jpg' },

        { id: 7, name: 'Abrar Osman', status: 'king of music', type: 'singer', image: '/images/abrar.jpg' },

        { id: 8, name: 'Dehab Fatinga', status: 'women singer', type: 'singer', image: '/images/Dehab Fatinga.jpg' },

        { id: 9, name: 'Helen Meles', status: 'women singer', type: 'actress', image: '/images/Helen Meles.jpg' },
    ];

    const filteredArtists = artistData.filter(artist =>
        (enterName === '' || artist.name.toLowerCase().includes(enterName.toLowerCase())

        ) &&
        (status === 'none' || artist.status.toLowerCase().includes(status.toLowerCase())) &&
        (type === 'none' || artist.type.toLowerCase() === type.toLowerCase())

    );


    return (
        <div className={stayles.body}>
            <div className={stayles.imgContennar} pt-30>
                <img src="/images/banner.jpg" alt="Banner" />
            </div>

            <main className={stayles.main}>
                <h1>Search</h1>

                <div className={stayles.SearchContaner}>
                    <div>
                        <h3>Enter Name</h3>
                        <input
                            type="text"
                            placeholder="Enter name"
                            value={enterName}
                            onChange={(e) => setEnterName(e.target.value)}
                        />
                    </div>

                    <div>
                        <h3>Status</h3>
                        <select value={status} onChange={(e) => setStatus(e.target.value)}>
                            <option value="none">All Status</option>
                            <option value="most popular">Most Popular</option>
                            <option value="women singer">Women Singers</option>
                            <option value="king of music">King of Music</option>
                        </select>
                    </div>

                    <div>
                        <h3>Type</h3>
                        <select value={type} onChange={(e) => setType(e.target.value)}>
                            <option value="none">All Type</option>
                            <option value="singer">Singer</option>
                            <option value="comedian">Comedian</option>
                            <option value="actress">Actress</option>
                        </select>
                    </div>

                    <div className={stayles.serchBtn}>
                        <button>Search</button>
                    </div>
                </div>

                <div>
                    <h2>Search Results:</h2>
                </div>

                <section className={stayles.sections}>
                    {filteredArtists.length > 0 ? (
                        filteredArtists.map((artist) => (
                            <div key={artist.id} className={stayles.sectionContenars}>
                                <div>
                                    <img src={artist.image} alt={artist.name} className={stayles.img} />
                                </div>
                                <h2>{artist.name}</h2>
                                <div className={stayles.artstBtn}>
                                    <button>View</button>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className={stayles.Errore}>No results found</p>
                    )}
                </section>
            </main>
        </div>
    );
}

export default Search;