import React from 'react'
import "./HomeScreen.css";
import Navbar from '../Navbar';
import Banner from '../Banner';
import Row from '../Row';
import requests from '../Requests';

const HomeScreen = () => {
  return (
    <div className='homeScreen'>
        <Navbar />

        <Banner />
        <Row 
          title="NETFLIX ORIGINALS"
          fetchUrl={requests.fetchNetflixOriginals}
          isLargeRow />
        <Row title="Trending Now" fetchUrl={requests.fetchNetflixOriginals} />
        <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
        <Row title="Action movies" fetchUrl={requests.fetchActionMovies} />
        <Row title="Comedy movies" fetchUrl={requests.fetchComedyMovies} />
        <Row title="Horror movies" fetchUrl={requests.fetchHorrorMovies} />
        <Row title="Romance movies" fetchUrl={requests.fetchRomanceMovies} />
        <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />

    </div>
  )
}

export default HomeScreen