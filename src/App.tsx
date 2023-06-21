import { Route, Routes } from 'react-router-dom';
import ArtistsPage from './pages/ArtistsPage';
import { Artworks } from './pages/Artworks/Artworks';
import Checkout from './pages/Checkout';
import Favorites from './pages/Favorites';
import PageNotFound from './pages/PageNotFound';
// import ArtWorkPage from './pages/ArtworkPage';
import Header from './components/Header';
import { Tools } from './components/Tools';
import IndividualArtistPage from './pages/IndividualArtistPage';

function App() {
  return (
    <>
      <Header />

      <Tools />

      <main>
        <div>
          <Routes>
            <Route path="/" element={<Artworks />} />
            <Route path="artworks" element={<Artworks />} />
            <Route path="artworks/:filter" element={<Artworks />} />

            <Route path="artists" element={<ArtistsPage />} />

            <Route path="checkout" element={<Checkout />} />

            <Route path="favourites" element={<Favorites />} />

            <Route path="artist/:artistId" element={<IndividualArtistPage />}/>

            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </div>
      </main>

      {/* <Footer /> */}
    </>
  );
}

export default App;
