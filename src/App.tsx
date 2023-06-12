import { Route, Routes } from 'react-router-dom';
import Artists from './pages/Artists';
import Artworks from './pages/Artworks';
import Checkout from './pages/Checkout';
import Favorites from './pages/Favorites';
import PageNotFound from './pages/PageNotFound';
import ArtWorkPage from './pages/ArtworkPage';
import { Tools } from './components/Tools';

function App() {
  return (
    <>
      <header />

      <Tools />

      <main>
        <div>
          <Routes>
            <Route path="/" element={<Artworks />} />
            <Route path="artworks" element={<Artworks />} />
            <Route path='artworks/1' element={<ArtWorkPage />}/>

            <Route path="artists" element={<Artists />} />

            <Route path="checkout" element={<Checkout />} />

            <Route path="favourites" element={<Favorites />} />

            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </div>
      </main>

      {/* <Footer /> */}
    </>
  );
}

export default App;
