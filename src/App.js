import { CircularProgress } from '@material-ui/core';
import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import MediaCard from './components/card';
import SearchBar from './components/seachBar';
import MultipleSelect from './components/select';
import SwiperSection from './components/swiper';
import SwiperTestimonials from './components/swiperTes';
import picture from './images/travel1.svg';

function App() {
  const [locations, setLocations] = useState([]);
  const [fulllocations, setFullLocations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  useEffect(() => {
    axios
      .get('http://localhost:3000/locations')
      .then((res) => {
        console.log(res.data);
        setLocations(res.data);
        setFullLocations(res.data);
      })
      .catch((err) => setError(true))
      .finally(() => setLoading(false));
  }, []);
  return (
    <div className='main'>
      <div className='nav'>
        <div className='left-nav'>
          <h1>DiscoverIt</h1>
          <h5>Top destinations</h5>
          <h5>Par wilaya</h5>
          <h5>Par catégorie</h5>
        </div>
        <div className='right-nav'>
          <div className='button'>
            <p>S'inscrire</p>
          </div>
          <div className='button-outlined'>
            <p>Se connecter</p>
          </div>
        </div>
      </div>
      <div className='main-home'>
        <div className='hero'>
          <section class='hero-header'>
            <div className='main-text'>
              <h1>Découvrir l'Algérie</h1>

              <p>
                La culture algérienne est riche, variée et très ancienne, chaque
                région, chaque ville ou oasis constitue un espace culturel
                particulier à découvrir.
              </p>
            </div>
          </section>
        </div>
      </div>
      <div className='search-section'>
        <div className='search-zone'>
          <SearchBar />
        </div>
      </div>

      <div className='top-destination'>
        <div className='title'>
          <h1>Meilleures destinations</h1>
          <h2>Trouver l'endroit parfait</h2>

          <div className='swiper-sec'>
            <img src={picture} alt='' />
            <SwiperSection />
          </div>
        </div>
      </div>
      <div className='par-wilaya'>
        <div className='title'>
          <h1>Liste des lieux</h1>
          <div className='filter-section'>
            <p>Filtrer par wilaya : </p>
            <MultipleSelect
              fulllocations={fulllocations}
              setLocations={setLocations}
            />
          </div>

          {loading ? (
            <CircularProgress />
          ) : error ? (
            <h1>Sorry</h1>
          ) : locations.length === 0 ? (
            <h2>On a pas d'information sur cette Wilaya malheuresement.</h2>
          ) : (
            <div className='swiper-sec-total'>
              {locations.map((e) => (
                <MediaCard
                  name={e.name}
                  description={e.description}
                  images={e.mediaContent}
                  first={e.mediaContent[0]}
                />
              ))}
            </div>
          )}
        </div>
      </div>
      <div className='testimonials'>
        <SwiperTestimonials />
        <h1>Qu'est-ce que vous attendez ? Visitez l'Algérie</h1>
      </div>
    </div>
  );
}

export default App;
